import { cn } from "@/lib/utils"

/** Campo calmo: fundo levemente elevado, contorno que ganha a cor de destaque no foco. */
export const fieldClasses = cn(
  "w-full rounded-xl bg-raised/60 px-3.5 text-[0.9375rem] text-ink shadow-[inset_0_0_0_1px_var(--line)] outline-none transition-[background-color,box-shadow] duration-200 ease-out-expo",
  "placeholder:text-muted",
  "hover:shadow-[inset_0_0_0_1px_var(--raised-strong)]",
  "focus-visible:bg-bg focus-visible:shadow-[inset_0_0_0_1px_var(--accent),0_0_0_4px_color-mix(in_oklab,var(--accent)_16%,transparent)] focus-visible:outline-none",
  "disabled:pointer-events-none disabled:opacity-50",
  "aria-invalid:shadow-[inset_0_0_0_1px_var(--danger)] aria-invalid:focus-visible:shadow-[inset_0_0_0_1px_var(--danger),0_0_0_4px_color-mix(in_oklab,var(--danger)_16%,transparent)]"
)

function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      data-slot="input"
      type={type}
      className={cn(fieldClasses, "h-11", className)}
      {...props}
    />
  )
}

export { Input }
