import { motion } from "framer-motion";
import { Twitter, Instagram, Youtube, Linkedin, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
const socialLinks = [{
  icon: Twitter,
  label: "Twitter",
  href: "#"
}, {
  icon: Instagram,
  label: "Instagram",
  href: "#"
}, {
  icon: Youtube,
  label: "YouTube",
  href: "#"
}, {
  icon: Linkedin,
  label: "LinkedIn",
  href: "#"
}];
const Footer = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.link/njqm95", "_blank");
  };
  return <footer className="py-8 sm:py-10 md:py-12 px-4 border-t border-border relative overflow-hidden">
      {/* Background glow */}
      <motion.div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[150px] sm:h-[200px] bg-primary/5 rounded-full blur-3xl" animate={{
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.1, 1]
    }} transition={{
      duration: 4,
      repeat: Infinity
    }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          {/* Brand */}
          <motion.div className="text-center md:text-left flex items-center gap-2 sm:gap-3" whileHover={{
          scale: 1.02
        }}>
            <img src={logo} alt="Alpha X Wealth" className="w-10 h-10 sm:w-12 sm:h-12" />
            <div>
              <h3 className="font-display text-base sm:text-lg md:text-xl font-bold text-gradient-gold mb-0.5 sm:mb-1">
                Alpha X Wealth
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Ethical • Educational • Shariah-Aligned
              </p>
            </div>
          </motion.div>

          {/* WhatsApp CTA */}
          <motion.button onClick={handleWhatsAppClick} className="flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold rounded-lg sm:rounded-xl transition-colors touch-manipulation text-sm sm:text-base" whileHover={{
          scale: 1.05,
          y: -2
        }} whileTap={{
          scale: 0.98
        }}>
            <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
            Chat with us
          </motion.button>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => <motion.a key={social.label} href={social.href} className="p-2.5 rounded-xl bg-secondary hover:bg-primary/20 transition-colors group" aria-label={social.label} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            scale: 1.1,
            y: -3
          }} whileTap={{
            scale: 0.95
          }}>
                
              </motion.a>)}
          </div>
        </motion.div>

        {/* Copyright */}
        <motion.div className="mt-8 pt-6 border-t border-border text-center" initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3
      }}>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alpha X Wealth. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>;
};
export default Footer;