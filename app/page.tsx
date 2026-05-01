/**
 * Página principal del portafolio web de Santiago Zapata Barahona
 *
 * Arquitectura (Atomic Design):
 *   Átomos     → Button, Badge, ProgressBar, SectionTitle, Avatar
 *   Moléculas  → ContactItem, SkillBar, SocialIconButton, KnowledgeCard, EducationCard, ProjectCard
 *   Organismos → LeftSidebar, RightSidebar, HeroSection, KnowledgeSection, EducationSection, PortfolioSection, FooterSection
 *   Modales    → ProfileModal, ProjectModal
 *
 * Layout: 3 columnas con sidebars fijos en desktop.
 * Responsive: colapsa a una sola columna en móvil.
 */

import { LeftSidebar } from "@/components/organisms/LeftSidebar";
import { RightSidebar } from "@/components/organisms/RightSidebar";
import { HeroSection } from "@/components/organisms/HeroSection";
import { KnowledgeSection } from "@/components/organisms/KnowledgeSection";
import { EducationSection } from "@/components/organisms/EducationSection";
import { PortfolioSection } from "@/components/organisms/PortfolioSection";
import { FooterSection } from "@/components/organisms/FooterSection";
import { profileData } from "@/lib/data";

export default function Home() {
  return (
    /*
     * Contenedor raíz: ocupa toda la pantalla.
     * En desktop usa grid de 3 columnas con sidebars fijos.
     * En móvil/tablet apila en una columna.
     */
    <div className="min-h-screen bg-bg text-text">
      {/* ── Layout desktop: 3 columnas ── */}
      <div className="hidden lg:grid lg:grid-cols-[280px_1fr_72px] lg:h-screen">
        {/* Sidebar izquierdo — fijo, scroll interno */}
        <div className="sticky top-0 h-screen overflow-hidden border-r border-border bg-surface">
          <LeftSidebar data={profileData} />
        </div>

        {/* Contenido central — scroll principal */}
        <main className="overflow-y-auto">
          <div className="flex flex-col gap-10 p-8 max-w-4xl mx-auto">
            <HeroSection data={profileData} />
            <KnowledgeSection items={profileData.knowledge} />
            <EducationSection items={profileData.education} />
            <PortfolioSection projects={profileData.projects} />
            <FooterSection />
          </div>
        </main>

        {/* Sidebar derecho — fijo */}
        <div className="sticky top-0 h-screen overflow-hidden border-l border-border bg-surface">
          <RightSidebar links={profileData.social} />
        </div>
      </div>

      {/* ── Layout móvil / tablet: columna única ── */}
      <div className="lg:hidden flex flex-col">
        {/* Header compacto con info de perfil */}
        <header className="sticky top-0 z-30 border-b border-border bg-surface/95 backdrop-blur-sm px-5 py-3 flex items-center justify-between">
          <div>
            <p className="font-display text-xs tracking-widest text-accent uppercase">
              Portafolio
            </p>
            <p className="font-display text-lg font-bold uppercase tracking-wider text-text leading-none">
              Santiago Z.
            </p>
          </div>
          {/* Links rápidos en móvil */}
          <div className="flex gap-2">
            {profileData.social.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                aria-label={link.name}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-raised border border-border text-text-muted hover:text-accent transition-colors"
              >
                {/* Ícono inline para no depender del componente de cliente */}
                <span className="text-xs">{link.name[0]}</span>
              </a>
            ))}
          </div>
        </header>

        {/* Contenido apilado */}
        <main className="flex flex-col gap-8 p-5">
          {/* Info personal simplificada en móvil */}
          <section className="rounded-sm bg-surface border border-border p-5 flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-accent-subtle border-2 border-accent flex items-center justify-center font-display text-xl font-bold text-accent">
                SZ
              </div>
              <div>
                <h1 className="font-display text-xl font-bold uppercase tracking-wider text-text">
                  {profileData.fullName}
                </h1>
                <p className="font-body text-xs text-accent">
                  {profileData.tagline}
                </p>
              </div>
            </div>
            <p className="font-body text-sm font-light leading-relaxed text-text-muted">
              {profileData.bio}
            </p>
          </section>

          <HeroSection data={profileData} />
          <KnowledgeSection items={profileData.knowledge} />
          <EducationSection items={profileData.education} />
          <PortfolioSection projects={profileData.projects} />

          {/* Sidebar izquierdo como sección extra en móvil */}
          <section className="rounded-sm bg-surface border border-border p-5">
            <LeftSidebar data={profileData} />
          </section>

          <FooterSection />
        </main>
      </div>
    </div>
  );
}
