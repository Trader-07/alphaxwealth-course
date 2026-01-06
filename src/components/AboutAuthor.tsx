import { motion } from "framer-motion";
import { User, TrendingUp, Brain, Shield } from "lucide-react";

const AboutAuthor = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <User className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About the Author</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet <span className="text-primary">Mohammed Zeeshan Mohi Uddin</span>
          </h2>
          <p className="text-muted-foreground text-lg">Founder of Alpha X Wealth</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10"
        >
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <TrendingUp className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">4+ Years Experience</h4>
                <p className="text-sm text-muted-foreground">Learner and practitioner in the stock market</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <Brain className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">AI & ML Enthusiast</h4>
                <p className="text-sm text-muted-foreground">Leveraging technology for financial analysis</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Shariah-Aware</h4>
                <p className="text-sm text-muted-foreground">Ethical and Halal investing education</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
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
            <p className="text-sm italic border-t border-border pt-4 mt-4">
              All content under Alpha X Wealth is designed strictly for educational and knowledge purposes only, 
              without providing investment advice or recommendations.
            </p>
          </div>

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
