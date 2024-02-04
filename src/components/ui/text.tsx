import { HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface TextProps extends HTMLAttributes<HTMLHeadingElement> {
  type?: "h1" | "h2" | "h3" | "h4" | "p"
  variant?: "muted" | "default"
}
export const Text = ({
  type = "p",
  className,
  variant = "default",
  children,
}: TextProps) => {
  return (
    <div
      className={cn(
        type === "h1" &&
          "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        type === "h2" &&
          "scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0",
        type === "h3" && "scroll-m-20 text-2xl font-semibold tracking-tight",
        type === "h4" && "scroll-m-20 text-xl font-semibold tracking-tight",
        type === "p" && "leading-7 [&:not(:first-child)]:mt-6",
        variant === "muted" && "text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  )
}
