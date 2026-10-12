import type { Locale } from "@/lib/i18n/config";
import { localizeList, type ListTranslations } from "@/lib/i18n/localize";
import type { HyphenProps } from "@/types/types";
import { HyphenData } from "./data";

const translations: ListTranslations<HyphenProps> = {
  pt: {
    "Hyphen Community": {
      desc: "A Hyphen é uma comunidade dedicada ao desenvolvimento de talentos no setor de tecnologia. Conectamos estudantes, profissionais e oportunidades por meio da promoção de eventos, networking e troca de conhecimento, criando um ambiente que estimula o aprendizado, a colaboração e o crescimento profissional.",
    },
  },
  es: {
    "Hyphen Community": {
      desc: "Hyphen es una comunidad dedicada al desarrollo de talento en el sector tecnológico. Conectamos estudiantes, profesionales y oportunidades a través de la promoción de eventos, el networking y el intercambio de conocimiento, creando un entorno que impulsa el aprendizaje, la colaboración y el crecimiento profesional.",
    },
  },
};

export function getHyphen(locale: Locale): HyphenProps[] {
  return localizeList(HyphenData, locale, (item) => item.title, translations);
}
