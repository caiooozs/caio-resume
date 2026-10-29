"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLenis } from "lenis/react";
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn, ZoomOut } from "lucide-react";
import type { ProjectImage } from "@/types/types";
import { useI18n } from "@/lib/i18n/client";
import { cn } from "@/lib/utils";

/** Uma tela com o alt ja resolvido no servidor. */
export type Screen = ProjectImage & { alt: string };

const FULL = "(min-width: 1024px) 54rem, calc(100vw - 6rem)";
const HALF = "(min-width: 1024px) 27rem, (min-width: 640px) calc(50vw - 3rem), calc(100vw - 6rem)";

/** Botao redondo do visualizador: claro sobre o fundo escuro, bolha no hover. */
const viewerButton =
  "grid size-10 shrink-0 cursor-pointer place-items-center rounded-full text-white/70 outline-none transition-[background-color,color,scale] duration-200 ease-out-expo hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent active:scale-[0.94] [&_svg]:size-[18px]";

/** Uma tela do projeto na moldura de foto, na proporcao real; o clique abre o visualizador. */
function Thumb({ screen, sizes, onOpen }: { screen: Screen; sizes: string; onOpen: (from: HTMLElement) => void }) {
  return (
    <button
      type="button"
      onClick={(event) => onOpen(event.currentTarget)}
      aria-haspopup="dialog"
      style={{ aspectRatio: `${screen.width} / ${screen.height}` }}
      className="group/shot relative block w-full cursor-zoom-in overflow-hidden rounded-2xl bg-raised shadow-[0_1px_2px_rgb(0_0_0/0.06),0_16px_40px_-16px_rgb(0_0_0/0.3)] ring-1 ring-black/5 outline-none focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-accent dark:ring-white/8"
    >
      {/* no escuro, a tela (quase sempre clara) baixa um pouco a exposicao */}
      <Image
        src={screen.src}
        alt={screen.alt}
        fill
        sizes={sizes}
        className="panel-wipe object-cover dark:brightness-[0.86]"
      />
      {/* sem hover no toque, o sinal de ampliar fica sempre a vista */}
      <span
        aria-hidden
        className="absolute top-3 right-3 grid size-8 place-items-center rounded-full bg-bg/80 text-ink opacity-0 shadow-sm backdrop-blur-md transition-opacity duration-200 ease-out-expo group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100 pointer-coarse:opacity-100"
      >
        <Maximize2 className="size-3.5" strokeWidth={1.75} />
      </span>
    </button>
  );
}

/**
 * As telas de um projeto aberto em /projects: a principal e, em grade, as
 * outras (numero impar: a ultima ocupa a linha toda). Cada uma abre o
 * visualizador, um dialog nativo: Esc fecha, o foco fica preso nele e volta
 * para a tela ao fechar. As setas (na tela e no teclado) passam entre as telas
 * do projeto; um clique na imagem aproxima 2x e o ponteiro (ou o dedo) passeia
 * por ela.
 */
