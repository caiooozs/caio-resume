import { ChannelItem } from "@/types/types";

export const ChannelsData: ChannelItem[] = [
  {
    id: "youtube",
    badge: "My Youtube Channel",
    title: "Caio Costa",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur sequi earum aliquid impedit ducimus, ex eos sed fugiat tempora hic corrupti voluptas mollitia possimus.",
    accent: "red",
    link: "https://www.youtube.com/@caiooozs",
    linkLabel: "youtube.com/@caiooozs",
    stats: [
      { label: "Vídeos", value: "30+" },
      { label: "Inscritos", value: "1.2k" },
      { label: "Assuntos", value: "Front-end" },
    ],
    socials: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/caiooozs",
        icon: "instagram",
      },
      { label: "GitHub", href: "https://github.com/caiooozs", icon: "github" },
    ],
  },
  {
    id: "hyphen",
    badge: "My Community",
    title: "Hyphen Community",
    desc: "Hyphen is a community dedicated to talent development in the technology sector. We connect students, professionals, and opportunities through event promotion, networking, and knowledge sharing.",
    accent: "violet",
    link: "https://www.hyphencommunity.com.br/",
    linkLabel: "hyphencommunity.com.br",
    stats: [
      { label: "Membros", value: "500+" },
      { label: "Eventos", value: "15+" },
      { label: "Desde", value: "2024" },
    ],
    socials: [
      {
        label: "Discord",
        href: "https://discord.gg/SE33UzZHAR",
        icon: "discord",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/hyphencommunity",
        icon: "instagram",
      },
    ],
  },
];
