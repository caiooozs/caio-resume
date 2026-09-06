import {
  GlassCard,
  GlassCardContent,
  GlassCardFooter,
} from "@/components/ui/glass-card";
import { TestimonialCardProps } from "@/types/types";
import { Quote } from "lucide-react";

export default function TestimonialCard({
  name,
  role,
  relation,
  message,
  initials,
}: TestimonialCardProps) {
  return (
    <GlassCard
      glyph={<Quote className="size-24 fill-current text-white/[0.03] sm:size-32" />}
    >
      <GlassCardContent className="flex flex-col gap-4 pt-6 sm:pt-7">
        <Quote className="size-5 fill-current text-[#8B5CF6]/60" />
        <p className="text-sm leading-relaxed font-light text-white/65 italic">
          {message}
        </p>
      </GlassCardContent>

      <GlassCardFooter>
        <div className="flex w-full items-center gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#8B5CF6]/15 text-xs font-semibold tracking-wide text-[#c4b1ff] ring-1 ring-inset ring-[#8B5CF6]/30">
            {initials}
          </span>

          <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-medium text-white/85">
              {name}
            </span>
            <span className="truncate text-[11px] text-white/40">
              {role} · {relation}
            </span>
          </div>
        </div>
      </GlassCardFooter>
    </GlassCard>
  );
}
