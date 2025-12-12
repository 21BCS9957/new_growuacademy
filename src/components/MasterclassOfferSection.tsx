import { Clock, MapPin, IndianRupee, Zap } from "lucide-react";
import { LoadingButton } from "@/components/LoadingButton";

const MasterclassOfferSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-foreground mb-6">
              <span className="accent-text">Offline Masterclass</span>
              <br />Cheapest & Most Effective
            </h2>
            <p className="text-xl text-muted-foreground">
              Transform your video editing skills in just 2 hours with hands-on training
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-3xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Zap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black text-foreground">2 Hours Intensive</h3>
                    <p className="text-muted-foreground">Power-packed learning session</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-bold text-foreground">2 Hours Only</div>
                      <div className="text-sm text-muted-foreground">Intensive Training</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    <div>
                      <div className="font-bold text-foreground">Offline Mode</div>
                      <div className="text-sm text-muted-foreground">Mohali</div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <IndianRupee className="w-8 h-8 text-primary" />
                    <span className="text-5xl font-black text-primary">Free</span>
                    <div className="text-left">
                      <div className="text-lg text-muted-foreground line-through">₹2,999</div>
                      <div className="text-sm text-primary font-bold"> 100% OFF</div>
                    </div>
                  </div>
                  <p className="text-center text-muted-foreground">Limited time offer - Usually ₹2,999</p>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="text-2xl font-bold text-foreground mb-6">What Makes This Special?</h4>
                
                <div className="space-y-4">
                  {[
                    "Hands-on editing with real projects",
                    "Industry-standard software training", 
                    "Live feedback from experts",
                    "Networking with fellow creators",
                    "Take-home resources & templates",
                    "Certificate of completion"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <LoadingButton 
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold text-lg py-6 rounded-full mt-8"
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