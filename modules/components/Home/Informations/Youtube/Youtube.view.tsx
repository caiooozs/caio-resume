import Link from "next/link";
import { Play } from "lucide-react";
import { YoutubeViewProps } from "./Youtube.model";
import { ExternalArrow } from "@/components/ui/kit";
import { ChannelsData } from "@/modules/components/About/Channels/data/data";
import { getI18n } from "@/lib/i18n/server";
import { intlLocale } from "@/lib/i18n/config";

/** Link do canal, o mesmo usado na lista de canais da /about. */
const CHANNEL_URL =
  ChannelsData.find((channel) => channel.id === "youtube")?.link ??
  "https://www.youtube.com/@caioccchaves";

/** Na Home cabem os mais recentes; o resto fica a um clique, no canal. */
const SHOWN = 3;


/** Videos mais recentes do canal: miniatura, titulo e data, uma linha cada. */
export default async function YoutubeView({ getVideos }: YoutubeViewProps) {
  const videos = await getVideos();
  const isEmpty = videos.length === 0;
  const { locale, t } = await getI18n();
  const dateFormatter = new Intl.DateTimeFormat(intlLocale[locale], {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="flex flex-col">
      <div
        data-reveal="rise"
        style={{ "--d": "160ms" } as React.CSSProperties}
        className="flex items-baseline justify-between gap-3 px-3 pb-1"
      >
        <h3 className="text-[0.8125rem] text-muted">{t.home.latestVideos}</h3>
        <Link
          href={CHANNEL_URL}
          className="group/link relative z-10 inline-flex items-center gap-1 text-[0.8125rem] text-muted transition-colors hover:text-ink"
        >
          {t.home.watchNow}
          <ExternalArrow />
        </Link>
      </div>

      {isEmpty ? (
        <div
          data-reveal="rise"
          style={{ "--d": "220ms" } as React.CSSProperties}
          className="flex items-center gap-3 px-3 py-3"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-raised text-muted">
            <Play className="size-4 translate-x-px" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col">
            <p className="text-[0.9375rem] font-medium text-ink">{t.home.noVideos}</p>
            <p className="text-[0.8125rem] text-muted">{t.home.noVideosHint}</p>
          </div>
        </div>
      ) : (
        <ol className="flex flex-col">
          {videos.slice(0, SHOWN).map((video, index) => (
            <li
              key={video.id}
              data-row
              data-reveal="rise"
              style={{ "--d": `${220 + index * 60}ms` } as React.CSSProperties}
              className="group relative rounded-xl"
            >
              <Link
                href={video.url}
                className="grid grid-cols-[5.5rem_minmax(0,1fr)] items-center gap-3.5 rounded-xl px-3 py-2 outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent"
              >
                <span className="relative aspect-video overflow-hidden rounded-lg bg-raised ring-1 ring-black/5 dark:ring-white/8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={video.thumbnail}
                    alt=""
                    width={88}
                    height={50}
                    loading="lazy"
                    className="size-full object-cover"
                  />
                  <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex size-7 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm">
                      <Play className="size-3 translate-x-px fill-current" />
                    </span>
                  </span>
                </span>
                <span className="flex min-w-0 flex-col gap-0.5">
                  <span className="line-clamp-2 text-[0.9375rem] leading-snug font-medium text-ink">
                    {video.title}
                  </span>
                  <time dateTime={video.publishedAt} className="tabular text-[0.8125rem] text-muted">
                    {dateFormatter.format(new Date(video.publishedAt))}
                  </time>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
