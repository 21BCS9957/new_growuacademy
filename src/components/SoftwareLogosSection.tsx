import desktopImage from "@/assets/desk_lay.png";
import mobileImage from "@/assets/mob_lay.png";

const SoftwareLogosSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl font-black mb-6 gradient-text-hero-silver-yellow">
              What will you learn?
            </h2>
          </div>

          {/* Responsive Image Display */}
          <div className="flex justify-center items-center">
            <picture className="w-full max-w-none">
              {/* Desktop Image: Show on screens ≥1024px */}
              <source 
                media="(min-width: 1024px)" 
                srcSet={desktopImage}
                type="image/png"
              />
              
              {/* Mobile/Tablet Image: Show on screens ≤1023px */}
              <img
                src={mobileImage}
                alt="Software Layout"
                className="w-full h-auto max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareLogosSection;