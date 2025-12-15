import useScrollAnimation from "@/hooks/useScrollAnimation";
import { Marquee } from "@/components/ui/marquee";
import classroomImg1 from "@/assets/IMG_2723.jpg";
import classroomImg2 from "@/assets/IMG_2735.jpg";
import classroomImg3 from "@/assets/IMG_2736.jpg";
import classroomImg4 from "@/assets/IMG_2741.jpg";

const ClassroomSection = () => {
  const sectionRef = useScrollAnimation({ threshold: 0.1 });
  const contentRef = useScrollAnimation({ threshold: 0.2 });
  const imagesRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={sectionRef as any} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div ref={contentRef as any} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight gradient-text-hero-silver-yellow">
            Where Learning Happens
          </h2>
        </div>



        {/* Classroom Images Marquee */}
        <div ref={imagesRef as any} className="w-full">
          <div className="bg-gradient-to-br from-card via-card to-card/95 border-2 border-primary/20 rounded-2xl p-4 sm:p-6 shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgba(255,215,0,0.15)] transition-all duration-300 backdrop-blur-sm">
            <Marquee className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl overflow-hidden" speed="normal" pauseOnHover>
              
              {/* Image 1 */}
              <div className="relative w-[180px] sm:w-[500px] lg:w-[600px] h-full mx-2 sm:mx-4 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={classroomImg1} 
                  alt="Professional video editing classroom with students learning" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                    <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">Interactive Learning Environment</span>
                  </h3>
                  <p className="text-sm text-white/90">
                    Modern classrooms with latest software
                  </p>
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative w-[180px] sm:w-[500px] lg:w-[600px] h-full mx-2 sm:mx-4 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={classroomImg2} 
                  alt="Students working on video editing projects" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                    <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">Collaborative Projects</span>
                  </h3>
                  <p className="text-sm text-white/90">
                    Work together on real assignments
                  </p>
                </div>
              </div>

              {/* Image 3 */}
              <div className="relative w-[180px] sm:w-[500px] lg:w-[600px] h-full mx-2 sm:mx-4 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={classroomImg3} 
                  alt="Professional video editing setup and workspace" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                    <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">Professional Tools</span>
                  </h3>
                  <p className="text-sm text-white/90">
                    Industry-standard editing suites
                  </p>
                </div>
              </div>

              {/* Image 4 */}
              <div className="relative w-[180px] sm:w-[500px] lg:w-[600px] h-full mx-2 sm:mx-4 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={classroomImg4} 
                  alt="Instructor teaching video editing techniques" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2">
                    <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">Expert Guidance</span>
                  </h3>
                  <p className="text-sm text-white/90">
                    Learn from industry professionals
                  </p>
                </div>
              </div>

            </Marquee>
          </div>
        </div>



      </div>
    </section>
  );
};

export default ClassroomSection;