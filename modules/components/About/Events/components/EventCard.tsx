import Image from "next/image";
import { CalendarDays, MapPin, Ticket } from "lucide-react";
import { EventCardProps } from "@/types/types";
import { getI18n } from "@/lib/i18n/server";

/** Um evento: a foto do time grande a esquerda; nome, papel, quando, onde e o relato a direita. */
export default async function EventCard({
  id,
  name,
  role,
  date,
  local,
  desc,
  tag,
  photos,
}: EventCardProps) {
  const { t } = await getI18n();

  return (
    <li
      id={id}
      data-reveal="rise"
      className="grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] md:gap-10"
    >
      {photos && (
        <figure className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-raised shadow-[0_1px_2px_rgb(0_0_0/0.06),0_16px_40px_-16px_rgb(0_0_0/0.3)] ring-1 ring-black/5 md:sticky md:top-[calc(var(--nav-h)+2rem)] dark:ring-white/8">
          <Image
            src={photos}
            alt={name}
            fill
            sizes="(min-width: 960px) 30rem, (min-width: 768px) 52vw, 100vw"
            // corta 5% da direita/baixo: a foto da UPE tem um artefato amarelo no canto
            className="wipe origin-top-left scale-[1.05] object-cover"
          />
        </figure>
      )}

      <div className="flex flex-col gap-3 md:pt-1">
        <h3 className="text-xl leading-snug font-medium tracking-[-0.015em] text-ink">{name}</h3>
        <p className="text-[0.9375rem] text-ink/80">{role}</p>
        <dl className="flex flex-wrap gap-x-4 gap-y-1 text-[0.8125rem] text-muted">
          <div className="inline-flex items-center gap-1.5">
            <dt className="sr-only">{t.about.organizedWith}</dt>
            <Ticket aria-hidden className="size-3.5 text-subtle" strokeWidth={1.75} />
            <dd>{tag}</dd>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <dt className="sr-only">{t.about.date}</dt>
            <CalendarDays aria-hidden className="size-3.5 text-subtle" strokeWidth={1.75} />
            <dd className="tabular">{date}</dd>
          </div>
          <div className="inline-flex items-center gap-1.5">
            <dt className="sr-only">{t.about.location}</dt>
            <MapPin aria-hidden className="size-3.5 text-subtle" strokeWidth={1.75} />
            <dd>{local}</dd>
          </div>
        </dl>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{desc}</p>
      </div>
    </li>
  );
}
