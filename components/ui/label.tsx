import { cn } from "@/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "text-[11px] font-medium tracking-wide text-white/50 uppercase select-none",
        className
      )}
      {...props}
    />
  )
}

export { Label }
