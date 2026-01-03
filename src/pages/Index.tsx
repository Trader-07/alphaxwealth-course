import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseOverview from "@/components/CourseOverview";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <CourseOverview />
        <PricingSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
