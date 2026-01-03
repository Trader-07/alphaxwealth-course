import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-12 px-4 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border">
          <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
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
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;
