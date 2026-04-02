import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ImpactSection from "@/components/ImpactSection";

import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <AboutSection />
    <TeamSection />
    <ImpactSection />
    
    <CareersSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
