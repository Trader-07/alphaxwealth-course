import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const FloatingSocials = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [telegramHovered, setTelegramHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hideTimer = setTimeout(() => setShowTooltip(false), 8000);
    return () => {
      clearTimeout(timer);
      clearTimeout(hideTimer);
    };
  }, [isVisible]);
  const handleTelegramClick = () => {
    window.open("https://t.me/Entrepreneur_zee07", "_blank");
  };
  if (!isVisible) return null;
  return <>
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && <motion.div initial={{
        opacity: 0,
        y: 20,
        scale: 0.8
      }} animate={{
        opacity: 1,
        y: 0,
        scale: 1
      }} exit={{
        opacity: 0,
        y: 20,
        scale: 0.8
      }} className="fixed bottom-28 left-8 z-50 bg-card border border-border rounded-xl p-4 shadow-2xl max-w-[200px]">
            <motion.div animate={{
          scale: [1, 1.02, 1]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }}>
              
              <p className="text-xs text-muted-foreground mt-1">Chat with us on Telegram!</p>
            </motion.div>
            <div className="absolute -bottom-2 left-8 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
          </motion.div>}
      </AnimatePresence>

      {/* Floating Telegram button - bottom right corner */}
      
    </>;
};
export default FloatingSocials;