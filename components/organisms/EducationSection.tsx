// Organismo: EducationSection — sección de educación con timeline
// Corresponde a "Education" en el diseño Figma (frame 2:957)

import { EducationCard } from "@/components/molecules/EducationCard";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import type { EducationItem } from "@/lib/types";

interface EducationSectionProps {
  items: EducationItem[];
}

export function EducationSection({ items }: EducationSectionProps) {
  return (
    <section id="educacion" className="flex flex-col gap-8">
      <SectionTitle
        title="Educación"
        subtitle="Mi recorrido académico y las certificaciones que han moldeado mi forma de construir software."
      />

      {/* Panel contenedor del timeline */}
      <div className="rounded-sm bg-surface border border-border p-6 md:p-8">
        {items.map((item) => (
          <EducationCard key={`${item.institution}-${item.period}`} item={item} />
        ))}
      </div>
    </section>
  );
}
