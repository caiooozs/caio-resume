import { cn } from "@/lib/utils"
import { fieldClasses } from "./input"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(fieldClasses, "min-h-40 resize-y py-3 leading-relaxed", className)}
      {...props}
    />
  )
}

export { Textarea }
