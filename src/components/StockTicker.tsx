import { motion } from "framer-motion";

const stockData = [
  { symbol: "BTC", price: "97,245.32", change: "+2.34%", positive: true },
  { symbol: "ETH", price: "3,456.78", change: "+1.89%", positive: true },
  { symbol: "AAPL", price: "198.45", change: "-0.45%", positive: false },
  { symbol: "TSLA", price: "245.67", change: "+3.21%", positive: true },
  { symbol: "GOOGL", price: "178.23", change: "+0.67%", positive: true },
  { symbol: "AMZN", price: "189.34", change: "-1.12%", positive: false },
  { symbol: "MSFT", price: "423.56", change: "+1.45%", positive: true },
  { symbol: "NVDA", price: "145.89", change: "+4.56%", positive: true },
  { symbol: "META", price: "567.89", change: "+2.01%", positive: true },
  { symbol: "SPY", price: "598.23", change: "+0.89%", positive: true },
];

const StockTicker = () => {
  const duplicatedStocks = [...stockData, ...stockData, ...stockData];

  return (
    <div className="w-full bg-background/80 backdrop-blur-sm border-b border-primary/20 overflow-hidden py-2">
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
      >
        {duplicatedStocks.map((stock, index) => (
          <div
            key={`${stock.symbol}-${index}`}
            className="flex items-center gap-2 text-sm"
          >
            <span className="font-bold text-foreground">{stock.symbol}</span>
            <span className="text-muted-foreground">${stock.price}</span>
            <span
              className={
                stock.positive
                  ? "text-green-500 font-medium"
                  : "text-red-500 font-medium"
              }
            >
              {stock.change}
            </span>
            <span className="text-primary/30 mx-2">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StockTicker;
