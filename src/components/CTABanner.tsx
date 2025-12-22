import { LoadingButton } from "@/components/LoadingButton";

const CTABanner = () => {
  return (
    // Add bottom margin so the fixed UrgencyBanner doesn't overlap this section
    <section className="bg-primary py-6 mb-20 sm:mb-24 lg:mb-28">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl lg:text-2xl font-bold text-primary-foreground">
              <span className="bg-gradient-to-r from-white to-yellow-100 bg-clip-text text-transparent">Limited Time: Early Bird Discount Available</span>
            </h3>
            <p className="text-primary-foreground/80 mt-1">
              Join now and save 40% on all premium courses
            </p>
          </div>
          
          <LoadingButton 
            size="lg"
            variant="secondary"
            className="bg-background text-foreground hover:bg-background/90 font-bold px-8 py-3 rounded-full whitespace-nowrap"
            href="https://growumedia.notion.site/2d1ffe2f0dd980318713c3effba1f4b6?pvs=105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claim Discount Now
          </LoadingButton>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;