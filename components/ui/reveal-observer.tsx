"use client";

import { useEffect } from "react";

/**
 * Marca data-shown em cada [data-reveal] quando ele entra na tela (uma vez).
 * Acompanha elementos novos (navegacao entre paginas, troca de idioma) com um
 * MutationObserver. Ao montar, troca html[data-motion] para "live", o que
 * desliga a rede de seguranca do CSS.
 */
export function RevealObserver() {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.motion = "live";

    const show = (el: Element) => el.setAttribute("data-shown", "");

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach(show);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );

    const scan = () => {
      document.querySelectorAll("[data-reveal]:not([data-shown])").forEach((el) => io.observe(el));
    };
    scan();

    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
