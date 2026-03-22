import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import AuroraSection from "@/components/AuroraSection";
import NovaPoshtaSection from "@/components/NovaPoshtaSection";
import AchievementsSection from "@/components/AchievementsSection";
import CommunitySection from "@/components/CommunitySection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <AuroraSection />
      <NovaPoshtaSection />
      <AchievementsSection />
      <CommunitySection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
