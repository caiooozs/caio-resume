import { TimelineCardProps } from "@/types/types";
import { Status, StackList } from "@/components/ui/kit";
import { getI18n } from "@/lib/i18n/server";

/** Um emprego: periodo, estado, local e contrato numa coluna; cargo, empresa, descricao e stack na outra. */
export default async function TimelineCard({
  company,
  role,
  period,
  location,
  contract,
  desc,
  stack,
  current,
  index,
}: TimelineCardProps) {
  const { t } = await getI18n();

  return (
    <li
      data-reveal="rise"
      style={{ "--i": index } as React.CSSProperties}
      className="grid grid-cols-1 gap-3 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-10 md:grid-cols-[17rem_minmax(0,1fr)] md:gap-12 lg:grid-cols-[22.5rem_minmax(0,1fr)]">
      <div className="flex flex-col gap-1 text-[0.8125rem] text-muted sm:pt-[0.2rem]">
        <span className="tabular text-ink/80">{period}</span>
        <span className="flex flex-wrap items-center gap-x-2">
          {location}
          <span aria-hidden className="text-subtle">/</span>
          {contract}
        </span>
        {current && (
          <Status pingOnReveal className="mt-1">
            {t.about.current}
          </Status>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-base leading-snug font-medium text-ink">
          {role}
          <span className="font-normal text-muted">
            {" "}
            {t.about.at} {company}
          </span>
        </h3>
        {desc && <p className="max-w-[62ch] text-[0.9375rem] leading-relaxed text-muted">{desc}</p>}
        {stack && stack.length > 0 && (
          <StackList items={stack.map((item) => t.home.stackTerms[item] ?? item)} className="mt-1" />
        )}
      </div>
    </li>
  );
}
