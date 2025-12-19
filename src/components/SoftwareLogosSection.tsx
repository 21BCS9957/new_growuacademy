import { useEffect, useRef, useState } from "react";

const softwareData = [
  {
    image: "/src/assets/Comp 1_00000.png",
    title: "Adobe Premiere Pro"
  },
  {
    image: "/src/assets/Comp 2_00006.png",
    title: "After Effects"
  },
  {
    image: "/src/assets/Comp 3_00000.png",
    title: "DaVinci Resolve"
  },
  {
    image: "/src/assets/Comp 4_00000.png",
    title: "Final Cut Pro"
  },
  {
    image: "/src/assets/Comp 5_00000.png",
    title: "Photoshop"
  },
  {
    image: "/src/assets/Comp 6_00000.png",
    title: "Illustrator"
  },
  {
    image: "/src/assets/Comp 7_00000.png",
    title: "Audition"
  },
  {
    image: "/src/assets/Comp 8_00000.png",
    title: "Media Encoder"
  }
];

const SoftwareLogosSection = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Calculate progress based on scroll position
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const scrollProgress = Math.min(
          Math.max((windowHeight - sectionTop) / (windowHeight + sectionHeight), 0),
          1
        );
        setProgress(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate positions for logos in a circle around the center
  const getLogoPosition = (index: number, total: number, radius: number) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2; // Start from top
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x, y, angle };
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black gradient-text-hero-silver-yellow mb-4">
            Master Industry-Standard Tools
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn the professional software used by top video editors worldwide
          </p>
        </div>

        {/* Desktop Layout - Radial Connection */}
        <div className="hidden lg:block relative">
          <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center" style={{ height: '600px' }}>
            {/* SVG for connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C0C0C0" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#FFD700" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {softwareData.map((_, index) => {
                const position = getLogoPosition(index, softwareData.length, 220);
                const centerX = 50; // 50% of SVG width
                const centerY = 50; // 50% of SVG height
                const logoX = centerX + (position.x / 6); // Scale to percentage
                const logoY = centerY + (position.y / 6); // Scale to percentage
                
                return (
                  <line
                    key={index}
                    x1={`${centerX}%`}
                    y1={`${centerY}%`}
                    x2={`${logoX}%`}
                    y2={`${logoY}%`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    strokeDasharray="300"
                    strokeDashoffset={300 * (1 - Math.min(progress * 2, 1))}
                    className="transition-all duration-500"
                    style={{
                      opacity: progress > index / softwareData.length ? 0.8 : 0.2
                    }}
                  />
                );
              })}
            </svg>

            {/* Center Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 2 }}>
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/30 to-primary/40 backdrop-blur-sm border-4 border-primary/40 flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.4)] hover:shadow-[0_0_60px_rgba(255,215,0,0.6)] transition-all duration-500 hover:scale-110">
                <div className="text-4xl font-black gradient-text-hero-silver-yellow">VE</div>
              </div>
              <h3 className="text-lg font-bold text-center mt-4 gradient-text-hero-silver-yellow">
                Video Editing
              </h3>
            </div>

            {/* Surrounding Logos */}
            {softwareData.map((software, index) => {
              const position = getLogoPosition(index, softwareData.length, 220);
              const isVisible = progress > index / softwareData.length;
              const scale = isVisible ? 1 : 0.8;
              const opacity = isVisible ? 1 : 0.3;

              return (
                <div
                  key={index}
                  className="absolute group"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    zIndex: 1,
                    opacity: opacity,
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative mb-3">
                      <div className="w-20 h-20 rounded-2xl bg-card/80 backdrop-blur-sm border-2 border-primary/20 flex items-center justify-center p-3 group-hover:border-primary/60 group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all duration-300 group-hover:scale-110">
                        <img 
                          src={software.image} 
                          alt={software.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* Animated Circle */}
                      <div 
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_rgba(255,215,0,0.6)]"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: `translateX(-50%) scale(${isVisible ? 1 : 0})`,
                          transition: 'all 0.3s ease-out'
                        }}
                      />
                    </div>
                    <h3 className="text-xs font-bold text-center group-hover:text-primary transition-colors duration-300 max-w-20">
                      {software.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Layout - Grid with Center */}
        <div className="lg:hidden relative">
          <div className="relative max-w-md mx-auto" style={{ height: '500px' }}>
            {/* SVG for connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGradientMobile" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C0C0C0" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#FFD700" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#C0C0C0" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {softwareData.map((_, index) => {
                const position = getLogoPosition(index, softwareData.length, 160);
                const centerX = 200; // Half of mobile container
                const centerY = 250; // Half of height
                const logoX = centerX + position.x;
                const logoY = centerY + position.y;
                
                return (
                  <line
                    key={index}
                    x1={centerX}
                    y1={centerY}
                    x2={logoX}
                    y2={logoY}
                    stroke="url(#lineGradientMobile)"
                    strokeWidth="2"
                    strokeDasharray="200"
                    strokeDashoffset={200 * (1 - Math.min(progress * 2, 1))}
                    className="transition-all duration-500"
                    style={{
                      opacity: progress > index / softwareData.length ? 0.8 : 0.2
                    }}
                  />
                );
              })}
            </svg>

            {/* Center Logo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 2 }}>
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/30 to-primary/40 backdrop-blur-sm border-3 border-primary/40 flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.4)] hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] transition-all duration-500">
                <div className="text-2xl font-black gradient-text-hero-silver-yellow">VE</div>
              </div>
              <h3 className="text-sm font-bold text-center mt-2 gradient-text-hero-silver-yellow">
                Video Editing
              </h3>
            </div>

            {/* Surrounding Logos */}
            {softwareData.map((software, index) => {
              const position = getLogoPosition(index, softwareData.length, 160);
              const isVisible = progress > index / softwareData.length;
              const scale = isVisible ? 1 : 0.8;
              const opacity = isVisible ? 1 : 0.3;

              return (
                <div
                  key={index}
                  className="absolute group"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    zIndex: 1,
                    opacity: opacity,
                    transition: 'all 0.5s ease-out'
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative mb-2">
                      <div className="w-16 h-16 rounded-xl bg-card/80 backdrop-blur-sm border-2 border-primary/20 flex items-center justify-center p-2 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all duration-300 group-hover:scale-110">
                        <img 
                          src={software.image} 
                          alt={software.title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      {/* Animated Circle */}
                      <div 
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(255,215,0,0.6)]"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: `translateX(-50%) scale(${isVisible ? 1 : 0})`,
                          transition: 'all 0.3s ease-out'
                        }}
                      />
                    </div>
                    <h3 className="text-xs font-bold text-center group-hover:text-primary transition-colors duration-300 max-w-16 leading-tight">
                      {software.title.split(' ')[0]}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareLogosSection;
