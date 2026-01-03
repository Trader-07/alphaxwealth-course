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
    <svg
      viewBox="0 0 400 200"
      className="w-full h-auto max-w-md opacity-30"
      aria-hidden="true"
    >
      {/* Background grid lines */}
      {[40, 80, 120, 160].map((y) => (
        <line
          key={y}
          x1="0"
          y1={y}
          x2="400"
          y2={y}
          stroke="hsl(var(--border))"
          strokeWidth="0.5"
          strokeDasharray="4 4"
        />
      ))}

      {/* Candlesticks */}
      {candles.map((candle, index) => {
        const bodyY = 100 - candle.height / 2;
        const color = candle.isGreen ? "hsl(var(--candle-green))" : "hsl(var(--candle-red))";

        return (
          <g key={index}>
            {/* Wick */}
            <line
              x1={candle.x + 12}
              y1={bodyY - candle.wickTop}
              x2={candle.x + 12}
              y2={bodyY + candle.height + candle.wickBottom}
              stroke={color}
              strokeWidth="2"
            />
            {/* Body */}
            <rect
              x={candle.x}
              y={bodyY}
              width="24"
              height={candle.height}
              fill={candle.isGreen ? color : "transparent"}
              stroke={color}
              strokeWidth="2"
              rx="2"
            />
          </g>
        );
      })}
    </svg>
  );
};

export default CandlestickChart;
