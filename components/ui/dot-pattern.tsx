"use client";

import { useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface DotPatternProps {
  className?: string;
  /** Diametro do ponto em px */
  dotSize?: number;
  /** Distancia entre pontos em px */
  gap?: number;
  /** Raio de alcance do cursor */
  proximity?: number;
  /** Intensidade do brilho sob o cursor */
  glowIntensity?: number;
  /** Velocidade da onda (0 desliga) */
  waveSpeed?: number;
}

interface Dot {
  x: number;
  y: number;
  baseOpacity: number;
  /** 0..1: pontos perto do centro da tela ficam mais calmos que os das bordas */
  calm: number;
}

type Rgb = { r: number; g: number; b: number };

function parseColor(value: string, fallback: Rgb): Rgb {
  const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value.trim());
  if (!hex) return fallback;
  return {
    r: Number.parseInt(hex[1], 16),
    g: Number.parseInt(hex[2], 16),
    b: Number.parseInt(hex[3], 16),
  };
}

/**
 * Campo de pontos fixo atras de tudo. Os pontos respiram numa onda lenta e
 * acendem na cor de destaque sob o cursor. As cores vem dos tokens do tema
 * (--dot e --accent) e sao relidas quando o tema muda.
 */
export function DotPattern({
  className,
  dotSize = 2,
  gap = 24,
  proximity = 120,
  glowIntensity = 0.55,
  waveSpeed = 0.45,
}: DotPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | undefined>(undefined);
  const startTimeRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const colorsRef = useRef<{ base: Rgb; glow: Rgb }>({
    base: { r: 196, g: 196, b: 196 },
    glow: { r: 232, g: 84, b: 30 },
  });

  const readColors = useCallback(() => {
    const styles = getComputedStyle(document.documentElement);
    colorsRef.current = {
      base: parseColor(styles.getPropertyValue("--dot"), colorsRef.current.base),
      glow: parseColor(styles.getPropertyValue("--accent"), colorsRef.current.glow),
    };
  }, []);

  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);

    const cellSize = dotSize + gap;
    const cols = Math.ceil(rect.width / cellSize) + 1;
    const rows = Math.ceil(rect.height / cellSize) + 1;
    const offsetX = (rect.width - (cols - 1) * cellSize) / 2;
    const offsetY = (rect.height - (rows - 1) * cellSize) / 2;

    const dots: Dot[] = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = offsetX + col * cellSize;
        const y = offsetY + row * cellSize;
        // distancia eliptica ao centro: o texto respira, as bordas mostram a grade
        const ex = (x - rect.width / 2) / (rect.width * 0.55);
        const ey = (y - rect.height * 0.45) / (rect.height * 0.75);
        const d = Math.min(1, Math.sqrt(ex * ex + ey * ey));
        const edge = d * d * (3 - 2 * d);
        dots.push({
          x,
          y,
          baseOpacity: 0.45 + Math.random() * 0.25,
          calm: 0.28 + edge * 0.72,
        });
      }
    }
    dotsRef.current = dots;
  }, [dotSize, gap]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const dpr = window.devicePixelRatio || 1;
    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    const { base, glow: glowRgb } = colorsRef.current;
    const { x: mx, y: my } = mouseRef.current;
    const proxSq = proximity * proximity;
    const time = reducedMotionRef.current
      ? 0
      : (performance.now() - startTimeRef.current) * 0.001 * waveSpeed;

    for (const dot of dotsRef.current) {
      const wave = Math.sin(dot.x * 0.018 + dot.y * 0.018 + time) * 0.5 + 0.5;
      let opacity = dot.baseOpacity * dot.calm * (0.7 + wave * 0.3);
      let scale = 1 + wave * 0.15;
      let { r, g, b } = base;
      let glow = 0;

      const dx = dot.x - mx;
      const dy = dot.y - my;
      const distSq = dx * dx + dy * dy;

      if (distSq < proxSq) {
        const t = 1 - Math.sqrt(distSq) / proximity;
        const eased = t * t * (3 - 2 * t);
        r = Math.round(base.r + (glowRgb.r - base.r) * eased);
        g = Math.round(base.g + (glowRgb.g - base.g) * eased);
        b = Math.round(base.b + (glowRgb.b - base.b) * eased);
        opacity = Math.min(1, opacity + eased * 0.6);
        scale += eased * 0.9;
        glow = eased * glowIntensity;
      }

      const radius = (dotSize / 2) * scale;

      if (glow > 0) {
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, radius * 4);
        gradient.addColorStop(0, `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, ${glow * 0.35})`);
        gradient.addColorStop(1, `rgba(${glowRgb.r}, ${glowRgb.g}, ${glowRgb.b}, 0)`);
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      ctx.fill();
    }
  }, [proximity, dotSize, glowIntensity, waveSpeed]);

  useEffect(() => {
    startTimeRef.current = performance.now();
    readColors();
    buildGrid();

    const container = containerRef.current;
    if (!container) return;

    const resize = new ResizeObserver(buildGrid);
    resize.observe(container);

    // o tema troca a classe do <html>: rele as cores
    const themeWatch = new MutationObserver(readColors);
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      resize.disconnect();
      themeWatch.disconnect();
    };
  }, [buildGrid, readColors]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = media.matches;
    const onChange = (e: MediaQueryListEvent) => {
      reducedMotionRef.current = e.matches;
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const frame = () => {
      draw();
      animationRef.current = requestAnimationFrame(frame);
    };
    animationRef.current = requestAnimationFrame(frame);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  // o canvas nao recebe ponteiro; como e fixed inset-0, clientX/Y ja sao
  // as coordenadas dele
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden", className)}
    >
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

export default DotPattern;
