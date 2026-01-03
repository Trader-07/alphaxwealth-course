import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CourseOverview from "@/components/CourseOverview";
import HalalSection from "@/components/HalalSection";
import FAQSection from "@/components/FAQSection";
import DisclaimerSection from "@/components/DisclaimerSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <CourseOverview />
        <HalalSection />
        <FAQSection />
        <DisclaimerSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
