import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-32 w-full resize-y rounded-xl bg-white/[0.03] px-4 py-3 text-sm text-white ring-1 ring-inset ring-white/10 outline-none transition-all duration-300",
        "placeholder:text-white/25",
        "hover:bg-white/[0.05] focus-visible:bg-white/[0.05] focus-visible:ring-[#8B5CF6]/40",
        "disabled:pointer-events-none disabled:opacity-50",
        "aria-invalid:ring-red-500/50 aria-invalid:focus-visible:ring-red-500/60",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
