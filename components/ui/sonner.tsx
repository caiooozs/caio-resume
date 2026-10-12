"use client"

import { Toaster as Sonner } from "sonner"
import { useTheme } from "@/lib/theme"

/** Toasts no tom do site: superficie do tema, borda fina, icone na cor do status. */
function Toaster({ ...props }: React.ComponentProps<typeof Sonner>) {
  const theme = useTheme()

  return (
    <Sonner
      theme={theme}
      // topo/centro: o form fica no meio da pagina, o canto inferior passava batido
      position="top-center"
      duration={8000}
      closeButton
      toastOptions={{
        classNames: {
          toast:
            "rounded-2xl border border-line bg-bg font-sans text-ink shadow-[0_12px_32px_-8px_rgb(0_0_0/0.18)]",
          title: "text-[0.9375rem] font-medium",
          description: "text-muted",
          success: "[&_[data-icon]]:text-accent",
          error: "[&_[data-icon]]:text-danger",
          closeButton: "border-line bg-bg text-muted hover:bg-raised hover:text-ink",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
