import { motion } from "framer-motion";
import { User, Award, BookOpen, Shield } from "lucide-react";

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
              <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Mission-Driven</h4>
                <p className="text-sm text-muted-foreground">Making stock market knowledge ethical, practical, and Shariah-aligned</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <BookOpen className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Experienced Educator</h4>
                <p className="text-sm text-muted-foreground">Hands-on experience in Indian stock market and financial education</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Values First</h4>
                <p className="text-sm text-muted-foreground">Knowledge first, discipline always, values above everything</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              With hands-on experience in the Indian stock market and a strong background in financial education, 
              Zeeshan focuses on teaching the <span className="text-foreground font-medium">"right way"</span> to 
              understand markets—without hype, shortcuts, or speculative promises. His approach is simple: 
              <span className="text-primary font-medium"> knowledge first, discipline always, and values above everything</span>.
            </p>
            <p>
              Through Alpha X Wealth, he aims to empower students, beginners, and ethical investors with clear concepts 
              in market basics, fundamental analysis, and technical analysis, while clearly distinguishing what is 
              <span className="text-green-500 font-medium"> Halal</span> and what is 
              <span className="text-red-500 font-medium"> Haram</span> in stock market practices.
            </p>
            <p>
              This course is created purely for educational and awareness purposes, helping learners build long-term 
              financial understanding while staying aligned with their principles.
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
