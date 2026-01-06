import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";
import TrustBadges from "./TrustBadges";
import { motion } from "framer-motion";
import heroVideo from "@/assets/hero-video.mp4";

const HeroSection = () => {
  // Text animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      filter: "blur(8px)",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 py-16 pt-24 sm:py-20">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 z-[1]">
        <div className="absolute top-1/4 left-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[100px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[300px] md:w-[500px] h-[200px] sm:h-[300px] md:h-[500px] bg-primary/8 rounded-full blur-[80px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/60 via-background/70 to-background" />
      
      {/* Subtle vignette effect */}
      <div className="absolute inset-0 z-[3] bg-[radial-gradient(circle_at_center,transparent_30%,hsl(var(--background))_100%)]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Brand badge - animated */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-6 sm:mb-8"
        >
          <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary animate-pulse" />
          <span className="text-xs sm:text-sm font-medium text-primary tracking-wide">Alpha X Wealth</span>
        </motion.div>

        {/* Main headline with word-by-word reveal */}
        <motion.h1 
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={wordVariants} className="inline-block">Learn</motion.span>{" "}
          <motion.span variants={wordVariants} className="inline-block">Stock</motion.span>{" "}
          <motion.span variants={wordVariants} className="inline-block">Market</motion.span>
          <br className="hidden sm:block" />
          <motion.span 
            variants={wordVariants}
            className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-2 sm:mt-4"
          >
            <span className="text-gradient-gold italic font-serif">the Halal Way</span>
          </motion.span>
        </motion.h1>

        {/* Animated underline */}
        <motion.div 
          className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 sm:mb-8"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        />

        {/* Subheadline with fade up */}
        <motion.p 
          className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-2"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <motion.span 
            className="inline-flex items-center gap-2 sm:gap-3 flex-wrap justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.span variants={wordVariants} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Beginner to Advanced
            </motion.span>
            <motion.span variants={wordVariants} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Knowledge-Based
            </motion.span>
            <motion.span variants={wordVariants} className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Shariah-Aligned
            </motion.span>
          </motion.span>
        </motion.p>

        {/* CTA Buttons with staggered pop */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
              onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
            >
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Explore Course
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 shadow-lg shadow-[#0088cc]/20 hover:shadow-xl hover:shadow-[#0088cc]/30"
              onClick={() => window.open("https://t.me/Entrepreneur_zee07", "_blank")}
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Chat on Telegram
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust badges with scale animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
        >
          <TrustBadges />
        </motion.div>
      </div>

      {/* Animated corner decorations - hidden on mobile */}
      <div className="hidden md:block">
        <motion.div 
          className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
        <motion.div 
          className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-primary/20 rounded-tr-3xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        />
        <motion.div 
          className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-primary/20 rounded-bl-3xl"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        />
        <motion.div 
          className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-3xl"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-2.5 bg-primary/60 rounded-full"
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;