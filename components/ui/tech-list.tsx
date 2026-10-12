import {
  siAxios,
  siCss,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siReact,
  siReactquery,
  siShadcnui,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siZod,
  type SimpleIcon,
} from "simple-icons";
import { cn } from "@/lib/utils";

/** Nome da tecnologia (como esta nos dados) -> logo oficial do Simple Icons. */
const LOGOS: Record<string, SimpleIcon> = {
  nextjs: siNextdotjs,
  "next.js": siNextdotjs,
  react: siReact,
  typescript: siTypescript,
  javascript: siJavascript,
  "react query": siReactquery,
  axios: siAxios,
  tailwindcss: siTailwindcss,
  tailwind: siTailwindcss,
  "shadcn/ui": siShadcnui,
  supabase: siSupabase,
  zod: siZod,
  html5: siHtml5,
  html: siHtml5,
  css3: siCss,
  css: siCss,
};

const logoFor = (name: string) => LOGOS[name.trim().toLowerCase()];

/** Marcas pretas (Next.js, shadcn/ui) seguem a cor do texto para aparecer no tema escuro. */
const isInk = (hex: string) => {
  const n = Number.parseInt(hex, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b < 40;
};

/**
 * Tecnologias de um projeto em destaque: logo oficial na cor da marca + nome.
 * Conceitos sem logo (App Router, Clean Code...) vem depois, so em texto.
 * No escuro, as cores de marca clareiam um pouco para manter o contraste.
 * Ao aparecer na tela, os logos entram um a um, depois da linha do projeto.
 */
export function TechList({
  items,
  label,
  translate = (item) => item,
  className,
}: {
  items: string[];
  label: string;
  translate?: (item: string) => string;
  className?: string;
}) {
  const withLogo = items.filter((item) => logoFor(item));
  const concepts = items.filter((item) => !logoFor(item));

  return (
    <ul aria-label={label} className={cn("flex flex-wrap items-center gap-x-4 gap-y-2", className)}>
      {withLogo.map((item, index) => {
        const icon = logoFor(item)!;
        const ink = isInk(icon.hex);
        return (
          <li
            key={item}
            data-reveal="pop"
            style={{ "--d": `${260 + Math.min(index, 8) * 45}ms` } as React.CSSProperties}
            className="inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-ink/85"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              fill="currentColor"
              className={cn(
                "pop-logo size-[0.9375rem] shrink-0",
                ink
                  ? "text-ink"
                  : "text-(--brand) dark:text-[color-mix(in_oklab,var(--brand)_72%,white)]"
              )}
              style={ink ? undefined : ({ "--brand": `#${icon.hex}` } as React.CSSProperties)}
            >
              <path d={icon.path} />
            </svg>
            {translate(item)}
          </li>
        );
      })}
      {concepts.map((item) => (
        <li key={item} className="text-[0.8125rem] text-muted">
          {translate(item)}
        </li>
      ))}
    </ul>
  );
}
