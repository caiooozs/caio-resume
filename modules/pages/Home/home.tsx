import MainContent from "@/modules/components/Home/MainContent/MainContent";
import Informations from "@/modules/components/Home/Informations/Informations";

/** Uma coluna larga: apresentacao, trabalho ao lado da comunidade, stack. */
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[60rem] px-5 pb-12 sm:px-6">
      <MainContent />
      <Informations />
    </div>
  );
}
