import { SectionHeading } from "@/components/ui/kit";
import Projects from "./Projects/Projects";
import Community from "./Community/Community";
import TechStack from "./TechStack/TechStack";
import { HomeProjects } from "./Projects/data/data";
import { getI18n } from "@/lib/i18n/server";

/** Trabalho e comunidade lado a lado logo abaixo da apresentacao; a stack depois. */
const Informations = async () => {
  const { t } = await getI18n();

  return (
    <>
      <div className="mt-14 grid grid-cols-1 gap-14 sm:mt-16 lg:grid-cols-[minmax(0,1fr)_22.5rem] lg:gap-12">
        <section
          id="projects"
          aria-labelledby="projects-title"
          className="flex flex-col gap-3"
        >
          <SectionHeading id="projects-title" count={HomeProjects.length}>
            {t.home.projects}
          </SectionHeading>
          <Projects />
        </section>

        <section
          id="community"
          aria-labelledby="community-title"
          className="flex flex-col gap-3"
        >
          <SectionHeading id="community-title">{t.home.community}</SectionHeading>
          <Community />
        </section>
      </div>

      <section id="stack" aria-labelledby="stack-title" className="mt-20 flex flex-col gap-6 sm:mt-24">
        <SectionHeading id="stack-title">{t.home.stack}</SectionHeading>
        <TechStack />
      </section>
    </>
  );
};

export default Informations;
