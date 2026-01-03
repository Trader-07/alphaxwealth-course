import { Button } from "@/components/ui/button";
import { BookOpen, Play } from "lucide-react";
import CandlestickChart from "./CandlestickChart";
import TrustBadges from "./TrustBadges";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background candlestick decoration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute top-20 left-10 rotate-12">
          <CandlestickChart />
        </div>
        <div className="absolute bottom-20 right-10 -rotate-12">
          <CandlestickChart />
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Gold glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Brand badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm font-medium text-primary">Alpha X Wealth</span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Learn Stock Market{" "}
          <span className="text-gradient-gold">the Halal Way</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Beginner to Advanced | Knowledge-Based | Shariah-Aligned
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg glow-gold animate-glow-pulse"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Explore Course
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-primary/50 hover:bg-primary/10 text-foreground font-semibold px-8 py-6 text-lg"
          >
            <Play className="w-5 h-5 mr-2" />
            Start Learning Free
          </Button>
        </div>

        {/* Trust badges */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <TrustBadges />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
