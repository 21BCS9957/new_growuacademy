import { useEffect, useRef, useState } from "react";
import { Sparkles, Target, Rocket, Award, Users, TrendingUp } from "lucide-react";
import { LoadingButton } from "@/components/LoadingButton";

const TimelineSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [activeCircles, setActiveCircles] = useState<number[]>([]);
  const [ctaVisible, setCtaVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const mobileLineRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const timelineItems = [
    {
      icon: Sparkles,
      title: "Career Clarity",
      description: "Clear understanding of scope, roles, and growth paths in video editing.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Target,
      title: "AI-Powered Workflow",
      description: "How AI fits into a professional editing workflow to save time and scale output",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Rocket,
      title: "Quality Connections",
      description: "Connect with focused, like-minded editors for long-term growth.",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Verified masterclass certificate to strengthen your CV and profile.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      icon: Users,
      title: "Tools & Plugins",
      description: "Essential professional tools that speed up your editing workflow.",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: TrendingUp,
      title: "Bonus Resources",
      description: "10GB+ ready-to-use PNGs, music, SFX, and plugins.",
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !ctaRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const ctaRect = ctaRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const windowHeight = window.innerHeight;

      // Calculate line progress to stop at CTA top
      let scrollProgress = 0;
      
      if (sectionTop <= windowHeight * 0.8) {
        const scrolledIntoView = (windowHeight * 0.8 - sectionTop);
        const ctaTopRelativeToSection = ctaRect.top - sectionRect.top;
        const maxLineHeight = ctaTopRelativeToSection;
        const totalScrollDistance = maxLineHeight + (windowHeight * 0.4);
        scrollProgress = Math.min(1, Math.max(0, scrolledIntoView / totalScrollDistance));
      }

      // Smooth line animation with easing
      const easedProgress = scrollProgress * scrollProgress * (3 - 2 * scrollProgress);
      
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

      // CTA visibility
      const ctaMiddle = ctaRect.top + ctaRect.height / 2;
      setCtaVisible(ctaMiddle < windowHeight * 0.9);

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
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Center Line - Desktop: stops at CTA top */}
          <div className="hidden lg:block absolute left-1/2 top-0 w-1 -translate-x-1/2 bg-border/50 overflow-hidden z-0 rounded-full"
               style={{ height: ctaRef.current ? `${ctaRef.current.offsetTop}px` : '100%' }}>
            <div 
              ref={lineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/70 shadow-[0_0_10px_rgba(255,215,0,0.5)] rounded-full"
              style={{ height: '0%' }}
            />
          </div>

          {/* Left Line - Mobile: stops at CTA top */}
          <div className="lg:hidden absolute left-6 top-0 w-1 bg-border/50 overflow-hidden z-0 rounded-full"
               style={{ height: ctaRef.current ? `${ctaRef.current.offsetTop}px` : '100%' }}>
            <div 
              ref={mobileLineRef}
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/70 shadow-[0_0_8px_rgba(255,215,0,0.4)] rounded-full"
              style={{ height: '0%' }}
            />
          </div>

          {/* Timeline Items - Desktop Grid Layout */}
          <div className="space-y-12 lg:space-y-16">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isLeft = index % 2 === 0;
              const isVisible = visibleCards.includes(index);

              return (
                <div
                  key={index}
                  className={`timeline-card relative 
                    flex items-center flex-row gap-6
                    lg:grid lg:grid-cols-9 lg:gap-0 lg:items-center lg:min-h-[120px]`}
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
                      <span className={`text-sm font-bold gradient-text-hero-silver-yellow transition-all duration-500 ${
                        activeCircles.includes(index) ? 'scale-110' : ''
                      }`}>
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  {/* Card - Grid positioned to never cross center */}
                  <div
                    className={`flex-1 transform transition-all duration-700 
                      ${isLeft 
                        ? 'lg:col-start-1 lg:col-span-4 lg:pr-8' 
                        : 'lg:col-start-6 lg:col-span-4 lg:pl-8'
                      }
                      ${isVisible 
                        ? 'opacity-100 translate-x-0' 
                        : `opacity-0 ${isLeft ? 'lg:-translate-x-6' : 'lg:translate-x-6'} translate-y-4 lg:translate-y-0`
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

                  {/* Center Dot - Desktop Only: positioned at column 5 */}
                  <div className={`hidden lg:block lg:col-start-5 lg:col-span-1 lg:flex lg:justify-center lg:items-center z-20 transition-all duration-700 ${
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
                        <span className={`text-xs font-bold gradient-text-hero-silver-yellow transition-all duration-500 ${
                          activeCircles.includes(index) ? 'scale-110' : ''
                        }`}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* CTA Section - Terminal endpoint of timeline */}
            <div 
              ref={ctaRef}
              className={`-mt-6 lg:mt-20 transform transition-all duration-700 ${
                ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Mobile CTA - Connected directly to last timeline item */}
              <div className="lg:hidden flex items-start gap-6">
                {/* Mobile connection point - aligned with top of CTA card */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-[0_0_25px_rgba(255,215,0,0.8)] z-20 mt-0">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>
                
                {/* Mobile CTA Box - starts at same level as circle */}
                <div className="flex-1 bg-gradient-to-br from-card/90 to-card/95 border-2 border-primary/30 rounded-2xl p-6 backdrop-blur-sm shadow-[0_0_30px_rgba(255,215,0,0.15)] mt-0">
                  <h3 className="text-xl font-bold gradient-text-hero-silver-yellow mb-3">Ready to Start Your Journey?</h3>
                  <p className="text-muted-foreground mb-4 text-sm">Join our masterclass and transform your video editing skills today.</p>
                  <LoadingButton 
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold py-3 rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300"
                    href="https://growumedia.notion.site/232ffe2f0dd98051a031cc204a646383?pvs=105"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reserve Your Seat
                  </LoadingButton>
                </div>
              </div>

              {/* Desktop CTA - Center aligned with timeline */}
              <div className="hidden lg:grid lg:grid-cols-9 lg:gap-0 lg:items-center">
                <div className="lg:col-start-3 lg:col-span-5">
                  <div className="bg-gradient-to-br from-card/90 to-card/95 border-2 border-primary/30 rounded-2xl p-8 backdrop-blur-sm shadow-[0_0_30px_rgba(255,215,0,0.15)] text-center relative">
                    {/* Connection indicator at top center */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(255,215,0,0.6)] animate-pulse" />
                    
                    <h3 className="text-2xl lg:text-3xl font-bold gradient-text-hero-silver-yellow mb-4">Ready to Start Your Journey?</h3>
                    <p className="text-muted-foreground mb-6 text-lg max-w-md mx-auto">Join our masterclass and transform your video editing skills today.</p>
                    <LoadingButton 
                      size="lg"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-4 rounded-xl shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all duration-300 hover:scale-105"
                      href="https://growumedia.notion.site/232ffe2f0dd98051a031cc204a646383?pvs=105"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Reserve Your Seat
                    </LoadingButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
