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
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";
import StockTicker from "@/components/StockTicker";
import AboutAuthor from "@/components/AboutAuthor";
import AIChatbot from "@/components/AIChatbot";

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
          
          <ScrollAnimationWrapper direction="up" delay={0.1}>
            <CourseOverview />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper direction="scale" delay={0.1}>
            <CountdownTimer />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper direction="up" delay={0.1}>
            <AboutAuthor />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper direction="up" delay={0.1}>
            <PricingSection />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper direction="left" delay={0.1}>
            <FAQSection />
          </ScrollAnimationWrapper>
          
          <ScrollAnimationWrapper direction="up" delay={0.1}>
            <DisclaimerSection />
          </ScrollAnimationWrapper>
        </main>
        
        <ScrollAnimationWrapper direction="up" delay={0.1}>
          <Footer />
        </ScrollAnimationWrapper>
      </div>
      
      <FloatingSocials />
      <AIChatbot />
    </div>
  );
};

export default Index;
