import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import OurWorkSection from "@/components/OurWorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PixelDissolveDivider from "@/components/PixelDissolveDivider";
import SectionTransition from "@/components/SectionTransition";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />

      <PixelDissolveDivider color="cyan" />
      <SectionTransition>
        <ServicesSection />
      </SectionTransition>

      <PixelDissolveDivider color="cyan" density={25} />
      <SectionTransition direction="left">
        <TestimonialsSection />
      </SectionTransition>

      <PixelDissolveDivider color="cyan" density={25} />
      <SectionTransition direction="right">
        <OurWorkSection />
      </SectionTransition>

      <PixelDissolveDivider color="green" density={25} />
      <SectionTransition>
        <ContactSection />
      </SectionTransition>

      <Footer />
    </div>
  );
};

export default Index;
