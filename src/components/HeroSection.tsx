import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, MessageCircle, Sparkles } from "lucide-react";
import CandlestickChart from "./CandlestickChart";
import TrustBadges from "./TrustBadges";

// Floating particles component
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated gradient orbs
const GradientOrbs = () => {
  return (
    <>
      <motion.div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
    </>
  );
};

// Text shimmer animation
const ShimmerText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={{
        backgroundPosition: ["200% 0", "-200% 0"],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary)/0.5) 50%, hsl(var(--primary)) 100%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </motion.span>
  );
};

const HeroSection = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/njqm95", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Animated background elements */}
      <FloatingParticles />
      <GradientOrbs />

      {/* Background candlestick decoration */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute top-20 left-10 rotate-12"
          initial={{ opacity: 0, x: -100, rotate: 0 }}
          animate={{ 
            opacity: 0.6, 
            x: 0, 
            rotate: 12,
            y: [0, -20, 0],
          }}
          transition={{ 
            duration: 1, 
            delay: 0.5,
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <CandlestickChart />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-10 -rotate-12"
          initial={{ opacity: 0, x: 100, rotate: 0 }}
          animate={{ 
            opacity: 0.6, 
            x: 0, 
            rotate: -12,
            y: [0, 20, 0],
          }}
          transition={{ 
            duration: 1, 
            delay: 0.7,
            y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <CandlestickChart />
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/4 rotate-6 hidden lg:block"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 0.4, 
            scale: 0.7,
            y: [0, -15, 0],
          }}
          transition={{ 
            duration: 1, 
            delay: 1,
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <CandlestickChart />
        </motion.div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Brand badge with sparkle */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8"
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-sm font-medium text-primary">Alpha X Wealth</span>
          <motion.span
            className="w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>

        {/* Main headline with stagger animation */}
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Learn Stock Market{" "}
          </motion.span>
          <br className="hidden sm:block" />
          <motion.span
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
          >
            <ShimmerText className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              the Halal Way
            </ShimmerText>
          </motion.span>
        </motion.h1>

        {/* Subheadline with typing effect */}
        <motion.p
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Beginner to Advanced
          </motion.span>
          <motion.span
            className="mx-2 text-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.9, type: "spring" }}
          >
            •
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Knowledge-Based
          </motion.span>
          <motion.span
            className="mx-2 text-primary"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.1, type: "spring" }}
          >
            •
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Shariah-Aligned
          </motion.span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg relative overflow-hidden group"
              onClick={() => document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <BookOpen className="w-5 h-5 mr-2 relative z-10" />
              <span className="relative z-10">Explore Course</span>
            </Button>
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.05, y: -2 }} 
            whileTap={{ scale: 0.98 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-6 text-lg relative overflow-hidden"
              onClick={handleWhatsAppClick}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-200%", "200%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
              />
              <MessageCircle className="w-5 h-5 mr-2 fill-white relative z-10" />
              <span className="relative z-10">Chat on WhatsApp</span>
            </Button>
          </motion.div>
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

      {/* Scroll indicator with enhanced animation */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll to explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5 }}
      />
      <motion.div
        className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-primary/20 rounded-tr-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6 }}
      />
      <motion.div
        className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-primary/20 rounded-bl-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.7 }}
      />
      <motion.div
        className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-3xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8 }}
      />
    </section>
  );
};

export default HeroSection;