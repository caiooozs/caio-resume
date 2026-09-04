import { HomeProjectCardProps } from "@/types/types";
import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
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
    <div className="group/project relative h-full">
      <div className="pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-b from-[#8B5CF6]/60 via-[#8B5CF6]/10 to-transparent opacity-0 blur-[2px] transition-opacity duration-500 group-hover/project:opacity-100" />

      <Card
        className="relative h-full overflow-hidden rounded-[1.3rem] border-0 bg-white/[0.03] py-0 text-white ring-1 ring-white/10 backdrop-blur-xl transition-all duration-500 group-hover/project:-translate-y-1 group-hover/project:ring-[#8B5CF6]/40 group-hover/project:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.55)]"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/70 to-transparent opacity-60 transition-opacity duration-500 group-hover/project:opacity-100" />

        <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#8B5CF6]/25 blur-3xl opacity-0 transition-opacity duration-700 group-hover/project:opacity-100" />

        <span className="pointer-events-none absolute -bottom-6 right-3 select-none text-[5rem] font-bold leading-none sm:text-[7rem] tracking-tighter text-white/[0.035] transition-all duration-500 group-hover/project:text-[#8B5CF6]/10">
          {id}
        </span>

        <CardHeader className="relative flex flex-col-reverse items-start justify-between gap-3 px-5 pt-5 sm:flex-row sm:items-start sm:gap-4 sm:px-6 sm:pt-6">
          <div className="flex min-w-0 flex-col gap-3">
            <CardTitle className="flex flex-wrap items-center gap-x-3 gap-y-1 text-base font-semibold tracking-tight sm:text-lg">
              <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-md bg-[#8B5CF6]/15 px-2 font-mono text-xs font-medium text-[#c4b1ff] ring-1 ring-inset ring-[#8B5CF6]/30 transition-colors duration-300 group-hover/project:bg-[#8B5CF6]/25 group-hover/project:text-white">
                {id}
              </span>
              <span className="hidden h-4 w-px bg-white/15 sm:block" />
              <span className="min-w-0 break-words bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {title}
              </span>
            </CardTitle>
            <p className="max-w-prose text-sm leading-relaxed text-white/55 transition-colors duration-300 group-hover/project:text-white/70">
              {desc}
            </p>
          </div>
          <div className="shrink-0">{building && <BuildingBadge />}</div>
        </CardHeader>

        <CardContent className="relative flex-1 px-5 pt-4 sm:px-6 sm:pt-5">
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
        </CardContent>

        <CardFooter className="relative mt-6 border-t border-white/[0.08] bg-white/[0.02] px-5 py-3 sm:px-6 sm:py-4">
          <div className="flex w-full items-center justify-end gap-2">
            <Link
              href={github}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8B5CF6]/20 hover:text-white hover:ring-[#8B5CF6]/40"
            >
              <GithubIcon />
            </Link>
            {website && (
              <Link
                href={website}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8B5CF6]/20 hover:text-white hover:ring-[#8B5CF6]/40"
              >
                <GlobeIcon />
              </Link>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
