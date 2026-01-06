import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";
import CandlestickChart from "./CandlestickChart";
import TrustBadges from "./TrustBadges";

// Text shimmer animation - simplified
const ShimmerText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <span
      className={`relative inline-block text-primary ${className}`}
      style={{
        backgroundImage: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.7) 50%, hsl(var(--primary)) 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        animation: "shimmer 4s linear infinite",
      }}
    >
      {children}
    </span>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Static gradient orbs - no animation on mobile */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-primary/5 rounded-full blur-3xl opacity-20" />

      {/* Background candlestick decoration - hidden on mobile */}
      <div className="absolute inset-0 hidden md:flex items-center justify-center">
        <motion.div
          className="absolute top-20 left-10 rotate-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <CandlestickChart />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 -rotate-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <CandlestickChart />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 rotate-6 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <CandlestickChart />
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Brand badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Alpha X Wealth</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span>Learn Stock Market </span>
          <br className="hidden sm:block" />
          <ShimmerText className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            the Halal Way
          </ShimmerText>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span>Beginner to Advanced</span>
          <span className="mx-2 text-primary">•</span>
          <span>Knowledge-Based</span>
          <span className="mx-2 text-primary">•</span>
          <span>Shariah-Aligned</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
            onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Explore Course
          </Button>
          <Button
            size="lg"
            className="w-full sm:w-auto bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold px-8 py-6 text-lg"
            onClick={() => window.open("https://t.me/Entrepreneur_zee07", "_blank")}
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
            </svg>
            Chat on Telegram
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <TrustBadges />
        </motion.div>
      </div>

      {/* Corner decorations - hidden on mobile */}
      <div className="hidden md:block">
        <div className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl" />
        <div className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-primary/20 rounded-tr-3xl" />
        <div className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-primary/20 rounded-bl-3xl" />
        <div className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-3xl" />
      </div>
    </section>
  );
};

export default HeroSection;