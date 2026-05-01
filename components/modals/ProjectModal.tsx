"use client";

// Modal: ProjectModal — detalle completo de un proyecto del portafolio
// Se abre al hacer clic en "Saber Más" en una ProjectCard

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import type { ProjectItem } from "@/lib/types";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Cerrar con Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (project) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="
              fixed inset-x-4 bottom-0 z-50 mx-auto max-w-xl
              md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
              overflow-hidden rounded-t-xl md:rounded-sm
              bg-surface border border-border
              max-h-[88vh] md:max-h-[78vh]
              flex flex-col
            "
          >
            {/* Banner: video o color */}
            <div
              className="relative w-full shrink-0 flex items-center justify-center"
              style={
                project.videoUrl
                  ? { backgroundColor: project.image }
                  : { backgroundColor: project.image, height: "8rem" }
              }
            >
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full max-h-72 object-contain"
                />
              ) : (
                <>
                  <span className="font-display text-7xl font-bold tracking-widest text-white/15 select-none">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                  <span className="absolute top-3 right-3 font-display text-xs tracking-widest text-white/40">
                    {project.year}
                  </span>
                </>
              )}

              {/* Botón cerrar */}
              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="absolute top-3 left-3 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors"
              >
                <Icon icon="mdi:close" className="h-4 w-4" />
              </button>
            </div>

            {/* Contenido */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-5">
              <div>
                <h3 className="font-display text-2xl font-bold uppercase tracking-wider text-text">
                  {project.title}
                </h3>
                <p className="mt-1 font-body text-sm font-light text-text-muted">
                  {project.shortDescription}
                </p>
              </div>

              {/* Descripción completa */}
              <p className="font-body text-sm font-light leading-relaxed text-text-muted">
                {project.fullDescription}
              </p>

              {/* Tecnologías */}
              <div>
                <p className="text-[10px] font-display uppercase tracking-[0.3em] text-text-dim mb-2">
                  Tecnologías
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} label={t} />
                  ))}
                </div>
              </div>

              {/* Links externos */}
              <div className="flex flex-wrap gap-3 pt-1">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Icon icon="mdi:github" className="h-4 w-4" />
                    Ver en GitHub
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <Icon icon="mdi:open-in-new" className="h-4 w-4" />
                    Ver en vivo
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
