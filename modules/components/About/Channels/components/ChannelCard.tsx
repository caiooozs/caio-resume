import Link from "next/link";
import { UsersRound } from "lucide-react";
import { ChannelCardProps } from "@/types/types";
import { ExternalArrow } from "@/components/ui/kit";
import SocialIconLink, { YoutubeGlyph } from "../../Shared/SocialIconLink";
import { getI18n } from "@/lib/i18n/server";

/** Um canal ou comunidade: a area inteira abre o link principal; as redes ficam por cima. */
export default async function ChannelCard({
  id,
  badge,
  title,
  desc,
  link,
  linkLabel,
  stats,
  socials,
  index = 0,
}: ChannelCardProps & { index?: number }) {
  const { t } = await getI18n();
  const isYoutube = id === "youtube";

  return (
    <article
      data-row
      data-reveal="rise"
      style={{ "--i": index } as React.CSSProperties}
      className="group relative flex flex-col gap-2 rounded-xl px-3 py-4"
    >
      <div className="flex items-center gap-2.5">
        {isYoutube ? (
          <YoutubeGlyph className="size-[18px] shrink-0 text-muted transition-colors group-hover:text-ink" />
        ) : (
          <UsersRound aria-hidden className="size-[18px] shrink-0 text-muted transition-colors group-hover:text-ink" strokeWidth={1.75} />
        )}
        <h3 className="text-base font-medium text-ink">
          <Link
            href={link}
            className="outline-none after:absolute after:inset-0 after:rounded-xl focus-visible:after:outline-2 focus-visible:after:outline-accent"
          >
            {title}
          </Link>
        </h3>
        <ExternalArrow className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink" />
      </div>
      <p className="text-[0.8125rem] text-muted">{badge}</p>

      <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted">{desc}</p>

      {stats && stats.length > 0 && (
        <dl className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
          {stats.map(({ label, value }) => (
            <div key={label} className="flex flex-col">
              <dt className="order-2 text-[0.8125rem] text-muted">{label}</dt>
              <dd className="tabular order-1 text-base font-medium text-ink">{value}</dd>
            </div>
          ))}
        </dl>
      )}

      <p className="text-[0.9375rem] text-ink">{linkLabel}</p>

      <div className="relative z-10 mt-2 flex items-center gap-1">
        <span className="mr-1 text-[0.8125rem] text-muted">{isYoutube ? t.home.watchNow : t.home.joinUs}</span>
        {socials.map((social) => (
          <SocialIconLink
            key={social.label}
            {...social}
            className="size-8 hover:bg-raised-strong [&_svg]:size-4"
          />
        ))}
      </div>
    </article>
  );
}
