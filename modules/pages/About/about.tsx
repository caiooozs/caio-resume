import MyInfos from "@/modules/components/About/MyInfos/MyInfos";
import AboutSection from "@/modules/components/About/Shared/AboutSection";
import Timeline from "@/modules/components/About/Timeline/Timeline";
import Channels from "@/modules/components/About/Channels/Channels";
import Events from "@/modules/components/About/Events/Events";
import Testimonials from "@/modules/components/About/Testimonials/Testimonials";
import CTA from "@/modules/components/About/CTA/CTA";

export default function About() {
  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 pt-10 pb-20 sm:px-6 sm:pt-16 sm:pb-32">
      <div className="flex flex-col gap-16 sm:gap-24">
        <MyInfos />

        <AboutSection
          id="carreira"
          title="Carreira"
          subtitle="Onde passei, o que construí e as stacks que usei em cada etapa."
        >
          <Timeline />
        </AboutSection>

        <AboutSection
          id="canais"
          title="Canais"
          subtitle="Onde eu compartilho conteúdo e ajudo a construir comunidade."
        >
          <Channels />
        </AboutSection>

        <AboutSection
          id="eventos"
          title="Eventos"
          subtitle="Talks, meetups e hackathons em que participei ou ajudei a organizar."
          className="gap-10"
        >
          <Events />
          <Testimonials />
        </AboutSection>

        <CTA />
      </div>
    </div>
  );
}
