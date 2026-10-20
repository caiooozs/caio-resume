import type { Project } from "@/types/types";
import { HoverList } from "@/components/ui/hover-list";
import { getI18n } from "@/lib/i18n/server";
import ProjectRow from "./components/ProjectRow";

/** Todos os projetos como linhas que abrem no lugar. */
export default async function ProjectsList({ projects }: { projects: Project[] }) {
  const { t } = await getI18n();

  return (
    <HoverList as="ol" aria-label={t.projects.title} className="-mx-3 mt-8 flex flex-col sm:mt-10">
      {projects.map((project, index) => (
        <ProjectRow key={project.id} project={project} index={index} />
      ))}
    </HoverList>
  );
}
