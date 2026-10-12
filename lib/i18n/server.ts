import { cache } from "react";
import { cookies } from "next/headers";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "./config";
import { dictionaries } from "./dictionaries";

/** Idioma da requisicao, lido do cookie uma vez por render. */
export const getLocale = cache(async (): Promise<Locale> => {
  const store = await cookies();
  const value = store.get(LOCALE_COOKIE)?.value;
  return isLocale(value) ? value : defaultLocale;
});

/** Idioma e textos de interface da requisicao. */
export const getI18n = cache(async () => {
  const locale = await getLocale();
  return { locale, t: dictionaries[locale] };
});
