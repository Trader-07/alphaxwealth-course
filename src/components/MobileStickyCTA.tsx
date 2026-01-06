import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

const MobileStickyCTA = () => {
  const handleEnroll = () => {
    window.open("https://wa.link/njqm95", "_blank");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-lg border-t border-border px-4 py-3 safe-area-bottom">
      <div className="flex items-center justify-between gap-3">
        {/* Price info */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground line-through text-xs">₹5,999</span>
            <span className="text-[10px] bg-red-500/20 text-red-400 px-1.5 py-0.5 rounded-full font-bold">
              42% OFF
            </span>
          </div>
          <span className="text-xl font-bold text-gradient-gold">₹3,499</span>
        </div>

        {/* CTA Button */}
        <Button
          onClick={handleEnroll}
          className="flex-1 max-w-[200px] py-5 text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground glow-gold touch-manipulation"
        >
          <Zap className="w-4 h-4 mr-1.5" />
          Enroll Now
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyCTA;
