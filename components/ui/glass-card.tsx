import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

/**
 * Card padrão do site: vidro + glow roxo + hairline no topo + glyph de fundo.
 * Use os sub-componentes (Header / Badge / Title / Content / Footer / IconLink)
 * para manter o mesmo espaçamento e hover em qualquer section.
 */

type GlassAccent = "violet" | "red" | "emerald";

const accentStyles: Record<
  GlassAccent,
  { glow: string; hairline: string; ring: string; shadow: string; blob: string }
> = {
  violet: {
    glow: "from-[#8B5CF6]/60 via-[#8B5CF6]/10 to-transparent",
    hairline: "via-[#8B5CF6]/70",
    ring: "group-hover/glass:ring-[#8B5CF6]/40",
    shadow: "group-hover/glass:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.55)]",
    blob: "bg-[#8B5CF6]/25",
  },
  red: {
    glow: "from-red-500/50 via-red-500/10 to-transparent",
    hairline: "via-red-500/70",
    ring: "group-hover/glass:ring-red-500/40",
    shadow: "group-hover/glass:shadow-[0_20px_60px_-20px_rgba(239,68,68,0.5)]",
    blob: "bg-red-500/20",
  },
  emerald: {
    glow: "from-emerald-500/50 via-emerald-500/10 to-transparent",
    hairline: "via-emerald-400/70",
    ring: "group-hover/glass:ring-emerald-400/40",
    shadow: "group-hover/glass:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.5)]",
    blob: "bg-emerald-500/20",
  },
};

type GlassCardProps = React.ComponentProps<"div"> & {
  /** Cor de destaque do glow / hairline / hover. */
  accent?: GlassAccent;
  /** Marca d'água gigante no canto inferior direito (número, "–", ícone...). */
  glyph?: React.ReactNode;
  /** Classes extras no <Card> interno (ex.: "min-h-[32rem]"). */
  cardClassName?: string;
};

function GlassCard({
  accent = "violet",
  glyph,
  className,
  cardClassName,
  children,
  ...props
}: GlassCardProps) {
  const tone = accentStyles[accent];

  return (
    <div className={cn("group/glass relative h-full", className)} {...props}>
      {/* glow atrás do card */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-b opacity-0 blur-[2px] transition-opacity duration-500 group-hover/glass:opacity-100",
          tone.glow
        )}
      />

      <Card
        className={cn(
          "relative h-full overflow-hidden rounded-[1.3rem] border-0 bg-white/[0.03] py-0 text-white ring-1 ring-white/10 backdrop-blur-xl transition-all duration-500 group-hover/glass:-translate-y-1",
          tone.ring,
          tone.shadow,
          cardClassName
        )}
      >
        {/* linha de destaque no topo */}
        <div
          className={cn(
            "absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover/glass:opacity-100",
            tone.hairline
          )}
        />

        {/* brilhos radiais */}
        <div
          className={cn(
            "pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-40 blur-3xl transition-opacity duration-700 group-hover/glass:opacity-100",
            tone.blob
          )}
        />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-fuchsia-500/15 opacity-0 blur-3xl transition-opacity duration-700 group-hover/glass:opacity-100" />

        {/* marca d'água de fundo */}
        {glyph && (
          <span className="pointer-events-none absolute -bottom-10 right-3 select-none text-[5rem] leading-none font-bold tracking-tighter text-white/[0.035] transition-colors duration-500 group-hover/glass:text-white/[0.06] sm:text-[8rem]">
            {glyph}
          </span>
        )}

        {children}
      </Card>
    </div>
  );
}

function GlassCardHeader({
  className,
  ...props
}: React.ComponentProps<typeof CardHeader>) {
  return (
    <CardHeader
      className={cn(
        "relative flex flex-row items-start justify-between gap-3 px-5 pt-5 sm:gap-4 sm:px-6 sm:pt-6",
        className
      )}
      {...props}
    />
  );
}

function GlassCardContent({
  className,
  ...props
}: React.ComponentProps<typeof CardContent>) {
  return (
    <CardContent
      className={cn("relative flex-1 px-5 pt-4 sm:px-6 sm:pt-5", className)}
      {...props}
    />
  );
}

function GlassCardFooter({
  className,
  ...props
}: React.ComponentProps<typeof CardFooter>) {
  return (
    <CardFooter
      className={cn(
        "relative mt-6 border-t border-white/[0.08] bg-white/[0.02] px-5 py-3 sm:px-6 sm:py-4",
        className
      )}
      {...props}
    />
  );
}

/** Título com o gradiente branco → lilás. */
function GlassCardTitle({
  className,
  children,
  ...props
}: React.ComponentProps<typeof CardTitle>) {
  return (
    <CardTitle
      className={cn(
        "flex flex-col items-start gap-3 text-xl font-semibold tracking-tight sm:text-2xl",
        className
      )}
      {...props}
    >
      <span className="min-w-0 bg-gradient-to-r from-white via-white to-[#c4b1ff] bg-clip-text break-words text-transparent">
        {children}
      </span>
    </CardTitle>
  );
}

/** Pill de categoria ("MY COMMUNITY", "MY YOUTUBE CHANNEL"...). */
function GlassCardBadge({
  className,
  accent = "violet",
  ...props
}: React.ComponentProps<typeof Badge> & { accent?: GlassAccent }) {
  const tones: Record<GlassAccent, string> = {
    violet: "bg-[#8B5CF6]/10 text-[#c4b1ff] ring-[#8B5CF6]/30",
    red: "bg-red-500/10 text-red-300 ring-red-500/30",
    emerald: "bg-emerald-500/10 text-emerald-300 ring-emerald-500/30",
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        "w-fit gap-2 rounded-full border-0 px-3 py-1 text-[11px] font-medium tracking-wide uppercase ring-1 ring-inset",
        tones[accent],
        className
      )}
      {...props}
    />
  );
}

/** Botão circular de 40px usado nos headers/footers (link externo, github, etc). */
function GlassIconButton({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8B5CF6]/20 hover:text-white hover:ring-[#8B5CF6]/40",
        className
      )}
      {...props}
    />
  );
}

/** Label discreto do footer ("JOIN US", "WATCH NOW"...). */
function GlassCardLabel({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "text-[11px] font-medium tracking-wide text-white/35 uppercase",
        className
      )}
      {...props}
    />
  );
}

export {
  GlassCard,
  GlassCardHeader,
  GlassCardContent,
  GlassCardFooter,
  GlassCardTitle,
  GlassCardBadge,
  GlassCardLabel,
  GlassIconButton,
  type GlassAccent,
};
