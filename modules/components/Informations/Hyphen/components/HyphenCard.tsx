import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
    <div className="group/hyphen relative h-full">
      {/* glow atrás do card */}
      <div className="pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-b from-[#8B5CF6]/60 via-[#8B5CF6]/10 to-transparent opacity-0 blur-[2px] transition-opacity duration-500 group-hover/hyphen:opacity-100" />

      <Card className="relative h-full overflow-hidden rounded-[1.3rem] border-0 bg-white/[0.03] py-0 text-white ring-1 ring-white/10 backdrop-blur-xl transition-all duration-500 group-hover/hyphen:-translate-y-1 group-hover/hyphen:ring-[#8B5CF6]/40 group-hover/hyphen:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.55)]">
        {/* linha de destaque no topo */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/70 to-transparent opacity-60 transition-opacity duration-500 group-hover/hyphen:opacity-100" />

        {/* brilhos radiais */}
        <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#8B5CF6]/25 blur-3xl opacity-40 transition-opacity duration-700 group-hover/hyphen:opacity-100" />
        <div className="pointer-events-none absolute -bottom-28 -right-16 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl opacity-0 transition-opacity duration-700 group-hover/hyphen:opacity-100" />

        {/* hífen gigante de fundo */}
        <span className="pointer-events-none absolute -bottom-16 right-4 select-none text-[6rem] font-bold leading-none sm:text-[10rem] tracking-tighter text-white/[0.035] transition-colors duration-500 group-hover/hyphen:text-[#8B5CF6]/10">
          –
        </span>

        <CardHeader className="relative flex flex-row items-start justify-between gap-3 px-5 pt-5 sm:gap-4 sm:px-6 sm:pt-6">
          <div className="flex min-w-0 flex-col gap-3">
            <Badge
              variant={"outline"}
              className="w-fit gap-2 rounded-full border-0 bg-[#8B5CF6]/10 px-3 py-1 text-[11px] font-medium tracking-wide text-[#c4b1ff] uppercase ring-1 ring-inset ring-[#8B5CF6]/30"
            >
              <UsersRoundIcon className="size-3" />
              My Community
            </Badge>

            <CardTitle className="flex flex-col items-start gap-3 text-xl font-semibold tracking-tight sm:text-2xl">
              <span className="min-w-0 break-words bg-gradient-to-r from-white via-white to-[#c4b1ff] bg-clip-text text-transparent">
                {title}
              </span>
              <span className="text-sm font-light">{desc}</span>
            </CardTitle>
          </div>

          <Link
            href={website_link}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8B5CF6]/20 hover:text-white hover:ring-[#8B5CF6]/40"
          >
            <ArrowUpRightIcon />
          </Link>
        </CardHeader>

        <CardContent className="relative flex-1 px-5 pt-4 sm:px-6 sm:pt-5">
          <Link
            href={website_link}
            className="group/link inline-flex w-full max-w-full items-center gap-2 rounded-full bg-white/[0.04] px-4 py-2 text-xs text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:bg-[#8B5CF6]/15 hover:text-white hover:ring-[#8B5CF6]/40 sm:w-auto sm:text-sm"
          >
            <GlobeIcon className="size-4 shrink-0" />
            <span className="min-w-0 truncate">{website_link}</span>
          </Link>
        </CardContent>

        <CardFooter className="relative mt-6 border-t border-white/[0.08] bg-white/[0.02] px-5 py-3 sm:px-6 sm:py-4">
          <div className="flex w-full flex-wrap items-center justify-between gap-3">
            <span className="text-[11px] font-medium tracking-wide text-white/35 uppercase">
              Join us
            </span>

            <div className="flex items-center gap-2">
              {infos.discord_link && (
                <Link
                  href={infos.discord_link}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#5865F2]/25 hover:text-white hover:ring-[#5865F2]/50"
                >
                  <DiscordIcon />
                </Link>
              )}
              {infos.ig_link && (
                <Link
                  href={infos.ig_link}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-pink-500/25 hover:text-white hover:ring-pink-400/50"
                >
                  <InstagramIcon />
                </Link>
              )}
              {infos.wpp_link && (
                <Link
                  href={infos.wpp_link}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-500/25 hover:text-white hover:ring-emerald-400/50"
                >
                  <MessageCircleMore className="size-5" />
                </Link>
              )}
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
