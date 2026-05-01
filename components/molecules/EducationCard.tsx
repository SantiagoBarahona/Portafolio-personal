// Molécula: EducationCard — fila de ítem educativo con ícono, fechas y descripción
// Usada en EducationSection

import { Icon } from "@iconify/react";
import type { EducationItem } from "@/lib/types";

const typeIcons: Record<EducationItem["type"], string> = {
  university:    "mdi:school",
  certification: "mdi:certificate",
  course:        "mdi:book-open-variant",
};

interface EducationCardProps {
  item: EducationItem;
}

export function EducationCard({ item }: EducationCardProps) {
  return (
    <div className="flex gap-5 group">
      {/* Columna izquierda: ícono + línea timeline */}
      <div className="flex flex-col items-center gap-1">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-subtle border border-accent/30 group-hover:border-accent transition-colors duration-300">
          <Icon icon={typeIcons[item.type]} className="h-4.5 w-4.5 text-accent" />
        </div>
        {/* Línea vertical de conexión */}
        <div className="w-px flex-1 bg-border" />
      </div>

      {/* Contenido */}
      <div className="pb-8 min-w-0">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-2">
          <div>
            <h3 className="font-display text-lg font-semibold uppercase tracking-wider text-text leading-tight">
              {item.institution}
            </h3>
            <p className="font-body text-sm font-medium text-accent mt-0.5">
              {item.degree}
            </p>
          </div>
          <span className="shrink-0 rounded-sm bg-surface-raised px-2 py-0.5 text-[11px] font-display font-medium tracking-widest text-text-muted border border-border">
            {item.period}
          </span>
        </div>

        <p className="font-body text-sm font-light leading-relaxed text-text-muted">
          {item.description}
        </p>

        {item.ongoing && (
          <span className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-display tracking-wider text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            EN CURSO
          </span>
        )}
      </div>
    </div>
  );
}
