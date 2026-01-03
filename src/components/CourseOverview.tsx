import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, LineChart, Sparkles, ChevronDown, BookOpen } from "lucide-react";

const courses = [
  {
    icon: TrendingUp,
    title: "Basics of Financial Markets",
    description: "Foundation knowledge for every aspiring trader",
    topics: [
      "Introduction",
      "Types of Markets (Equity/Stock, Commodity, Forex, Bonds, etc.)",
      "Purpose of Each Market",
      "Medium to Trade in Each Market",
      "Types of Trades (Cash, Derivatives, etc.)",
      "Number of Stock Exchanges in India",
      "Popular Stock Exchange of India",
      "Initial Public Offering (IPO)",
      "Further Public Offer (FPO)",
      "Primary Market and Secondary Market",
      "Market Timings of Indian Stock Market",
      "Pre-Opening Market Session",
      "Gap Up Opening",
      "Gap Down Opening",
      "Trader vs Investor",
      "Types of Traders",
      "Long Position vs Short Position",
      "Intraday Trading vs Delivery",
    ],
  },
  {
    icon: BarChart3,
    title: "Fundamental Analysis",
    description: "Evaluate companies like a professional",
    topics: [
      "Face Value of a Stock",
      "Market Value of a Stock",
      "Book Value of a Stock",
      "Market Capitalization",
      "Indices (Sensex, Nifty, Bank Nifty, etc.)",
      "Earnings Per Share (EPS)",
      "Price-to-Earnings (P/E) Ratio",
      "Circuits (Upper & Lower)",
      "Muhurat Trading",
      "Share Split",
      "Bonus Shares",
      "Right Shares",
      "Buyback of Shares",
      "Dividend",
    ],
  },
  {
    icon: LineChart,
    title: "Technical Analysis",
    description: "Master charts and price action",
    topics: [
      "Future Contracts",
      "Option Contracts – Types, Buyer vs Seller, Premium, etc.",
      "Expiry Dates",
      "Lot Size / Tick Size",
      "Index Derivatives",
      "Technical Indicators",
      "Volume Analysis",
      "Price Action Trading",
      "How to Take a Trade",
      "Types of Orders",
      "Limit Order",
      "Market Order",
      "Bid & Ask Price",
      "Order Book vs Trade Book",
      "Importance of Bracket Order",
      "Why Do We Need Charts?",
      "Types of Charts",
      "What is Price Action?",
      "Why Price Action?",
      "Comparison: Price Action vs Indicator-Based",
      "What is Support and Resistance?",
      "What is a Trading Range?",
      "Support & Resistance Zones",
      "Dynamic S&R",
      "Horizontal S&R",
      "Trending S&R",
      "Drawing Trend Lines (Real Example)",
      "Drawing Horizontal Lines (Real Example)",
      "Gaps – Gap Analysis",
      "Types of Gaps",
      "How to Trade Gaps",
    ],
  },
  {
    icon: Sparkles,
    title: "Bonus Strategies",
    description: "Personal Trading Strategies that actually work",
    topics: [
      "9 & 15 EMA Strategy – Explanation, Rules, and Real Trade Examples",
      "VCP (Volatility Contraction Pattern) – Concept, Psychology, and How to Identify and Trade It",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const CourseOverview = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

  return (
    <section className="py-20 px-4 overflow-hidden" id="courses">
      <div className="max-w-6xl mx-auto">
        {/* Section header with animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Complete <span className="text-gradient-gold">Course Curriculum</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            From basics to advanced strategies — everything you need to trade ethically
          </motion.p>
        </motion.div>

        {/* Course cards with stagger animation */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {courses.map((course, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card
                className={`bg-card border-border hover:border-primary/50 transition-all duration-300 group cursor-pointer overflow-hidden ${
                  expandedCard === index ? "border-primary ring-1 ring-primary/30" : ""
                }`}
                onClick={() => toggleCard(index)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <course.icon className="w-6 h-6 text-primary" />
                      </motion.div>
                      <div>
                        <CardTitle className="font-display text-xl mb-1 group-hover:text-primary transition-colors">
                          {course.title}
                        </CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-2"
                    >
                      <ChevronDown className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                </CardHeader>

                <AnimatePresence>
                  {expandedCard === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <CardContent className="pt-0 pb-6">
                        <div className="border-t border-border/50 pt-4 mt-2">
                          <div className="flex items-center gap-2 mb-4">
                            <BookOpen className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">
                              {course.topics.length} Topics Covered
                            </span>
                          </div>
                          <ul className="space-y-2 max-h-[400px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
                            {course.topics.map((topic, topicIndex) => (
                              <motion.li
                                key={topicIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: topicIndex * 0.03 }}
                                className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors py-1.5 px-2 rounded-md hover:bg-primary/5"
                              >
                                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-xs font-medium text-primary">
                                  {topicIndex + 1}
                                </span>
                                <span className="pt-0.5">{topic}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating particles animation */}
        <div className="relative mt-16 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30"
              style={{
                left: `${20 + i * 15}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;