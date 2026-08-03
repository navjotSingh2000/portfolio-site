import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Scroll-triggered fade-and-rise. Falls back to a plain fade when the user prefers reduced motion. */
export function Reveal({
  children,
  delay = 0,
  y = 16,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Line-mask reveal used in the hero: content slides up from behind an overflow-hidden clip. */
export function MaskReveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <span className={`block overflow-hidden ${className ?? ""}`}>
      <motion.span
        className="block"
        initial={reduce ? { opacity: 0 } : { y: "115%" }}
        animate={reduce ? { opacity: 1 } : { y: 0 }}
        transition={{ duration: 1, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/** Parent/child variants for staggered group reveals (e.g. skill chips). */
export const staggerParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03 } },
};

export const staggerChild: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};
