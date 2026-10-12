import TechStackCloud from "./components/techStackCloud";
import { textStacks } from "./Data/techStackData";
import { getI18n } from "@/lib/i18n/server";

/** A stack em texto, por grupo, e a nuvem 3D na coluna da direita (o mesmo eixo da comunidade e da foto). */
export default async function TechStack() {
  const { t } = await getI18n();
  const categories = Object.entries(textStacks[0]);

  return (
    <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-[minmax(0,1fr)_22.5rem] md:gap-12">
      <dl className="flex flex-col gap-5 md:pt-2">
        {categories.map(([key, items], index) => (
          <div
            key={key}
            data-reveal="rise"
            style={{ "--i": index + 1 } as React.CSSProperties}
            className="grid gap-1 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-6"
          >
            <dt className="text-[0.9375rem] text-muted">{t.home.stackLabels[key] ?? key}</dt>
            <dd className="text-[0.9375rem] leading-relaxed text-ink">
              <ul
                aria-label={t.home.stackLabels[key] ?? key}
                className="flex flex-wrap [&>li:not(:last-child)]:after:mr-1.5 [&>li:not(:last-child)]:after:content-[',']"
              >
                {items.map((item) => (
                  <li key={item}>{t.home.stackTerms[item] ?? item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>

      <div
        data-reveal="scale"
        style={{ "--d": "180ms" } as React.CSSProperties}
        className="mx-auto -my-4 w-full max-w-[19rem] md:-mt-6 md:max-w-none"
      >
        <TechStackCloud />
      </div>
    </div>
  );
}
