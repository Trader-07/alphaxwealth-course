import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Zap, Crown, Users, Clock } from "lucide-react";

const plan = {
  name: "Premium",
  description: "Complete stock market mastery",
  originalPrice: 5999,
  discountedPrice: 3499,
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
};

const PricingSection = () => {
  const handleGetStarted = () => {
    window.open("https://wa.link/njqm95", "_blank");
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 overflow-hidden relative" id="pricing">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/10 rounded-full blur-3xl opacity-30" />

      <div className="max-w-lg mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12">
          <div 
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-primary/30 bg-primary/5 mb-4 sm:mb-6 opacity-0 animate-pop"
          >
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium text-primary">Limited Time Offer</span>
          </div>

          <h2 
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 opacity-0 animate-blur-in"
            style={{ animationDelay: "0.1s" }}
          >
            Enroll <span className="text-gradient-gold">Now</span>
          </h2>
        </div>

        {/* Urgency banner */}
        <div 
          className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 opacity-0 animate-scale-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
          <span className="text-foreground font-medium text-xs sm:text-sm md:text-base">
            🔥 Only <span className="text-primary font-bold">50 seats</span> at this price!
          </span>
          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
        </div>

        {/* Pricing card */}
        <div 
          className="relative opacity-0 animate-slide-up-bounce"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Popular badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm shadow-lg">
              <Crown className="w-4 h-4" />
              Most Popular
            </div>
          </div>

          <Card className="relative overflow-hidden border-primary ring-2 ring-primary/30 bg-gradient-to-b from-primary/5 to-transparent">
            {/* Discount ribbon */}
            <div className="absolute -right-10 sm:-right-12 top-5 sm:top-6 rotate-45 bg-gradient-to-r from-red-600 to-red-500 text-white px-10 sm:px-12 py-0.5 sm:py-1 text-xs sm:text-sm font-bold shadow-lg">
              42% OFF
            </div>

            <CardHeader className="text-center pb-3 sm:pb-4 pt-6 sm:pt-8 px-4 sm:px-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-primary/10 flex items-center justify-center transition-transform hover:scale-110">
                <Crown className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              <CardTitle className="font-display text-xl sm:text-2xl">{plan.name}</CardTitle>
              <CardDescription className="text-xs sm:text-sm">{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
              {/* Pricing */}
              <div className="text-center space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  <span className="text-muted-foreground line-through text-lg sm:text-xl">
                    ₹{plan.originalPrice.toLocaleString()}
                  </span>
                  <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px] sm:text-xs font-bold">
                    SAVE ₹2,500
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl sm:text-5xl font-bold text-gradient-gold">
                    ₹{plan.discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground text-sm sm:text-base">/lifetime</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm opacity-0 animate-fade-right"
                    style={{ animationDelay: `${0.4 + featureIndex * 0.05}s` }}
                  >
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110">
                      <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={handleGetStarted}
                className="w-full py-5 sm:py-6 text-base sm:text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground glow-gold transition-transform hover:scale-[1.02] touch-manipulation"
              >
                Get Started Now
              </Button>

              <p className="text-center text-[10px] sm:text-xs text-muted-foreground">
                🔒 Secure payment • Instant access
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Bottom urgency */}
        <div 
          className="text-center mt-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-muted-foreground text-sm">
            ⚡ Price increases after 50 enrollments • Don't miss out!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;