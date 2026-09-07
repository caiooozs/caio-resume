import FadeInAnimation from "@/components/ui/fade-animation";
import TimelineCard from "./components/TimelineCard";
import { TimelineData } from "./data/data";

export default function Timeline() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute top-2 bottom-2 left-[7px] hidden w-px bg-gradient-to-b from-transparent via-[#8B5CF6]/40 to-transparent md:block" />

      <div className="flex flex-col gap-4 sm:gap-6 md:pl-10">
        {TimelineData.map((item, index) => (
          <FadeInAnimation
            key={item.id}
            animationDuration={0.3}
            animationDelay={index * 0.05}
            viewPort
            className="relative"
          >
            <span className="pointer-events-none absolute top-8 -left-10 hidden size-[15px] items-center justify-center rounded-full bg-[#0e0b13] ring-1 ring-[#8B5CF6]/40 md:flex">
              <span className="size-1.5 rounded-full bg-[#8B5CF6]" />
            </span>

            <TimelineCard {...item} index={index} />
          </FadeInAnimation>
        ))}
      </div>
    </div>
  );
}
