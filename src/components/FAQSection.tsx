import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is this course Shariah-compliant?",
    answer:
      "Yes, absolutely. We only teach Halal trading and investing concepts. Our course focuses on knowledge-based education aligned with Islamic principles, avoiding any Haram practices like interest-based trading or pure speculation.",
  },
  {
    question: "Is this for learning or investment advice?",
    answer:
      "This course is strictly for educational purposes only. We do not provide investment advice, stock recommendations, or guaranteed returns. Our goal is to equip you with knowledge to make your own informed decisions.",
  },
  {
    question: "Can beginners & students join?",
    answer:
      "Absolutely! This course is designed to be beginner-friendly. We start from the very basics of financial markets and gradually progress to advanced concepts. No prior experience is required.",
  },
  {
    question: "Are real strategies taught?",
    answer:
      "Yes, we teach proven strategies including the 9 & 15 EMA Crossover Strategy and the VCP (Volatility Contraction Pattern). These are practical techniques used by professional traders.",
  },
  {
    question: "Is the course free?",
    answer:
      "We offer free introductory content to help you get started. The complete course curriculum with advanced strategies and detailed modules is available as part of our premium offering.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    },
  },
};

const FAQSection = () => {
  return (
    <section className="py-20 px-4 overflow-hidden" id="faq">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Everything you need to know before you start
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={itemVariants}>
                <AccordionItem value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-medium hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;