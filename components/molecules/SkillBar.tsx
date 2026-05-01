// Molécula: SkillBar — nombre de habilidad + porcentaje + barra de progreso
// Reutilizable para idiomas y lenguajes de programación

import { ProgressBar } from "@/components/atoms/ProgressBar";

interface SkillBarProps {
  name: string;
  level: number;       // 0–100
  color?: string;      // color personalizado para la barra
  prefix?: string;     // emoji/flag opcional delante del nombre
}

export function SkillBar({ name, level, color, prefix }: SkillBarProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs font-body font-medium text-text flex items-center gap-1.5">
          {prefix && <span>{prefix}</span>}
          {name}
        </span>
        <span className="text-[10px] font-display font-semibold text-accent tracking-wider">
          {level}%
        </span>
      </div>
      <ProgressBar value={level} color={color} />
    </div>
  );
}
