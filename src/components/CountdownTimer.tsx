import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock, AlertTriangle, Flame } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    // Get stored end time or create new one
    const storedEndTime = localStorage.getItem("countdownEndTime");
    let endTime: number;

    if (storedEndTime) {
      endTime = parseInt(storedEndTime, 10);
    } else {
      endTime = Date.now() + 24 * 60 * 60 * 1000; // 24 hours from now
      localStorage.setItem("countdownEndTime", endTime.toString());
    }

    const updateTimer = () => {
      const now = Date.now();
      const diff = endTime - now;

      if (diff <= 0) {
        // Reset timer
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

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center"
      animate={{
        scale: value === 0 ? [1, 1.1, 1] : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.05 }}
      >
        {/* Glowing background */}
        <motion.div
          className="absolute inset-0 bg-primary/10"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        
        <motion.span
          key={value}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-2xl sm:text-3xl font-bold text-primary relative z-10"
        >
          {value.toString().padStart(2, "0")}
        </motion.span>
      </motion.div>
      <span className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">
        {label}
      </span>
    </motion.div>
  );

  return (
    <motion.div
      className="relative py-8 px-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {/* Urgency header */}
      <motion.div
        className="flex items-center justify-center gap-2 mb-6"
        animate={{
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          <Flame className="w-5 h-5 text-red-500" />
        </motion.div>
        <span className="text-sm sm:text-base font-bold text-red-500">
          LIMITED SEATS OFFER ENDS IN
        </span>
        <motion.div
          animate={{ rotate: [5, -5, 5] }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          <Flame className="w-5 h-5 text-red-500" />
        </motion.div>
      </motion.div>

      {/* Timer blocks */}
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <TimeBlock value={timeLeft.hours} label="HOURS" />
        <motion.span
          className="text-3xl font-bold text-primary mt-[-20px]"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          :
        </motion.span>
        <TimeBlock value={timeLeft.minutes} label="MINUTES" />
        <motion.span
          className="text-3xl font-bold text-primary mt-[-20px]"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          :
        </motion.span>
        <TimeBlock value={timeLeft.seconds} label="SECONDS" />
      </div>

      {/* Urgency message */}
      <motion.div
        className="flex items-center justify-center gap-2 mt-6 p-3 rounded-lg bg-red-500/10 border border-red-500/30 max-w-md mx-auto"
        animate={{
          boxShadow: [
            "0 0 10px rgba(239, 68, 68, 0.2)",
            "0 0 25px rgba(239, 68, 68, 0.4)",
            "0 0 10px rgba(239, 68, 68, 0.2)",
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <AlertTriangle className="w-4 h-4 text-red-500" />
        </motion.div>
        <span className="text-xs sm:text-sm text-red-400 font-medium">
          Only 12 seats remaining at this price!
        </span>
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <Clock className="w-4 h-4 text-red-500" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CountdownTimer;
