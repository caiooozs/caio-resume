/// <reference types="react/canary" />
import { ViewTransition } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * A foto do Caio no palco. O mesmo nome de transicao na Home e na About faz
 * a foto viajar de um lugar para o outro quando se navega entre as paginas.
 */
export function Portrait({
  src,
  alt,
  priority = false,
  className,
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <ViewTransition name="portrait" share="portrait" default="none">
      <div
        className={cn(
          "relative aspect-[5/4] w-full overflow-hidden rounded-2xl bg-raised shadow-[0_1px_2px_rgb(0_0_0/0.06),0_12px_32px_-12px_rgb(0_0_0/0.25)] ring-1 ring-black/5 dark:ring-white/8",
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 22.5rem, (min-width: 768px) 20rem, 100vw"
          className="object-cover object-[55%_40%]"
        />
      </div>
    </ViewTransition>
  );
}
