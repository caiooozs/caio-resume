import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Controles sao pilulas. default = tinta (preto no claro, branco no escuro),
 * ghost = so texto com fundo no hover, outline = contorno fino.
 * Use buttonVariants direto num <Link>/<a> para nao aninhar <button> em <a>.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full text-sm font-medium whitespace-nowrap outline-none select-none transition-[background-color,color,box-shadow,scale] duration-200 ease-out-expo active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-bg shadow-[0_1px_2px_rgb(0_0_0/0.12),inset_0_1px_0_rgb(255_255_255/0.08)] hover:bg-ink/88",
        outline:
          "text-ink shadow-[inset_0_0_0_1px_var(--line)] hover:bg-raised hover:shadow-[inset_0_0_0_1px_var(--raised-strong)]",
        ghost: "text-muted hover:bg-raised hover:text-ink",
        link: "rounded-none px-0 text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-accent active:scale-100",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 gap-1.5 px-3 text-[0.8125rem]",
        lg: "h-10 px-5",
        icon: "size-9",
        "icon-sm": "size-8 [&_svg:not([class*='size-'])]:size-[15px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
