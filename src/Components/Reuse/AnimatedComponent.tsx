import type { Variants } from "framer-motion";
import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";


type AnimatedComponentProps = {
  children: ReactNode;
  animationType?: "fade" | "slide" | "scale" | "rotate" | "custom";
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
  delay?: number;
  className?: string;
  triggerOnScroll?: boolean;
  viewportMargin?: string;
  repeatAnimation?: boolean; 
};

export const AnimatedComponent = ({
  children,
  animationType = "fade",
  direction = "up",
  duration = 0.5,
  delay = 0,
  className = "",
  triggerOnScroll = false,
  viewportMargin = "0px",
  repeatAnimation = false,
}: AnimatedComponentProps) => {
  const [isInView, setIsInView] = useState(false);

  const getVariants = (): Variants => {
    switch (animationType) {
      case "fade":
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        };
      case "slide":
        return {
          hidden: { 
            opacity: 0, 
            y: direction === "up" ? 20 : direction === "down" ? -20 : 0, 
            x: direction === "left" ? 20 : direction === "right" ? -20 : 0 
          },
          visible: { 
            opacity: 1, 
            y: 0, 
            x: 0, 
            transition: { duration, delay } 
          },
        };
      case "scale":
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1, transition: { duration, delay } },
        };
      case "rotate":
        return {
          hidden: { opacity: 0, rotate: -90 },
          visible: { opacity: 1, rotate: 0, transition: { duration, delay } },
        };
      case "custom":
        return {
          hidden: { opacity: 0, scale: 0.5, rotate: 45 },
          visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration, delay } },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration, delay } },
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate={
        triggerOnScroll 
          ? (isInView ? "visible" : "hidden") 
          : "visible"
      }
      variants={getVariants()}
      className={className}
      onViewportEnter={() => {
        if (triggerOnScroll) {
          setIsInView(true);
          if (!repeatAnimation) return;
          setTimeout(() => setIsInView(false), (duration + delay) * 1000 + 100);
        }
      }}
      onViewportLeave={() => {
        if (triggerOnScroll && repeatAnimation) {
          setIsInView(false);
        }
      }}
      viewport={{ 
        margin: viewportMargin,
        once: !repeatAnimation 
      }}
    >
      {children}
    </motion.div>
  );
};