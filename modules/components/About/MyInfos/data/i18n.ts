import type { Locale } from "@/lib/i18n/config";
import { localizeOne, type Translations } from "@/lib/i18n/localize";
import type { MyInfosProps } from "@/types/types";
import { MyInfosData } from "./data";

const translations: Translations<MyInfosProps> = {
  pt: {
    role: "Desenvolvedor Frontend",
    badge: "Sobre mim",
    paragraphs: [
      "Sou o Caio, desenvolvedor frontend apaixonado por transformar ideias em interfaces que as pessoas realmente gostam de usar. Trabalho principalmente com React e Next.js, sempre buscando equilíbrio entre código limpo, performance e um olhar atento aos detalhes visuais.",
      "Além dos meus projetos, mantenho um canal no YouTube onde compartilho minha rotina, eventos e um pouco do que vier à cabeça, e a Hyphen Community, uma comunidade onde desenvolvedores trocam conhecimento e crescem juntos.",
    ],
  },
  es: {
    role: "Desarrollador Frontend",
    badge: "Sobre mí",
    paragraphs: [
      "Soy Caio, desarrollador frontend apasionado por convertir ideas en interfaces que la gente realmente disfruta usar. Trabajo principalmente con React y Next.js, siempre buscando el equilibrio entre código limpio, rendimiento y una mirada atenta a los detalles visuales.",
      "Además de mis proyectos, tengo un canal de YouTube donde comparto mi rutina, eventos y un poco de lo que se me ocurra, y la Hyphen Community, una comunidad donde los desarrolladores intercambian conocimiento y crecen juntos.",
    ],
  },
};

export function getMyInfos(locale: Locale): MyInfosProps {
  return localizeOne(MyInfosData, locale, translations);
}
