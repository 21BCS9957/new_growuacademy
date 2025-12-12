import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

const ModernProgress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: number; variant?: "default" | "gradient" | "striped" | "glow" }
>(({ className, value = 0, variant = "gradient", ...props }, ref) => {
  const variants = {
    default: "bg-primary",
    gradient: "bg-gradient-to-r from-primary via-primary/90 to-primary/70",
    striped: "bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-[length:20px_20px] animate-[stripe_1s_linear_infinite]",
    glow: "bg-gradient-to-r from-primary via-primary to-primary/80 shadow-[0_0_15px_rgba(255,215,0,0.5)]"
  };

  return (
    <div
      ref={ref}
      className={cn("relative w-full h-3 bg-muted/50 rounded-full overflow-hidden backdrop-blur-sm border border-border/50", className)}
      {...props}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      {/* Progress bar */}
      <div 
        className={cn(
          "absolute top-0 left-0 h-full rounded-full transition-all duration-700 ease-out",
          variants[variant]
        )}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      >
        {/* Shimmer effect */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{ 
            backgroundSize: '200% 100%',
            animation: 'shimmer 2s infinite'
          }}
        />
        
        {/* Pulse effect at the end */}
        <div className="absolute right-0 top-0 h-full w-2 bg-white/40 blur-sm animate-pulse" />
      </div>
      
      {/* Animated dots */}
      <div className="absolute inset-0 flex items-center justify-end pr-1">
        <div 
          className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"
          style={{ marginRight: `${100 - Math.min(100, Math.max(0, value))}%` }}
        />
      </div>
    </div>
  );
});
ModernProgress.displayName = "ModernProgress";

export { Progress, ModernProgress }
