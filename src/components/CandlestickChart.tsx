import { motion } from "framer-motion";

// Candlestick data with more variation
const candles = [
  { height: 35, wickTop: 8, wickBottom: 12, isGreen: true, x: 15 },
  { height: 28, wickTop: 6, wickBottom: 15, isGreen: false, x: 35 },
  { height: 42, wickTop: 10, wickBottom: 8, isGreen: true, x: 55 },
  { height: 25, wickTop: 12, wickBottom: 10, isGreen: false, x: 75 },
  { height: 38, wickTop: 5, wickBottom: 18, isGreen: true, x: 95 },
  { height: 30, wickTop: 15, wickBottom: 6, isGreen: true, x: 115 },
  { height: 45, wickTop: 8, wickBottom: 12, isGreen: false, x: 135 },
  { height: 32, wickTop: 10, wickBottom: 14, isGreen: true, x: 155 },
];

const CandlestickChart = () => {
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
      {/* Animated grid lines */}
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

      {/* Candlesticks with continuous animation */}
      {candles.map((candle, i) => {
        const bodyY = 60 - candle.height / 2;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              y: [0, -3, 0, 3, 0],
              scale: 1,
            }}
            transition={{
              opacity: { duration: 0.5, delay: i * 0.08 },
              y: { 
                duration: 2 + Math.random() * 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: i * 0.2
              },
              scale: { duration: 0.5, delay: i * 0.08 }
            }}
          >
            {/* Wick */}
            <motion.line
              x1={candle.x}
              y1={bodyY - candle.wickTop}
              x2={candle.x}
              y2={bodyY + candle.height + candle.wickBottom}
              stroke={candle.isGreen ? "hsl(var(--primary))" : "hsl(0, 70%, 50%)"}
              strokeWidth="1.5"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 + 0.2 }}
              style={{ transformOrigin: "center" }}
            />

            {/* Body */}
            <motion.rect
              x={candle.x - 5}
              y={bodyY}
              width="10"
              height={candle.height}
              fill={candle.isGreen ? "hsl(var(--primary))" : "hsl(0, 70%, 50%)"}
              rx="1"
              initial={{ scaleY: 0 }}
              animate={{ 
                scaleY: 1,
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ 
                scaleY: { duration: 0.4, delay: i * 0.08 },
                opacity: { duration: 2, repeat: Infinity, delay: i * 0.3 }
              }}
              style={{ transformOrigin: "center" }}
            />

            {/* Glow effect for green candles */}
            {candle.isGreen && (
              <motion.rect
                x={candle.x - 8}
                y={bodyY - 3}
                width="16"
                height={candle.height + 6}
                fill="hsl(var(--primary) / 0.3)"
                rx="2"
                animate={{
                  opacity: [0.2, 0.5, 0.2],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                style={{ filter: "blur(3px)" }}
              />
            )}
          </motion.g>
        );
      })}

      {/* Animated trend line */}
      <motion.path
        d="M 10 80 Q 45 65, 75 55 T 140 40 T 175 25"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5,3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{ 
          pathLength: { duration: 2, ease: "easeInOut" },
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        style={{ filter: "drop-shadow(0 0 4px hsl(var(--primary) / 0.5))" }}
      />

      {/* Moving price indicator dot */}
      <motion.circle
        r="4"
        fill="hsl(var(--primary))"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          cx: [10, 75, 140, 175],
          cy: [80, 55, 40, 25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
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
          initial={{ opacity: 0, scale: 0 }}
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

export default CandlestickChart;
