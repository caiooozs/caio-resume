import type { Locale } from "@/lib/i18n/config";
import { localizeList, type ListTranslations } from "@/lib/i18n/localize";
import type { TimelineItem } from "@/types/types";
import { TimelineData } from "./data";

const translations: ListTranslations<TimelineItem> = {
  pt: {
    "empresa-1": {
      period: "Agosto 2026 — Atual",
      desc: "Uma software house focada em desenvolver soluções de tecnologia para microempreendedores. Atualmente desenvolvemos soluções para dois produtos. ZeroAoMEI e UBSstock",
    },
    "empresa-5": {
      role: "Fundador",
      period: "Maio 2026 — Atual",
      contract: "Comunidade",
      desc: "Uma comunidade focada em estudantes de tecnologia e pessoas em transição de carreira. Realizamos eventos, oficinas e palestras, e criamos espaço para networking e troca de conhecimento.",
    },
    "empresa-2": {
      role: "Estagiário de TI",
      period: "2025 — Atual",
      desc: "Responsável por criar soluções tecnológicas para os setores administrativos da secretaria (de sistemas construídos do zero a ferramentas mais simples, como planilhas ou documentos).",
    },
    "empresa-3": {
      role: "Assistente administrativo - MPC",
      period: "2024 — Atual",
      desc: "Alimentação de planilhas e criação de dashboards com Excel e Power BI para gerar insights e melhorar o desempenho do setor; elaboração de relatórios mensais; análise de dados; e uso do SAP.",
    },
    "empresa-4": {
      period: "Jan 2022 — Dez 2022",
      location: "Remoto",
      desc: "Criação de posts para Instagram, flyers e peças promocionais para pessoas, empresas e empreendedores.",
    },
  },
  es: {
    "empresa-1": {
      period: "Agosto 2026 — Actualidad",
      desc: "Una software house enfocada en desarrollar soluciones de tecnología para microemprendedores. Actualmente desarrollamos soluciones para dos productos. ZeroAoMEI y UBSstock",
    },
    "empresa-5": {
      role: "Fundador",
      period: "Mayo 2026 — Actualidad",
      contract: "Comunidad",
      desc: "Una comunidad enfocada en estudiantes de tecnología y personas en transición de carrera. Organizamos eventos, talleres y charlas, y creamos espacio para el networking y el intercambio de conocimiento.",
    },
    "empresa-2": {
      role: "Pasante de TI",
      period: "2025 — Actualidad",
      desc: "Responsable de crear soluciones tecnológicas para los sectores administrativos de la secretaría (desde sistemas construidos desde cero hasta herramientas más simples, como hojas de cálculo o documentos).",
    },
    "empresa-3": {
      role: "Asistente administrativo - MPC",
      period: "2024 — Actualidad",
      desc: "Carga de hojas de cálculo y creación de dashboards con Excel y Power BI para obtener insights y mejorar el desempeño del área; elaboración de informes mensuales; análisis de datos; y uso de SAP.",
    },
    "empresa-4": {
      period: "Ene 2022 — Dic 2022",
      location: "Remoto",
      desc: "Creación de posts para Instagram, flyers y piezas promocionales para personas, empresas y emprendedores.",
    },
  },
};

export function getTimeline(locale: Locale): TimelineItem[] {
  return localizeList(TimelineData, locale, (item) => item.id, translations);
}
