import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import ProfileSection from "@/components/sections/ProfileSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import JourneySection from "@/components/sections/JourneySection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="relative">
        {/* Hero - The Prism */}
        <HeroSection />
        
        {/* Manifesto - The Builder's Logic */}
        <ManifestoSection />

        {/* Profile - Professional Photo & Bio */}
        <ProfileSection />
        
        {/* Ecosystem - Bento Grid */}
        <EcosystemSection />
        
        {/* Journey - Interactive Timeline */}
        <JourneySection />
        
        {/* Contact - The Filter */}
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}
