import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",
        secondary:
          "bg-secondary text-secondary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground",
        outline: 
          "border border-border text-foreground bg-transparent",
        success:
          "bg-mint text-emerald-dark",
        warning:
          "bg-amber-100 text-amber-800",
        urgent:
          "bg-red-100 text-red-700 animate-pulse",
        glass:
          "bg-white/60 backdrop-blur-sm border border-white/40 text-foreground",
        emerald:
          "bg-emerald/10 text-emerald border border-emerald/20",
        mint:
          "bg-mint text-emerald-dark border border-emerald/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
