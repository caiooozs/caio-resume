import Link from "next/link";
import Image from "next/image";
import { getEvents } from "@/modules/components/About/Events/data/i18n";
import { getI18n } from "@/lib/i18n/server";

/**
 * Eventos em linhas curtas; cada uma abre o evento na /about. No desktop, a foto do
 * evento aparece junto ao cursor (data-preview, lido pela HoverList).
 */
export default async function EventsPreview() {
  const { locale, t } = await getI18n();

  return (
    <div className="flex flex-col">
      <h3
        data-reveal="rise"
        style={{ "--d": "400ms" } as React.CSSProperties}
        className="px-3 pb-1 text-[0.8125rem] text-muted"
      >
        {t.home.events}
      </h3>

      <ol className="flex flex-col">
        {getEvents(locale).map((event, index) => (
          <li
            key={event.id}
            data-row
            data-preview={event.photos}
            data-reveal="rise"
            style={{ "--d": `${460 + index * 60}ms` } as React.CSSProperties}
            className="group relative rounded-xl"
          >
            <Link
              href={`/about#${event.id}`}
              className="grid grid-cols-[2.75rem_minmax(0,1fr)] items-center gap-3.5 rounded-xl px-3 py-2 outline-none focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-accent"
            >
              <span className="relative size-11 overflow-hidden rounded-lg bg-raised ring-1 ring-black/5 dark:ring-white/8">
                {event.photos && (
                  <Image
                    src={event.photos}
                    alt=""
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                )}
              </span>
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="truncate text-[0.9375rem] leading-snug font-medium text-ink">
                  {event.name}
                </span>
                <span className="truncate text-[0.8125rem] text-muted">
                  {event.role}, <span className="tabular">{event.date}</span>
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
