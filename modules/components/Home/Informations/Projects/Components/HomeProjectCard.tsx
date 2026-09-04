import { HomeProjectCardProps } from "@/types/types";
import {
  GlassCard,
  GlassCardContent,
  GlassCardFooter,
  GlassCardHeader,
  GlassIconButton,
} from "@/components/ui/glass-card";
import { CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlobeIcon } from "@animateicons/react/lucide";
import { GithubIcon } from "@animateicons/react/huge";
import Link from "next/link";
import BuildingBadge from "./buildingBadge";

export default function HomeProjectCard({
  id,
  title,
  desc,
  stack,
  website,
  github,
  building,
}: HomeProjectCardProps) {
  return (
    <GlassCard glyph={id}>
      <GlassCardHeader className="flex-col-reverse sm:flex-row">
        <div className="flex min-w-0 flex-col gap-3">
          <CardTitle className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold tracking-tight sm:text-lg">
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-[#8B5CF6]/15 px-2 font-mono text-xs font-medium text-[#c4b1ff] ring-1 ring-inset ring-[#8B5CF6]/30 transition-colors duration-300 group-hover/glass:bg-[#8B5CF6]/25 group-hover/glass:text-white">
              {id}
            </span>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <span className="min-w-0 bg-gradient-to-r from-white to-white/70 bg-clip-text break-words text-transparent">
              {title}
            </span>
          </CardTitle>
          <p className="max-w-prose text-sm leading-relaxed text-white/55 transition-colors duration-300 group-hover/glass:text-white/70">
            {desc}
          </p>
        </div>
        <div className="shrink-0">{building && <BuildingBadge />}</div>
      </GlassCardHeader>

      <GlassCardContent>
        <div className="flex flex-wrap gap-2">
          {stack.map((stack) => (
            <Badge
              key={stack}
              variant={"secondary"}
              className="rounded-full border-0 bg-white/[0.06] px-3 py-1 text-[11px] font-medium text-white/70 ring-1 ring-inset ring-white/10 backdrop-blur-sm transition-colors duration-300 hover:bg-[#8B5CF6]/20 hover:text-white hover:ring-[#8B5CF6]/40"
            >
              {stack}
            </Badge>
          ))}
        </div>
      </GlassCardContent>

      <GlassCardFooter>
        <div className="flex w-full items-center justify-end gap-2">
          <Link href={github}>
            <GlassIconButton>
              <GithubIcon />
            </GlassIconButton>
          </Link>
          {website && (
            <Link href={website}>
              <GlassIconButton>
                <GlobeIcon />
              </GlassIconButton>
            </Link>
          )}
        </div>
      </GlassCardFooter>
    </GlassCard>
  );
}
