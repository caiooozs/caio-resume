import { HoverList } from "@/components/ui/hover-list";
import { getProjects } from "./data/i18n";
import { getI18n } from "@/lib/i18n/server";
import HomeProjectCard from "./Components/HomeProjectCard";

/** Projetos como linhas: o destaque desliza de um para o outro sob o cursor. */
export default async function Projects() {
  const { locale, t } = await getI18n();

  return (
    <HoverList as="ol" aria-label={t.home.projects} className="-mx-3 flex flex-col">
      {getProjects(locale).map((project, index) => (
        <HomeProjectCard key={project.id} {...project} index={index} />
      ))}
    </HoverList>
  );
}
