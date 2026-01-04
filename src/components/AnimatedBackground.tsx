import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Dynamic candlestick that updates over time
const LiveCandlestickChart = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(t => t + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Generate dynamic candle heights based on time
  const getCandles = () => {
    return [
      { height: 30 + Math.sin(time * 0.05) * 15, wickTop: 8, wickBottom: 12, isGreen: Math.sin(time * 0.05) > 0, x: 15 },
      { height: 25 + Math.cos(time * 0.06) * 12, wickTop: 6, wickBottom: 15, isGreen: Math.cos(time * 0.06) > 0, x: 35 },
      { height: 35 + Math.sin(time * 0.04 + 1) * 18, wickTop: 10, wickBottom: 8, isGreen: Math.sin(time * 0.04 + 1) > 0, x: 55 },
      { height: 28 + Math.cos(time * 0.07 + 2) * 14, wickTop: 12, wickBottom: 10, isGreen: Math.cos(time * 0.07 + 2) > 0, x: 75 },
      { height: 32 + Math.sin(time * 0.05 + 3) * 16, wickTop: 5, wickBottom: 18, isGreen: Math.sin(time * 0.05 + 3) > 0, x: 95 },
      { height: 26 + Math.cos(time * 0.06 + 4) * 13, wickTop: 15, wickBottom: 6, isGreen: Math.cos(time * 0.06 + 4) > 0, x: 115 },
      { height: 38 + Math.sin(time * 0.04 + 5) * 20, wickTop: 8, wickBottom: 12, isGreen: Math.sin(time * 0.04 + 5) > 0, x: 135 },
      { height: 30 + Math.cos(time * 0.05 + 6) * 15, wickTop: 10, wickBottom: 14, isGreen: Math.cos(time * 0.05 + 6) > 0, x: 155 },
    ];
  };

  const candles = getCandles();

  // Dynamic trend line path based on time
  const getTrendPath = () => {
    const y1 = 70 + Math.sin(time * 0.03) * 20;
    const y2 = 55 + Math.cos(time * 0.04) * 15;
    const y3 = 40 + Math.sin(time * 0.05) * 18;
    const y4 = 30 + Math.cos(time * 0.03) * 12;
    return `M 10 ${y1} Q 45 ${y2}, 75 ${y2 - 10} T 140 ${y3} T 175 ${y4}`;
  };

  return (
    <motion.svg
      width="180"
      height="120"
      viewBox="0 0 180 120"
      className="opacity-60"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1 }}
    >
      {/* Grid lines */}
      {[20, 40, 60, 80, 100].map((y, i) => (
        <motion.line
          key={y}
          x1="0"
          y1={y}
          x2="180"
          y2={y}
          stroke="hsl(var(--primary) / 0.1)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.5 }}
          transition={{ duration: 1, delay: i * 0.1 }}
        />
      ))}

      {/* Dynamic candlesticks */}
      {candles.map((candle, i) => {
        const bodyY = 60 - candle.height / 2;
        return (
          <g key={i}>
            {/* Wick */}
            <line
              x1={candle.x}
              y1={bodyY - candle.wickTop}
              x2={candle.x}
              y2={bodyY + candle.height + candle.wickBottom}
              stroke={candle.isGreen ? "hsl(var(--primary))" : "hsl(0, 70%, 50%)"}
              strokeWidth="1.5"
              style={{ transition: "all 0.3s ease-out" }}
            />

            {/* Body */}
            <rect
              x={candle.x - 5}
              y={bodyY}
              width="10"
              height={candle.height}
              fill={candle.isGreen ? "hsl(var(--primary))" : "hsl(0, 70%, 50%)"}
              rx="1"
              style={{ transition: "all 0.3s ease-out" }}
            />

            {/* Glow effect for green candles */}
            {candle.isGreen && (
              <rect
                x={candle.x - 8}
                y={bodyY - 3}
                width="16"
                height={candle.height + 6}
                fill="hsl(var(--primary) / 0.3)"
                rx="2"
                style={{ 
                  filter: "blur(3px)",
                  transition: "all 0.3s ease-out"
                }}
              />
            )}
          </g>
        );
      })}

      {/* Animated trend line */}
      <path
        d={getTrendPath()}
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,3"
        style={{ 
          filter: "drop-shadow(0 0 4px hsl(var(--primary) / 0.5))",
          transition: "d 0.3s ease-out"
        }}
      />

      {/* Moving price indicator dot */}
      <motion.circle
        r="4"
        fill="hsl(var(--primary))"
        cx={10 + (time % 40) * 4.125}
        cy={70 + Math.sin(time * 0.03) * 20 - (time % 40) * 1.1}
        style={{ filter: "drop-shadow(0 0 6px hsl(var(--primary)))" }}
      />

      {/* Sparkle effects */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`sparkle-${i}`}
          r="2"
          fill="hsl(var(--primary))"
          cx={40 + i * 50}
          cy={30 + i * 20}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.7,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.svg>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating live candlestick charts */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
            rotate: `${-15 + i * 6}deg`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.15, 0.3, 0.15],
            scale: 0.5 + (i % 3) * 0.2,
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        >
          <LiveCandlestickChart />
        </motion.div>
      ))}

      {/* Large floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Rising bubbles/particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`bubble-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            left: `${5 + i * 6}%`,
            bottom: "-20px",
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            opacity: [0, 0.6, 0.6, 0],
            scale: [0.5, 1, 1, 0.5],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear",
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated scan line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{
          top: ["0%", "100%"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
