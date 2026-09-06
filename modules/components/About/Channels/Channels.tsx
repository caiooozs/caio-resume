import FadeInAnimation from "@/components/ui/fade-animation";
import ChannelCard from "./components/ChannelCard";
import { ChannelsData } from "./data/data";

export default function Channels() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-2">
      {ChannelsData.map((channel, index) => (
        <FadeInAnimation
          key={channel.id}
          animationDuration={0.3}
          animationDelay={index * 0.1}
          viewPort
          className="h-full"
        >
          <ChannelCard {...channel} />
        </FadeInAnimation>
      ))}
    </div>
  );
}
