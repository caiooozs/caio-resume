import { HomeProjects } from "./data/data";
import HomeProjectCard from "./Components/HomeProjectCard";
import FadeInAnimation from "@/components/ui/fade-animation";

export default function Projects() {
  return (
    <>
      <FadeInAnimation animationDuration={0.2} viewPort>
        <div
          id="projects"
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-full max-w-[36rem] -translate-x-1/2 rounded-full bg-[#8B5CF6]/15 blur-[120px]"
        />
        <div className="relative grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {HomeProjects.map((hp) => (
            <div key={hp.id} className="h-full">
              <HomeProjectCard {...hp} />
            </div>
          ))}
        </div>
      </FadeInAnimation>
    </>
  );
}
