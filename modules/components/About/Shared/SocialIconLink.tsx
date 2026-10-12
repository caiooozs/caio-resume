import Link from "next/link";
import { SocialLink } from "@/types/types";
import { cn } from "@/lib/utils";
import { DiscordIcon, GithubIcon } from "@animateicons/react/huge";
import {
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "@animateicons/react/lucide";
import { MessageCircleMore } from "lucide-react";

/** Botao redondo so de icone: sem fundo em repouso, uma bolha suave no hover. */
export function iconButton(className?: string) {
  return cn(
    "inline-flex size-9 shrink-0 items-center justify-center rounded-full text-muted transition-[background-color,color,scale] duration-200 ease-out-expo hover:bg-raised hover:text-ink active:scale-[0.94] [&_svg]:size-[18px]",
    className
  );
}

/** Texto legivel de um link social: "github.com/caiooozs", "caio@...". */
export function socialText(href: string) {
  return href
    .replace(/^mailto:/, "")
    .replace(/^https?:\/\/(www\.)?/, "")
    .replace(/\/$/, "");
}

export function YoutubeGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className={className}
    >
      <path d="M21.58 7.19a2.51 2.51 0 0 0-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42A2.51 2.51 0 0 0 2.42 7.19 26.2 26.2 0 0 0 2 12a26.2 26.2 0 0 0 .42 4.81 2.51 2.51 0 0 0 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42a2.51 2.51 0 0 0 1.77-1.77A26.2 26.2 0 0 0 22 12a26.2 26.2 0 0 0-.42-4.81ZM10 15.02v-6l5.2 3-5.2 3Z" />
    </svg>
  );
}

export function SocialGlyph({ icon }: { icon: SocialLink["icon"] }) {
  switch (icon) {
    case "github":
      return <GithubIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "linkedin":
      return <LinkedinIcon />;
    case "discord":
      return <DiscordIcon />;
    case "whatsapp":
      return <MessageCircleMore />;
    case "mail":
      return <MailIcon />;
    case "youtube":
      return <YoutubeGlyph />;
    default:
      return <GlobeIcon />;
  }
}

export default function SocialIconLink({
  label,
  href,
  icon,
  className,
}: SocialLink & { className?: string }) {
  return (
    <Link href={href} aria-label={label} title={label} className={iconButton(className)}>
      <SocialGlyph icon={icon} />
    </Link>
  );
}

/** Fileira de redes, com o primeiro icone alinhado ao texto acima. */
export function SocialRow({
  links,
  className,
}: {
  links: SocialLink[];
  className?: string;
}) {
  return (
    <ul className={cn("-ml-2 flex flex-wrap items-center gap-0.5", className)}>
      {links.map((link) => (
        <li key={link.label}>
          <SocialIconLink {...link} />
        </li>
      ))}
    </ul>
  );
}
