import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";
import TrustBadges from "./TrustBadges";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 py-16 pt-24 sm:py-20">
      {/* Static gradient background */}
      <div className="absolute top-1/4 left-1/4 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-[150px] sm:w-[200px] md:w-[300px] h-[150px] sm:h-[200px] md:h-[300px] bg-primary/5 rounded-full blur-3xl opacity-20" />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Brand badge - fade down animation */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 sm:mb-8 opacity-0 animate-fade-down">
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
          <span className="text-xs sm:text-sm font-medium text-primary">Alpha X Wealth</span>
        </div>

        {/* Main headline - blur in animation */}
        <h1 
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 opacity-0 animate-blur-in leading-tight"
          style={{ animationDelay: "0.1s" }}
        >
          <span>Learn Stock Market </span>
          <br className="hidden sm:block" />
          <span className="text-gradient-gold text-4xl sm:text-5xl md:text-6xl lg:text-8xl">
            the Halal Way
          </span>
        </h1>

        {/* Subheadline - fade up animation */}
        <p 
          className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto opacity-0 animate-fade-up px-2"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block sm:inline">Beginner to Advanced</span>
          <span className="hidden sm:inline mx-2 text-primary">•</span>
          <span className="block sm:inline">Knowledge-Based</span>
          <span className="hidden sm:inline mx-2 text-primary">•</span>
          <span className="block sm:inline">Shariah-Aligned</span>
        </p>

        {/* CTA Buttons - pop animation */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 opacity-0 animate-pop px-2"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-transform hover:scale-105 touch-manipulation"
            onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
          >
            <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Explore Course
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-transform hover:scale-105 touch-manipulation"
            onClick={() => window.open("https://t.me/Entrepreneur_zee07", "_blank")}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Chat on Telegram
          </Button>
        </div>

        {/* Trust badges - scale up animation */}
        <div 
          className="opacity-0 animate-scale-up"
          style={{ animationDelay: "0.4s" }}
        >
          <TrustBadges />
        </div>
      </div>

      {/* Corner decorations - hidden on mobile */}
      <div className="hidden md:block">
        <div className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl opacity-0 animate-fade-up" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-primary/20 rounded-tr-3xl opacity-0 animate-fade-up" style={{ animationDelay: "0.6s" }} />
        <div className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-primary/20 rounded-bl-3xl opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }} />
        <div className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-3xl opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }} />
      </div>
    </section>
  );
};

export default HeroSection;