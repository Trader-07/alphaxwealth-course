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
    <section className="py-20 px-4 overflow-hidden relative" id="pricing">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl opacity-30" />

      <div className="max-w-lg mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-6 opacity-0 animate-pop"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Limited Time Offer</span>
          </div>

          <h2 
            className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 opacity-0 animate-blur-in"
            style={{ animationDelay: "0.1s" }}
          >
            Enroll <span className="text-gradient-gold">Now</span>
          </h2>
        </div>

        {/* Urgency banner */}
        <div 
          className="flex items-center justify-center gap-3 mb-8 p-4 rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 opacity-0 animate-scale-up"
          style={{ animationDelay: "0.2s" }}
        >
          <Users className="w-5 h-5 text-primary" />
          <span className="text-foreground font-medium text-sm sm:text-base">
            🔥 Only <span className="text-primary font-bold">50 seats</span> at this price!
          </span>
          <Clock className="w-5 h-5 text-primary" />
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
            <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-red-600 to-red-500 text-white px-12 py-1 text-sm font-bold shadow-lg">
              42% OFF
            </div>

            <CardHeader className="text-center pb-4 pt-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center transition-transform hover:scale-110">
                <Crown className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-display text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Pricing */}
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-muted-foreground line-through text-xl">
                    ₹{plan.originalPrice.toLocaleString()}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-xs font-bold">
                    SAVE ₹2,500
                  </span>
                </div>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-gradient-gold">
                    ₹{plan.discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">/lifetime</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center gap-3 text-sm opacity-0 animate-fade-right"
                    style={{ animationDelay: `${0.4 + featureIndex * 0.05}s` }}
                  >
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 transition-transform hover:scale-110">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                onClick={handleGetStarted}
                className="w-full py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground glow-gold transition-transform hover:scale-[1.02]"
              >
                Get Started Now
              </Button>

              <p className="text-center text-xs text-muted-foreground">
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