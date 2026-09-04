import HyphenCard from "./components/HyphenCard";
import { HyphenData } from "./data/data";

export default function Hyphen() {
  return (
    <div className="relative grid grid-cols-1 gap-4 sm:gap-6">
      {HyphenData.map((hd) => (
        <div key={hd.title} className="h-full">
          <HyphenCard
            title={hd.title}
            website_link={hd.website_link}
            infos={hd.infos}
          />
        </div>
      ))}
    </div>
  );
}
