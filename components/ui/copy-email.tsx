"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n/client";

/** E-mail como link, com um botao ao lado que copia e confirma com um check. */
export function CopyEmail({ email, className }: { email: string; className?: string }) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const reduce = useReducedMotion();
  const { t } = useI18n();

  useEffect(() => () => clearTimeout(timer.current), []);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  const icon = {
    initial: reduce ? false : { opacity: 0, scale: 0.6, filter: "blur(2px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: reduce ? { opacity: 0 } : { opacity: 0, scale: 0.6, filter: "blur(2px)" },
    transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] as const },
  };

  return (
    <span className={cn("inline-flex items-center gap-1", className)}>
      <a href={`mailto:${email}`} className="text-link text-sm text-ink">
        {email}
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={copied ? t.email.copied : t.email.copy}
        className="relative inline-flex size-7 cursor-pointer items-center justify-center rounded-full text-muted transition-[background-color,color,scale] duration-200 ease-out-expo hover:bg-raised hover:text-ink active:scale-90"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {copied ? (
            <motion.span key="check" {...icon} className="text-accent-ink">
              <Check className="size-3.5" strokeWidth={2} />
            </motion.span>
          ) : (
            <motion.span key="copy" {...icon}>
              <Copy className="size-3.5" strokeWidth={1.75} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
      <span role="status" className="sr-only">
        {copied ? t.email.copiedStatus : ""}
      </span>
    </span>
  );
}
