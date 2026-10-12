import Link from "next/link";
import { HomeProjectCardProps } from "@/types/types";
import { ExternalArrow } from "@/components/ui/kit";
import { TechList } from "@/components/ui/tech-list";
import { getI18n } from "@/lib/i18n/server";
import BuildingBadge from "./buildingBadge";

/**
 * Um projeto numa linha: numero, nome (a linha inteira abre o GitHub), estado,
 * descricao e as tecnologias em destaque, com o logo de cada uma. Os links
 * extras ficam a direita, acima do link da linha.
 */
export default async function HomeProjectCard({
  id,
  title,
  desc,
  stack,
  website,
  github,
  building,
  index = 0,
}: HomeProjectCardProps & { index?: number }) {
  const { t } = await getI18n();

  return (
    <li
      id={`project-${id}`}
      data-row
      data-reveal="rise"
      style={{ "--i": index + 1 } as React.CSSProperties}
      className="group relative grid grid-cols-[1.75rem_minmax(0,1fr)] rounded-xl px-3 py-4"
    >
      <span aria-hidden className="tabular pt-[0.2rem] text-[0.8125rem] text-muted">
        {id}
      </span>

      <div className="flex min-w-0 flex-col gap-1.5">
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 className="flex min-w-0 items-center gap-2.5 text-base font-medium text-ink">
            <Link
              href={github}
              className="rounded-sm outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:outline-2 focus-visible:after:outline-offset-0 focus-visible:after:outline-accent"
            >
              {title}
            </Link>
            {building && <BuildingBadge label={t.home.building} />}
          </h3>

          <div className="relative z-10 flex items-center gap-3.5 text-[0.8125rem] text-muted">
            <Link href={github} className="group/link inline-flex items-center gap-1 transition-colors hover:text-ink">
              {t.home.github}
              <ExternalArrow />
            </Link>
            {website && (
              <Link href={website} className="group/link inline-flex items-center gap-1 transition-colors hover:text-ink">
                {t.home.website}
                <ExternalArrow />
              </Link>
            )}
          </div>
        </div>

        <p className="max-w-[58ch] text-[0.9375rem] leading-relaxed text-muted">{desc}</p>

        <TechList
          items={stack}
          label={t.home.builtWith}
          translate={(item) => t.home.stackTerms[item] ?? item}
          className="mt-2"
        />
      </div>
    </li>
  );
}
