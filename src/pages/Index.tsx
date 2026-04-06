import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import WebDevelopmentSection from "@/components/WebDevelopmentSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OurWorkSection from "@/components/OurWorkSection";
import PricingSection from "@/components/PricingSection";
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

      <PixelDissolveDivider color="purple" density={30} />
      <SectionTransition direction="left">
        <AboutSection />
      </SectionTransition>

      <PixelDissolveDivider color="cyan" density={25} />
      <SectionTransition direction="right">
        <WebDevelopmentSection />
      </SectionTransition>

      <PixelDissolveDivider color="purple" />
      <SectionTransition>
        <WhyChooseSection />
      </SectionTransition>

      <PixelDissolveDivider color="cyan" density={25} />
      <SectionTransition direction="left">
        <TestimonialsSection />
      </SectionTransition>

      <PixelDissolveDivider color="cyan" density={25} />
      <SectionTransition direction="right">
        <OurWorkSection />
      </SectionTransition>

      <PixelDissolveDivider color="purple" density={20} />
      <SectionTransition>
        <PricingSection />
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
