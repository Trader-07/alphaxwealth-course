import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

// Simplified candlestick chart with reduced updates
const LiveCandlestickChart = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Slower interval - 500ms instead of 100ms
    const interval = setInterval(() => {
      setTime(t => t + 1);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Memoize candle calculations
  const candles = useMemo(() => [
    { height: 30 + Math.sin(time * 0.05) * 15, isGreen: Math.sin(time * 0.05) > 0, x: 25 },
    { height: 35 + Math.sin(time * 0.04 + 1) * 18, isGreen: Math.sin(time * 0.04 + 1) > 0, x: 65 },
    { height: 32 + Math.sin(time * 0.05 + 3) * 16, isGreen: Math.sin(time * 0.05 + 3) > 0, x: 105 },
    { height: 30 + Math.cos(time * 0.05 + 6) * 15, isGreen: Math.cos(time * 0.05 + 6) > 0, x: 145 },
  ], [time]);

  return (
    <svg
      width="180"
      height="120"
      viewBox="0 0 180 120"
      className="opacity-40"
    >
      {/* Static grid lines */}
      {[30, 60, 90].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="180"
          y2={y}
          stroke="hsl(var(--primary) / 0.1)"
          strokeWidth="0.5"
        />
      ))}

      {/* Simplified candlesticks - no glow effects */}
      {candles.map((candle, i) => {
        const bodyY = 60 - candle.height / 2;
        return (
          <g key={i}>
            <line
              x1={candle.x}
              y1={bodyY - 8}
              x2={candle.x}
              y2={bodyY + candle.height + 8}
              stroke={candle.isGreen ? "hsl(var(--primary))" : "hsl(0, 70%, 50%)"}
              strokeWidth="1"
            />
            <rect
              x={candle.x - 4}
              y={bodyY}
              width="8"
              height={candle.height}
              fill={candle.isGreen ? "hsl(var(--primary))" : "hsl(0, 70%, 50%)"}
              rx="1"
            />
          </g>
        );
      })}
    </svg>
  );
};

const AnimatedBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Disable heavy animations on mobile
  if (isMobile) {
    return (
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Simple static gradient for mobile */}
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[200px] h-[200px] bg-primary/3 rounded-full blur-3xl" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Only 2 floating charts instead of 6 */}
      <motion.div
        className="absolute hidden md:block"
        style={{ left: "15%", top: "25%", rotate: "-10deg" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <LiveCandlestickChart />
      </motion.div>
      <motion.div
        className="absolute hidden lg:block"
        style={{ right: "15%", top: "45%", rotate: "10deg" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <LiveCandlestickChart />
      </motion.div>

      {/* Static gradient orbs - no animation */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary/3 rounded-full blur-3xl opacity-15" />

      {/* Reduced bubbles - only 4 instead of 15, CSS animation */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={`bubble-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/20 animate-float"
          style={{
            left: `${15 + i * 20}%`,
            bottom: "-20px",
            animationDelay: `${i * 2}s`,
            animationDuration: `${12 + i * 3}s`,
          }}
        />
      ))}

      {/* Static grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

export default AnimatedBackground;