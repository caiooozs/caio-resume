import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { HyphenData } from "../../Home/Informations/Hyphen/data/data";
import { GithubIcon } from "@animateicons/react/huge";
import { GlobeIcon, InstagramIcon } from "@animateicons/react/lucide";
import { DiscordIcon } from "@animateicons/react/huge";
import FadeInAnimation from "@/components/ui/fade-animation";

const GITHUB_URL = "https://github.com/caiooozs";

const navLinks = [
  { href: "/", label: "All" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const iconLinkClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.05] text-white/70 ring-1 ring-inset ring-white/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#8B5CF6]/20 hover:text-white hover:ring-[#8B5CF6]/40";

export default function Footer() {
  const hyphen = HyphenData[0];
  const year = new Date().getFullYear();

  return (
    <FadeInAnimation animationDuration={0.3} viewPort>
      <footer className="relative mt-auto w-full overflow-hidden border-t border-white/[0.08] bg-white/[0.02] text-white backdrop-blur-xl">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#8B5CF6]/70 to-transparent" />

        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-64 w-full max-w-[36rem] -translate-x-1/2 rounded-full bg-[#8B5CF6]/15 blur-[120px]" />

        <div className="relative mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-3 lg:col-span-2">
              <span className="text-2xl font-semibold tracking-tight">
                <span className="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                  Caio
                </span>
                <span className="text-[#8B5CF6]">.</span>
              </span>
              <Badge
                variant={"outline"}
                className="w-fit rounded-full border-0 bg-[#8B5CF6]/10 px-3 py-1 text-[11px] font-medium tracking-wide text-[#c4b1ff] uppercase ring-1 ring-inset ring-[#8B5CF6]/30"
              >
                Frontend Developer
              </Badge>
              <a
                href="malito:caioccosta22@gmail.com"
                className="max-w-sx text-sm leading-relaxed text-white/50 transition-all transform hover:font-bold hover:text-white"
              >
                caioccosta22@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-medium tracking-wide text-white/35 uppercase">
                Navigation
              </span>
              <nav className="flex flex-col gap-2">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="w-fit text-sm text-white/60 transition-colors duration-300 hover:text-white"
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[11px] font-medium tracking-wide text-white/35 uppercase">
                Community
              </span>
              <Link
                href={hyphen.website_link}
                className="w-fit text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                {hyphen.title}
              </Link>

              <div className="mt-1 flex flex-wrap items-center gap-2">
                <Link
                  href={GITHUB_URL}
                  aria-label="GitHub"
                  className={iconLinkClass}
                >
                  <GithubIcon />
                </Link>
                <Link
                  href={hyphen.website_link}
                  aria-label={hyphen.title}
                  className={iconLinkClass}
                >
                  <GlobeIcon />
                </Link>
                {hyphen.infos.discord_link && (
                  <Link
                    href={hyphen.infos.discord_link}
                    aria-label="Discord"
                    className={iconLinkClass}
                  >
                    <DiscordIcon />
                  </Link>
                )}
                {hyphen.infos.ig_link && (
                  <Link
                    href={hyphen.infos.ig_link}
                    aria-label="Instagram"
                    className={iconLinkClass}
                  >
                    <InstagramIcon />
                  </Link>
                )}
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 border-t border-white/[0.08] pt-6 sm:flex-row">
            <span className="text-xs text-white/35">
              © {year} Caio Cesar Costa
            </span>
          </div>
        </div>
      </footer>
    </FadeInAnimation>
  );
}
