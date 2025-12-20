import { CheckCircle, Star, Users, Award } from "lucide-react";

const WhyJoinSection = () => {
  const reasons = [
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Industry Experts",
      description: "Learn from professionals with 10+ years of experience in video editing and content creation."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-primary" />,
      title: "Proven Results",
      description: "Over 5,000 successful students have transformed their careers through our programs."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Personal Mentorship",
      description: "Get one-on-one guidance and feedback to accelerate your learning journey."
    },
    {
      icon: <Star className="w-8 h-8 text-primary" />,
      title: "Latest Techniques",
      description: "Master cutting-edge editing software and trending video creation methods."
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black mb-6 gradient-text-hero-silver-yellow">
            Why Choose GrowU Academy?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/30 transition-all duration-300">
              <div className="flex justify-center mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold gradient-text-hero-silver-yellow mb-4">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSection;