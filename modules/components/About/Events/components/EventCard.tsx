import {
  GlassCard,
  GlassCardBadge,
  GlassCardContent,
  GlassCardFooter,
  GlassCardHeader,
  GlassCardLabel,
  GlassCardTitle,
} from "@/components/ui/glass-card";
import { EventCardProps } from "@/types/types";
import { CalendarDays, MapPin, Ticket } from "lucide-react";

export default function EventCard({
  name,
  role,
  date,
  local,
  desc,
  tag,
  photos,
}: EventCardProps) {
  return (
    <GlassCard
      glyph={<Ticket className="size-24 text-white/[0.03] sm:size-32" />}
    >
      <GlassCardHeader>
        <div className="flex min-w-0 flex-col gap-3">
          <GlassCardBadge>
            <Ticket className="size-3" />
            {tag}
          </GlassCardBadge>

          <GlassCardTitle className="text-lg sm:text-xl">{name}</GlassCardTitle>
        </div>

        <span className="shrink-0 rounded-full bg-white/[0.05] px-3 py-1 font-mono text-xs text-white/60 ring-1 ring-inset ring-white/10">
          {role}
        </span>
      </GlassCardHeader>

      <GlassCardContent>
        <p className="text-sm leading-relaxed font-light text-white/60">
          {desc}
        </p>
        {photos && (
          <div className="-mx-5 mt-4 p-4 overflow-hidden sm:-mx-6">
            <img
              src={photos}
              alt={name}
              className="aspect-[16/9] w-full object-cover object-center"
            />
          </div>
        )}
      </GlassCardContent>

      <GlassCardFooter>
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <GlassCardLabel className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-3.5" />
            {date}
          </GlassCardLabel>

          <span className="inline-flex items-center gap-1.5 text-xs text-white/45">
            <MapPin className="size-3.5" />
            {local}
          </span>
        </div>
      </GlassCardFooter>
    </GlassCard>
  );
}
