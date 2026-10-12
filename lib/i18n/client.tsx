"use client";

import { createContext, useContext, useTransition } from "react";
import { useRouter } from "next/navigation";
import { htmlLang, LOCALE_COOKIE, type Locale } from "./config";
import type { Dictionary } from "./dictionaries";

type I18nContextValue = {
  locale: Locale;
  t: Dictionary;
  setLocale: (next: Locale) => void;
  isPending: boolean;
};

const I18nContext = createContext<I18nContextValue | null>(null);

/**
 * Leva o idioma da requisicao para os componentes de cliente. Trocar de idioma
 * grava o cookie e pede ao servidor que renderize a pagina de novo: a URL e o
 * estado da pagina (rolagem, tema) ficam como estavam.
 */
export function I18nProvider({
  locale,
  t,
  children,
}: {
  locale: Locale;
  t: Dictionary;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function setLocale(next: Locale) {
    if (next === locale) return;
    document.cookie = `${LOCALE_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.lang = htmlLang[next];
    startTransition(() => router.refresh());
  }

  return (
    <I18nContext.Provider value={{ locale, t, setLocale, isPending }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const value = useContext(I18nContext);
  if (!value) throw new Error("useI18n precisa estar dentro do I18nProvider");
  return value;
}
