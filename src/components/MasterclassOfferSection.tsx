import { Clock, MapPin, IndianRupee, Zap } from "lucide-react";
import { LoadingButton } from "@/components/LoadingButton";

const MasterclassOfferSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 lg:mb-6 gradient-text-hero-silver-yellow">
              Offline Masterclass
              <br />Practical & Most Effective
            </h2>
            <p className="text-lg sm:text-xl gradient-text-hero-silver-yellow">
              Transform your video editing skills in just 2 hours with hands-on training
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              
              <div>
                <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="bg-primary/20 p-2 sm:p-3 rounded-full">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-black gradient-text-hero-silver-yellow">2 Hours Intensive</h3>
                    <p className="text-sm sm:text-base text-muted-foreground">Power-packed learning session</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <div>
                      <div className="font-bold text-sm sm:text-base text-foreground">2 Hours Only</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Intensive Training</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 sm:gap-3">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <div>
                      <div className="font-bold text-sm sm:text-base text-foreground">Offline Mode</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Mohali</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
                  <div className="flex items-center justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
                    <IndianRupee className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-primary">Free</span>
                    <div className="text-left">
                      <div className="text-base sm:text-lg text-muted-foreground line-through">₹2,999</div>
                      <div className="text-xs sm:text-sm text-primary font-bold"> 100% OFF</div>
                    </div>
                  </div>
                  <p className="text-center text-sm sm:text-base text-muted-foreground">Limited time offer - Usually ₹2,999</p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h4 className="text-xl sm:text-2xl font-bold gradient-text-hero-silver-yellow mb-4 sm:mb-6">What Makes This Special?</h4>
                
                <div className="space-y-3 sm:space-y-4">
                  {[
                    "Hands-on editing with real projects",
                    "Industry-standard software training", 
                    "Live feedback from experts",
                    "Networking with fellow creators",
                    "Take-home resources & templates",
                    "Certificate of completion"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-foreground rounded-full"></div>
                      </div>
                      <span className="text-sm sm:text-base text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <LoadingButton 
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-base sm:text-lg py-4 sm:py-6 rounded-full mt-6 sm:mt-8"
                  href="https://growumedia.notion.site/232ffe2f0dd98051a031cc204a646383?pvs=105"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Your Seat @ ₹Free
                </LoadingButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassOfferSection;