import * as React from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Pecas pequenas do site: titulo de secao, estado, lista de stack e a seta
 * de link externo. Nada aqui desenha caixa; o espaco e que separa.
 */

/** Titulo de secao discreto: o tamanho fica para o "Hello", aqui manda o espaco. */
export function SectionHeading({
  children,
  count,
  as: Heading = "h2",
  className,
  id,
  reveal = true,
}: {
  children: React.ReactNode;
  count?: number;
  as?: "h1" | "h2" | "h3";
  className?: string;
  id?: string;
  /** Entra em foco ao aparecer na tela. */
  reveal?: boolean;
}) {
  return (
    <Heading
      id={id}
      data-reveal={reveal ? "focus" : undefined}
      className={cn("flex items-baseline gap-2 text-lg font-medium tracking-[-0.015em] text-ink", className)}
    >
      {children}
      {count !== undefined && (
        <span className="tabular text-sm font-normal text-muted">{count}</span>
      )}
    </Heading>
  );
}

/** Subtitulo de secao: uma frase, abaixo do titulo. */
export function SectionLead({ className, ...props }: React.ComponentProps<"p">) {
  return <p className={cn("max-w-[60ch] text-[0.9375rem] text-muted", className)} {...props} />;
}

/** Estado real (projeto em construcao, cargo atual): ponto na cor de destaque e o rotulo. */
export function Status({
  children,
  pulse = false,
  pingOnReveal = false,
  className,
}: {
  children: React.ReactNode;
  pulse?: boolean;
  /** Pisca duas vezes quando o bloco que o contem entra na tela. */
  pingOnReveal?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-1.5 text-[0.8125rem] font-normal text-accent-ink",
        className
      )}
    >
      <span aria-hidden className="relative flex size-1.5">
        {pulse && (
          <span className="absolute inset-0 rounded-full bg-accent opacity-60 motion-safe:animate-ping" />
        )}
        {pingOnReveal && (
          <span className="status-ping absolute inset-0 rounded-full bg-accent opacity-0" />
        )}
        <span className="relative size-1.5 rounded-full bg-accent" />
      </span>
      {children}
    </span>
  );
}

/** Stack como texto corrido, separado por virgulas (nomes como shadcn/ui ja tem barra): leitura rapida, sem pilulas. */
export function StackList({
  items,
  label = "Stack",
  className,
}: {
  items: string[];
  label?: string;
  className?: string;
}) {
  return (
    <ul
      aria-label={label}
      className={cn(
        "flex flex-wrap gap-y-0.5 text-[0.8125rem] leading-relaxed text-muted [&>li:not(:last-child)]:after:mr-1.5 [&>li:not(:last-child)]:after:content-[',']",
        className
      )}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

/**
 * Seta de link externo. Da um passo na diagonal quando o link (group/link)
 * recebe hover; quem usa dentro de outro grupo passa as classes do seu grupo.
 */
export function ExternalArrow({ className }: { className?: string }) {
  return (
    <ArrowUpRight
      aria-hidden
      strokeWidth={1.75}
      className={cn(
        "size-3.5 shrink-0 text-subtle transition-[translate,color] duration-300 ease-out-expo group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 group-hover/link:text-ink",
        className
      )}
    />
  );
}
