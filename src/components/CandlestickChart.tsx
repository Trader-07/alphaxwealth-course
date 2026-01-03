import { motion } from "framer-motion";

const CandlestickChart = () => {
  // Static candlestick data for premium visual
  const candles = [
    { height: 60, wickTop: 15, wickBottom: 20, isGreen: true, x: 0 },
    { height: 45, wickTop: 10, wickBottom: 25, isGreen: false, x: 40 },
    { height: 70, wickTop: 20, wickBottom: 15, isGreen: true, x: 80 },
    { height: 35, wickTop: 30, wickBottom: 10, isGreen: false, x: 120 },
    { height: 80, wickTop: 12, wickBottom: 18, isGreen: true, x: 160 },
    { height: 50, wickTop: 25, wickBottom: 20, isGreen: true, x: 200 },
    { height: 40, wickTop: 15, wickBottom: 30, isGreen: false, x: 240 },
    { height: 65, wickTop: 18, wickBottom: 12, isGreen: true, x: 280 },
    { height: 55, wickTop: 22, wickBottom: 16, isGreen: true, x: 320 },
    { height: 48, wickTop: 14, wickBottom: 28, isGreen: false, x: 360 },
  ];

  return (
    <motion.svg
      viewBox="0 0 400 200"
      className="w-full h-auto max-w-md opacity-30"
      aria-hidden="true"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
    >
      {/* Background grid lines */}
      {[40, 80, 120, 160].map((y) => (
        <motion.line
          key={y}
          x1="0"
          y1={y}
          x2="400"
          y2={y}
          stroke="hsl(var(--border))"
          strokeWidth="0.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: y / 200 }}
        />
      ))}

      {/* Candlesticks with animation */}
      {candles.map((candle, index) => {
        const bodyY = 100 - candle.height / 2;
        const color = candle.isGreen ? "hsl(var(--candle-green))" : "hsl(var(--candle-red))";

        return (
          <motion.g
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.1,
              type: "spring",
              stiffness: 100 
            }}
          >
            {/* Wick */}
            <motion.line
              x1={candle.x + 12}
              y1={bodyY - candle.wickTop}
              x2={candle.x + 12}
              y2={bodyY + candle.height + candle.wickBottom}
              stroke={color}
              strokeWidth="2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
              style={{ transformOrigin: "center" }}
            />
            {/* Body */}
            <motion.rect
              x={candle.x}
              y={bodyY}
              width="24"
              height={candle.height}
              fill={candle.isGreen ? color : "transparent"}
              stroke={color}
              strokeWidth="2"
              rx="2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              style={{ transformOrigin: "center" }}
            />
            {/* Glow effect for green candles */}
            {candle.isGreen && (
              <motion.rect
                x={candle.x - 2}
                y={bodyY - 2}
                width="28"
                height={candle.height + 4}
                fill="none"
                stroke={color}
                strokeWidth="1"
                rx="3"
                opacity={0.3}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              />
            )}
          </motion.g>
        );
      })}

      {/* Animated trend line */}
      <motion.path
        d="M 12 90 Q 52 110, 92 80 Q 132 120, 172 60 Q 212 75, 252 95 Q 292 65, 332 70 Q 372 100, 372 85"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        strokeDasharray="5 5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.5 }}
        transition={{ duration: 3, delay: 1.5, ease: "easeInOut" }}
      />
    </motion.svg>
  );
};

export default CandlestickChart;