import Link from "next/link";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Portrait } from "@/components/ui/portrait";
import { getMyInfos } from "@/modules/components/About/MyInfos/data/i18n";
import { getI18n } from "@/lib/i18n/server";
import { SocialRow } from "@/modules/components/About/Shared/SocialIconLink";

/** Apresentacao: o "Hello", a bio, as duas acoes e a foto no palco ao lado. */
const MainContent = async () => {
  const { locale, t } = await getI18n();
  const { photo, photoAlt, location, socials } = getMyInfos(locale);

  return (
    <section className="grid grid-cols-1 items-end gap-10 pt-10 sm:pt-12 md:grid-cols-[minmax(0,1fr)_17rem] md:gap-12 lg:grid-cols-[minmax(0,1fr)_22.5rem]">
      <div className="flex flex-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo}
          alt=""
          width={56}
          height={56}
          className="enter mb-6 size-14 rounded-full object-cover object-[58%_30%] ring-1 ring-line md:hidden"
        />

        <h1
          className="enter text-[2.375rem] leading-[1.05] font-semibold tracking-[-0.04em] text-ink sm:text-[2.875rem]"
          style={{ "--i": 0 } as React.CSSProperties}
        >
          {t.home.hello}
          <span className="text-accent">{t.home.name}</span>
        </h1>

        <p
          className="enter mt-5 max-w-[33rem] text-[1.0625rem] leading-relaxed text-muted"
          style={{ "--i": 1 } as React.CSSProperties}
        >
          {t.home.bio}
        </p>

        <div
          className="enter mt-8 flex flex-wrap items-center gap-2"
          style={{ "--i": 2 } as React.CSSProperties}
        >
          <Link href="#projects" className={buttonVariants({ size: "lg", className: "group" })}>
            {t.home.goToProjects}
            <ArrowDown className="transition-[translate] duration-300 ease-out-expo group-hover:translate-y-0.5" />
          </Link>
          <a
            href="/caio_tech_cv.pdf"
            download="caio_tech_cv.pdf"
            className={buttonVariants({ variant: "ghost", size: "lg" })}
          >
            <Download />
            {t.home.downloadCv}
          </a>
        </div>

        <div
          className="enter mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
          style={{ "--i": 3 } as React.CSSProperties}
        >
          <span className="inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin aria-hidden className="size-4 text-subtle" strokeWidth={1.75} />
            {location}
          </span>
          <span aria-hidden className="hidden h-4 w-px bg-line sm:block" />
          <SocialRow links={socials} className="sm:ml-0" />
        </div>
      </div>

      <div className="enter hidden md:block" style={{ "--i": 2 } as React.CSSProperties}>
        <Portrait src={photo} alt={photoAlt} priority />
      </div>
    </section>
  );
};

export default MainContent;
