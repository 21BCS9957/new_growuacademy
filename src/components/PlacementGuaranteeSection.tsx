import { Shield, TrendingUp, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlacementGuaranteeSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <Shield className="w-20 h-20 text-primary" />
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-card-foreground mb-6">
            <span className="accent-text">100%</span> Placement 
            <br />Guarantee
          </h2>
          
          <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
            We're so confident in our training that we guarantee job placement. 
            If you don't get placed within 6 months, we'll refund your entire fee.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="stats-number">95%</div>
              <p className="text-muted-foreground mt-2">Students placed within 3 months</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="stats-number">₹4L+</div>
              <p className="text-muted-foreground mt-2">Average salary package</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <div className="stats-number">100%</div>
              <p className="text-muted-foreground mt-2">Money-back guarantee</p>
            </div>
          </div>

          <Button 
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-xl px-12 py-8 rounded-full"
          >
            Claim Your Guaranteed Seat
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlacementGuaranteeSection;