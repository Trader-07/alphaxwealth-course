import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, BarChart3, LineChart, Sparkles, ChevronDown, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

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
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 80,
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
    <section className="py-12 sm:py-16 md:py-20 px-4 overflow-hidden" id="courses">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4"
          >
            Complete <span className="text-gradient-gold">Course Curriculum</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2"
          >
            From basics to advanced strategies — everything you need to trade ethically
          </motion.p>
        </motion.div>

        {/* Course cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {courses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card
                className={`bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden touch-manipulation ${
                  expandedCard === index ? "border-primary ring-1 ring-primary/30" : ""
                }`}
                onClick={() => toggleCard(index)}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start justify-between gap-2 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="p-2 sm:p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors flex-shrink-0"
                      >
                        <course.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </motion.div>
                      <div className="min-w-0">
                        <CardTitle className="font-display text-base sm:text-lg md:text-xl mb-1 group-hover:text-primary transition-colors leading-tight">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm">{course.description}</CardDescription>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-1.5 sm:p-2 flex-shrink-0"
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </motion.div>
                  </div>
                </CardHeader>

                {expandedCard === index && (
                  <CardContent className="pt-0 pb-4 sm:pb-6 px-4 sm:px-6 animate-accordion-down">
                    <div className="border-t border-border/50 pt-3 sm:pt-4 mt-2">
                      <div className="flex items-center gap-2 mb-3 sm:mb-4">
                        <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
                        <span className="text-xs sm:text-sm font-medium text-primary">
                          {course.topics.length} Topics Covered
                        </span>
                      </div>
                      <ul className="space-y-1.5 sm:space-y-2 max-h-[300px] sm:max-h-[400px] overflow-y-auto pr-1 sm:pr-2">
                        {course.topics.map((topic, topicIndex) => (
                          <motion.li
                            key={topicIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: topicIndex * 0.03 }}
                            className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors py-1 sm:py-1.5 px-1.5 sm:px-2 rounded-md hover:bg-primary/5"
                          >
                            <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-[10px] sm:text-xs font-medium text-primary">
                              {topicIndex + 1}
                            </span>
                            <span className="pt-0.5">{topic}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOverview;