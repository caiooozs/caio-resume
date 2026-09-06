import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import Projects from "./Projects/Projects";
import Hyphen from "./Hyphen/Hyphen";
import Youtube from "./Youtube/Youtube";
import Spotify from "./Spotify/Spotify";
import TechStack from "./TechStack/TechStack";

const Informations = () => {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 sm:pb-32">
      <div className="flex flex-col gap-6">
        <div className="p-4 text-center sm:p-3">
          <AnimatedGradientText
            className="text-4xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-3xl"
            colorFrom="#53456dff"
            colorTo="#9979d4ff"
          >
            Projects
          </AnimatedGradientText>
        </div>
        <Projects />
        <div className="p-4 text-center sm:p-3">
          <AnimatedGradientText
            className="text-4xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-3xl"
            colorFrom="#53456dff"
            colorTo="#9979d4ff"
          >
            Tech Stack
          </AnimatedGradientText>
        </div>
        <TechStack />
        <div className="p-4 text-center sm:p-3">
          <AnimatedGradientText
            className="text-4xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-3xl"
            colorFrom="#53456dff"
            colorTo="#9979d4ff"
          >
            Medias
          </AnimatedGradientText>
        </div>
        <Hyphen />
        <Youtube />
        <Spotify />
      </div>
    </section>
  );
};

export default Informations;
