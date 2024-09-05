import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300 ",
  {
    variants: {
      variant: {
        default:
          "text-text bg-primary dark:text-[#111827]  hover:bg-zinc-900/90 dark:bg-zinc-50  dark:hover:bg-zinc-50/90",
      },
      size: {
        default: "h-10 px-4 py-2 shadow-retro",
        sm: "h-9 rounded-md px-3 shadow-retro-sm",
        lg: "h-11 rounded-md px-8 shadow-retro-lg",
        icon: "h-10 w-10 shadow-retro-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const ButtonRetro = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
ButtonRetro.displayName = "Button";

export { ButtonRetro, buttonVariants };
