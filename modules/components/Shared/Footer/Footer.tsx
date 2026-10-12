import Link from "next/link";
import { HyphenData } from "../../Home/Informations/Hyphen/data/data";
import { getMyInfos } from "../../About/MyInfos/data/i18n";
import { getI18n } from "@/lib/i18n/server";
import { SocialRow } from "../../About/Shared/SocialIconLink";
import { CopyEmail } from "@/components/ui/copy-email";
import type { SocialLink } from "@/types/types";

const EMAIL = "caioccosta22@gmail.com";

export default async function Footer() {
  const { locale, t } = await getI18n();
  const hyphen = HyphenData[0];
  const { name, role, socials } = getMyInfos(locale);

  const navLinks = [
    { href: "/", label: t.nav.all },
    { href: "/#projects", label: t.nav.projects },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];
  const year = new Date().getFullYear();

  // redes do Caio (o e-mail ja esta acima) e o Discord da comunidade
  const icons: SocialLink[] = [
    ...socials.filter((social) => social.icon !== "mail"),
    ...(hyphen.infos.discord_link
      ? [{ label: "Discord", href: hyphen.infos.discord_link, icon: "discord" as const }]
      : []),
  ];

  return (
    <footer className="mt-auto w-full">
      <div className="mx-auto w-full max-w-[60rem] px-5 pt-16 pb-10 sm:px-6">
        <div
          data-reveal="rise"
          className="grid grid-cols-1 gap-10 border-t border-line pt-10 sm:grid-cols-[minmax(0,1fr)_auto_auto] sm:gap-16"
        >
          <div className="flex flex-col gap-1">
            <p className="text-sm font-medium text-ink">{name}</p>
            <p className="text-sm text-muted">{role}</p>
            <CopyEmail email={EMAIL} className="mt-3" />
          </div>

          <nav aria-label={t.footer.navigation} className="flex flex-col gap-2.5">
            <p className="text-[0.8125rem] text-muted">{t.footer.navigation}</p>
            <ul className="flex flex-col gap-1.5">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-ink transition-colors hover:text-accent-ink">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-2.5">
            <p className="text-[0.8125rem] text-muted">{t.footer.community}</p>
            <Link
              href={hyphen.website_link}
              className="w-fit text-sm text-ink transition-colors hover:text-accent-ink"
            >
              {hyphen.title}
            </Link>
            <SocialRow links={icons} className="mt-1" />
          </div>
        </div>

        <p
          data-reveal="rise"
          style={{ "--i": 2 } as React.CSSProperties}
          className="tabular mt-12 text-[0.8125rem] text-muted"
        >© {year} {name}</p>
      </div>
    </footer>
  );
}
