import { useState, useEffect } from "react";
import { Clock, AlertTriangle, Flame } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const storedEndTime = localStorage.getItem("countdownEndTime");
    let endTime: number;

    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      endTime = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem("countdownEndTime", endTime.toString());
    }

    const updateTimer = () => {
      const now = Date.now();
      const diff = endTime - now;

      if (diff <= 0) {
        endTime = Date.now() + 24 * 60 * 60 * 1000;
        localStorage.setItem("countdownEndTime", endTime.toString());
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: Math.max(0, hours),
        minutes: Math.max(0, minutes),
        seconds: Math.max(0, seconds),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeBlock = ({ value, label, delay }: { value: number; label: string; delay: string }) => (
    <div 
      className="flex flex-col items-center opacity-0 animate-flip-up"
      style={{ animationDelay: delay }}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center transition-transform hover:scale-105">
        <span className="text-2xl sm:text-3xl font-bold text-primary tabular-nums">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative py-8 px-4">
      {/* Urgency header */}
      <div 
        className="flex items-center justify-center gap-2 mb-6 opacity-0 animate-fade-down"
      >
        <Flame className="w-5 h-5 text-red-500" />
        <span className="text-sm sm:text-base font-bold text-red-500">
          LIMITED SEATS OFFER ENDS IN
        </span>
        <Flame className="w-5 h-5 text-red-500" />
      </div>

      {/* Timer blocks */}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <TimeBlock value={timeLeft.hours} label="HOURS" delay="0.1s" />
        <span className="text-3xl font-bold text-primary mt-[-20px]">:</span>
        <TimeBlock value={timeLeft.minutes} label="MINUTES" delay="0.2s" />
        <span className="text-3xl font-bold text-primary mt-[-20px]">:</span>
        <TimeBlock value={timeLeft.seconds} label="SECONDS" delay="0.3s" />
      </div>

      {/* Urgency message */}
      <div 
        className="flex items-center justify-center gap-2 mt-6 p-3 rounded-lg bg-red-500/10 border border-red-500/30 max-w-md mx-auto opacity-0 animate-scale-up"
        style={{ animationDelay: "0.4s" }}
      >
        <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0" />
        <span className="text-xs sm:text-sm text-red-400 font-medium">
          Only 12 seats remaining at this price!
        </span>
        <Clock className="w-4 h-4 text-red-500 flex-shrink-0" />
      </div>
    </div>
  );
};

export default CountdownTimer;