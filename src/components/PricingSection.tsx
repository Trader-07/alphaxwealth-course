import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Crown, Sparkles, Users, Clock } from "lucide-react";

const plans = [
  {
    name: "Premium",
    description: "Complete stock market mastery",
    originalPrice: 5999,
    discountedPrice: 3499,
    popular: true,
    features: [
      "Basics of Financial Markets",
      "Fundamental Analysis",
      "Technical Analysis",
      "9 & 15 EMA Strategy",
      "VCP Pattern Strategy",
      "Lifetime Access",
      "WhatsApp Community Access",
      "Real Trade Examples",
    ],
  },
  {
    name: "Enterprise",
    description: "For teams & institutions",
    originalPrice: null,
    discountedPrice: null,
    popular: false,
    features: [
      "Everything in Premium",
      "Custom Training Sessions",
      "Team License (10+ members)",
      "Priority Support",
      "Certificate of Completion",
      "1-on-1 Doubt Clearing",
      "Exclusive Webinars",
      "Personalized Guidance",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      stiffness: 100,
      damping: 15,
    },
  },
};

const PricingSection = () => {
  const handleGetStarted = () => {
    window.open("https://wa.link/njqm95", "_blank");
  };

  return (
    <section className="py-20 px-4 overflow-hidden relative" id="pricing">
      {/* Background glow effects */}
      <motion.div
        className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Limited Time Offer</span>
          </motion.div>

          <motion.h2
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose Your <span className="text-gradient-gold">Learning Path</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Invest in your financial education today
          </motion.p>
        </motion.div>

        {/* Urgency banner */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-10 p-4 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(212, 175, 55, 0.2)",
              "0 0 40px rgba(212, 175, 55, 0.4)",
              "0 0 20px rgba(212, 175, 55, 0.2)",
            ],
          }}
          transition={{
            boxShadow: { duration: 2, repeat: Infinity },
          }}
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <Users className="w-5 h-5 text-primary" />
          </motion.div>
          <span className="text-foreground font-medium">
            🔥 Only <span className="text-primary font-bold">50 seats</span> available at this price!
          </span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Clock className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={cardVariants} className="relative">
              {/* Popular badge */}
              {plan.popular && (
                <motion.div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm"
                    animate={{
                      scale: [1, 1.05, 1],
                      boxShadow: [
                        "0 0 15px rgba(212, 175, 55, 0.5)",
                        "0 0 30px rgba(212, 175, 55, 0.8)",
                        "0 0 15px rgba(212, 175, 55, 0.5)",
                      ],
                    }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Crown className="w-4 h-4" />
                    Most Popular
                  </motion.div>
                </motion.div>
              )}

              <Card
                className={`relative overflow-hidden h-full ${
                  plan.popular
                    ? "border-primary ring-2 ring-primary/30 bg-gradient-to-b from-primary/5 to-transparent"
                    : "border-border hover:border-primary/50"
                } transition-all duration-300`}
              >
                {/* Discount ribbon for premium */}
                {plan.popular && (
                  <motion.div
                    className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-red-600 to-red-500 text-white px-12 py-1 text-sm font-bold shadow-lg"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.8, type: "spring" as const }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    >
                      42% OFF
                    </motion.span>
                  </motion.div>
                )}

                <CardHeader className="text-center pb-4">
                  <motion.div
                    className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {plan.popular ? (
                      <Crown className="w-8 h-8 text-primary" />
                    ) : (
                      <Sparkles className="w-8 h-8 text-primary" />
                    )}
                  </motion.div>
                  <CardTitle className="font-display text-2xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Pricing */}
                  <div className="text-center">
                    {plan.originalPrice ? (
                      <div className="space-y-2">
                        <motion.div
                          className="flex items-center justify-center gap-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                        >
                          <span className="text-muted-foreground line-through text-xl">
                            ₹{plan.originalPrice.toLocaleString()}
                          </span>
                          <motion.span
                            className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-bold"
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [-2, 2, -2],
                            }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                          >
                            SAVE ₹2,500
                          </motion.span>
                        </motion.div>
                        <motion.div
                          className="flex items-baseline justify-center gap-1"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.4, type: "spring" as const, stiffness: 200 }}
                        >
                          <span className="text-5xl font-bold text-gradient-gold">
                            ₹{plan.discountedPrice?.toLocaleString()}
                          </span>
                          <span className="text-muted-foreground">/lifetime</span>
                        </motion.div>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <span className="text-4xl font-bold text-gradient-gold">Custom</span>
                        <p className="text-sm text-muted-foreground">Contact for pricing</p>
                      </div>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.05 }}
                      >
                        <motion.div
                          className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.2 }}
                        >
                          <Check className="w-3 h-3 text-primary" />
                        </motion.div>
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={handleGetStarted}
                      className={`w-full py-6 text-lg font-semibold ${
                        plan.popular
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground glow-gold"
                          : "bg-secondary hover:bg-secondary/80"
                      }`}
                    >
                      {plan.popular ? "Get Started Now" : "Contact Us"}
                    </Button>
                  </motion.div>

                  {plan.popular && (
                    <motion.p
                      className="text-center text-xs text-muted-foreground"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    >
                      🔒 Secure payment • Instant access
                    </motion.p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom urgency */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.p
            className="text-muted-foreground"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ⚡ Price increases after 50 enrollments • Don't miss out!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;