import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  stagger?: boolean;
  className?: string;
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  left: {
    hidden: { opacity: 0, x: -60, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
  right: {
    hidden: { opacity: 0, x: 60, filter: "blur(6px)" },
    visible: { opacity: 1, x: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const SectionTransition = ({ children, direction = "up", stagger = false, className }: SectionTransitionProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={stagger ? staggerContainer : variants[direction]}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const SectionChildTransition = ({ children, direction = "up", className }: { children: ReactNode; direction?: "up" | "left" | "right"; className?: string }) => (
  <motion.div variants={variants[direction]} className={className}>
    {children}
  </motion.div>
);

export default SectionTransition;
