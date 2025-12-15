import { Lightbulb, Target, Rocket, Trophy } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const BenefitsSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.1 });
  const cardsRef = useScrollAnimation({ threshold: 0.2 });

  const benefits = [
    {
      icon: <Lightbulb className="w-12 h-12 text-primary" />,
      title: "Master Professional Techniques",
      description: "Learn advanced editing workflows, color grading, and visual effects that industry professionals use daily."
    },
    {
      icon: <Target className="w-12 h-12 text-primary" />,
      title: "Build a Stunning Portfolio",
      description: "Create 5+ professional projects that showcase your skills to potential employers and clients."
    },
    {
      icon: <Rocket className="w-12 h-12 text-primary" />,
      title: "Launch Your Freelance Career",
      description: "Get the confidence and skills to start earning ₹25,000-50,000 per month as a freelance video editor."
    },
    {
      icon: <Trophy className="w-12 h-12 text-primary" />,
      title: "Land High-Paying Jobs",
      description: "Qualify for video editor positions starting from ₹3-8 LPA with our placement assistance program."
    }
  ];

  return (
    <section ref={sectionRef as any} className="py-12 sm:py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 sm:mb-6 gradient-text-hero-silver-yellow">
            What Will You Gain From This Session?
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Transform from beginner to job-ready video editor with tangible skills and career opportunities
          </p>
        </div>

        <div ref={cardsRef as any} className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto animate-stagger">
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

        <div className="text-center mt-12 sm:mt-16">
          <div className="bg-primary/10 border border-primary/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold gradient-text-hero-silver-yellow mb-4 sm:mb-6">
              Plus, You'll Receive:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-left">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground text-sm sm:text-base">Lifetime course materials access</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground text-sm sm:text-base">WhatsApp community support</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground text-sm sm:text-base">Job referral opportunities</span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                <span className="text-foreground text-sm sm:text-base">Industry networking events</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;