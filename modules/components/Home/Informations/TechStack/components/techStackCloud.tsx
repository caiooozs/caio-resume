"use client";

import { useMemo } from "react";
import { IconCloud } from "@/components/ui/icon-cloud";
import { cloudStacks } from "../Data/techStackData";
import { useTheme } from "@/lib/theme";

/** Logos pretos somem no fundo escuro: no tema escuro eles viram claros. */
const DARK_LOGOS = new Set(["nextdotjs", "vercel", "github"]);

/** A nuvem gira solta na pagina, com os logos na cor de cada marca. */
export default function TechStackCloud() {
  const theme = useTheme();

  const images = useMemo(
    () =>
      cloudStacks.map((slug) =>
        theme === "dark" && DARK_LOGOS.has(slug)
          ? `https://cdn.simpleicons.org/${slug}/ededed`
          : `https://cdn.simpleicons.org/${slug}/${slug}`
      ),
    [theme]
  );

  return (
    <div className="w-full">
      <IconCloud images={images} />
    </div>
  );
}
