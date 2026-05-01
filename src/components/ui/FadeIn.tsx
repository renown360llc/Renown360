"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

const directionMap = {
  up:    { y: 28, x: 0 },
  down:  { y: -28, x: 0 },
  left:  { x: 32, y: 0 },
  right: { x: -32, y: 0 },
  none:  { x: 0, y: 0 },
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
  direction = "up",
  once = true,
}: FadeInProps) {
  const { x, y } = directionMap[direction];
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ willChange: "opacity, transform" }} className={className}
    >
      {children}
    </motion.div>
  );
}
