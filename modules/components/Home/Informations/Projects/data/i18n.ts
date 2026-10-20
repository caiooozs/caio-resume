import type { Locale } from "@/lib/i18n/config";
import { localizeList, type ListTranslations } from "@/lib/i18n/localize";
import type { Project } from "@/types/types";
import { HomeProjects } from "./data";

const translations: ListTranslations<Project> = {
  pt: {
    "01": {
      desc: "Aplicação desenvolvida com Next.js e TypeScript para consultar países, com foco em experiência do usuário, organização de código e boas práticas",
      overview:
        "Os dados vêm da API pública REST Countries, buscados com Axios e gerenciados pelo React Query. Cada tela é dividida em model, view e view model, e os hooks de dados ficam dentro da pasta da sua feature.",
      highlights: [
        "Países em destaque na página inicial, com bandeira, população e região",
        "Busca por nome e filtro por sub-região na página All Countries",
        "Uma página de detalhes para cada país, com dados extras e links de mapa",
      ],
    },
    "02": {
      desc: "Um sistema em desenvolvimento para manter estudantes por dentro de notícias, eventos, atividades, projetos e muito mais",
      overview:
        "Hoje ele está no ar como o site da Hyphen Community, a comunidade de talentos em tecnologia que ajudo a liderar. Ele fala com estudantes e pessoas começando na área que buscam networking, eventos e uma primeira oportunidade.",
      highlights: [
        "Uma landing page que apresenta a comunidade, os canais e a equipe",
        "Um passo só para entrar na comunidade, pelo Discord, Instagram ou WhatsApp",
        "O HyphenLab, próximo produto da comunidade, anunciado como em breve",
        "Páginas de campanha, como a do Agosto Lilás",
      ],
    },
    "03": {
      desc: "Uma plataforma para ajudar microempreendedores a profissionalizar e gerir seus negócios de forma simples, rápida e fácil",
      overview:
        "Um app web que leva o microempreendedor brasileiro da informalidade até o MEI aberto e depois mantém o negócio organizado, numa linguagem simples, sem jargão de contador. É um dos dois produtos que estou construindo na Hyphen, a startup que fundei.",
      highlights: [
        "Guias para abrir o MEI, pagar o DAS mensal e fazer a declaração anual",
        "Obrigações do mês e do ano, com lembretes",
        "Dinheiro do negócio separado do pessoal: entradas, saídas e um gráfico do mês",
        "Pensado primeiro para o celular, para usar com uma mão",
      ],
    },
    "04": {
      desc: "Sistema de gestão farmacêutica para acompanhar e controlar vendas e estoque de medicamentos em todas as unidades básicas de saúde do município de Igarassu.",
      overview:
        "Começa como piloto na farmácia de uma única Unidade Básica de Saúde (UBS) e foi pensado para crescer até todas as unidades do município sem retrabalho. É o segundo produto que estou construindo na Hyphen, ao lado do ZeroAoMEI.",
      highlights: [
        "Entradas e saídas registradas no balcão da farmácia, para que o saldo na tela seja confiável",
        "Cada unidade tem suas próprias categorias e medicamentos, isolados por segurança em nível de linha",
        "Um painel de administração da rede que lê todas as unidades",
        "Front-end em Next.js que conversa com um back-end em FastAPI, que consulta o Supabase com o token do próprio usuário",
      ],
    },
  },
  es: {
    "01": {
      desc: "Aplicación desarrollada con Next.js y TypeScript para consultar países, con foco en la experiencia de usuario, la organización del código y las buenas prácticas",
      overview:
        "Los datos vienen de la API pública REST Countries, obtenidos con Axios y gestionados por React Query. Cada pantalla se divide en model, view y view model, y los hooks de datos viven dentro de la carpeta de su feature.",
      highlights: [
        "Países destacados en la página de inicio, con bandera, población y región",
        "Búsqueda por nombre y filtro por subregión en la página All Countries",
        "Una página de detalle para cada país, con datos extra y enlaces de mapa",
      ],
    },
    "02": {
      desc: "Un sistema en desarrollo para mantener a los estudiantes al tanto de noticias, eventos, actividades, proyectos y mucho más",
      overview:
        "Hoy está en línea como el sitio de la Hyphen Community, la comunidad de talento tecnológico que ayudo a liderar. Le habla a estudiantes y personas que empiezan en tecnología y buscan networking, eventos y una primera oportunidad.",
      highlights: [
        "Una landing page que presenta la comunidad, sus canales y su equipo",
        "Un solo paso para entrar a la comunidad, por Discord, Instagram o WhatsApp",
        "HyphenLab, el próximo producto de la comunidad, anunciado como próximamente",
        "Páginas de campaña, como la de Agosto Lilás",
      ],
    },
    "03": {
      desc: "Una plataforma para ayudar a microemprendedores a profesionalizar y gestionar sus negocios de forma simple, rápida y fácil",
      overview:
        "Una app web que lleva al microemprendedor brasileño de la informalidad a un MEI registrado y después mantiene el negocio organizado, en un lenguaje simple, sin jerga de contador. Es uno de los dos productos que estoy construyendo en Hyphen, la startup que fundé.",
      highlights: [
        "Guías para abrir el MEI, pagar el DAS mensual y presentar la declaración anual",
        "Obligaciones del mes y del año, con recordatorios",
        "El dinero del negocio separado del personal: ingresos, gastos y un gráfico del mes",
        "Pensada primero para el celular, para usarla con una mano",
      ],
    },
    "04": {
      desc: "Sistema de gestión farmacéutica para monitorear y controlar las ventas y el stock de medicamentos en todas las unidades básicas de salud del municipio de Igarassu.",
      overview:
        "Empieza como piloto en la farmacia de una sola Unidad Básica de Salud (UBS) y está pensado para crecer a todas las unidades del municipio sin rehacer trabajo. Es el segundo producto que estoy construyendo en Hyphen, junto a ZeroAoMEI.",
      highlights: [
        "Entradas y salidas registradas en el mostrador de la farmacia, para que el saldo en pantalla sea confiable",
        "Cada unidad tiene sus propias categorías y medicamentos, aislados por seguridad a nivel de fila",
        "Un panel de administración de la red que lee todas las unidades",
        "Un front-end en Next.js que habla con un back-end en FastAPI, que consulta Supabase con el token del propio usuario",
      ],
    },
  },
};

export function getProjects(locale: Locale): Project[] {
  return localizeList(HomeProjects, locale, (project) => project.id, translations);
}
