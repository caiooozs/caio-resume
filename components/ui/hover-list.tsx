"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

import { cn } from "@/lib/utils";

const SPRING = { stiffness: 520, damping: 42, mass: 0.6 };
const FOLLOW = { stiffness: 260, damping: 26, mass: 0.5 };

/**
 * Lista com um destaque que desliza entre as linhas sob o ponteiro (e no foco
 * do teclado). Cada linha marca `data-row`; uma linha com `data-preview="/foto.jpg"`
 * mostra a foto flutuando a esquerda da lista, na altura do cursor, sem cobrir o texto. O conteudo continua sendo do servidor:
 * aqui so medimos as linhas.
 */
export function HoverList({
  children,
  className,
  as: Tag = "ul",
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  className?: string;
  as?: "ul" | "ol" | "div";
  "aria-label"?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const w = useMotionValue(0);
  const h = useMotionValue(0);
  const sx = useSpring(x, SPRING);
  const sy = useSpring(y, SPRING);
  const sw = useSpring(w, SPRING);
  const sh = useSpring(h, SPRING);
  const visible = useRef(false);
  const [shown, setShown] = useState(false);

  // foto que segue o cursor (coordenadas da janela)
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const fx = useSpring(px, FOLLOW);
  const fy = useSpring(py, FOLLOW);
  const [preview, setPreview] = useState<string | null>(null);

  function moveTo(row: HTMLElement) {
    const list = ref.current;
    if (!list) return;
    const r = row.getBoundingClientRect();
    const c = list.getBoundingClientRect();
    const values: [typeof x, typeof sx, number][] = [
      [x, sx, r.left - c.left],
      [y, sy, r.top - c.top],
      [w, sw, r.width],
      [h, sh, r.height],
    ];
    for (const [raw, spring, value] of values) {
      raw.set(value);
      // primeira aparicao (ou movimento reduzido): sem viagem a partir do canto
      if (!visible.current || reduce) spring.jump(value);
    }
    if (!visible.current) {
      visible.current = true;
      setShown(true);
    }
  }

  function hide() {
    visible.current = false;
    setShown(false);
    setPreview(null);
  }

  function rowFrom(target: EventTarget | null) {
    const row = (target as Element | null)?.closest?.("[data-row]");
    return row instanceof HTMLElement && ref.current?.contains(row) ? row : null;
  }

  function onPointerMove(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    const row = rowFrom(e.target);
    if (!row) return;
    moveTo(row);

    const src = row.dataset.preview ?? null;
    if (src) {
      // x preso a borda esquerda da lista (a foto nunca cobre a linha); y segue o cursor
      const left = ref.current?.getBoundingClientRect().left ?? e.clientX;
      if (preview === null) {
        fx.jump(left);
        fy.jump(e.clientY);
      }
      px.set(left);
      py.set(e.clientY);
    }
    if (src !== preview) setPreview(src);
  }

  function onFocus(e: React.FocusEvent) {
    const row = rowFrom(e.target);
    if (row && row.matches(":focus-within")) moveTo(row);
  }

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      aria-label={ariaLabel}
      onPointerMove={onPointerMove}
      onPointerLeave={hide}
      onFocus={onFocus}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node | null)) hide();
      }}
      className={cn("relative isolate", className)}
    >
      <motion.span
        aria-hidden
        className="pointer-events-none absolute top-0 left-0 -z-10 rounded-xl bg-raised"
        style={{ x: sx, y: sy, width: sw, height: sh }}
        initial={false}
        animate={{ opacity: shown ? 1 : 0 }}
        transition={{ duration: reduce ? 0 : 0.18, ease: [0.16, 1, 0.3, 1] }}
      />
      {children}

      <AnimatePresence>
        {preview && !reduce && (
          <motion.span
            key="preview"
            aria-hidden
            className="pointer-events-none fixed top-0 left-0 z-50 hidden md:block"
            style={{ x: fx, y: fy }}
          >
            <motion.span
              key={preview}
              className="block w-56 -translate-x-[calc(100%+1rem)] -translate-y-1/2 overflow-hidden rounded-xl shadow-[0_18px_40px_-12px_rgb(0_0_0/0.35)] ring-1 ring-black/5"
              initial={{ opacity: 0, scale: 0.92, rotate: 3, filter: "blur(4px)" }}
              animate={{ opacity: 1, scale: 1, rotate: 2, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.96, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} alt="" className="block w-full origin-top-left scale-[1.05]" />
            </motion.span>
          </motion.span>
        )}
      </AnimatePresence>
    </Tag>
  );
}
