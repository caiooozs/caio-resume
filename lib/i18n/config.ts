/** Idiomas do site. Ingles e o padrao; a escolha fica num cookie (as URLs nao mudam). */
export const locales = ["en", "pt", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const LOCALE_COOKIE = "lang";

/** Valor do atributo lang do <html>. */
export const htmlLang: Record<Locale, string> = {
  en: "en",
  pt: "pt-BR",
  es: "es",
};

/** Locale para Intl (datas dos videos). */
export const intlLocale: Record<Locale, string> = {
  en: "en-US",
  pt: "pt-BR",
  es: "es-ES",
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === "string" && (locales as readonly string[]).includes(value);
}
