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
import { HyphenProps } from "@/types/types";
import { DiscordIcon } from "@animateicons/react/huge";
import {
  ArrowUpRightIcon,
  GlobeIcon,
  InstagramIcon,
  UsersRoundIcon,
} from "@animateicons/react/lucide";
import { MessageCircleMore } from "lucide-react";
import Link from "next/link";

export default function HyphenCard({
  title,
  website_link,
  infos,
  desc,
}: HyphenProps) {
  return (
    <GlassCard glyph="–">
      <GlassCardHeader>
        <div className="flex min-w-0 flex-col gap-3">
          <GlassCardBadge>
            <UsersRoundIcon className="size-3" />
            My Community
          </GlassCardBadge>

          <GlassCardTitle>
            {title}
          </GlassCardTitle>
        </div>

        <Link href={website_link}>
          <GlassIconButton>
            <ArrowUpRightIcon />
          </GlassIconButton>
        </Link>
      </GlassCardHeader>

      <GlassCardContent className="flex flex-col gap-4">
            <span className="text-sm font-light">{desc}</span>
        <Link
          href={website_link}
          className="group/link inline-flex w-full max-w-full items-center gap-2 rounded-full bg-white/[0.04] px-4 py-2 text-xs text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:bg-[#8B5CF6]/15 hover:text-white hover:ring-[#8B5CF6]/40 sm:w-auto sm:text-sm"
        >
          <GlobeIcon className="size-4 shrink-0" />
          <span className="min-w-0 truncate">{website_link}</span>
        </Link>
      </GlassCardContent>

      <GlassCardFooter>
        <div className="flex w-full flex-wrap items-center justify-between gap-3">
          <GlassCardLabel>Join us</GlassCardLabel>

          <div className="flex items-center gap-2">
            {infos.discord_link && (
              <Link href={infos.discord_link}>
                <GlassIconButton className="hover:bg-[#5865F2]/25 hover:ring-[#5865F2]/50">
                  <DiscordIcon />
                </GlassIconButton>
              </Link>
            )}
            {infos.ig_link && (
              <Link href={infos.ig_link}>
                <GlassIconButton className="hover:bg-pink-500/25 hover:ring-pink-400/50">
                  <InstagramIcon />
                </GlassIconButton>
              </Link>
            )}
            {infos.wpp_link && (
              <Link href={infos.wpp_link}>
                <GlassIconButton className="hover:bg-emerald-500/25 hover:ring-emerald-400/50">
                  <MessageCircleMore className="size-5" />
                </GlassIconButton>
              </Link>
            )}
          </div>
        </div>
      </GlassCardFooter>
    </GlassCard>
  );
}
