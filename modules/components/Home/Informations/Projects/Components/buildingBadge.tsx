import { Status } from "@/components/ui/kit";

/** Projeto ainda em construcao: estado real, marcado com o ponto de destaque. */
export default function BuildingBadge({ label }: { label: string }) {
  return <Status>{label}</Status>;
}
