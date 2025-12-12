import { Button } from "@/components/ui/button";
import { Loader } from "@/components/ui/loader";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LoadingButtonProps extends React.ComponentProps<typeof Button> {
  href?: string;
  target?: string;
  rel?: string;
  loadingText?: string;
  showLoadingText?: boolean;
}

const LoadingButton = ({ 
  children, 
  href, 
  target, 
  rel, 
  className,
  loadingText,
  showLoadingText = false,
  onClick,
  ...props 
}: LoadingButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      setIsLoading(true);
      try {
        await onClick(e);
      } finally {
        setIsLoading(false);
      }
    } else if (href) {
      setIsLoading(true);
      // Small delay to show loading state before navigation
      setTimeout(() => {
        window.open(href, target || '_self', rel ? `noopener noreferrer` : undefined);
        setIsLoading(false);
      }, 300);
    }
  };

  return (
    <Button
      {...props}
      className={cn(className)}
      disabled={isLoading || props.disabled}
      onClick={handleClick}
    >
      {isLoading && <Loader size="sm" className="mr-2" />}
      {isLoading && showLoadingText ? loadingText : children}
    </Button>
  );
};

export { LoadingButton };