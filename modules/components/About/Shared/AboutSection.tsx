import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import FadeInAnimation from "@/components/ui/fade-animation";
import { AboutSectionProps } from "@/types/types";
import { cn } from "@/lib/utils";

/**
 * Cabecalho padrao das sections da /about: mesmo gradiente usado na home,
 * com um subtitulo opcional e o conteudo logo abaixo.
 */
export default function AboutSection({
  title,
  subtitle,
  id,
  children,
  className,
}: AboutSectionProps) {
  return (
    <section id={id} className={cn("flex flex-col gap-6", className)}>
      <FadeInAnimation animationDuration={0.2} viewPort>
        <div className="flex flex-col items-center gap-2 p-4 text-center sm:p-3">
          <AnimatedGradientText
            className="text-3xl font-semibold uppercase sm:text-4xl lg:text-3xl"
            colorFrom="#53456dff"
            colorTo="#9979d4ff"
          >
            {title}
          </AnimatedGradientText>
          {subtitle && (
            <p className="max-w-xl text-sm font-light text-white/45">
              {subtitle}
            </p>
          )}
        </div>
      </FadeInAnimation>

      {children}
    </section>
  );
}
