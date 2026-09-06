import { MyInfosProps } from "@/types/types";

export const MyInfosData: MyInfosProps = {
  photo: "/me.jpg",
  photoAlt: "Caio Cesar Costa",
  name: "Caio Cesar Costa",
  role: "Frontend Developer",
  location: "São Paulo, Brasil",
  badge: "About me",
  paragraphs: [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur sequi earum aliquid impedit ducimus, ex eos sed fugiat tempora hic, qui corrupti voluptas mollitia, possimus expedita id neque distinctio.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odit eius explicabo tenetur ex debitis vero numquam hic autem officiis sunt reprehenderit, maiores facilis pariatur dolor obcaecati amet aperiam aut.",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sit mollitia excepturi aut voluptates voluptatem! Molestiae assumenda voluptas, saepe tempore iusto error possimus, commodi quam at nam natus.",
  ],
  tags: ["React", "Next.js", "TypeScript", "UX/UI Design", "Node.js"],
  highlights: [
    { label: "Anos de código", value: "4+" },
    { label: "Projetos entregues", value: "20+" },
    { label: "Eventos e talks", value: "10+" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/caiooozs", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/caiooozs",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/caiooozs",
      icon: "instagram",
    },
    { label: "E-mail", href: "mailto:caioccosta22@gmail.com", icon: "mail" },
  ],
};
