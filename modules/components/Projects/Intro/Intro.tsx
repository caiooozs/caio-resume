import { DisclosureToggleAll } from "@/components/ui/disclosure";
import { getI18n } from "@/lib/i18n/server";

/**
 * Abertura da /projects: o titulo grande com a contagem, uma frase do que tem
 * aqui e, alinhado a ela, o abrir todos.
 */
export default async function Intro({ count }: { count: number }) {
  const { t } = await getI18n();

  return (
    <section className="flex flex-col gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between sm:pt-12">
      <div className="flex flex-col">
        <h1
          className="enter text-[2.375rem] leading-[1.05] font-semibold tracking-[-0.04em] text-ink sm:text-[2.875rem]"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          {t.projects.title}
          <span className="tabular ml-3 text-[1.0625rem] font-normal tracking-normal text-muted">{count}</span>
        </h1>
        <p
          className="enter mt-5 max-w-[33rem] text-[1.0625rem] leading-relaxed text-muted"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {t.projects.intro}
        </p>
      </div>

      <div className="enter shrink-0" style={{ "--i": 2 } as React.CSSProperties}>
        <DisclosureToggleAll
          expandLabel={t.projects.expandAll}
          collapseLabel={t.projects.collapseAll}
          className="-ml-3 mr-0 sm:ml-0 sm:-mr-3"
        />
      </div>
    </section>
  );
}
