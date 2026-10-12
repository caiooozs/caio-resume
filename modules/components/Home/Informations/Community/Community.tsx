import { HoverList } from "@/components/ui/hover-list";
import Hyphen from "../Hyphen/Hyphen";
import Youtube from "../Youtube/Youtube";
import EventsPreview from "./EventsPreview";

/** Ao lado dos projetos: a comunidade, os videos e os eventos, na mesma lista deslizante. */
export default function Community() {
  return (
    <HoverList as="div" className="-mx-3 flex flex-col gap-4">
      <div id="hyphen">
        <Hyphen />
      </div>
      <div id="videos">
        <Youtube />
      </div>
      <EventsPreview />
    </HoverList>
  );
}
