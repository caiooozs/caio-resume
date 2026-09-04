import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/ui/word-rotate";
import Link from "next/link";

const words = [
  "Frontend Developer",
  "UX/UI Designer",
  "Javascript Developer",
  "React Developer",
];
const MainContent = () => {
  return (
    <>
      <div className="flex min-h-[calc(100svh-var(--nav-h))] items-center justify-center px-6 py-16 text-white sm:px-8 md:min-h-[40rem]">
        <div className="flex w-full max-w-3xl flex-col items-center gap-3 text-center">
          <span className="w-full max-w-56 rounded-xl bg-purple-500 text-center text-sm font-semibold sm:text-base">
            <WordRotate words={words} />
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Hello, I'm <span className="text-[#8B5CF6]">Caio!</span>
          </h1>
          <p className="max-w-prose text-sm font-light text-balance text-white/80 sm:text-base md:w-2/3">
            Desenvolvedor frontend focado em criar interfaces rápidas,
            acessíveis e com atenção aos detalhes. Trabalho principalmente com
            React, Next.js e TypeScript
          </p>
          <div className="mt-4 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-5">
            <Link href={"/projects"} className="w-full sm:w-auto">
              <Button size={"lg"} className={"h-12 w-full sm:w-32"}>
                Go to Projects
              </Button>
            </Link>
            <Button
              size={"lg"}
              variant={"secondary"}
              className={"h-12 w-full sm:w-32"}
            >
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
