import Link from "next/link";
import { Lock } from "lucide-react";
import type { Project } from "@/types/types";
import { ExternalArrow } from "@/components/ui/kit";
import { getI18n } from "@/lib/i18n/server";
import { cn } from "@/lib/utils";

/**
 * Links de um projeto (GitHub e site), acima do link da linha. Repositorio
 * fechado vira um rotulo: o link levaria quem visita a um 404.
 */
export default async function ProjectLinks({
  github,
  website,
  privateRepo,
  className,
}: Pick<Project, "github" | "website" | "privateRepo"> & { className?: string }) {
  const { t } = await getI18n();

  return (
    <div className={cn("relative z-10 flex items-center gap-3.5 text-[0.8125rem] text-muted", className)}>
      {privateRepo ? (
        <span className="inline-flex items-center gap-1.5">
          <Lock aria-hidden className="size-3.5 text-subtle" strokeWidth={1.75} />
          {t.home.privateRepo}
        </span>
      ) : (
        <Link href={github} className="group/link inline-flex items-center gap-1 transition-colors hover:text-ink">
          {t.home.github}
          <ExternalArrow />
        </Link>
      )}
      {website && (
        <Link href={website} className="group/link inline-flex items-center gap-1 transition-colors hover:text-ink">
          {t.home.website}
          <ExternalArrow />
        </Link>
      )}
    </div>
  );
}
