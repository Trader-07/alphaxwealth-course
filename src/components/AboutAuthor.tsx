import { motion } from "framer-motion";
import { User, TrendingUp, Brain, Shield, Linkedin } from "lucide-react";

const AboutAuthor = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-primary/10 border border-primary/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-6">
            <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">About the Author</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4 px-2">
            Meet <span className="text-primary block sm:inline">Mohammed Zeeshan Mohi Uddin</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg">Founder of Alpha X Wealth</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
            <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl border border-primary/10">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">4+ Years Experience</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Learner and practitioner in the stock market</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl border border-primary/10">
              <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">AI & ML Enthusiast</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Leveraging technology for financial analysis</p>
              </div>
            </div>
            <div className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 bg-primary/5 rounded-lg sm:rounded-xl border border-primary/10 sm:col-span-2 md:col-span-1">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 sm:mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base">Shariah-Aware</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">Ethical and Halal investing education</p>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p>
              Mohammed Zeeshan Mohi Uddin is the founder of Alpha X Wealth, an educational initiative focused on 
              building <span className="text-foreground font-medium">financial literacy and market understanding</span> through 
              an ethical and Shariah-aware approach.
            </p>
            <p>
              He has <span className="text-primary font-medium">4+ years of experience</span> in the stock market as a 
              learner and practitioner, along with continuous learning in <span className="text-foreground font-medium">Artificial 
              Intelligence (AI) and Machine Learning (ML)</span> to better understand how technology can enhance financial 
              analysis, data interpretation, and decision-support systems.
            </p>
            <p>
              His work centers on teaching market basics, fundamental analysis, and technical analysis in a structured manner, 
              while also creating awareness about <span className="text-green-500 font-medium">Halal</span> and
              <span className="text-red-500 font-medium"> Haram</span> practices in the stock market.
            </p>
            <p className="text-xs sm:text-sm italic border-t border-border pt-3 sm:pt-4 mt-3 sm:mt-4">
              All content under Alpha X Wealth is designed strictly for educational and knowledge purposes only, 
              without providing investment advice or recommendations.
            </p>
          </div>

          {/* LinkedIn Profile Box */}
          <motion.a
            href="https://www.linkedin.com/in/mohammed-zeeshan-mohi-uddin"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="mt-6 flex items-center gap-3 p-4 bg-[#0077B5]/10 border border-[#0077B5]/20 rounded-xl w-fit hover:bg-[#0077B5]/15 transition-colors cursor-pointer"
          >
            <div className="p-2 bg-[#0077B5] rounded-lg">
              <Linkedin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Connect on LinkedIn</p>
              <p className="text-xs text-muted-foreground">Mohammed Zeeshan Mohi Uddin</p>
            </div>
          </motion.a>

          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-l-4 border-primary rounded-r-xl"
          >
            <p className="text-lg md:text-xl font-medium text-foreground italic">
              "We don't teach how to get rich quickly.<br />
              <span className="text-primary">We teach how to think correctly in the market, ethically and responsibly.</span>"
            </p>
            <footer className="mt-3 text-sm text-muted-foreground">
              — Mohammed Zeeshan Mohi Uddin
            </footer>
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAuthor;