export function ProjectScreens({ title, image, gallery }: { title: string; image?: Screen; gallery: Screen[] }) {
  const { t } = useI18n();
  const text = t.projects.viewer;
  const dialog = useRef<HTMLDialogElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const lenis = useLenis();
  const [current, setCurrent] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const [origin, setOrigin] = useState("50% 50%");

  const screens = image ? [image, ...gallery] : gallery;
  const offset = image ? 1 : 0;
  const shown = current === null ? null : screens[current];
  const total = screens.length;
  const many = total > 1;
  const isOpen = current !== null;

  // fechar (Esc, X ou clique fora): a rolagem volta e o foco retorna para a tela que abriu
  useEffect(() => {
    const node = dialog.current;
    if (!node) return;
    function onClose() {
      setCurrent(null);
      setZoomed(false);
      document.documentElement.style.overflow = "";
      lenis?.start();
      opener.current?.focus();
    }
    node.addEventListener("close", onClose);
    return () => {
      node.removeEventListener("close", onClose);
      // saindo da pagina com o visualizador aberto
      document.documentElement.style.overflow = "";
      lenis?.start();
    };
  }, [lenis]);

  // setas do teclado passam as telas, esteja o foco onde estiver
  useEffect(() => {
    if (!isOpen || total < 2) return;
    function onKey(event: KeyboardEvent) {
      const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (!step) return;
      setCurrent((index) => (index === null ? null : (index + step + total) % total));
      setZoomed(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, total]);

  function open(index: number, from: HTMLElement) {
    opener.current = from;
    setCurrent(index);
    setZoomed(false);
    dialog.current?.showModal();
    closeButton.current?.focus();
    // a pagina por tras nao rola enquanto o visualizador esta aberto
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
  }

  function go(step: number) {
    setCurrent((index) => (index === null ? null : (index + step + total) % total));
    setZoomed(false);
  }

  /** Ponto da imagem sob o ponteiro, em %, para o zoom seguir a mao. */
  function follow(event: React.PointerEvent<HTMLElement> | React.MouseEvent<HTMLElement>) {
    const box = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - box.left) / box.width) * 100;
    const y = ((event.clientY - box.top) / box.height) * 100;
    setOrigin(`${Math.min(100, Math.max(0, x))}% ${Math.min(100, Math.max(0, y))}%`);
  }

  // clique fora da imagem e dos botoes fecha
  function onBackdrop(event: React.MouseEvent<HTMLDialogElement>) {
    if (event.target instanceof HTMLElement && event.target.hasAttribute("data-backdrop")) dialog.current?.close();
  }

  return (
    <>
      {image && (
        <figure>
          <Thumb screen={image} sizes={FULL} onOpen={(from) => open(0, from)} />
        </figure>
      )}

      {gallery.length > 0 && (
        <ul className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
          {gallery.map((shot, index) => {
            // numero impar de telas: a ultima ocupa a linha toda, sem buraco ao lado
            const wide = index === gallery.length - 1 && index % 2 === 0;
            return (
              <li key={shot.src} className={wide ? "sm:col-span-2" : undefined}>
                <figure className="flex flex-col gap-2.5">
                  <Thumb screen={shot} sizes={wide ? FULL : HALF} onOpen={(from) => open(index + offset, from)} />
                  {shot.caption && <figcaption className="text-[0.8125rem] text-muted">{shot.caption}</figcaption>}
                </figure>
              </li>
            );
          })}
        </ul>
      )}

      <dialog
        ref={dialog}
        aria-label={text.label.replace("{title}", title)}
        onClick={onBackdrop}
        data-lenis-prevent
        className="viewer fixed inset-0 m-0 h-full max-h-none w-full max-w-none flex-col overscroll-contain bg-black/85 p-0 text-white backdrop-blur-md backdrop:bg-transparent open:flex"
      >
        <div data-backdrop className="flex items-center justify-end gap-1 p-3 sm:p-4">
          <button
            type="button"
            onClick={() => {
              setOrigin("50% 50%");
              setZoomed((value) => !value);
            }}
            aria-label={zoomed ? text.zoomOut : text.zoomIn}
            className={viewerButton}
          >
            {zoomed ? <ZoomOut strokeWidth={1.75} /> : <ZoomIn strokeWidth={1.75} />}
          </button>
          <button
            type="button"
            ref={closeButton}
            onClick={() => dialog.current?.close()}
            aria-label={text.close}
            className={viewerButton}
          >
            <X strokeWidth={1.75} />
          </button>
        </div>

        <div data-backdrop className="flex min-h-0 flex-1 items-center justify-center px-4 sm:px-6">
          {shown && (
            // a key reinicia a entrada a cada tela
            <div
              key={shown.src}
              onClick={(event) => {
                if (!zoomed) follow(event);
                setZoomed((value) => !value);
              }}
              onPointerMove={(event) => zoomed && follow(event)}
              style={{ touchAction: zoomed ? "none" : undefined }}
              className={cn(
                "viewer-in relative overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10",
                zoomed ? "cursor-zoom-out" : "cursor-zoom-in"
              )}
            >
              <Image
                src={shown.src}
                alt={shown.alt}
                width={shown.width}
                height={shown.height}
                // fonte com folga para o zoom de 2x continuar nitido
                sizes="200vw"
                style={{
                  // o maior tamanho que cabe entre as barras, na proporcao da tela (amplia as pequenas)
                  width: `min(calc(100vw - var(--gutter)), calc((100dvh - 11rem) * ${shown.width / shown.height}))`,
                  transform: zoomed ? "scale(2)" : undefined,
                  transformOrigin: origin,
                }}
                className="block h-auto transition-transform duration-500 ease-out-expo select-none [--gutter:2rem] motion-reduce:transition-none sm:[--gutter:3rem]"
                draggable={false}
              />
            </div>
          )}
        </div>

        <div data-backdrop className="flex flex-col items-center gap-1.5 px-4 pt-3 pb-4 text-center">
          {shown && (
            <p aria-live="polite" className="max-w-[48ch] text-[0.9375rem] text-white/85">
              {shown.caption ?? shown.alt}
            </p>
          )}
          {many && (
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => go(-1)} aria-label={text.previous} className={viewerButton}>
                <ChevronLeft strokeWidth={1.75} />
              </button>
              <span className="tabular min-w-[4.5rem] text-[0.8125rem] text-white/50">
                {text.count.replace("{n}", String((current ?? 0) + 1)).replace("{total}", String(screens.length))}
              </span>
              <button type="button" onClick={() => go(1)} aria-label={text.next} className={viewerButton}>
                <ChevronRight strokeWidth={1.75} />
              </button>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
