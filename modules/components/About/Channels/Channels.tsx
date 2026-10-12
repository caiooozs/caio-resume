import { HoverList } from "@/components/ui/hover-list";
import ChannelCard from "./components/ChannelCard";
import { getChannels } from "./data/i18n";
import { getI18n } from "@/lib/i18n/server";

export default async function Channels() {
  const { locale } = await getI18n();

  return (
    <HoverList as="div" className="-mx-3 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6">
      {getChannels(locale).map((channel, index) => (
        <ChannelCard key={channel.id} {...channel} index={index} />
      ))}
    </HoverList>
  );
}
