import type { Metadata } from "next";
import Projects from "@/modules/pages/Projects/projects";
import { getI18n } from "@/lib/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getI18n();
  return {
    title: t.projects.title,
    description: t.projects.metaDescription,
  };
}

export default Projects;
