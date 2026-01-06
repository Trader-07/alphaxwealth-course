import { useRef, ReactNode, useEffect, useState } from "react";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "scale-up" | "blur-in" | "pop" | "rotate-in" | "flip-up";
  delay?: number;
}

const ScrollAnimationWrapper = ({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
}: ScrollAnimationWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const animationClass = isVisible ? `animate-${animation}` : "";

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimationWrapper;