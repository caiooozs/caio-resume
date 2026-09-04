import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import Projects from "./Projects/Projects";
import Hyphen from "./Hyphen/Hyphen";

const Informations = () => {
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pb-20 sm:px-6 sm:pb-32">
      <div className="p-4 text-center sm:p-6">
        <AnimatedGradientText
          className="text-4xl font-semibold uppercase sm:text-5xl md:text-6xl lg:text-7xl"
          colorFrom="#53456dff"
          colorTo="#9979d4ff"
        >
          Informations
        </AnimatedGradientText>
      </div>
      <div className="flex flex-col gap-6">
        <Projects />
        <Hyphen />
      </div>
    </section>
  );
};

export default Informations;
