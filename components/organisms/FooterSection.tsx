// Organismo: FooterSection — pie de página con créditos y links rápidos
// Diseño libre, inspirado en el panel de información del Metro

import { Icon } from "@iconify/react";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rounded-sm bg-surface border border-border overflow-hidden">
      {/* Franja de acento inferior */}
      <div className="h-0.5 w-full bg-accent" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-6 py-5">
        {/* Izquierda: créditos */}
        <div className="flex items-center gap-2 text-sm font-body text-text-muted">
          <Icon icon="mdi:copyright" className="h-4 w-4 shrink-0" />
          <span>
            {currentYear} · Construido por{" "}
            <span className="text-text font-medium">
              Santiago Zapata Barahona
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
