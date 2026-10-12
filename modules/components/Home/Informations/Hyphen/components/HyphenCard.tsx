import Link from "next/link";
import { DiscordIcon } from "@animateicons/react/huge";
import { InstagramIcon } from "@animateicons/react/lucide";
import { MessageCircleMore } from "lucide-react";
import { HyphenProps } from "@/types/types";
import { ExternalArrow } from "@/components/ui/kit";
import { iconButton } from "@/modules/components/About/Shared/SocialIconLink";
import { getI18n } from "@/lib/i18n/server";

/** A comunidade que o Caio ajuda a liderar: a linha abre o site, os icones levam aos grupos. */
export default async function HyphenCard({
  title,
  website_link,
  infos,
  desc,
}: HyphenProps) {
  const { t } = await getI18n();

  return (
    <article
      data-row
      data-reveal="rise"
      style={{ "--d": "80ms" } as React.CSSProperties}
      className="group relative flex flex-col gap-1.5 rounded-xl px-3 py-3.5"
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-base font-medium text-ink">
          <Link
            href={website_link}
            className="group/link inline-flex items-center gap-1.5 outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:outline-2 focus-visible:after:outline-accent"
          >
            {title}
            <ExternalArrow className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
          </Link>
        </h3>
        <span className="shrink-0 text-[0.8125rem] text-muted">{t.home.myCommunity}</span>
      </div>

      <p className="line-clamp-3 text-[0.9375rem] leading-relaxed text-muted">{desc}</p>

      <div className="relative z-10 mt-1 flex items-center gap-1">
        <span className="mr-1 text-[0.8125rem] text-muted">{t.home.joinUs}</span>
        {infos.discord_link && (
          <Link href={infos.discord_link} aria-label="Discord" className={iconButton("size-8 hover:bg-raised-strong [&_svg]:size-4")}>
            <DiscordIcon />
          </Link>
        )}
        {infos.ig_link && (
          <Link href={infos.ig_link} aria-label="Instagram" className={iconButton("size-8 hover:bg-raised-strong [&_svg]:size-4")}>
            <InstagramIcon />
          </Link>
        )}
        {infos.wpp_link && (
          <Link href={infos.wpp_link} aria-label="WhatsApp" className={iconButton("size-8 hover:bg-raised-strong [&_svg]:size-4")}>
            <MessageCircleMore />
          </Link>
        )}
      </div>
    </article>
  );
}
