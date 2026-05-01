"use client";

// Átomo: ProgressBar — barra de progreso animada
// Usada en SkillBar para idiomas y lenguajes de programación

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number; // 0–100
  color?: string; // color CSS inline (hex, oklch, etc.)
  className?: string;
}

export function ProgressBar({ value, color, className = "" }: ProgressBarProps) {
  return (
    <div
      className={`relative h-1 w-full rounded-full bg-surface-raised overflow-hidden ${className}`}
    >
      <motion.div
        className="h-full rounded-full"
        style={{
          backgroundColor: color ?? "var(--accent)",
        }}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
      />
    </div>
  );
}
