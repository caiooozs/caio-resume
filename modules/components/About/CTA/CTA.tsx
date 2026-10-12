import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { getCTA } from "./data/i18n";
import { getI18n } from "@/lib/i18n/server";
import { SocialRow } from "../Shared/SocialIconLink";

/** Fechamento da /about: a pergunta grande, as duas acoes e os contatos diretos. */
export default async function CTA() {
  const { locale, t } = await getI18n();
  const { badge, title, primary, secondary, contacts } = getCTA(locale);

  return (
    <section aria-labelledby="cta-title" className="mt-24 flex flex-col items-start gap-8 border-t border-line pt-14 sm:mt-28 sm:pt-16">
      {/* a pergunta se monta palavra por palavra, entrando em foco */}
      <h2
        id="cta-title"
        data-reveal="words"
        className="max-w-[16ch] text-[2.125rem] leading-[1.1] font-semibold tracking-[-0.035em] text-ink sm:text-[2.75rem]"
      >
        {title.split(" ").map((word, index, words) => (
          <span key={index}>
            <span className="word" style={{ "--w": index } as React.CSSProperties}>
              {word}
            </span>
            {index < words.length - 1 && " "}
          </span>
        ))}
      </h2>

      <div
        data-reveal="rise"
        style={{ "--d": "420ms" } as React.CSSProperties}
        className="flex flex-wrap items-center gap-2"
      >
        <Link href={primary.href} className={buttonVariants({ size: "lg", className: "group" })}>
          {primary.label}
          <ArrowRight className="transition-[translate] duration-300 ease-out-expo group-hover:translate-x-0.5" />
        </Link>
        <Link href={secondary.href} className={buttonVariants({ variant: "ghost", size: "lg" })}>
          {secondary.label}
        </Link>
      </div>

      <div
        data-reveal="rise"
        style={{ "--d": "520ms" } as React.CSSProperties}
        className="flex flex-wrap items-center gap-x-4 gap-y-2"
      >
        <p className="flex items-baseline gap-2 text-[0.9375rem]">
          <span className="font-medium text-ink">{badge}</span>
          <span className="text-muted">{t.about.orReach}</span>
        </p>
        <SocialRow links={contacts} />
      </div>
    </section>
  );
}
