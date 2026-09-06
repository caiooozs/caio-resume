import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeInAnimation from "@/components/ui/fade-animation";
import {
  GlassCard,
  GlassCardBadge,
  GlassCardContent,
} from "@/components/ui/glass-card";
import { CTAData } from "./data/data";
import SocialIconLink from "../Shared/SocialIconLink";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  const { badge, title, desc, primary, secondary, contacts } = CTAData;

  return (
    <FadeInAnimation animationDuration={0.3} viewPort>
      <div className="relative">
        <div className="pointer-events-none absolute -bottom-16 left-1/2 h-64 w-full max-w-[36rem] -translate-x-1/2 rounded-full bg-[#8B5CF6]/15 blur-[120px]" />

        <GlassCard glyph="?">
          <GlassCardContent className="flex flex-col items-center gap-6 px-5 py-10 text-center sm:px-10 sm:py-14">
            <GlassCardBadge>
              <Sparkles className="size-3" />
              {badge}
            </GlassCardBadge>

            <h2 className="max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-white via-white to-[#c4b1ff] bg-clip-text text-transparent">
                {title}
              </span>
            </h2>

            <p className="max-w-xl text-sm leading-relaxed font-light text-white/55">
              {desc}
            </p>

            <div className="mt-2 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
              <Link href={primary.href} className="w-full sm:w-auto">
                <Button size="lg" className="h-12 w-full gap-2 sm:w-48">
                  {primary.label}
                  <ArrowRight className="size-4" />
                </Button>
              </Link>

              <Link href={secondary.href} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="h-12 w-full sm:w-40"
                >
                  {secondary.label}
                </Button>
              </Link>
            </div>

            <div className="mt-4 flex flex-col items-center gap-3">
              <span className="text-[11px] font-medium tracking-wide text-white/35 uppercase">
                Ou me chame por aqui
              </span>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {contacts.map((contact) => (
                  <SocialIconLink key={contact.label} {...contact} />
                ))}
              </div>
            </div>
          </GlassCardContent>
        </GlassCard>
      </div>
    </FadeInAnimation>
  );
}
