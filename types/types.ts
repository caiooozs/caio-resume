/** Tela de um projeto, em public/projects, com as medidas reais (a moldura segue a proporcao). */
export interface ProjectImage {
  src: string;
  width: number;
  height: number;
  /** O que a tela mostra: vira o alt e, na galeria, a legenda. */
  caption?: string;
}

export interface Project {
  id: string;
  /** Ancora do projeto em /projects (/projects#countries-app). */
  slug: string;
  title: string;
  desc: string;
  stack: string[];
  website?: string;
  github: string;
  /** Repositorio fechado: mostra o rotulo no lugar do link (que daria 404). */
  privateRepo?: boolean;
  /** Post do LinkedIn que apresenta o projeto. */
  post?: string;
  building: boolean;
  /** Detalhes que aparecem quando a linha abre em /projects. */
  overview?: string;
  highlights?: string[];
  /** Tela principal do projeto no ar. */
  image?: ProjectImage;
  /** Outras telas, em grade sob a principal. */
  gallery?: ProjectImage[];
}

export interface HomeProjectCardProps extends Project {}

export interface HyphenProps {
  title: string;
  website_link: string;
  desc: string;
  infos: {
    discord_link: string;
    wpp_link: string;
    ig_link: string;
  };
}

export interface SmoothScrollProps {
  children: React.ReactNode;
}

export interface FadeInAnimationProps {
  children: React.ReactNode;
  viewPort?: boolean;
  animationDuration: number;
  animationDelay?: number;
  className?: string;
  reverse?: boolean;
}

/* ---------------------------------- About --------------------------------- */

/** Icone social suportado pelos componentes da pagina /about. */
export type SocialIcon =
  | "github"
  | "instagram"
  | "linkedin"
  | "discord"
  | "mail"
  | "whatsapp"
  | "globe"
  | "youtube";

export interface AboutSectionProps {
  title: string;
  subtitle?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface MyInfosProps {
  photo: string;
  photoAlt: string;
  name: string;
  role: string;
  location: string;
  badge: string;
  paragraphs: string[];
  tags: string[];
  socials: SocialLink[];
}

export interface TimelineItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  contract: string;
  desc?: string;
  stack?: string[];
  current?: boolean;
}

export interface TimelineCardProps extends TimelineItem {
  index: number;
}

export interface ChannelItem {
  id: string;
  badge: string;
  title: string;
  desc: string;
  accent: "violet" | "red" | "emerald";
  link: string;
  linkLabel: string;
  stats?: { label: string; value: string }[];
  socials: SocialLink[];
}

export interface ChannelCardProps extends ChannelItem {}

export interface EventItem {
  id: string;
  name: string;
  role: string;
  date: string;
  local: string;
  desc: string;
  tag: string;
  photos?: string;
}

export interface EventCardProps extends EventItem {}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  relation: string;
  message: string;
  initials: string;
}

export interface TestimonialCardProps extends TestimonialItem {}

export interface AboutCTAProps {
  badge: string;
  title: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  contacts: SocialLink[];
}
