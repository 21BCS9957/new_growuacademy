import * as React from "react"
import { cn } from "@/lib/utils"

interface MarqueeProps {
  children: React.ReactNode
  className?: string
  speed?: "slow" | "normal" | "fast"
  direction?: "left" | "right"
  pauseOnHover?: boolean
}

const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  ({ children, className, speed = "normal", direction = "left", pauseOnHover = true }, ref) => {
    const speedClasses = {
      slow: "animate-marquee-slow",
      normal: "animate-marquee",
      fast: "animate-marquee-fast"
    }

    const directionClass = direction === "right" ? "reverse" : ""

    return (
      <div 
        ref={ref}
        className={cn("relative overflow-hidden", className)}
      >
        <div 
          className={cn(
            "flex w-max",
            speedClasses[speed],
            directionClass,
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {/* First set of items */}
          <div className="flex shrink-0">
            {children}
          </div>
          {/* Duplicate for seamless loop */}
          <div className="flex shrink-0">
            {children}
          </div>
        </div>
      </div>
    )
  }
)

Marquee.displayName = "Marquee"

export { Marquee }