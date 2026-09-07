import Link from "next/link";
import { GlassIconButton } from "@/components/ui/glass-card";
import { SocialLink } from "@/types/types";
import { DiscordIcon, GithubIcon } from "@animateicons/react/huge";
import {
  GlobeIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
} from "@animateicons/react/lucide";
import { MessageCircleMore } from "lucide-react";

/** Cada rede tem o seu proprio hover para nao ficar tudo roxo. */
const socialStyles: Record<SocialLink["icon"], string> = {
  github: "hover:bg-white/15 hover:ring-white/30",
  instagram: "hover:bg-pink-500/25 hover:ring-pink-400/50",
  linkedin: "hover:bg-sky-500/25 hover:ring-sky-400/50",
  discord: "hover:bg-[#5865F2]/25 hover:ring-[#5865F2]/50",
  whatsapp: "hover:bg-emerald-500/25 hover:ring-emerald-400/50",
  mail: "hover:bg-[#8B5CF6]/25 hover:ring-[#8B5CF6]/50",
  globe: "hover:bg-[#8B5CF6]/25 hover:ring-[#8B5CF6]/50",
  youtube: "hover:bg-red-600/25 hover:ring-red-500/50",
};

function YoutubeGlyph({ className }: { className?: string }) {
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

function SocialGlyph({ icon }: { icon: SocialLink["icon"] }) {
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
      return <MessageCircleMore className="size-5" />;
    case "mail":
      return <MailIcon />;
    case "youtube":
      return <YoutubeGlyph className="size-5" />;
    default:
      return <GlobeIcon />;
  }
}

export default function SocialIconLink({ label, href, icon }: SocialLink) {
  return (
    <Link href={href} aria-label={label} title={label}>
      <GlassIconButton className={socialStyles[icon]}>
        <SocialGlyph icon={icon} />
      </GlassIconButton>
    </Link>
  );
}
