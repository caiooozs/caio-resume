import type { Locale } from "@/lib/i18n/config";
import { localizeList, type ListTranslations } from "@/lib/i18n/localize";
import type { EventItem } from "@/types/types";
import { EventsData } from "./data";

const translations: ListTranslations<EventItem> = {
  pt: {
    "evento-1": {
      role: "Pitcher e pesquisador",
      date: "ago. 2025",
      tag: "Comunidade",
      desc: "Nosso time conquistou o segundo lugar desenvolvendo uma solução para o desafio: 'Como a Inteligência Artificial pode ajudar na acessibilidade no mundo digital?' Foi uma oportunidade de pensar além da tecnologia e buscar formas de tornar o ambiente digital mais inclusivo e acessível para públicos diversos.",
    },
    "evento-2": {
      role: "Pitcher e pesquisador",
      date: "jul. 2026",
      desc: "Durante o evento, analisamos desafios do setor de saúde e tivemos a missão de propor soluções que usassem a tecnologia como aliada. Foram horas de pesquisa intensa, planejamento, documentação, debate, refinamento e muita troca de ideias. Acima de tudo, porém, a experiência foi marcada pelo companheirismo e pelo trabalho em equipe. Ela me tirou da zona de conforto e me permitiu desenvolver habilidades para a vida toda, como liderança, tomada de decisão e capacidade de adaptação a novos desafios.",
    },
    "evento-3": {
      role: "Desenvolvedor frontend",
      date: "set. 2026",
      desc: "Conquistamos o primeiro lugar neste evento implementando uma solução que melhora o processo de relatos dos cidadãos do Recife na plataforma Conecta Recife. Batizamos nossa solução de Conecta+. Além do resultado, o que fica é a experiência: muita troca de conhecimento, um ambiente acelerado, ideias evoluindo ao longo do caminho, aprendizado e, acima de tudo, trabalho em equipe. Atuei como desenvolvedor frontend no projeto, construindo a interface que tornou nossa aplicação possível. Usei Next.js com Tailwind CSS e Shadcn para estilização e componentização.",
    },
  },
  es: {
    "evento-1": {
      role: "Pitcher e investigador",
      date: "ago. 2025",
      tag: "Comunidad",
      desc: "Nuestro equipo obtuvo el segundo lugar desarrollando una solución para el desafío: '¿Cómo puede la Inteligencia Artificial ayudar a la accesibilidad en el mundo digital?' Fue una oportunidad para pensar más allá de la tecnología y buscar formas de hacer el entorno digital más inclusivo y accesible para públicos diversos.",
    },
    "evento-2": {
      role: "Pitcher e investigador",
      date: "jul. 2026",
      desc: "Durante el evento, analizamos desafíos del sector salud y tuvimos la misión de proponer soluciones que usaran la tecnología como aliada. Fueron horas de investigación intensa, planificación, documentación, debate, refinamiento y mucho intercambio de ideas. Pero, sobre todo, la experiencia estuvo marcada por el compañerismo y el trabajo en equipo. Me sacó de mi zona de confort y me permitió desarrollar habilidades para toda la vida, como el liderazgo, la toma de decisiones y la capacidad de adaptarme a nuevos desafíos.",
    },
    "evento-3": {
      role: "Desarrollador frontend",
      date: "sept. 2026",
      desc: "Obtuvimos el primer lugar en este evento implementando una solución que mejora el proceso de reportes de los ciudadanos de Recife en la plataforma Conecta Recife. Llamamos a nuestra solución Conecta+. Más allá del resultado, lo que queda es la experiencia: mucho intercambio de conocimiento, un ambiente acelerado, ideas que evolucionaron en el camino, aprendizaje y, sobre todo, trabajo en equipo. Trabajé como desarrollador frontend en este proyecto, construyendo la interfaz que hizo posible nuestra aplicación. Usé Next.js con Tailwind CSS y Shadcn para los estilos y la componentización.",
    },
  },
};

export function getEvents(locale: Locale): EventItem[] {
  return localizeList(EventsData, locale, (event) => event.id, translations);
}
