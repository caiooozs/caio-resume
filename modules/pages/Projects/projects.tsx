import Intro from "@/modules/components/Projects/Intro/Intro";
import ProjectsList from "@/modules/components/Projects/List/ProjectsList";
import CTA from "@/modules/components/About/CTA/CTA";
import { DisclosureGroup } from "@/components/ui/disclosure";
import { getProjects } from "@/modules/components/Home/Informations/Projects/data/i18n";
import { getI18n } from "@/lib/i18n/server";

/** Os projetos com espaco: cada linha abre no lugar; no fim, o mesmo convite da /about. */
export default async function Projects() {
  const { locale, t } = await getI18n();
  const projects = getProjects(locale);

  return (
    <div className="mx-auto w-full max-w-[60rem] px-5 pb-12 sm:px-6">
      {/* o abrir todos fica na abertura, entao o grupo envolve abertura e lista */}
      <DisclosureGroup ids={projects.map((project) => project.slug)}>
        <Intro count={projects.length} />
        <ProjectsList projects={projects} />
      </DisclosureGroup>
      {/* aqui "ver projetos" seria circular: o CV e o proximo passo de quem avalia */}
      <CTA secondary={{ label: t.home.downloadCv, href: "/caio_tech_cv.pdf", download: true }} />
    </div>
  );
}
