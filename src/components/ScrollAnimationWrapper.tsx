import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate";
  delay?: number;
  duration?: number;
}

const ScrollAnimationWrapper = ({
  children,
  className = "",
  direction = "up",
  delay = 0,
  duration = 0.6,
}: ScrollAnimationWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Different animation transforms based on direction
  const yUp = useTransform(smoothProgress, [0, 0.3], [80, 0]);
  const yDown = useTransform(smoothProgress, [0, 0.3], [-80, 0]);
  const xLeft = useTransform(smoothProgress, [0, 0.3], [100, 0]);
  const xRight = useTransform(smoothProgress, [0, 0.3], [-100, 0]);
  const scale = useTransform(smoothProgress, [0, 0.3], [0.8, 1]);
  const rotate = useTransform(smoothProgress, [0, 0.3], [-10, 0]);
  const opacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

  const getTransform = () => {
    switch (direction) {
      case "up":
        return { y: yUp, opacity };
      case "down":
        return { y: yDown, opacity };
      case "left":
        return { x: xLeft, opacity };
      case "right":
        return { x: xRight, opacity };
      case "scale":
        return { scale, opacity };
      case "rotate":
        return { rotate, opacity };
      default:
        return { y: yUp, opacity };
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={getTransform()}
      transition={{ duration, delay }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimationWrapper;
