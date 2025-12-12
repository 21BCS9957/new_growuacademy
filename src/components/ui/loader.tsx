import { cn } from "@/lib/utils";

interface LoaderProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Loader = ({ className, size = "md" }: LoaderProps) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2", 
    lg: "w-8 h-8 border-[3px]"
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-primary/20 border-t-primary",
        sizeClasses[size],
        className
      )}
    />
  );
};

export { Loader };