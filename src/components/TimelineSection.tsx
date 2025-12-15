import { useEffect, useRef, useState } from "react";
import { Sparkles, Target, Rocket, Award, Users, TrendingUp } from "lucide-react";

const TimelineSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeCircles, setActiveCircles] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);

  const timelineItems = [
    {
      icon: Sparkles,
      title: "Master the Fundamentals",
      description: "Learn industry-standard editing techniques from scratch with hands-on practice",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Target,
      title: "Build Your Portfolio",
      description: "Create stunning projects that showcase your skills to potential clients",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Rocket,
      title: "Launch Your Career",
      description: "Get placement assistance and start earning as a professional video editor",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Award,
      title: "Earn Certification",
      description: "Receive industry-recognized certification to boost your credibility",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Users,
      title: "Join the Community",
      description: "Network with fellow editors and collaborate on exciting projects",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: TrendingUp,
      title: "Scale Your Income",
      description: "Learn advanced techniques to command premium rates in the market",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;

      // More precise line progress calculation
      let scrollProgress = 0;
      
      if (sectionTop <= windowHeight * 0.8) {
        const scrolledIntoView = (windowHeight * 0.8 - sectionTop);
        const totalScrollDistance = sectionHeight + (windowHeight * 0.8);
        scrollProgress = Math.min(1, Math.max(0, scrolledIntoView / totalScrollDistance));
      }
      

      
      // Smooth line animation with easing
      const easedProgress = scrollProgress * scrollProgress * (3 - 2 * scrollProgress); // Smoothstep easing
      
      if (lineRef.current) {
        lineRef.current.style.height = `${easedProgress * 100}%`;
        lineRef.current.style.transition = 'height 0.1s ease-out';
      }
      if (mobileLineRef.current) {
        mobileLineRef.current.style.height = `${easedProgress * 100}%`;
        mobileLineRef.current.style.transition = 'height 0.1s ease-out';
      }

      // Check which cards and circles should be visible/active
      const cards = sectionRef.current.querySelectorAll('.timeline-card');
      const newVisibleCards: number[] = [];
      const newActiveCircles: number[] = [];

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const cardTop = cardRect.top;
        const cardMiddle = cardRect.top + cardRect.height / 2;
        
        // Card visibility (earlier trigger)
        if (cardMiddle < windowHeight * 0.8) {
          newVisibleCards.push(index);
        }
        
        // Circle activation (when line reaches it)
        const circlePosition = cardTop + (cardRect.height / 2);
        if (circlePosition <= windowHeight * 0.6) {
          newActiveCircles.push(index);
        }
      });

      setVisibleCards(newVisibleCards);
      setActiveCircles(newActiveCircles);
    };

    // Use requestAnimationFrame for smoother animations
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', smoothScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', smoothScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 gradient-text-hero-silver-yellow">
            Your Journey to Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow the proven path that has helped hundreds of students become professional video editors
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Center Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-border/50 overflow-hidden z-0 rounded-full">
            <div 
              ref={lineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/70 shadow-[0_0_10px_rgba(255,215,0,0.5)] rounded-full"
              style={{ height: '0%' }}
            />
          </div>

          {/* Left Line - Mobile */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-1 bg-border/50 overflow-hidden z-0 rounded-full">
            <div 
              ref={mobileLineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/70 shadow-[0_0_8px_rgba(255,215,0,0.4)] rounded-full"
              style={{ height: '0%' }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12 lg:space-y-16">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              const isVisible = visibleCards.includes(index);

              return (
                <div
                  key={index}
                  className={`timeline-card relative flex items-center ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-row gap-6 lg:gap-8`}
                >
                  {/* Mobile Number */}
                  <div className={`lg:hidden relative flex-shrink-0 w-12 h-12 rounded-full bg-background border-4 flex items-center justify-center transition-all duration-700 z-20 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-50'
                  } ${
                    activeCircles.includes(index) 
                      ? 'border-primary shadow-[0_0_20px_rgba(255,215,0,0.6)]' 
                      : 'border-primary/30'
                  }`}>
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.bgColor} flex items-center justify-center transition-all duration-500 ${
                      activeCircles.includes(index) ? 'shadow-[0_0_15px_rgba(255,215,0,0.4)]' : ''
                    }`}>
                      <span className={`text-sm font-bold ${item.color} transition-all duration-500 ${
                        activeCircles.includes(index) ? 'scale-110' : ''
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className={`flex-1 lg:w-[calc(50%-3rem)] transform transition-all duration-700 ${
                      isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${isLeft ? 'lg:-translate-x-12' : 'lg:translate-x-12'} translate-y-4 lg:translate-y-0`
                    }`}
                  >
                    <div className={`bg-card border border-border rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-shadow duration-300 ${
                      isLeft ? 'lg:text-right' : 'lg:text-left'
                    }`}>
                      <div className={`flex items-center gap-4 mb-4 ${
                        isLeft ? 'lg:flex-row-reverse lg:justify-start' : 'lg:flex-row'
                      } flex-row`}>
                        <div className={`hidden lg:flex ${item.bgColor} p-3 rounded-full`}>
                          <Icon className={`w-6 h-6 ${item.color}`} />
                        </div>
                        <h3 className="text-xl lg:text-2xl font-bold gradient-text-hero-silver-yellow">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-base lg:text-lg">{item.description}</p>
                    </div>
                  </div>

                  {/* Center Dot - Desktop Only */}
                  <div className={`hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  }`}>
                    {/* Outer circle with background color to mask the line */}
                    <div className={`w-12 h-12 rounded-full bg-background border-4 flex items-center justify-center shadow-lg transition-all duration-500 ${
                      activeCircles.includes(index) 
                        ? 'border-primary shadow-[0_0_25px_rgba(255,215,0,0.8)]' 
                        : 'border-primary/20'
                    }`}>
                      {/* Inner circle with gradient background */}
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${item.bgColor} flex items-center justify-center transition-all duration-500 ${
                        activeCircles.includes(index) ? 'shadow-[0_0_15px_rgba(255,215,0,0.4)] scale-110' : ''
                      }`}>
                        <span className={`text-xs font-bold ${item.color} transition-all duration-500 ${
                          activeCircles.includes(index) ? 'scale-110' : ''
                        }`}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for the other side - Desktop Only */}
                  <div className="hidden lg:block w-[calc(50%-3rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
