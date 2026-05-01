// Organismo: LeftSidebar — panel lateral izquierdo fijo
// Contiene: Avatar, nombre, rol, contacto, idiomas, lenguajes de programación, habilidades extra

import { Avatar } from "@/components/atoms/Avatar";
import { Badge } from "@/components/atoms/Badge";
import { ContactItem } from "@/components/molecules/ContactItem";
import { SkillBar } from "@/components/molecules/SkillBar";
import type { ProfileData } from "@/lib/types";

interface LeftSidebarProps {
  data: ProfileData;
}

function Divider() {
  return <div className="h-px w-full bg-border" />;
}

export function LeftSidebar({ data }: LeftSidebarProps) {
  return (
    <aside className="flex flex-col gap-5 overflow-y-auto p-5 pb-8">
      {/* ── Perfil ── */}
      <div className="flex flex-col items-center text-center gap-3 pt-2">
        <Avatar initials="SZ" src="/foto.png" size="lg" showStatus />
        <div>
          <h1 className="font-display text-xl font-bold uppercase tracking-widest text-text leading-tight">
            {data.fullName}
          </h1>
          <p className="mt-1 font-body text-xs font-light text-accent tracking-wide">
            {data.tagline}
          </p>
        </div>
      </div>

      <Divider />

      {/* ── Contacto ── */}
      <div className="flex flex-col gap-3">
        <p className="text-[10px] font-display uppercase tracking-widest text-text-dim">
          Contacto
        </p>
        <ContactItem
          icon="mdi:map-marker"
          label="Ciudad"
          value={data.contact.city}
        />
        <ContactItem
          icon="mdi:phone"
          label="Teléfono"
          value={data.contact.phone}
          href={`tel:${data.contact.phone.replace(/\s/g, "")}`}
        />
        <ContactItem
          icon="mdi:email"
          label="Correo"
          value={data.contact.email}
          href={`mailto:${data.contact.email}`}
        />
        <ContactItem
          icon="mdi:account"
          label="Edad"
          value={`${data.contact.age} años`}
        />
      </div>

      <Divider />

      {/* ── Roles actuales ── */}
      <div className="flex flex-col gap-2">
        <p className="text-[10px] font-display uppercase tracking-widest text-text-dim">
          Roles Actuales
        </p>
        {data.roles.map((role) => (
          <div key={role} className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span className="font-body text-xs text-text-muted leading-snug">{role}</span>
          </div>
        ))}
      </div>

      <Divider />

      {/* ── Idiomas ── */}
      <div className="flex flex-col gap-3">
        <p className="text-[10px] font-display uppercase tracking-widest text-text-dim">
          Idiomas
        </p>
        {data.languages.map((lang) => (
          <SkillBar
            key={lang.name}
            name={lang.name}
            level={lang.level}
            prefix={lang.flag}
          />
        ))}
      </div>

      <Divider />

      {/* ── Lenguajes de programación ── */}
      <div className="flex flex-col gap-3">
        <p className="text-[10px] font-display uppercase tracking-widest text-text-dim">
          Lenguajes de Programación
        </p>
        {data.programmingLanguages.map((lang) => (
          <SkillBar
            key={lang.name}
            name={lang.name}
            level={lang.level}
            color={lang.color}
          />
        ))}
      </div>

      <Divider />

      {/* ── Habilidades extra ── */}
      <div className="flex flex-col gap-3">
        <p className="text-[10px] font-display uppercase tracking-widest text-text-dim">
          Habilidades Extra
        </p>
        <div className="flex flex-wrap gap-1.5">
          {data.extraSkills.map((skill) => (
            <Badge key={skill.label} label={skill.label} />
          ))}
        </div>
      </div>
    </aside>
  );
}
