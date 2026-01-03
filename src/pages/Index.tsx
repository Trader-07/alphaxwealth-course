import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseOverview from "@/components/CourseOverview";
import CountdownTimer from "@/components/CountdownTimer";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <main>
        <HeroSection />
        <CourseOverview />
        <CountdownTimer />
        <PricingSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      <Footer />
      <FloatingSocials />
    </div>
  );
};

export default Index;
