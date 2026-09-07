import {
  GlassCard,
  GlassCardBadge,
  GlassCardContent,
  GlassCardFooter,
  GlassCardHeader,
  GlassCardLabel,
  GlassCardTitle,
} from "@/components/ui/glass-card";
import { TimelineCardProps } from "@/types/types";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";

export default function TimelineCard({
  company,
  role,
  period,
  location,
  contract,
  desc,
  stack,
  current,
  index,
}: TimelineCardProps) {
  return (
    <GlassCard glyph={String(index + 1).padStart(2, "0")}>
      <GlassCardHeader>
        <div className="flex min-w-0 flex-col gap-3">
          <GlassCardBadge>
            <Briefcase className="size-3" />
            {contract}
          </GlassCardBadge>

          <GlassCardTitle>{role}</GlassCardTitle>

          <span className="text-sm text-white/50">{company}</span>
        </div>

        {current && (
          <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-300 uppercase ring-1 ring-inset ring-emerald-500/30">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
              <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
            </span>
            Current
          </span>
        )}
      </GlassCardHeader>

      <GlassCardContent className="flex flex-col gap-4">
        <p className="text-sm leading-relaxed font-light text-white/60">
          {desc}
        </p>

        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-white/[0.04] px-3 py-1 text-[11px] text-white/60 ring-1 ring-inset ring-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </GlassCardContent>

      <GlassCardFooter>
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <GlassCardLabel className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            {period}
          </GlassCardLabel>

          <span className="inline-flex items-center gap-1.5 text-xs text-white/45">
            <MapPin className="size-3.5" />
            {location}
          </span>
        </div>
      </GlassCardFooter>
    </GlassCard>
  );
}
