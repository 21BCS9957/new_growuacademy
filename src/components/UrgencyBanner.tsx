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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-destructive/95 border-t border-destructive-foreground/15 shadow-2xl">
      <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-3">
          
          {/* Urgency Message */}
          <div className="flex items-center gap-2 sm:gap-3">
            <AlertTriangle className="w-6 h-6 sm:w-7 sm:h-7 text-destructive-foreground animate-pulse" />
            <div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-destructive-foreground">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-bold text-sm sm:text-base">ONLY 2 SEATS LEFT!</span>
              </div>
              <p className="text-destructive-foreground/80 text-xs sm:text-sm">
                Don't miss this limited-time offer
              </p>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-destructive-foreground" />
              <span className="text-destructive-foreground font-semibold text-xs sm:text-sm">Offer ends in:</span>
            </div>
            
            <div className="flex gap-1.5 sm:gap-2">
              {[
                { label: 'HRS', value: timeLeft.hours },
                { label: 'MIN', value: timeLeft.minutes },
                { label: 'SEC', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-destructive-foreground text-destructive font-bold text-sm sm:text-base px-2.5 sm:px-3 py-0.5 sm:py-1 rounded min-w-[2.5rem] sm:min-w-[3rem]">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-destructive-foreground/80 text-[10px] sm:text-xs mt-0.5 sm:mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <LoadingButton 
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-2.5 rounded-full whitespace-nowrap"
            href="https://growumedia.notion.site/232ffe2f0dd98051a031cc204a646383?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
          >
            BOOK NOW @ ₹Free
          </LoadingButton>
        </div>
      </div>
    </div>
  );
};

export default UrgencyBanner;