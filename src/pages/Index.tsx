import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import MasterclassOfferSection from "@/components/MasterclassOfferSection";
import ClassroomSection from "@/components/ClassroomSection";
import TimelineSection from "@/components/TimelineSection";
import BenefitsSection from "@/components/BenefitsSection";
import UrgencyBanner from "@/components/UrgencyBanner";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen pb-28 sm:pb-32">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <MasterclassOfferSection />
        <ClassroomSection />
        <BenefitsSection />
        <TimelineSection />
      </main>
      <Footer />
      <UrgencyBanner />
    </div>
  );
};

export default Index;