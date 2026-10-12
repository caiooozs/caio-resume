import type { Locale } from "@/lib/i18n/config";
import { localizeList, type ListTranslations } from "@/lib/i18n/localize";
import type { TimelineItem } from "@/types/types";
import { TimelineData } from "./data";

const translations: ListTranslations<TimelineItem> = {
  pt: {
    "empresa-1": {
      role: "CEO e fundador",
      period: "Agosto 2026 — Atual",
      desc: "Uma startup focada em desenvolver soluções de tecnologia e marketing para microempreendedores. Atualmente desenvolvemos soluções para dois produtos. ZeroAoMEI e UBSstock",
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
      role: "CEO y fundador",
      period: "Agosto 2026 — Actualidad",
      desc: "Una startup enfocada en desarrollar soluciones de tecnología y marketing para microemprendedores. Actualmente desarrollamos soluciones para dos productos. ZeroAoMEI y UBSstock",
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
