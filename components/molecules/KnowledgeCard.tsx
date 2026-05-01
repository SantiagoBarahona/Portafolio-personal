"use client";

// Molécula: KnowledgeCard — card de conocimiento con ícono, título y descripción
// Usada en KnowledgeSection (grid 3×2)

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface KnowledgeCardProps {
  title: string;
  description: string;
  icon: string;
  color: string; // color de acento de la card
}

export function KnowledgeCard({ title, description, icon, color }: KnowledgeCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="
        relative flex flex-col items-center text-center gap-4
        rounded-sm p-6 bg-surface border border-border
        hover:border-[--card-color] group
        transition-colors duration-300
      "
      style={{ "--card-color": color } as React.CSSProperties}
    >
      {/* Ícono con fondo coloreado */}
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full transition-colors duration-300"
        style={{
          backgroundColor: `${color}18`,
          border: `1px solid ${color}35`,
        }}
      >
        <Icon
          icon={icon}
          className="h-8 w-8 transition-colors duration-300"
          style={{ color }}
        />
      </div>

      <div className="space-y-1.5">
        <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-text">
          {title}
        </h3>
        <p className="font-body text-sm font-light leading-relaxed text-text-muted">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
