import FadeInAnimation from "@/components/ui/fade-animation";
import EventCard from "./components/EventCard";
import { EventsData } from "./data/data";

export default function Events() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
      {EventsData.map((event, index) => (
        <FadeInAnimation
          key={event.id}
          animationDuration={0.3}
          animationDelay={index * 0.05}
          viewPort
          className="h-full"
        >
          <EventCard {...event} />
        </FadeInAnimation>
      ))}
    </div>
  );
}
