"use client";

import { createContext, useContext, useId, useState, useSyncExternalStore } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

/**
 * Linhas que abrem no lugar (accordion). O conteudo continua sendo do
 * servidor: aqui so guardamos quais linhas estao abertas e as ligamos ao hash
 * da URL, para /projects#countries-app chegar com a linha aberta.
 * Cada item marca data-open; a altura e a entrada do conteudo sao do CSS
 * ([data-panel] em globals.css), que respeita o movimento reduzido.
 */

/* ---------------------------------- hash ---------------------------------- */

const HASH_EVENT = "disclosure:hash";

function subscribeHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  window.addEventListener(HASH_EVENT, onChange);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener(HASH_EVENT, onChange);
  };
}

const readHash = () => decodeURIComponent(window.location.hash.slice(1));
const noHash = () => "";

/** Troca o hash sem novo item no historico (e sem rolar a pagina). */
function writeHash(id: string) {
  const { pathname, search } = window.location;
  window.history.replaceState(window.history.state, "", id ? `#${id}` : pathname + search);
  window.dispatchEvent(new Event(HASH_EVENT));
}

/* --------------------------------- grupo ---------------------------------- */

type GroupValue = {
  ids: string[];
  isOpen: (id: string) => boolean;
  toggle: (id: string) => void;
  setAll: (open: boolean) => void;
};

const GroupContext = createContext<GroupValue | null>(null);

function useGroup() {
  const value = useContext(GroupContext);
  if (!value) throw new Error("Disclosure precisa estar dentro do DisclosureGroup");
  return value;
}

export function DisclosureGroup({ ids, children }: { ids: string[]; children: React.ReactNode }) {
  const [open, setOpen] = useState<ReadonlySet<string>>(() => new Set());
  // a linha do hash fica aberta enquanto o hash apontar para ela
  const hash = useSyncExternalStore(subscribeHash, readHash, noHash);

  const isOpen = (id: string) => open.has(id) || hash === id;

  function toggle(id: string) {
    if (isOpen(id)) {
      setOpen((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      if (hash === id) writeHash("");
    } else {
      setOpen((prev) => new Set(prev).add(id));
      writeHash(id);
    }
  }

  function setAll(value: boolean) {
    setOpen(value ? new Set(ids) : new Set());
    if (!value && ids.includes(hash)) writeHash("");
  }

  return (
    <GroupContext.Provider value={{ ids, isOpen, toggle, setAll }}>{children}</GroupContext.Provider>
  );
}

/** Abrir todos / fechar todos: um ghost pill acima da lista. */
export function DisclosureToggleAll({
  expandLabel,
  collapseLabel,
  className,
}: {
  expandLabel: string;
  collapseLabel: string;
  className?: string;
}) {
  const { ids, isOpen, setAll } = useGroup();
  const allOpen = ids.every(isOpen);

  return (
    <button
      type="button"
      onClick={() => setAll(!allOpen)}
      className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "-mr-3", className)}
    >
      {allOpen ? collapseLabel : expandLabel}
      <ChevronDown
        aria-hidden
        strokeWidth={1.75}
        className={cn("transition-transform duration-200 ease-out-expo", allOpen && "rotate-180")}
      />
    </button>
  );
}

/* ---------------------------------- item ---------------------------------- */

type ItemValue = { open: boolean; toggle: () => void; buttonId: string; panelId: string };

const ItemContext = createContext<ItemValue | null>(null);

function useItem() {
  const value = useContext(ItemContext);
  if (!value) throw new Error("Disclosure precisa estar dentro do DisclosureItem");
  return value;
}

/** Uma linha: o <li> com o id do hash e data-open para o CSS. */
export function DisclosureItem({
  id,
  className,
  style,
  children,
}: {
  id: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  const { isOpen, toggle } = useGroup();
  const uid = useId();
  const open = isOpen(id);

  return (
    <ItemContext.Provider
      value={{ open, toggle: () => toggle(id), buttonId: `${uid}-button`, panelId: `${uid}-panel` }}
    >
      <li id={id} data-open={open || undefined} className={cn("group/item", className)} style={style}>
        {children}
      </li>
    </ItemContext.Provider>
  );
}

/** O controle da linha: vai dentro do titulo (padrao de accordion). */
export function DisclosureButton({ className, children }: { className?: string; children: React.ReactNode }) {
  const { open, toggle, buttonId, panelId } = useItem();

  return (
    <button
      type="button"
      id={buttonId}
      aria-expanded={open}
      aria-controls={panelId}
      onClick={toggle}
      className={cn("cursor-pointer text-left", className)}
    >
      {children}
    </button>
  );
}

/** O conteudo que abre. Fechado, fica no DOM (vem do servidor), mas inerte. */
export function DisclosurePanel({ className, children }: { className?: string; children: React.ReactNode }) {
  const { open, buttonId, panelId } = useItem();

  return (
    <div id={panelId} role="region" aria-labelledby={buttonId} data-panel inert={!open} className={className}>
      {children}
    </div>
  );
}
