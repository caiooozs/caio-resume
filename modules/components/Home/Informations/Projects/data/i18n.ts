import type { Locale } from "@/lib/i18n/config";
import { localizeList, type ListTranslations } from "@/lib/i18n/localize";
import type { Project } from "@/types/types";
import { HomeProjects } from "./data";

const translations: ListTranslations<Project> = {
  pt: {
    "01": {
      desc: "Aplicação desenvolvida com Next.js e TypeScript para consultar países, com foco em experiência do usuário, organização de código e boas práticas",
    },
    "02": {
      desc: "Um sistema em desenvolvimento para manter estudantes por dentro de notícias, eventos, atividades, projetos e muito mais",
    },
    "03": {
      desc: "Uma plataforma para ajudar microempreendedores a profissionalizar e gerir seus negócios de forma simples, rápida e fácil",
    },
    "04": {
      desc: "Sistema de gestão de farmácia para acompanhar e controlar vendas e estoque de medicamentos. Feito para ajudar a farmácia do meu bairro",
    },
  },
  es: {
    "01": {
      desc: "Aplicación desarrollada con Next.js y TypeScript para consultar países, con foco en la experiencia de usuario, la organización del código y las buenas prácticas",
    },
    "02": {
      desc: "Un sistema en desarrollo para mantener a los estudiantes al tanto de noticias, eventos, actividades, proyectos y mucho más",
    },
    "03": {
      desc: "Una plataforma para ayudar a microemprendedores a profesionalizar y gestionar sus negocios de forma simple, rápida y fácil",
    },
    "04": {
      desc: "Sistema de gestión de farmacia para monitorear y controlar las ventas y el stock de medicamentos. Hecho para ayudar a la farmacia de mi barrio",
    },
  },
};

export function getProjects(locale: Locale): Project[] {
  return localizeList(HomeProjects, locale, (project) => project.id, translations);
}
