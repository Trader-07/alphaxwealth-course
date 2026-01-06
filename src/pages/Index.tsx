import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseOverview from "@/components/CourseOverview";
import CountdownTimer from "@/components/CountdownTimer";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";
import FloatingSocials from "@/components/FloatingSocials";
import AnimatedBackground from "@/components/AnimatedBackground";
import StockTicker from "@/components/StockTicker";
import AboutAuthor from "@/components/AboutAuthor";
import AIChatbot from "@/components/AIChatbot";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth relative">
      {/* Global animated background */}
      <AnimatedBackground />
      
      <div className="relative z-10">
        <StockTicker />
        <Navbar />
        <main>
          <HeroSection />
          <CourseOverview />
          <CountdownTimer />
          <AboutAuthor />
          <TestimonialsSection />
          <PricingSection />
          <DisclaimerSection />
        </main>
        <Footer />
      </div>
      
      <FloatingSocials />
      <AIChatbot />
    </div>
  );
};

export default Index;