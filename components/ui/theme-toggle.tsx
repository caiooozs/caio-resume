"use client";

import { useEffect } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { applyTheme, THEME_KEY, useTheme } from "@/lib/theme";
import { useI18n } from "@/lib/i18n/client";
import { cn } from "@/lib/utils";

/**
 * Alterna claro/escuro. Onde o navegador tem View Transitions, o tema novo
 * se abre num circulo a partir do botao; sem suporte ou com movimento
 * reduzido, a troca e imediata.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const theme = useTheme();
  const { t } = useI18n();

  // sem escolha salva, acompanha o sistema
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      let saved: string | null = null;
      try {
        saved = localStorage.getItem(THEME_KEY);
      } catch {}
      if (!saved) applyTheme(e.matches ? "dark" : "light", false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle(event: React.MouseEvent<HTMLButtonElement>) {
    const next = theme === "dark" ? "light" : "dark";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!document.startViewTransition || reduce) {
      applyTheme(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => applyTheme(next));
    });

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 560,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            pseudoElement: "::view-transition-new(root)",
          }
        );
      })
      .catch(() => {});
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? t.theme.toLight : t.theme.toDark}
      className={cn(
        "relative inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-muted transition-[color,background-color,scale] duration-200 ease-out-expo hover:bg-raised hover:text-ink active:scale-[0.94]",
        className
      )}
    >
      <Sun
        aria-hidden
        className="absolute size-[18px] scale-100 rotate-0 transition-[scale,rotate,opacity] duration-500 ease-out-expo dark:scale-50 dark:-rotate-90 dark:opacity-0"
        strokeWidth={1.75}
      />
      <Moon
        aria-hidden
        className="absolute size-[18px] scale-50 rotate-90 opacity-0 transition-[scale,rotate,opacity] duration-500 ease-out-expo dark:scale-100 dark:rotate-0 dark:opacity-100"
        strokeWidth={1.75}
      />
    </button>
  );
}
