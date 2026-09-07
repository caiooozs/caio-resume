import FadeInAnimation from "@/components/ui/fade-animation";
import { Badge } from "@/components/ui/badge";
import { MyInfosData } from "./data/data";
import SocialIconLink from "../Shared/SocialIconLink";
import { MapPin, Sparkles } from "lucide-react";

export default function MyInfos() {
  const {
    photo,
    photoAlt,
    name,
    role,
    location,
    badge,
    paragraphs,
    tags,
    socials,
  } = MyInfosData;

  return (
    <section className="relative">
      {/* mesmo brilho roxo usado nas sections da home */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-72 w-full max-w-[36rem] -translate-x-1/2 rounded-full bg-[#8B5CF6]/15 blur-[120px]" />

      <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-[auto_1fr] lg:gap-14">
        <FadeInAnimation animationDuration={0.3} className="mx-auto lg:mx-0">
          <div className="group/photo relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#8B5CF6]/50 via-fuchsia-500/20 to-transparent opacity-60 blur-2xl transition-opacity duration-500 group-hover/photo:opacity-100" />
            <div className="relative aspect-square w-56 overflow-hidden rounded-full ring-1 ring-white/15 transition-transform duration-500 group-hover/photo:-translate-y-1 sm:w-64 lg:w-72">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo}
                alt={photoAlt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover/photo:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#0e0b13]/60 via-transparent to-transparent" />
            </div>
          </div>
        </FadeInAnimation>

        <div className="flex flex-col gap-5 text-center text-white lg:text-left">
          <FadeInAnimation
            animationDuration={0.3}
            animationDelay={0.1}
            className="flex flex-col gap-3"
          >
            <Badge
              variant="outline"
              className="mx-auto w-fit gap-2 rounded-full border-0 bg-[#8B5CF6]/10 px-3 py-1 text-[11px] font-medium tracking-wide text-[#c4b1ff] uppercase ring-1 ring-inset ring-[#8B5CF6]/30 lg:mx-0"
            >
              <Sparkles className="size-3" />
              {badge}
            </Badge>

            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-white via-white to-[#c4b1ff] bg-clip-text text-transparent">
                {name}
              </span>
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-white/50 lg:justify-start">
              <span className="text-[#8B5CF6]">{role}</span>
              <span className="hidden h-1 w-1 rounded-full bg-white/20 sm:block" />
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-3.5" />
                {location}
              </span>
            </div>
          </FadeInAnimation>

          <FadeInAnimation
            animationDuration={0.3}
            animationDelay={0.2}
            className="flex flex-col gap-3"
          >
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed font-light text-white/60"
              >
                {paragraph}
              </p>
            ))}
          </FadeInAnimation>

          <FadeInAnimation
            animationDuration={0.3}
            animationDelay={0.3}
            className="flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/[0.04] px-3 py-1 text-xs text-white/60 ring-1 ring-inset ring-white/10 transition-colors duration-300 hover:bg-[#8B5CF6]/15 hover:text-white hover:ring-[#8B5CF6]/40"
              >
                {tag}
              </span>
            ))}
          </FadeInAnimation>

          <FadeInAnimation
            animationDuration={0.3}
            animationDelay={0.4}
            className="mt-2 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center justify-center gap-2 lg:justify-start">
              {socials.map((social) => (
                <SocialIconLink key={social.label} {...social} />
              ))}
            </div>
          </FadeInAnimation>
        </div>
      </div>
    </section>
  );
}
