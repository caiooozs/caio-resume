import type { Locale } from "@/lib/i18n/config";
import { localizeOne, type Translations } from "@/lib/i18n/localize";
import type { AboutCTAProps } from "@/types/types";
import { CTAData } from "./data";

const translations: Translations<AboutCTAProps> = {
  pt: {
    badge: "Vamos conversar",
    title: "Vamos construir algo juntos?",
    primary: { ...CTAData.primary, label: "Entre em contato" },
    secondary: { ...CTAData.secondary, label: "Ver projetos" },
  },
  es: {
    badge: "Hablemos",
    title: "¿Construimos algo juntos?",
    primary: { ...CTAData.primary, label: "Escríbeme" },
    secondary: { ...CTAData.secondary, label: "Ver proyectos" },
  },
};

export function getCTA(locale: Locale): AboutCTAProps {
  return localizeOne(CTAData, locale, translations);
}
