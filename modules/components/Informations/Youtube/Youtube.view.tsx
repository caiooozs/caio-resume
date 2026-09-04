import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { YoutubeViewProps } from "./Youtube.model";
import { Play } from "lucide-react";
import { CalendarIcon } from "@animateicons/react/lucide";
import Link from "next/link";

function YoutubeGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42A2.51 2.51 0 0 0 2.42 7.19 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM10 15.02v-6l5.2 3-5.2 3Z" />
    </svg>
  );
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  day: "2-digit",
  month: "short",
  year: "numeric",
});

export default async function YoutubeView({ getVideos }: YoutubeViewProps) {
  const videos = await getVideos();
  const isEmpty = videos.length === 0;

  return (
    <div className="group/yt relative h-full">
      {/* glow atrás do card */}
      <div className="pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-b from-[#8B5CF6]/60 via-[#8B5CF6]/10 to-transparent opacity-0 blur-[2px] transition-opacity duration-500 group-hover/yt:opacity-100" />

      <Card
        className={`relative h-full overflow-hidden rounded-[1.3rem] border-0 bg-white/[0.03] py-0 text-white ring-1 ring-white/10 backdrop-blur-xl transition-all duration-500 group-hover/yt:-translate-y-1 group-hover/yt:ring-[#8B5CF6]/40 group-hover/yt:shadow-[0_20px_60px_-20px_rgba(139,92,246,0.55)] ${isEmpty ? "" : "min-h-[32rem]"}`}
      >
        {/* linha de destaque no topo */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/70 to-transparent opacity-60 transition-opacity duration-500 group-hover/yt:opacity-100" />

        {/* brilhos radiais */}
        <div className="pointer-events-none absolute -right-24 -top-28 h-64 w-64 rounded-full bg-red-500/15 blur-3xl opacity-40 transition-opacity duration-700 group-hover/yt:opacity-100" />
        <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-[#8B5CF6]/20 blur-3xl opacity-0 transition-opacity duration-700 group-hover/yt:opacity-100" />

        {/* play gigante de fundo */}
        <Play className="pointer-events-none absolute -bottom-10 right-2 size-40 fill-white/[0.03] text-transparent transition-colors duration-500 group-hover/yt:fill-red-500/10 sm:size-56" />

        <CardHeader className="relative flex flex-row items-start justify-between gap-3 px-5 pt-5 sm:gap-4 sm:px-6 sm:pt-6">
          <div className="flex min-w-0 flex-col gap-3">
            <Badge
              variant={"outline"}
              className="w-fit gap-2 rounded-full border-0 bg-red-500/10 px-3 py-1 text-[11px] font-medium tracking-wide text-red-300 uppercase ring-1 ring-inset ring-red-500/30"
            >
              <YoutubeGlyph className="size-3.5" />
              My Youtube Channel
            </Badge>

            <CardTitle className="flex items-center gap-3 text-xl font-semibold tracking-tight sm:text-2xl">
              <span className="min-w-0 break-words bg-gradient-to-r from-white via-white to-[#c4b1ff] bg-clip-text text-transparent">
                Latest Videos
              </span>
            </CardTitle>
          </div>

          {!isEmpty && (
            <span className="shrink-0 rounded-full bg-white/[0.05] px-3 py-1 font-mono text-xs text-white/60 ring-1 ring-inset ring-white/10">
              {videos.length}
            </span>
          )}
        </CardHeader>

        <CardContent className="relative flex-1 px-5 pt-4 sm:px-6 sm:pt-5">
          {isEmpty ? (
            <div className="flex min-h-[16rem] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-12 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-red-500/10 text-red-400/80 ring-1 ring-inset ring-red-500/20">
                <Play className="size-6 translate-x-px fill-current" />
              </span>
              <p className="text-sm font-medium text-white/70">
                No videos published yet
              </p>
              <p className="max-w-xs text-xs text-white/40">
                New uploads show up here automatically
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <Link
                  key={video.id}
                  href={video.url}
                  className="group/video flex flex-col gap-3 rounded-2xl bg-white/[0.03] p-3 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:ring-[#8B5CF6]/40"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-white/5 ring-1 ring-inset ring-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover/video:scale-105"
                    />
                    {/* overlay + play */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 transition-opacity duration-300 group-hover/video:opacity-90" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex size-11 items-center justify-center rounded-full bg-red-600/90 text-white opacity-0 shadow-[0_8px_30px_-6px_rgba(239,68,68,0.8)] transition-all duration-300 group-hover/video:scale-110 group-hover/video:opacity-100">
                        <Play className="size-5 translate-x-px fill-current" />
                      </span>
                    </div>
                  </div>

                  <div className="flex min-w-0 flex-col gap-2">
                    <h3 className="line-clamp-2 text-sm leading-snug font-medium text-white/85 transition-colors duration-300 group-hover/video:text-white">
                      {video.title}
                    </h3>
                    <span className="inline-flex items-center gap-1.5 text-[11px] text-white/40">
                      <CalendarIcon className="size-3 shrink-0" />
                      {dateFormatter.format(new Date(video.publishedAt))}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="relative mt-6 border-t border-white/[0.08] bg-white/[0.02] px-5 py-3 sm:px-6 sm:py-4">
          <div className="flex w-full flex-wrap items-center justify-between gap-3">
            <span className="text-[11px] font-medium tracking-wide text-white/35 uppercase">
              Watch now
            </span>
            <span className="inline-flex items-center gap-2 text-xs text-white/45">
              <YoutubeGlyph className="size-4 text-red-400/70" />
              Updated hourly
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
