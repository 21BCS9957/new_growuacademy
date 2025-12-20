import { Play, Map, Settings, Palette, Bot, DollarSign } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const BenefitsSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.1 });
  const cardsRef = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: <Play className="w-12 h-12 text-primary" />,
      title: "What Is Video Editing",
      description: "Understand what editing actually means — and learn how storytelling, emotion, and flow are created inside a video."
    },
    {
      icon: <Map className="w-12 h-12 text-primary" />,
      title: "How To Start",
      description: "A clear beginner roadmap to start learning without confusion or wasted effort."
    },
    {
      icon: <Settings className="w-12 h-12 text-primary" />,
      title: "Which Software First",
      description: "Guidance to choose the right software without getting stuck in comparisons."
    },
    {
      icon: <Palette className="w-12 h-12 text-primary" />,
      title: "Design & Color",
      description: "Learn how composition, typography, and color theory make videos look professional."
    },
    {
      icon: <Bot className="w-12 h-12 text-primary" />,
      title: "Editing With AI",
      description: "Use AI tools for prompts, visuals, and speed — without losing creative control."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: "Monetize Editing Skills",
      description: "How to turn editing skills into income through clients, jobs, and projects."
    }
  ];

  return (
    <section ref={sectionRef as any} className="py-12 sm:py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 gradient-text-hero-silver-yellow">
            What Will You Gain From This Session?
          </h2>
        </div>

        <div ref={cardsRef as any} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto animate-stagger">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-background border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:border-primary/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 mx-auto sm:mx-0">
                  {benefit.icon}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold gradient-text-hero-silver-yellow mb-3 sm:mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;