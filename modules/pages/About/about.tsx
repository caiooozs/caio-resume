import MyInfos from "@/modules/components/About/MyInfos/MyInfos";
import AboutSection from "@/modules/components/About/Shared/AboutSection";
import Timeline from "@/modules/components/About/Timeline/Timeline";
import Channels from "@/modules/components/About/Channels/Channels";
import Events from "@/modules/components/About/Events/Events";
import CTA from "@/modules/components/About/CTA/CTA";

export default function About() {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 pt-10 pb-20 sm:px-6 sm:pt-16 sm:pb-32">
      <div className="flex flex-col gap-16 sm:gap-24">
        <MyInfos />

        <AboutSection
          id="career"
          title="Career"
          subtitle="Where I have been, what I built and the stacks I used at each step."
        >
          <Timeline />
        </AboutSection>

        <AboutSection
          id="channels"
          title="Channels"
          subtitle="Where I share content and help build community."
        >
          <Channels />
        </AboutSection>

        <AboutSection
          id="events"
          title="Events"
          subtitle="Talks, meetups and hackathons I joined or helped to organize."
          className="gap-10"
        >
          <Events />
        </AboutSection>

        <CTA />
      </div>
    </div>
  );
}
