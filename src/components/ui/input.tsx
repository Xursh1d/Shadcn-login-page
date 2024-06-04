import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"



const inputVariants = cva(
  "flex h-9 border-stroke w-full rounded-full border bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-secondary outline-none  transition-all focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 ",
  {
    variants: {
      variant: {
        default: "focus:ring-4 focus:ring-accent/10 focus:border-accent/30",
        error: "ring-4 ring-rose-50 border-rose-300",
      }
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
  VariantProps<typeof inputVariants> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <input
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
