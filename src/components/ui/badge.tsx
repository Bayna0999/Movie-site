import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { MdNavigateNext } from "react-icons/md";
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md px-2  text-xs font-medium  w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
  <div className="flex gap-3 border-[1px] border-[#E4E4E7] h-[20px]  rounded-md justify-center items-center">
    <Comp
      data-slot="badge"
      className={`${cn(badgeVariants({ variant }), className) } `}
      {...props}
      
    ></Comp>
<MdNavigateNext className="" />
    </div>
    
    
 
    
  )
}

export { Badge, badgeVariants }
