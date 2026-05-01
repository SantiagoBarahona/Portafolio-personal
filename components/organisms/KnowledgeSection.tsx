// Organismo: KnowledgeSection — sección "Conocimientos" con grid de cards
// Corresponde a "My Knowledge" en el diseño Figma (frame 2:427)

import { KnowledgeCard } from "@/components/molecules/KnowledgeCard";
import { SectionTitle } from "@/components/atoms/SectionTitle";
import type { KnowledgeItem } from "@/lib/types";

interface KnowledgeSectionProps {
  items: KnowledgeItem[];
}

export function KnowledgeSection({ items }: KnowledgeSectionProps) {
  return (
    <section id="conocimientos" className="flex flex-col gap-8">
      <SectionTitle
        title="Conocimientos"
        subtitle="Las tecnologías y metodologías con las que construyo soluciones reales, desde el frontend hasta la infraestructura."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <KnowledgeCard
            key={item.title}
            title={item.title}
            description={item.description}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </div>
    </section>
  );
}
