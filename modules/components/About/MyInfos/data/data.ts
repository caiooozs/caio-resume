import { MyInfosProps } from "@/types/types";

export const MyInfosData: MyInfosProps = {
  photo: "/me.jpg",
  photoAlt: "Caio Cesar Costa",
  name: "Caio Cesar Costa",
  role: "Frontend Developer",
  location: "Recife, PE",
  badge: "About me",
  paragraphs: [
    "I’m Caio, a frontend developer passionate about turning ideas into interfaces that people genuinely enjoy using. I work primarily with React and Next.js, always striving for a balance between clean code, performance, and a keen eye for visual detail.",
    "In addition to my projects, I run a YouTube channel where I share my daily routine, events, and a bit of whatever comes to mind, as well as a community Hyphen Community where developers exchange knowledge and grow together.",
  ],
  tags: ["React", "Next.js", "Javascript", "TypeScript", "UX/UI Design"],
  socials: [
    { label: "GitHub", href: "https://github.com/caiooozs", icon: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/caioccesar/",
      icon: "linkedin",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/caaioccosta/",
      icon: "instagram",
    },
    { label: "E-mail", href: "mailto:caioccosta22@gmail.com", icon: "mail" },
    {
      label: "Youtube",
      href: "https://www.youtube.com/@caioccchaves",
      icon: "youtube",
    },
  ],
};
