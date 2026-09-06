import { GlassCard } from "@/components/ui/glass-card";
import { IconCloud } from "@/components/ui/icon-cloud";
import { icons } from "../Data/techStackData";

export default function TechStackCloud() {
  return (
    <>
      <div className="relative flex size-full items-center justify-center overflow-hidden">
        <IconCloud images={icons} />
      </div>
    </>
  );
}
