"use client"

import { Toaster as Sonner } from "sonner"

/** Toaster do site: mesmo vidro escuro / accent roxo dos GlassCards. */
function Toaster({ ...props }: React.ComponentProps<typeof Sonner>) {
  return (
    <Sonner
      theme="dark"
      // topo/centro: o form fica no meio da pagina, o canto inferior passava batido
      position="top-center"
      duration={8000}
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "rounded-xl border-0 bg-black/80 text-white ring-1 ring-inset ring-white/10 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(139,92,246,0.55)]",
          title: "text-sm font-semibold",
          description: "text-white/60",
          success: "ring-[#8B5CF6]/40",
          error: "ring-red-500/40",
          closeButton:
            "bg-white/10 text-white/70 ring-1 ring-inset ring-white/15 hover:bg-white/20 hover:text-white",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
