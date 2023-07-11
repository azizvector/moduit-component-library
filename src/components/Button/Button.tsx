import React from "react";
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "../../utils"
import "../../index.css"

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
    {
        variants: {
            variant: {
                default: "border-transparent text-white",
                outline: "border hover:text-white",
                ghost: "border-transparent hover:text-white",
                link: "underline-offset-4 hover:underline",
            },
            colors: {
                default: "bg-[#4A4A4A] hover:bg-[#6E6E6E]",
                primary: "bg-[#034EA1] hover:bg-[#023771]",
                secondary: "bg-[#00B1CD] hover:bg-[#008EA4]",
                success: "bg-[#4FBF32] hover:bg-[#3F9928]",
                warning: "bg-[#FF9800] hover:bg-[#E68900]",
                danger: "bg-[#CB3A31] hover:bg-[#D5615A]",
                accent: "bg-[#F4BB45] hover:bg-[#DCA83E]",
                info: "bg-[#3682D5] hover:bg-[#2B68AA]",
            },
            size: {
                default: "h-10 py-2 px-4",
                sm: "h-9 px-3 rounded-md",
                lg: "h-11 px-8 rounded-md",
                icon: "h-10 w-10",
            },
        },
        compoundVariants: [
            {
                variant: "outline",
                colors: "primary",
                class: "bg-transparent border-[#034EA1] text-[#034EA1] hover:bg-[#023771]",
            },
            {
                variant: "ghost",
                colors: "primary",
                class: "bg-transparent border-[#034EA1] text-[#034EA1] hover:bg-[#034EA1]",
            },
            {
                variant: "link",
                colors: "primary",
                class: "bg-transparent text-[#034EA1]",
            },
        ],
        defaultVariants: {
            variant: "default",
            colors: "default",
            size: "default",
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, colors, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, colors, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)

Button.displayName = "Button"

export default Button;
