import { LoadingButton } from "@/components/LoadingButton";
import { Clock, Users, AlertTriangle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 45
  });
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Timer effect
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

  // Scroll-based hide/show effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine scroll direction
      const scrollingDown = currentScrollY > lastScrollY && currentScrollY > 100;
      const scrollingUp = currentScrollY < lastScrollY;
      
      // Clear any existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      
      if (scrollingDown) {
        // Hide banner when scrolling down
        setIsVisible(false);
      } else if (scrollingUp) {
        // Show banner immediately when scrolling up
        setIsVisible(true);
      }
      
      // Always set a timeout to show the banner after scrolling stops
      // This will be cleared if user continues scrolling
      scrollTimeoutRef.current = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 bg-destructive/95 border-t border-destructive-foreground/15 shadow-2xl transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Urgency Message */}
          <div className="flex items-center gap-2 sm:gap-3">
            <AlertTriangle className="w-5 h-5 sm:w-7 sm:h-7 text-destructive-foreground animate-pulse" />
            <div className="flex items-center gap-2 sm:gap-3 text-destructive-foreground">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-bold text-sm sm:text-base">ONLY 2 SEATS LEFT!</span>
            </div>
          </div>

          {/* Countdown Timer */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-destructive-foreground" />
            <div className="flex gap-2 sm:gap-3">
              {[
                { label: 'H', value: timeLeft.hours },
                { label: 'M', value: timeLeft.minutes },
                { label: 'S', value: timeLeft.seconds }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-1">
                  <div className="bg-destructive-foreground text-destructive font-bold text-sm px-3 py-2 rounded min-w-[2rem] sm:min-w-[2.5rem]">
                    {item.value.toString().padStart(2, '0')}
                  </div>
                  <span className="text-destructive-foreground/80 text-xs sm:text-sm">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <LoadingButton 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3 rounded-full whitespace-nowrap"
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