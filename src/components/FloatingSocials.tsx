import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingSocials = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [telegramHovered, setTelegramHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, []);

  const handleTelegramClick = () => {
    window.open("https://t.me/entreprenuer_zee07", "_blank");
  };

  return (
    <>
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-28 right-8 z-50 bg-card border border-border rounded-xl p-4 shadow-2xl max-w-[200px]"
          >
            <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <p className="text-sm text-foreground font-medium">👋 Need help?</p>
              <p className="text-xs text-muted-foreground mt-1">Chat with us on Telegram!</p>
            </motion.div>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Telegram button - bottom right corner */}
      <motion.button
        onClick={handleTelegramClick}
        onMouseEnter={() => setTelegramHovered(true)}
        onMouseLeave={() => setTelegramHovered(false)}
        className="fixed bottom-8 right-8 z-50 relative flex items-center justify-center w-14 h-14 bg-[#0088cc] rounded-full shadow-lg hover:shadow-xl transition-shadow overflow-visible"
        initial={{ scale: 0, opacity: 0, y: 100 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Sliding label */}
        <AnimatePresence>
          {telegramHovered && (
            <motion.div
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: -90, opacity: 1 }}
              exit={{ x: 60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="absolute whitespace-nowrap bg-[#0088cc] text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg"
            >
              Chat on Telegram
            </motion.div>
          )}
        </AnimatePresence>

        {/* Ripple effects */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#0088cc]"
          animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-[#0088cc]"
          animate={{ scale: [1, 1.8, 1.8], opacity: [0.3, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
        />
        <motion.div
          className="absolute inset-0 rounded-full bg-[#0088cc]"
          animate={{ scale: [1, 2.2, 2.2], opacity: [0.2, 0, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />

        {/* Telegram icon */}
        <svg className="w-7 h-7 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>

        {/* Notification badge */}
        <motion.span
          className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          1
        </motion.span>
      </motion.button>
    </>
  );
};

export default FloatingSocials;
