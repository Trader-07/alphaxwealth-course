import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.link/njqm95"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(37, 211, 102, 0.4)",
            "0 0 0 15px rgba(37, 211, 102, 0)",
          ],
        }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute inset-0 rounded-full"
      />
      <MessageCircle className="w-7 h-7 text-white fill-white" />
    </motion.a>
  );
};

export default FloatingWhatsApp;