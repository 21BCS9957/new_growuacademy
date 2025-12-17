import { ModernProgress } from "@/components/ui/progress";
import { LoadingButton } from "@/components/LoadingButton";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { User, Users, UserCheck, UserPlus, Flame } from "lucide-react";

const HeroSection = () => {
  const heroRef = useScrollAnimation({ threshold: 0.1 });
  const contentRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={heroRef as any} className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24">
      <div className="max-w-4xl mx-auto">
        
        {/* Text Content */}
        <div ref={contentRef as any} className="space-y-6 sm:space-y-8 text-center">
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-tight group cursor-default gradient-text-hero-silver-yellow hover:scale-105 transition-all duration-300 ease-out">
              Want To Build your<br/>Career in Video Editing ?
            </h1>
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed hover:text-foreground/80 transition-colors duration-300 cursor-default">
            <span className="inline-block hover:scale-105 transition-transform duration-200">Transform your skills</span>, <span className="inline-block hover:scale-105 transition-transform duration-200">advance your career</span>, and <span className="inline-block hover:scale-105 transition-transform duration-200">achieve your goals</span> with our comprehensive learning platform.
          </p>

          {/* Seats Progress Bar */}
          <div className="max-w-sm mx-auto bg-gradient-to-br from-card/80 via-card/90 to-card/95 rounded-2xl p-4 sm:p-5 shadow-[0_12px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_16px_50px_rgba(255,215,0,0.2)] transition-all duration-500 backdrop-blur-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-destructive animate-pulse" />
                <span className="text-sm sm:text-base font-bold gradient-text-primary">
                  Seats Filling Fast!
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-primary/15 px-3 py-1.5 rounded-full shadow-inner">
                <span className="text-sm sm:text-base font-black text-primary">13</span>
                <span className="text-xs text-muted-foreground">/</span>
                <span className="text-sm sm:text-base font-semibold text-muted-foreground">15</span>
              </div>
            </div>
            
            <ModernProgress value={86.67} variant="glow" className="h-4 shadow-inner" />
            
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
                <span className="text-xs sm:text-sm font-medium text-muted-foreground">86.67% Full</span>
              </div>
              <div className="flex items-center gap-1.5 bg-destructive/15 px-2.5 py-1 rounded-full shadow-inner">
                <span className="text-xs sm:text-sm font-bold text-destructive">Only 2 Left!</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <LoadingButton 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-full w-full sm:w-auto hover:scale-105 shadow-[0_0_18px_rgba(255,215,0,0.25)] hover:shadow-[0_0_28px_rgba(255,215,0,0.45)] focus:shadow-[0_0_28px_rgba(255,215,0,0.45)] active:shadow-[0_0_28px_rgba(255,215,0,0.45)] transition-all duration-300 ease-out"
              href="https://growumedia.notion.site/232ffe2f0dd98051a031cc204a646383?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start Learning Today
            </LoadingButton>
            <LoadingButton 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 lg:px-10 py-4 sm:py-5 lg:py-6 rounded-full w-full sm:w-auto hover:scale-105 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 ease-out hover:border-primary/50"
              href="https://growumedia.notion.site/232ffe2f0dd98051a031cc204a646383?pvs=105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Demo
            </LoadingButton>
          </div>

          {/* Social Proof - Student Avatars */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6 sm:pt-8">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 border-2 border-background flex items-center justify-center text-primary hover:scale-110 hover:rotate-6 transition-all duration-300 ease-out cursor-pointer">
                <User className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/50 border-2 border-background flex items-center justify-center text-primary hover:scale-110 hover:-rotate-6 transition-all duration-300 ease-out cursor-pointer">
                <Users className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/40 to-primary/60 border-2 border-background flex items-center justify-center text-primary hover:scale-110 hover:rotate-6 transition-all duration-300 ease-out cursor-pointer">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-primary/50 to-primary/70 border-2 border-background flex items-center justify-center text-primary hover:scale-110 hover:-rotate-6 transition-all duration-300 ease-out cursor-pointer">
                <UserPlus className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            </div>
            <div className="text-sm sm:text-base text-muted-foreground text-center hover:text-foreground/80 transition-colors duration-300">
              <div className="font-semibold hover:scale-105 transition-transform duration-200 inline-block">Join 200+ learners</div>
              <div className="hover:scale-105 transition-transform duration-200 inline-block">already growing with us</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection; 