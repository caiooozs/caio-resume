import Link from "next/link";
import {
  GlassCard,
  GlassCardBadge,
  GlassCardContent,
  GlassCardFooter,
  GlassCardHeader,
  GlassCardLabel,
  GlassCardTitle,
  GlassIconButton,
} from "@/components/ui/glass-card";
import { ChannelCardProps } from "@/types/types";
import SocialIconLink from "../../Shared/SocialIconLink";
import { ArrowUpRightIcon, GlobeIcon } from "@animateicons/react/lucide";
import { Play, UsersRound } from "lucide-react";

export default function ChannelCard({
  id,
  badge,
  title,
  desc,
  accent,
  link,
  linkLabel,
  stats,
  socials,
}: ChannelCardProps) {
  const isYoutube = id === "youtube";

  return (
    <GlassCard accent={accent} glyph={isYoutube ? "▶" : "–"}>
      <GlassCardHeader>
        <div className="flex min-w-0 flex-col gap-3">
          <GlassCardBadge accent={accent}>
            {isYoutube ? (
              <Play className="size-3 fill-current" />
            ) : (
              <UsersRound className="size-3" />
            )}
            {badge}
          </GlassCardBadge>

          <GlassCardTitle>{title}</GlassCardTitle>
        </div>

        <Link href={link} aria-label={title}>
          <GlassIconButton>
            <ArrowUpRightIcon />
          </GlassIconButton>
        </Link>
      </GlassCardHeader>

      <GlassCardContent className="flex flex-col gap-5">
        <p className="text-sm leading-relaxed font-light text-white/60">
          {desc}
        </p>

        <div className="grid grid-cols-3 gap-3">
          {stats.map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-0.5 rounded-2xl bg-white/[0.03] px-2 py-3 text-center ring-1 ring-inset ring-white/10"
            >
              <span className="text-base font-semibold text-white">
                {value}
              </span>
              <span className="text-[10px] tracking-wide text-white/35 uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>

        <Link
          href={link}
          className="group/link inline-flex w-full max-w-full items-center gap-2 rounded-full bg-white/[0.04] px-4 py-2 text-xs text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:bg-[#8B5CF6]/15 hover:text-white hover:ring-[#8B5CF6]/40 sm:w-auto sm:text-sm"
        >
          <GlobeIcon className="size-4 shrink-0" />
          <span className="min-w-0 truncate">{linkLabel}</span>
        </Link>
      </GlassCardContent>

      <GlassCardFooter>
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <GlassCardLabel>
            {isYoutube ? "Watch now" : "Join us"}
          </GlassCardLabel>

          <div className="flex items-center gap-2">
            {socials.map((social) => (
              <SocialIconLink key={social.label} {...social} />
            ))}
          </div>
        </div>
      </GlassCardFooter>
    </GlassCard>
  );
}
