import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-space-grotesk font-medium text-[clamp(1.25rem,0.95rem+1.6vw,1.75rem)] transition-all duration-200 transform-gpu hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-sm hover:shadow-md [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        light:
          "bg-[linear-gradient(0deg,_var(--color-accent)_0%,_color-mix(in_srgb,var(--color-accent)_40%,_var(--color-primary))_40%,_var(--color-primary)_100%)] text-[var(--color-secondary)] hover:brightness-105 focus-visible:ring-[var(--color-primary)]",
        dark:
          "bg-[linear-gradient(180deg,_#7a7a7a_0%,_#2d2d2d_50%,_#1a1a1a_100%)] text-white hover:brightness-110 focus-visible:ring-[var(--color-white)]",
      },
      size: {
        default: "h-10 px-10 py-6",
        sm: "h-8 px-3 py-1.5 text-sm",
        lg: "h-12 px-10 py-6 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type ?? "button"}
        data-slot="button"
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
