import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { Project, ProjectImage } from "@/types/types";
import { Status } from "@/components/ui/kit";
import { TechList } from "@/components/ui/tech-list";
import { DisclosureButton, DisclosureItem, DisclosurePanel } from "@/components/ui/disclosure";
import ProjectLinks from "@/modules/components/Home/Informations/Projects/Components/ProjectLinks";
import { getI18n } from "@/lib/i18n/server";

/** Uma tela do projeto na moldura de foto, na proporcao real da imagem. */
function Screenshot({ image, alt, sizes }: { image: ProjectImage; alt: string; sizes: string }) {
  return (
    <div
      style={{ aspectRatio: `${image.width} / ${image.height}` }}
      className="relative overflow-hidden rounded-2xl bg-raised shadow-[0_1px_2px_rgb(0_0_0/0.06),0_16px_40px_-16px_rgb(0_0_0/0.3)] ring-1 ring-black/5 dark:ring-white/8"
    >
      {/* no escuro, a tela (quase sempre clara) baixa um pouco a exposicao */}
      <Image
        src={image.src}
        alt={alt}
        fill
        sizes={sizes}
        className="panel-wipe object-cover dark:brightness-[0.86]"
      />
    </div>
  );
}

/**
 * Um projeto em /projects: a mesma linha da Home (numero, nome, estado, links,
 * descricao e stack), so que o nome abre os detalhes ali mesmo: a tela do
 * projeto no ar (e as outras telas, em grade), a visao geral e o que ele faz.
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
              {image && (
                <figure>
                  <Screenshot image={image} alt={altFor(image)} sizes="(min-width: 1024px) 54rem, calc(100vw - 6rem)" />
                </figure>
              )}

              {gallery && gallery.length > 0 && (
                <ul className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                  {gallery.map((shot, shotIndex) => {
                    // numero impar de telas: a ultima ocupa a linha toda, sem buraco ao lado
                    const wide = shotIndex === gallery.length - 1 && shotIndex % 2 === 0;
                    return (
                      <li key={shot.src} className={wide ? "sm:col-span-2" : undefined}>
                        <figure className="flex flex-col gap-2.5">
                          <Screenshot
                            image={shot}
                            alt={altFor(shot)}
                            sizes={
                              wide
                                ? "(min-width: 1024px) 54rem, calc(100vw - 6rem)"
                                : "(min-width: 1024px) 27rem, (min-width: 640px) calc(50vw - 3rem), calc(100vw - 6rem)"
                            }
                          />
                          {shot.caption && (
                            <figcaption className="text-[0.8125rem] text-muted">{shot.caption}</figcaption>
                          )}
                        </figure>
                      </li>
                    );
                  })}
                </ul>
              )}

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
