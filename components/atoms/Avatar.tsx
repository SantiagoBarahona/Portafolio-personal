// Átomo: Avatar — foto de perfil o placeholder con iniciales
// Acepta src para mostrar imagen real; si no hay src usa las iniciales
// Usado en LeftSidebar y HeroSection

import Image from "next/image";

interface AvatarProps {
  initials: string;
  src?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
  showStatus?: boolean;
}

const sizes = {
  sm:  { cls: "w-12 h-12 text-sm",  px: 48  },
  md:  { cls: "w-20 h-20 text-xl",  px: 80  },
  lg:  { cls: "w-28 h-28 text-3xl", px: 112 },
  xl:  { cls: "w-36 h-36 text-4xl", px: 144 },
  "2xl": { cls: "w-56 h-56 text-5xl", px: 224 },
};

export function Avatar({ initials, src, size = "md", className = "", showStatus = false }: AvatarProps) {
  const { cls, px } = sizes[size];

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className={`
          ${cls} rounded-full overflow-hidden
          border-2 border-accent
          flex items-center justify-center
          bg-accent-subtle font-display font-bold tracking-widest text-accent
          select-none
        `}
      >
        {src ? (
          <Image
            src={src}
            alt={`Foto de perfil de ${initials}`}
            width={px}
            height={px}
            className="w-full h-full object-cover object-top"
            priority
          />
        ) : (
          initials
        )}
      </div>

      {/* Indicador de disponibilidad (solo cuando showStatus=true) */}
      {showStatus && (
        <span
          className="absolute bottom-1 right-1 flex h-3.5 w-3.5"
          title="Disponible"
        >
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-bg" />
        </span>
      )}
    </div>
  );
}
