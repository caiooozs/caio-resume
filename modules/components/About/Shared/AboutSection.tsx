import { SectionHeading, SectionLead } from "@/components/ui/kit";
import { AboutSectionProps } from "@/types/types";
import { cn } from "@/lib/utils";

/** Secao da /about: titulo discreto, a frase que explica e o conteudo, separados por espaco. */
export default function AboutSection({
  title,
  subtitle,
  id,
  children,
  className,
}: AboutSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-title` : undefined}
      className={cn("mt-20 flex flex-col gap-8 sm:mt-24", className)}
    >
      <div className="flex flex-col gap-1">
        <SectionHeading id={id ? `${id}-title` : undefined}>{title}</SectionHeading>
        {subtitle && (
          <SectionLead data-reveal="rise" style={{ "--i": 1 } as React.CSSProperties}>
            {subtitle}
          </SectionLead>
        )}
      </div>
      {children}
    </section>
  );
}
