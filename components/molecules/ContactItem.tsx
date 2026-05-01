// Molécula: ContactItem — fila de dato de contacto con ícono
// Usada en LeftSidebar para ciudad, teléfono, correo, edad

import { Icon } from "@iconify/react";

interface ContactItemProps {
  icon: string;   // nombre del icono Iconify
  label: string;  // etiqueta breve (ej: "Ciudad")
  value: string;  // valor mostrado
  href?: string;  // si se puede hacer clic (mailto, tel)
}

export function ContactItem({ icon, label, value, href }: ContactItemProps) {
  const content = (
    <span className="text-xs text-text-muted font-body font-light leading-tight hover:text-accent transition-colors">
      {value}
    </span>
  );

  return (
    <div className="flex items-start gap-2.5">
      {/* Ícono con fondo sutil */}
      <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-accent-subtle">
        <Icon icon={icon} className="h-3.5 w-3.5 text-accent" />
      </div>

      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-widest text-text-dim font-display">
          {label}
        </p>
        {href ? (
          <a href={href} target="_blank" rel="noreferrer" className="block">
            {content}
          </a>
        ) : (
          content
        )}
      </div>
    </div>
  );
}
