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
];

const StockTicker = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="w-full bg-background/80 backdrop-blur-sm border-b border-primary/20 overflow-hidden py-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex gap-8 whitespace-nowrap ticker-scroll"
        style={{ animationPlayState: isPaused ? "paused" : "running" }}
      >
        {/* Duplicate content for seamless loop */}
        {[...stockData, ...stockData].map((stock, index) => (
          <div
            key={`${stock.symbol}-${index}`}
            className="flex items-center gap-2 text-sm"
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default StockTicker;