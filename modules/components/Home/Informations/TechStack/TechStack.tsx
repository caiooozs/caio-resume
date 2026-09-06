import FadeInAnimation from "@/components/ui/fade-animation";
import TechStackCloud from "./components/techStackCloud";

import { GlassCard } from "@/components/ui/glass-card";

export default function TechStack() {
  return (
    <>
      <FadeInAnimation animationDuration={0.2} viewPort>
        <GlassCard accent="violet" className="">
          <TechStackCloud />
        </GlassCard>
      </FadeInAnimation>
    </>
  );
}
