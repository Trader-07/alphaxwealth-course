import { motion } from "framer-motion";
import { BookOpen, Shield, Ban, GraduationCap } from "lucide-react";

const badges = [
  { icon: BookOpen, label: "100% Knowledge-Based" },
  { icon: Shield, label: "Only Halal Methods" },
  { icon: Ban, label: "No Tips / No Recommendations" },
  { icon: GraduationCap, label: "Beginner Friendly" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 150,
      damping: 12,
    },
  },
};

const TrustBadges = () => {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 md:gap-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          variants={badgeVariants}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)",
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors cursor-default"
        >
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <badge.icon className="w-4 h-4 text-primary" />
          </motion.div>
          <span className="text-sm font-medium text-foreground">{badge.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default TrustBadges;