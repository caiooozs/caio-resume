import { TestimonialItem } from "@/types/types";

/** Titulo interno do bloco de depoimentos (fica dentro da section de eventos). */
export const TestimonialsHeading = {
  label: "Depoimentos",
  desc: "O que dizem as pessoas que trabalham e constroem comunidade comigo.",
};

export const TestimonialsData: TestimonialItem[] = [
  {
    id: "depoimento-1",
    name: "Lorem Silva",
    role: "Tech Lead",
    relation: "Lorem Tech",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur sequi earum aliquid impedit ducimus, ex eos sed fugiat tempora hic corrupti voluptas mollitia.",
    initials: "LS",
  },
  {
    id: "depoimento-2",
    name: "Ipsum Souza",
    role: "Product Designer",
    relation: "Ipsum Digital",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure odit eius explicabo tenetur ex debitis vero numquam hic autem officiis sunt reprehenderit.",
    initials: "IS",
  },
  {
    id: "depoimento-3",
    name: "Dolor Santos",
    role: "Co-fundadora",
    relation: "Hyphen Community",
    message:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, sit mollitia excepturi aut voluptates voluptatem! Molestiae assumenda voluptas, saepe tempore.",
    initials: "DS",
  },
];
