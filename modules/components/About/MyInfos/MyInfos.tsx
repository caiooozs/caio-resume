import { MapPin } from "lucide-react";
import { Portrait } from "@/components/ui/portrait";
import { SectionHeading, StackList } from "@/components/ui/kit";
import { getMyInfos } from "./data/i18n";
import { getI18n } from "@/lib/i18n/server";
import { SocialRow } from "../Shared/SocialIconLink";

/**
 * Abertura da /about: a mesma foto da Home (ela viaja ate aqui), nome, cargo,
 * a bio em texto corrido, as habilidades e as redes.
 */
export default async function MyInfos() {
  const { locale, t } = await getI18n();
  const { photo, photoAlt, name, role, location, badge, paragraphs, tags, socials } = getMyInfos(locale);

  return (
    <section className="grid grid-cols-1 items-start gap-10 pt-10 sm:pt-12 md:grid-cols-[17rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[22.5rem_minmax(0,1fr)]">
      <div className="enter" style={{ "--i": 1 } as React.CSSProperties}>
        <Portrait src={photo} alt={photoAlt} priority />
      </div>

      <div className="flex flex-col">
        <h1
          className="enter text-[2.375rem] leading-[1.05] font-semibold tracking-[-0.04em] text-ink sm:text-[2.875rem]"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          {name}
        </h1>
        <p
          className="enter mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[1.0625rem] text-muted"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {role}
          <span className="inline-flex items-center gap-1.5 text-[0.9375rem]">
            <MapPin aria-hidden className="size-4 text-subtle" strokeWidth={1.75} />
            {location}
          </span>
        </p>

        <div className="enter mt-10 flex flex-col gap-4" style={{ "--i": 2 } as React.CSSProperties}>
          <SectionHeading>{badge}</SectionHeading>
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="max-w-[62ch] text-[1.0625rem] leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
          <StackList
            items={tags.map((tag) => t.home.stackTerms[tag] ?? tag)}
            label={t.about.skills}
            className="text-[0.9375rem] text-ink"
          />
        </div>

        <div className="enter mt-8" style={{ "--i": 3 } as React.CSSProperties}>
          <SocialRow links={socials} />
        </div>
      </div>
    </section>
  );
}
