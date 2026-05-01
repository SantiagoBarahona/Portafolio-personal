"use client";

// Organismo: PortfolioSection — sección portafolio con scroll horizontal y modal de proyecto
// Corresponde a "Portfolio" en el diseño Figma (frame 2:1019)

import { useState } from "react";
import { Icon } from "@iconify/react";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { ProjectModal } from "@/components/modals/ProjectModal";
import type { ProjectItem } from "@/lib/types";
import { useRef } from "react";

interface PortfolioSectionProps {
  projects: ProjectItem[];
}

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Desplaza el carrusel a la derecha o izquierda
  function scroll(direction: "left" | "right") {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "right" ? 300 : -300,
      behavior: "smooth",
    });
  }

  return (
    <>
      <section id="portafolio" className="flex flex-col gap-8">
        <SectionTitle
          title="Portafolio"
          subtitle="Proyectos que he construido — algunos académicos, otros reales. Todos con código que me enorgullece."
        />

        {/* Contenedor con flechas de navegación */}
        <div className="relative">
          {/* Flecha izquierda */}
          <button
            onClick={() => scroll("left")}
            aria-label="Anterior"
            className="
              absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10
              flex h-9 w-9 items-center justify-center rounded-full
              bg-surface border border-border text-text-muted
              hover:border-accent hover:text-accent transition-colors duration-200
              hidden md:flex
            "
          >
            <Icon icon="mdi:chevron-left" className="h-5 w-5" />
          </button>

          {/* Scroll horizontal */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-hide pb-3"
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onLearnMore={setSelectedProject}
              />
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            onClick={() => scroll("right")}
            aria-label="Siguiente"
            className="
              absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10
              flex h-9 w-9 items-center justify-center rounded-full
              bg-surface border border-border text-text-muted
              hover:border-accent hover:text-accent transition-colors duration-200
              hidden md:flex
            "
          >
            <Icon icon="mdi:chevron-right" className="h-5 w-5" />
          </button>
        </div>

        {/* Indicador de scroll en móvil */}
        <p className="flex items-center gap-1.5 text-[11px] text-text-dim font-body md:hidden">
          <Icon icon="mdi:gesture-swipe-horizontal" className="h-4 w-4" />
          Desliza para ver más proyectos
        </p>
      </section>

      {/* Modal de detalle de proyecto */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
