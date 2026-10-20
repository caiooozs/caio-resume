import Link from "next/link";
import { motion } from "motion/react";
import { NavBarViewProps } from "./NavBar.model";
import { MyInfosData } from "@/modules/components/About/MyInfos/data/data";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { useI18n } from "@/lib/i18n/client";
import { cn } from "@/lib/utils";

/**
 * Barra fixa no topo: retrato e nome a esquerda, paginas no meio, idioma e
 * tema a direita. A pilula da pagina atual desliza de um link para o outro;
 * a borda inferior so aparece depois que a pagina rola.
 */
export const NavBarView = ({ pathname }: NavBarViewProps) => {
  const { photo, name } = MyInfosData;
  const { t } = useI18n();

  const links = [
    { href: "/", label: t.nav.all },
    { href: "/projects", label: t.nav.projects },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <header className="nav-edge sticky top-0 z-40 border-b border-transparent bg-bg/75 backdrop-blur-lg backdrop-saturate-150">
      <nav
        aria-label={t.nav.label}
        className="mx-auto flex h-(--nav-h) w-full max-w-[60rem] items-center gap-1 px-3 sm:gap-4 sm:px-6"
      >
        <Link
          href="/"
          aria-label={`${name}, ${t.nav.home}`}
          className="group mr-auto hidden min-w-0 items-center gap-2.5 rounded-full py-1 pr-2 min-[420px]:flex"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photo}
            alt=""
            className="size-7 shrink-0 rounded-full object-cover object-[60%_30%] ring-1 ring-line"
          />
          <span className="hidden truncate text-sm font-medium text-ink md:inline">{name}</span>
        </Link>

        <ul className="mr-auto flex items-center min-[420px]:mr-0">
          {links.map(({ href, label }) => {
            const active = href === pathname;
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative isolate flex h-8 items-center rounded-full px-2 text-[0.8125rem] whitespace-nowrap transition-colors duration-200 sm:px-3 sm:text-sm",
                    active ? "text-ink" : "text-muted hover:text-ink"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full bg-raised"
                      transition={{ type: "spring", stiffness: 480, damping: 38 }}
                    />
                  )}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="-mr-1.5 flex items-center">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};
