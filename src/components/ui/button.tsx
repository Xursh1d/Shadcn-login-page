import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center shadow-sm justify-center whitespace-nowrap rounded-full w-full text-sm font-semibold ring-offset-white transition-all outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default: "bg-accent text-white hover:bg-accent/90 focus:ring-accent/50 ",
        outline: "border border-stroke bg-white hover:bg-stroke/10  focus:ring-stroke/50",
      },
      size: {
        default: "h-9 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, loading = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        disabled={loading}
        ref={ref}
        {...props}
      >
        {loading ? <span>Loading...</span> : children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
