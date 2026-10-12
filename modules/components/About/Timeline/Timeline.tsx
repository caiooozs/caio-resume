import TimelineCard from "./components/TimelineCard";
import { getTimeline } from "./data/i18n";
import { getI18n } from "@/lib/i18n/server";

/** Carreira como um curriculo: periodo e local a esquerda, cargo e o que fez a direita. */
export default async function Timeline() {
  const { locale } = await getI18n();

  return (
    <ol className="flex flex-col gap-9">
      {getTimeline(locale).map((item, index) => (
        <TimelineCard key={item.id} {...item} index={index} />
      ))}
    </ol>
  );
}
