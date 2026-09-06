import { YoutubeViewProps } from "./Youtube.model";
import {
  GlassCard,
  GlassCardBadge,
  GlassCardContent,
  GlassCardFooter,
  GlassCardHeader,
  GlassCardLabel,
  GlassCardTitle,
} from "@/components/ui/glass-card";
import { Play } from "lucide-react";
import { CalendarIcon } from "@animateicons/react/lucide";
import Link from "next/link";
import FadeInAnimation from "@/components/ui/fade-animation";

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
    <>
      <FadeInAnimation animationDuration={0.2} viewPort>
        <GlassCard
          accent="red"
          cardClassName={isEmpty ? undefined : "min-h-[32rem]"}
          glyph={
            <Play className="size-40 translate-y-6 fill-current text-white/[0.03] transition-colors duration-500 group-hover/glass:text-red-500/10 sm:size-56" />
          }
        >
          <GlassCardHeader>
            <div className="flex min-w-0 flex-col gap-3">
              <GlassCardBadge accent="red">
                <YoutubeGlyph className="size-3.5" />
                My Youtube Channel
              </GlassCardBadge>

              <GlassCardTitle>Latest Videos</GlassCardTitle>
            </div>

            {!isEmpty && (
              <span className="shrink-0 rounded-full bg-white/[0.05] px-3 py-1 font-mono text-xs text-white/60 ring-1 ring-inset ring-white/10">
                {videos.length}
              </span>
            )}
          </GlassCardHeader>

          <GlassCardContent>
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
          </GlassCardContent>

          <GlassCardFooter>
            <div className="flex w-full flex-wrap items-center justify-between gap-3">
              <GlassCardLabel>Watch now</GlassCardLabel>
              <span className="inline-flex items-center gap-2 text-xs text-white/45">
                <YoutubeGlyph className="size-4 text-red-400/70" />
                Updated hourly
              </span>
            </div>
          </GlassCardFooter>
        </GlassCard>
      </FadeInAnimation>
    </>
  );
}
