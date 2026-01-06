import { BookOpen, Shield, Ban, GraduationCap } from "lucide-react";

const badges = [
  { icon: BookOpen, label: "100% Knowledge-Based" },
  { icon: Shield, label: "Only Halal Methods" },
  { icon: Ban, label: "No Tips / No Recommendations" },
  { icon: GraduationCap, label: "Beginner Friendly" },
];

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 cursor-default hover:scale-105 opacity-0 animate-pop"
          style={{ animationDelay: `${0.5 + index * 0.1}s` }}
        >
          <badge.icon className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-foreground">{badge.label}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;