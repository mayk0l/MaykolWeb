import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import HeroSection from "@/components/sections/HeroSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import ServicesSection from "@/components/sections/ServicesSection";
import EcosystemSection from "@/components/sections/EcosystemSection";
import ManifestoSection from "@/components/sections/ManifestoSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Header />
      
      <main className="relative">
        {/* Hero - Clear Value Proposition */}
        <HeroSection />
        
        {/* Social Proof - Build Trust */}
        <SocialProofSection />
        
        {/* Services - What I Can Do */}
        <ServicesSection />
        
        {/* Ecosystem/Portfolio - Proof of Work */}
        <EcosystemSection />
        
        {/* Manifesto - Personal Connection */}
        <ManifestoSection />
        
        {/* Contact - The Conversion Point */}
        <ContactSection />
      </main>
      
      <Footer />
      
      {/* Mobile Floating CTA */}
      <FloatingCTA />
    </>
  );
}
