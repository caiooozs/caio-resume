import type { Locale } from "./config";

/** Traducoes de campos de um dado, por idioma (o ingles e o proprio arquivo de dados). */
export type Translations<T> = Partial<Record<Exclude<Locale, "en">, Partial<T>>>;

/** Traducoes de uma lista, por idioma e por id do item. */
export type ListTranslations<T> = Partial<
  Record<Exclude<Locale, "en">, Record<string, Partial<T>>>
>;

/** Um objeto com os campos traduzidos por cima; em ingles, o original intacto. */
export function localizeOne<T extends object>(
  item: T,
  locale: Locale,
  translations: Translations<T>
): T {
  if (locale === "en") return item;
  return { ...item, ...translations[locale] };
}

/** Uma lista com os campos traduzidos por cima de cada item, casando pelo id. */
export function localizeList<T extends object>(
  items: T[],
  locale: Locale,
  idOf: (item: T) => string,
  translations: ListTranslations<T>
): T[] {
  if (locale === "en") return items;
  const byId = translations[locale] ?? {};
  return items.map((item) => ({ ...item, ...byId[idOf(item)] }));
}
