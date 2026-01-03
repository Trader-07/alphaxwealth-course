import { CheckCircle, XCircle, Shield } from "lucide-react";

const halalPoints = [
  "Only Halal trading & investing concepts taught",
  "Clear explanation of Haram practices (for awareness)",
  "No interest-based or speculative guidance",
  "For education & knowledge purpose only",
];

const HalalSection = () => {
  return (
    <section className="py-20 px-4 bg-secondary/30" id="halal">
      <div className="max-w-4xl mx-auto">
        {/* Islamic geometric pattern decoration */}
        <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Learn What is <span className="text-gradient-gold">Halal</span> & What is{" "}
            <span className="text-candle-red">Haram</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            in the Stock Market
          </p>
        </div>

        {/* Halal points */}
        <div className="grid gap-4 max-w-2xl mx-auto">
          {halalPoints.map((point, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
            >
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-foreground font-medium">{point}</span>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-12 flex justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span className="text-sm">Shariah-Aligned</span>
          </div>
          <div className="flex items-center gap-2">
            <XCircle className="w-5 h-5 text-candle-red" />
            <span className="text-sm">No Speculation</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HalalSection;
