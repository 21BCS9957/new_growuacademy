import { LoadingButton } from "@/components/LoadingButton";
import { Clock, Users, AlertTriangle } from "lucide-react";
import { useState, useEffect } from "react";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-2 right-2 sm:left-0 sm:right-0 z-50 bg-destructive/95 border-t border-destructive-foreground/15 shadow-2xl rounded-t-lg sm:rounded-none">
      <div className="container mx-auto px-2 sm:px-4 py-3 sm:py-4">
        <div className="flex flex-row items-center justify-between gap-2 sm:gap-3">
          
          {/* Urgency Message */}
          <div className="flex items-center gap-1 sm:gap-2">
            <AlertTriangle className="w-4 h-4 sm:w-6 sm:h-6 text-destructive-foreground animate-pulse" />
            <div className="flex items-center gap-1 sm:gap-2 text-destructive-foreground">
              <Users className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="font-bold text-xs sm:text-sm">ONLY 2 SEATS LEFT!</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-destructive-foreground" />
            <div className="flex gap-1 sm:gap-1.5">
              {[
                { label: 'H', value: timeLeft.hours },
                { label: 'M', value: timeLeft.minutes },
                { label: 'S', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-0.5">
                  <div className="bg-destructive-foreground text-destructive font-bold text-xs px-2 py-1 rounded min-w-[1.5rem]">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-destructive-foreground/80 text-[8px] sm:text-xs">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <LoadingButton 
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xs px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full whitespace-nowrap"
            href="https://growumedia.notion.site/232ffe2f0dd98051a031cc204a646383?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK NOW
          </LoadingButton>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;