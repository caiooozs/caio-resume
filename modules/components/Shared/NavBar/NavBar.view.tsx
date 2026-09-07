import Link from "next/link";
import { NavBarViewProps } from "./NavBar.model";
import FadeInAnimation from "@/components/ui/fade-animation";

const links = [
  { href: "/", label: "All" },
  { href: "/#projects", label: "Projects" },
  { href: "/about", label: "About" },
];

export const NavBarView = ({ scrolled }: NavBarViewProps) => {
  return (
    <>
      <FadeInAnimation animationDuration={0.3}>
        <nav
          className={[
            "fixed top-0 left-0 z-50 h-(--nav-h) w-full",
            "flex items-center justify-center border-b border-white/10 text-white",
            "transition-all duration-300 ease-out",
            scrolled
              ? "px-4 sm:px-6 bg-black/50 backdrop-blur-md shadow-sm shadow-white/5"
              : "px-4 sm:px-8 md:px-12 bg-transparent",
          ].join(" ")}
        >
          <div className="flex w-full items-center justify-center gap-4 overflow-x-auto sm:gap-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} className="shrink-0">
                <span className="text-sm font-medium text-gray-400 transition-all transform hover:font-semibold hover:text-white sm:text-base">
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </FadeInAnimation>
    </>
  );
};
