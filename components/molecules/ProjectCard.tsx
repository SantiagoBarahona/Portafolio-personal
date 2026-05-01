"use client";

// Molécula: ProjectCard — card de proyecto con imagen placeholder, título y descripción
// Usada en PortfolioSection (scroll horizontal)

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { Badge } from "@/components/atoms/Badge";
import type { ProjectItem } from "@/lib/types";

interface ProjectCardProps {
  project: ProjectItem;
  onLearnMore: (project: ProjectItem) => void;
}

export function ProjectCard({ project, onLearnMore }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className="
        relative flex-none w-72 flex flex-col overflow-hidden
        rounded-sm bg-surface border border-border
        hover:border-accent/50 transition-colors duration-300 group
      "
    >
      {/* Imagen / placeholder de color */}
      <div
        className="h-44 w-full flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: project.image }}
      >
        {/* Logo con iniciales del proyecto */}
        <span className="font-display text-5xl font-bold tracking-widest text-white/20 select-none">
          {project.title.slice(0, 2).toUpperCase()}
        </span>

        {/* Año en esquina */}
        <span className="absolute top-3 right-3 text-[10px] font-display tracking-widest text-white/50">
          {project.year}
        </span>

        {/* Links externos */}
        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              aria-label="GitHub"
            >
              <Icon icon="mdi:github" className="h-4 w-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors"
              aria-label="Ver en vivo"
            >
              <Icon icon="mdi:open-in-new" className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      {/* Contenido */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="font-display text-xl font-semibold uppercase tracking-wider text-text leading-tight">
          {project.title}
        </h3>
        <p className="font-body text-sm font-light leading-relaxed text-text-muted flex-1">
          {project.shortDescription}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.slice(0, 3).map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>

        {/* Botón learn more */}
        <button
          onClick={() => onLearnMore(project)}
          className="
            mt-1 flex items-center gap-1.5 text-sm font-display font-semibold
            tracking-wider text-accent hover:text-text transition-colors duration-200
            cursor-pointer group/btn
          "
        >
          SABER MÁS
          <Icon
            icon="mdi:arrow-right"
            className="h-4 w-4 translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-200"
          />
        </button>
      </div>
    </motion.div>
  );
}
