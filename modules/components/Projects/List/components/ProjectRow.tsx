import { ChevronDown } from "lucide-react";
import type { Project, ProjectImage } from "@/types/types";
import { Status } from "@/components/ui/kit";
import { TechList } from "@/components/ui/tech-list";
import { DisclosureButton, DisclosureItem, DisclosurePanel } from "@/components/ui/disclosure";
import ProjectLinks from "@/modules/components/Home/Informations/Projects/Components/ProjectLinks";
import { getI18n } from "@/lib/i18n/server";
import { ProjectScreens } from "./ProjectScreens";

/**
 * Um projeto em /projects: a mesma linha da Home (numero, nome, estado, links,
 * descricao e stack), so que o nome abre os detalhes ali mesmo: as telas do
 * projeto (que abrem em tela cheia para ver de perto), a visao geral e o que ele faz.
 * O destaque desliza so entre os cabecalhos; o painel aberto fica no chao da
 * pagina, sem fundo.
 */
export default async function ProjectRow({ project, index }: { project: Project; index: number }) {
  const { t } = await getI18n();
  const {
    id,
    slug,
    title,
    desc,
    stack,
    github,
    website,
    privateRepo,
    post,
    building,
    overview,
    highlights,
    image,
    gallery,
  } = project;
  const altFor = (shot: ProjectImage) =>
    shot.caption ? `${title}: ${shot.caption}` : t.projects.screenshotAlt.replace("{title}", title);

  return (
    <DisclosureItem id={slug}>
      <div
        data-row
        data-reveal="rise"
        style={{ "--i": index + 1 } as React.CSSProperties}
        className="group relative grid grid-cols-[1.75rem_minmax(0,1fr)_auto] rounded-xl px-3 py-4"
      >
        <span aria-hidden className="tabular pt-[0.3rem] text-[0.8125rem] text-muted">
          {id}
        </span>

        <div className="flex min-w-0 flex-col gap-1.5">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h2 className="flex min-w-0 items-center gap-2.5 text-lg font-medium tracking-[-0.015em] text-ink">
              <DisclosureButton className="rounded-sm outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:outline-2 focus-visible:after:outline-offset-0 focus-visible:after:outline-accent">
                {title}
              </DisclosureButton>
              {building && <Status>{t.home.building}</Status>}
            </h2>

            {/* no celular os links sempre ganham a propria linha, em todo projeto */}
            <ProjectLinks
              github={github}
              website={website}
              privateRepo={privateRepo}
              post={post}
              className="basis-full sm:basis-auto"
            />
          </div>

          <p className="max-w-[58ch] text-[0.9375rem] leading-relaxed text-muted">{desc}</p>

          <TechList
            items={stack}
            label={t.home.builtWith}
            translate={(item) => t.home.stackTerms[item] ?? item}
            className="mt-2"
          />
        </div>

        {/* coluna propria: o chevron fica no canto mesmo quando os links quebram de linha */}
        <ChevronDown
          aria-hidden
          strokeWidth={1.75}
          className="pointer-events-none mt-1.5 ml-3.5 size-4 shrink-0 text-subtle transition-[rotate,color] duration-300 ease-out-expo group-hover:text-ink group-data-[open]/item:rotate-180"
        />
      </div>

      <DisclosurePanel>
        {/* folga nas laterais para a sombra da foto, sem passar da margem da tela */}
        <div className="-mx-2 min-h-0 overflow-hidden px-2 sm:-mx-3 sm:px-3 lg:-mx-6 lg:px-6">
          <div className="grid grid-cols-[1.75rem_minmax(0,1fr)] px-3 pt-3 pb-12">
            <div className="col-start-2 flex min-w-0 flex-col gap-8">
              <ProjectScreens
                title={title}
                image={image && { ...image, alt: altFor(image) }}
                gallery={(gallery ?? []).map((shot) => ({ ...shot, alt: altFor(shot) }))}
              />

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_22.5rem] lg:gap-12">
                {overview && (
                  <div data-panel-item style={{ "--i": 1 } as React.CSSProperties} className="flex flex-col gap-2">
                    <h3 className="text-[0.8125rem] text-muted">{t.projects.overview}</h3>
                    <p className="max-w-[62ch] text-[0.9375rem] leading-relaxed text-ink/85">{overview}</p>
                  </div>
                )}

                {highlights && highlights.length > 0 && (
                  <div data-panel-item style={{ "--i": 2 } as React.CSSProperties} className="flex flex-col gap-2">
                    <h3 className="text-[0.8125rem] text-muted">{t.projects.whatItDoes}</h3>
                    <ul className="flex flex-col gap-2 text-[0.9375rem] leading-relaxed text-muted">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="grid grid-cols-[1rem_minmax(0,1fr)]">
                          <span aria-hidden className="mt-[0.8rem] h-px w-2 bg-subtle" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </DisclosureItem>
  );
}
