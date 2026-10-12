import HyphenCard from "./components/HyphenCard";
import { getHyphen } from "./data/i18n";
import { getI18n } from "@/lib/i18n/server";

export default async function Hyphen() {
  const { locale } = await getI18n();

  return (
    <>
      {getHyphen(locale).map((hd) => (
        <HyphenCard
          key={hd.title}
          title={hd.title}
          website_link={hd.website_link}
          infos={hd.infos}
          desc={hd.desc}
        />
      ))}
    </>
  );
}
