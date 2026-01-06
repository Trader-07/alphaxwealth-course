import { useState } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

const stockData = [
  { symbol: "BTC", price: "97,245.32", change: "+2.34%", positive: true },
  { symbol: "ETH", price: "3,456.78", change: "+1.89%", positive: true },
  { symbol: "AAPL", price: "198.45", change: "-0.45%", positive: false },
  { symbol: "TSLA", price: "245.67", change: "+3.21%", positive: true },
  { symbol: "GOOGL", price: "178.23", change: "+0.67%", positive: true },
  { symbol: "AMZN", price: "189.34", change: "-1.12%", positive: false },
  { symbol: "MSFT", price: "423.56", change: "+1.45%", positive: true },
  { symbol: "NVDA", price: "145.89", change: "+4.56%", positive: true },
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