"use client";

// Molécula: SocialIconButton — botón circular de red social
// Usado en RightSidebar (barra lateral derecha)

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface SocialIconButtonProps {
  name: string;
  icon: string;
  url: string;
}

export function SocialIconButton({ name, icon, url }: SocialIconButtonProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={name}
      title={name}
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className="
        flex h-10 w-10 items-center justify-center
        rounded-full bg-surface text-text-muted border border-border
        hover:border-accent hover:text-accent hover:bg-accent-subtle
        transition-colors duration-200
      "
    >
      <Icon icon={icon} className="h-5 w-5" />
    </motion.a>
  );
}
