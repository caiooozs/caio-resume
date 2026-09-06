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
};

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
