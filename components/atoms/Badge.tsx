// Átomo: Badge — etiqueta de tecnología o habilidad
// Usada en ProjectCard, SkillBar y ExtraSkills

interface BadgeProps {
  label: string;
  className?: string;
}

export function Badge({ label, className = "" }: BadgeProps) {
  return (
    <span
      className={`
        inline-block px-2 py-0.5 text-xs font-body font-medium
        bg-surface-raised text-text-muted border border-border
        rounded-sm tracking-wide
        ${className}
      `}
    >
      {label}
    </span>
  );
}
