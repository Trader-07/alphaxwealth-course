import { useState, useEffect, useRef } from "react";
import { Clock, AlertTriangle, Flame } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  
  const prevTimeRef = useRef({ hours: -1, minutes: -1, seconds: -1 });

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

  const TimeBlock = ({ value, label, shouldAnimate }: { value: number; label: string; shouldAnimate: boolean }) => (
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={shouldAnimate ? { y: -40, opacity: 0 } : false}
            animate={{ y: 0, opacity: 1 }}
            exit={shouldAnimate ? { y: 40, opacity: 0 } : undefined}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-2xl sm:text-3xl font-bold text-primary tabular-nums absolute"
          >
            {value.toString().padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
        {label}
      </span>
    </div>
  );

  // Track previous values to determine what changed
  const hoursChanged = prevTimeRef.current.hours !== timeLeft.hours && prevTimeRef.current.hours !== -1;
  const minutesChanged = prevTimeRef.current.minutes !== timeLeft.minutes && prevTimeRef.current.minutes !== -1;
  const secondsChanged = prevTimeRef.current.seconds !== timeLeft.seconds && prevTimeRef.current.seconds !== -1;
  
  // Update ref after render
  useEffect(() => {
    prevTimeRef.current = timeLeft;
  }, [timeLeft]);

  return (
    <div className="relative py-8 px-4">
      {/* Urgency header */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <Flame className="w-5 h-5 text-red-500" />
        <span className="text-sm sm:text-base font-bold text-red-500">
          LIMITED SEATS OFFER ENDS IN
        </span>
        <Flame className="w-5 h-5 text-red-500" />
      </div>

      {/* Timer blocks */}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <TimeBlock value={timeLeft.hours} label="HOURS" shouldAnimate={hoursChanged} />
        <span className="text-3xl font-bold text-primary mt-[-20px]">:</span>
        <TimeBlock value={timeLeft.minutes} label="MINUTES" shouldAnimate={minutesChanged} />
        <span className="text-3xl font-bold text-primary mt-[-20px]">:</span>
        <TimeBlock value={timeLeft.seconds} label="SECONDS" shouldAnimate={secondsChanged || prevTimeRef.current.seconds === -1} />
      </div>

      {/* Urgency message */}
      <div className="flex items-center justify-center gap-2 mt-6 p-3 rounded-lg bg-red-500/10 border border-red-500/30 max-w-md mx-auto">
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
