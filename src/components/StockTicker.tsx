import { motion } from "framer-motion";
import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const stockData = [
  { symbol: "BTC", name: "Bitcoin", price: "97,245.32", change: "+2.34%", volume: "32.5B", marketCap: "1.92T", positive: true },
  { symbol: "ETH", name: "Ethereum", price: "3,456.78", change: "+1.89%", volume: "18.2B", marketCap: "415.6B", positive: true },
  { symbol: "AAPL", name: "Apple Inc.", price: "198.45", change: "-0.45%", volume: "52.3M", marketCap: "3.05T", positive: false },
  { symbol: "TSLA", name: "Tesla Inc.", price: "245.67", change: "+3.21%", volume: "98.7M", marketCap: "781.2B", positive: true },
  { symbol: "GOOGL", name: "Alphabet", price: "178.23", change: "+0.67%", volume: "24.1M", marketCap: "2.21T", positive: true },
  { symbol: "AMZN", name: "Amazon", price: "189.34", change: "-1.12%", volume: "45.6M", marketCap: "1.97T", positive: false },
  { symbol: "MSFT", name: "Microsoft", price: "423.56", change: "+1.45%", volume: "21.8M", marketCap: "3.15T", positive: true },
  { symbol: "NVDA", name: "NVIDIA", price: "145.89", change: "+4.56%", volume: "312.4M", marketCap: "3.58T", positive: true },
  { symbol: "META", name: "Meta", price: "567.89", change: "+2.01%", volume: "15.3M", marketCap: "1.45T", positive: true },
  { symbol: "SPY", name: "S&P 500 ETF", price: "598.23", change: "+0.89%", volume: "67.2M", marketCap: "548.9B", positive: true },
];

const StockTicker = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredStock, setHoveredStock] = useState<string | null>(null);
  const duplicatedStocks = [...stockData, ...stockData, ...stockData];

  return (
    <div 
      className="w-full bg-background/80 backdrop-blur-sm border-b border-primary/20 overflow-hidden py-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => {
        setIsPaused(false);
        setHoveredStock(null);
      }}
    >
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -33.33 * stockData.length * 10],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {duplicatedStocks.map((stock, index) => (
          <div
            key={`${stock.symbol}-${index}`}
            className="relative flex items-center gap-2 text-sm cursor-pointer group"
            onMouseEnter={() => setHoveredStock(`${stock.symbol}-${index}`)}
            onMouseLeave={() => setHoveredStock(null)}
          >
            <span className="font-bold text-foreground">{stock.symbol}</span>
            <span className="text-muted-foreground">${stock.price}</span>
            <span
              className={`flex items-center gap-1 font-medium ${
                stock.positive ? "text-green-500" : "text-red-500"
              }`}
            >
              {stock.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
              {stock.change}
            </span>
            <span className="text-primary/30 mx-2">•</span>

            {/* Detailed tooltip on hover */}
            {hoveredStock === `${stock.symbol}-${index}` && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 z-50 bg-card border border-border rounded-lg p-3 shadow-xl min-w-[200px]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`p-1.5 rounded ${stock.positive ? "bg-green-500/20" : "bg-red-500/20"}`}>
                    {stock.positive ? <TrendingUp className="w-4 h-4 text-green-500" /> : <TrendingDown className="w-4 h-4 text-red-500" />}
                  </span>
                  <div>
                    <p className="font-bold text-foreground">{stock.symbol}</p>
                    <p className="text-xs text-muted-foreground">{stock.name}</p>
                  </div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-medium text-foreground">${stock.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Change:</span>
                    <span className={stock.positive ? "text-green-500" : "text-red-500"}>{stock.change}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Volume:</span>
                    <span className="font-medium text-foreground">{stock.volume}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Market Cap:</span>
                    <span className="font-medium text-foreground">${stock.marketCap}</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StockTicker;
