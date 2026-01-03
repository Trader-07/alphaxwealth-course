import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-12 px-4 bg-secondary/20 overflow-hidden">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          </motion.div>
          <div>
            <h3 className="font-semibold text-foreground mb-2">Important Disclaimer</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              This course is strictly for educational and knowledge purposes only. Alpha X Wealth
              does not provide investment advice, stock recommendations, or guaranteed returns.
              Markets involve risk. Past performance is not indicative of future results. Always
              conduct your own research and consult with qualified financial advisors before
              making any investment decisions.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default DisclaimerSection;