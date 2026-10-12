import MyInfos from "@/modules/components/About/MyInfos/MyInfos";
import AboutSection from "@/modules/components/About/Shared/AboutSection";
import Timeline from "@/modules/components/About/Timeline/Timeline";
import Channels from "@/modules/components/About/Channels/Channels";
import Events from "@/modules/components/About/Events/Events";
import CTA from "@/modules/components/About/CTA/CTA";
import { getI18n } from "@/lib/i18n/server";

/** A historia completa: quem e, onde trabalhou, onde fala com as pessoas e os eventos. */
export default async function About() {
  const { t } = await getI18n();

  return (
    <div className="mx-auto w-full max-w-[60rem] px-5 pb-12 sm:px-6">
      <MyInfos />

      <AboutSection
        id="career"
        title={t.about.career}
        subtitle={t.about.careerLead}
      >
        <Timeline />
      </AboutSection>

      <AboutSection
        id="channels"
        title={t.about.channels}
        subtitle={t.about.channelsLead}
      >
        <Channels />
      </AboutSection>

      <AboutSection
        id="events"
        title={t.about.events}
        subtitle={t.about.eventsLead}
      >
        <Events />
      </AboutSection>

      <CTA />
    </div>
  );
}
