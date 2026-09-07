import { ChannelItem } from "@/types/types";

export const ChannelsData: ChannelItem[] = [
  {
    id: "youtube",
    badge: "My Youtube Channel",
    title: "Caio Costa",
    desc: "A channel I use to show my routine, events, technical videos, and any topic I find relevant.",
    accent: "red",
    link: "https://www.youtube.com/@caioccchaves",
    linkLabel: "youtube.com/@caioccchaves",
    socials: [
      {
        label: "YouTube",
        href: "https://www.youtube.com/@caioccchaves",
        icon: "youtube",
      },
    ],
  },
  {
    id: "hyphen",
    badge: "My Community",
    title: "Hyphen Community",
    desc: "Hyphen is a community dedicated to talent development in the technology sector. We connect students, professionals, and opportunities through event promotion, networking, and knowledge sharing.",
    accent: "violet",
    link: "https://www.hyphencommunity.com.br/",
    linkLabel: "Website",
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
