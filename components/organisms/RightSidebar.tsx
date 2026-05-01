// Organismo: RightSidebar — panel lateral derecho fijo con íconos de redes sociales
// La etiqueta "LINKS" va rotada verticalmente como en el diseño Figma

import { SocialIconButton } from "@/components/molecules/SocialIconButton";
import type { SocialLink } from "@/lib/types";

interface RightSidebarProps {
  links: SocialLink[];
}

export function RightSidebar({ links }: RightSidebarProps) {
  return (
    <aside className="flex flex-col items-center gap-5 py-8 px-3">
      {/* Etiqueta rotada */}
      <span
        className="font-display text-[10px] font-semibold uppercase tracking-[0.3em] text-text-dim select-none"
        style={{ writingMode: "vertical-lr", transform: "rotate(180deg)" }}
      >
        Links
      </span>

      {/* Línea decorativa */}
      <div className="h-px w-5 bg-border rotate-90 my-1" />

      {/* Íconos sociales */}
      <div className="flex flex-col items-center gap-3">
        {links.map((link) => (
          <SocialIconButton
            key={link.name}
            name={link.name}
            icon={link.icon}
            url={link.url}
          />
        ))}
      </div>
    </aside>
  );
}
