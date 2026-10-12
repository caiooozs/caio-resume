"use client";

import { Menu } from "@base-ui/react/menu";
import { BR, ES, US } from "country-flag-icons/react/3x2";
import { Check, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n/client";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

/** Bandeira + codigo: a bandeira e o atalho visual, o codigo tira a ambiguidade do idioma. */
const LANGUAGES: Record<Locale, { flag: typeof US; code: string; name: string }> = {
  en: { flag: US, code: "EN", name: "English" },
  pt: { flag: BR, code: "PT", name: "Português" },
  es: { flag: ES, code: "ES", name: "Español" },
};

function Flag({ locale, className }: { locale: Locale; className?: string }) {
  const Svg = LANGUAGES[locale].flag;
  return (
    <span
      aria-hidden
      className={cn(
        "inline-flex h-3 w-[1.125rem] shrink-0 overflow-hidden rounded-[3px] shadow-[0_0_0_1px_rgb(0_0_0/0.08)] dark:shadow-[0_0_0_1px_rgb(255_255_255/0.12)]",
        className
      )}
    >
      <Svg className="size-full" />
    </span>
  );
}

/** Troca de idioma na navbar: botao com a bandeira atual, menu com os tres idiomas. */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, t, setLocale, isPending } = useI18n();

  return (
    <Menu.Root modal={false}>
      <Menu.Trigger
        aria-label={`${t.language.change}: ${LANGUAGES[locale].name}`}
        className={cn(
          "inline-flex h-9 cursor-pointer items-center gap-1.5 rounded-full px-2.5 text-[0.8125rem] font-medium text-muted transition-[background-color,color,scale,opacity] duration-200 ease-out-expo outline-none hover:bg-raised hover:text-ink focus-visible:outline-2 focus-visible:outline-accent active:scale-[0.96] data-[popup-open]:bg-raised data-[popup-open]:text-ink",
          isPending && "opacity-60",
          className
        )}
      >
        <Flag locale={locale} />
        <span className="hidden sm:inline">{LANGUAGES[locale].code}</span>
        <ChevronDown
          aria-hidden
          strokeWidth={2}
          className="hidden size-3 transition-[rotate] duration-200 ease-out-expo in-data-[popup-open]:rotate-180 sm:block"
        />
      </Menu.Trigger>

      <Menu.Portal>
        <Menu.Positioner side="bottom" align="end" sideOffset={8} className="z-50 outline-none">
          <Menu.Popup className="min-w-44 origin-[var(--transform-origin)] rounded-2xl border border-line bg-bg p-1.5 shadow-[0_16px_40px_-12px_rgb(0_0_0/0.25)] outline-none transition-[opacity,scale,translate] duration-200 ease-out-expo data-[ending-style]:-translate-y-1 data-[ending-style]:scale-[0.97] data-[ending-style]:opacity-0 data-[starting-style]:-translate-y-1 data-[starting-style]:scale-[0.97] data-[starting-style]:opacity-0">
            <Menu.RadioGroup
              value={locale}
              onValueChange={(value) => {
                if (isLocale(value)) setLocale(value);
              }}
            >
              {locales.map((item) => (
                <Menu.RadioItem
                  key={item}
                  value={item}
                  closeOnClick
                  lang={item === "pt" ? "pt-BR" : item}
                  className="flex cursor-pointer items-center gap-2.5 rounded-xl px-2.5 py-2 text-sm text-ink outline-none select-none data-[highlighted]:bg-raised"
                >
                  <Flag locale={item} />
                  <span className="flex-1">{LANGUAGES[item].name}</span>
                  <span className="text-[0.75rem] text-muted tabular">{LANGUAGES[item].code}</span>
                  <span className="flex size-3.5 items-center justify-center">
                    <Menu.RadioItemIndicator>
                      <Check aria-hidden strokeWidth={2.25} className="size-3.5 text-accent-ink" />
                    </Menu.RadioItemIndicator>
                  </span>
                </Menu.RadioItem>
              ))}
            </Menu.RadioGroup>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}
