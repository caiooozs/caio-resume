import { AboutCTAProps } from "@/types/types";

export const CTAData: AboutCTAProps = {
  badge: "Bora conversar",
  title: "Vamos construir algo juntos?",
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur sequi earum aliquid impedit ducimus, ex eos sed fugiat tempora hic corrupti voluptas mollitia possimus expedita.",
  primary: {
    label: "Entrar em contato",
    href: "mailto:caioccosta22@gmail.com",
  },
  secondary: {
    label: "Ver projetos",
    href: "/#projects",
  },
  contacts: [
    { label: "E-mail", href: "mailto:caioccosta22@gmail.com", icon: "mail" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/caiooozs",
      icon: "linkedin",
    },
    { label: "GitHub", href: "https://github.com/caiooozs", icon: "github" },
    {
      label: "Discord",
      href: "https://discord.gg/SE33UzZHAR",
      icon: "discord",
    },
  ],
};
