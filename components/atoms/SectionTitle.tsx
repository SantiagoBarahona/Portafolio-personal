// Átomo: SectionTitle — título de sección con línea decorativa de acento
// Reutilizable en todas las secciones del contenido central

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  centered = true,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} ${className}`}>
      {/* Línea decorativa superior */}
      <div
        className={`mb-3 h-px w-12 bg-accent ${centered ? "mx-auto" : ""}`}
      />
      <h2 className="font-display text-4xl font-bold uppercase tracking-widest text-text">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-lg font-body text-sm font-light leading-relaxed text-text-muted text-balance mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
