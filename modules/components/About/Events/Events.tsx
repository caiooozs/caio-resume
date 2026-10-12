import EventCard from "./components/EventCard";
import { getEvents } from "./data/i18n";
import { getI18n } from "@/lib/i18n/server";

/** Eventos contados pelas fotos: imagem grande, o que foi e o que ficou. */
export default async function Events() {
  const { locale } = await getI18n();

  return (
    <ol className="flex flex-col gap-14 sm:gap-16">
      {getEvents(locale).map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </ol>
  );
}
