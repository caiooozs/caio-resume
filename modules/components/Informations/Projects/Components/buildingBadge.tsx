import { Badge } from "@/components/ui/badge";
import { Spinner } from "@/components/ui/spinner";

export default function BuildingBadge() {
  return (
    <Badge
      variant={"outline"}
      className="flex items-center gap-2 rounded-full border-0 bg-amber-400/10 px-3 py-1 text-[11px] font-medium text-amber-300 ring-1 ring-inset ring-amber-400/30 shadow-[0_0_20px_-6px_rgba(251,191,36,0.6)] backdrop-blur-sm"
    >
      <Spinner className="size-3" />
      Building
    </Badge>
  );
}
