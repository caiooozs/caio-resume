import type { Locale } from "@/lib/i18n/config";
import { localizeList, type ListTranslations } from "@/lib/i18n/localize";
import type { ChannelItem } from "@/types/types";
import { ChannelsData } from "./data";

const translations: ListTranslations<ChannelItem> = {
  pt: {
    youtube: {
      badge: "Meu canal no YouTube",
      desc: "Um canal onde mostro minha rotina, eventos, vídeos técnicos e qualquer assunto que eu ache relevante.",
    },
    hyphen: {
      badge: "Minha comunidade",
      desc: "A Hyphen é uma comunidade dedicada ao desenvolvimento de talentos no setor de tecnologia. Conectamos estudantes, profissionais e oportunidades por meio da promoção de eventos, networking e troca de conhecimento.",
      linkLabel: "Site",
    },
  },
  es: {
    youtube: {
      badge: "Mi canal de YouTube",
      desc: "Un canal donde muestro mi rutina, eventos, videos técnicos y cualquier tema que me parezca relevante.",
    },
    hyphen: {
      badge: "Mi comunidad",
      desc: "Hyphen es una comunidad dedicada al desarrollo de talento en el sector tecnológico. Conectamos estudiantes, profesionales y oportunidades a través de la promoción de eventos, el networking y el intercambio de conocimiento.",
      linkLabel: "Sitio web",
    },
  },
};

export function getChannels(locale: Locale): ChannelItem[] {
  return localizeList(ChannelsData, locale, (channel) => channel.id, translations);
}
