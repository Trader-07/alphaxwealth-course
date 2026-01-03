import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const FloatingSocials = () => {
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
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

  const handleWhatsAppClick = () => {
    window.open("https://wa.link/njqm95", "_blank");
  };

  const handleTelegramClick = () => {
    window.open("https://t.me/entreprenuer_zee07", "_blank");
  };

  return (
    <>
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !isWhatsAppOpen && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            className="fixed bottom-36 right-6 z-50 bg-card border border-border rounded-xl p-4 shadow-2xl max-w-[200px]"
          >
            <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }}>
              <p className="text-sm text-foreground font-medium">👋 Need help?</p>
              <p className="text-xs text-muted-foreground mt-1">Chat with us on WhatsApp or Telegram!</p>
            </motion.div>
            <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r border-b border-border rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Chat popup */}
      <AnimatePresence>
        {isWhatsAppOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-36 right-6 z-50 w-80 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-[#25D366] p-4 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-white">Alpha X Wealth</h3>
                <p className="text-xs text-white/80">Typically replies instantly</p>
              </div>
              <button onClick={() => setIsWhatsAppOpen(false)} className="p-1 hover:bg-white/20 rounded-full transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="p-4 bg-gradient-to-b from-secondary/30 to-background min-h-[150px]">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-3 shadow-sm max-w-[85%]"
              >
                <p className="text-sm text-foreground">Assalamu Alaikum! 👋</p>
                <p className="text-sm text-foreground mt-2">Ready to start your Halal trading journey? Click below to chat with us!</p>
                <p className="text-xs text-muted-foreground mt-2">Just now</p>
              </motion.div>
            </div>
            <div className="p-4 border-t border-border">
              <motion.button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Start Chat
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating buttons container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        {/* Telegram Button with sliding animation */}
        <motion.button
          onClick={handleTelegramClick}
          onMouseEnter={() => setTelegramHovered(true)}
          onMouseLeave={() => setTelegramHovered(false)}
          className="relative flex items-center justify-center w-14 h-14 bg-[#0088cc] rounded-full shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
          initial={{ scale: 0, opacity: 0, x: 100 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Sliding label */}
          <AnimatePresence>
            {telegramHovered && (
              <motion.div
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: -75, opacity: 1 }}
                exit={{ x: 60, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute whitespace-nowrap bg-[#0088cc] text-white text-sm font-medium px-3 py-1.5 rounded-lg shadow-lg"
              >
                Chat on Telegram
              </motion.div>
            )}
          </AnimatePresence>

          {/* Ripple effects */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#0088cc]"
            animate={{ scale: [1, 1.4, 1.4], opacity: [0.4, 0, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          />
          
          {/* Telegram icon */}
          <svg className="w-6 h-6 text-white relative z-10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </motion.button>

        {/* WhatsApp Button */}
        <motion.button
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Ripple effects */}
          <motion.div className="absolute inset-0 rounded-full bg-[#25D366]" animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          <motion.div className="absolute inset-0 rounded-full bg-[#25D366]" animate={{ scale: [1, 1.8, 1.8], opacity: [0.3, 0, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} />
          <motion.div className="absolute inset-0 rounded-full bg-[#25D366]" animate={{ scale: [1, 2.2, 2.2], opacity: [0.2, 0, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} />

          <AnimatePresence mode="wait">
            {isWhatsAppOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                <X className="w-7 h-7 text-white" />
              </motion.div>
            ) : (
              <motion.div key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                <MessageCircle className="w-7 h-7 text-white fill-white" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Notification badge */}
          <motion.span
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            1
          </motion.span>
        </motion.button>
      </div>
    </>
  );
};

export default FloatingSocials;
