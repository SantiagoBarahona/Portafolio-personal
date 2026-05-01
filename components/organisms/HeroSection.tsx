"use client";

// Organismo: HeroSection — sección de perfil principal con animaciones y botón de diálogo
// Corresponde a "Main menu" en el diseño Figma (frame 2:163)

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Icon } from "@iconify/react";
import { Button } from "@/components/atoms/Button";
import { Avatar } from "@/components/atoms/Avatar";
import { ProfileModal } from "@/components/modals/ProfileModal";
import type { ProfileData } from "@/lib/types";

interface HeroSectionProps {
  data: ProfileData;
}

// Variantes de animación para entrada escalonada
const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden:   { opacity: 0, y: 24 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection({ data }: HeroSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden rounded-sm bg-surface border border-border">
        {/* Fondo decorativo: rejilla de puntos tipo plano de metro */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(var(--accent) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Franja de acento superior */}
        <div className="absolute inset-x-0 top-0 h-0.5 bg-accent" />

        <div className="relative flex flex-col-reverse md:flex-row items-center gap-8 p-8 md:p-10">
          {/* ── Lado izquierdo: texto ── */}
          <motion.div
            className="flex-1 flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Subtítulo */}
            <motion.p
              variants={itemVariants}
              className="font-display text-xs font-semibold uppercase tracking-[0.35em] text-accent"
            >
              Portafolio Profesional
            </motion.p>

            {/* Nombre principal */}
            <motion.h2 variants={itemVariants}>
              <span className="font-display text-4xl md:text-5xl font-bold uppercase leading-none tracking-wider text-text block">
                {data.firstName}
              </span>
              <span className="font-display text-4xl md:text-5xl font-bold uppercase leading-none tracking-wider text-text-muted block">
                {data.lastName}
              </span>
            </motion.h2>

            {/* Roles animados */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2">
              {data.roles.map((role, i) => (
                <span
                  key={role}
                  className="font-body text-xs text-text-muted"
                >
                  {role}
                  {i < data.roles.length - 1 && (
                    <span className="ml-2 text-accent">·</span>
                  )}
                </span>
              ))}
            </motion.div>

            {/* Descripción corta */}
            <motion.p
              variants={itemVariants}
              className="font-body text-sm font-light leading-relaxed text-text-muted max-w-md"
            >
              {data.bio}
            </motion.p>

            {/* CTA */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mt-1">
              <Button
                variant="primary"
                size="md"
                onClick={() => setModalOpen(true)}
              >
                <Icon icon="mdi:account-circle" className="h-4.5 w-4.5" />
                SOBRE MÍ
              </Button>
              <Button
                variant="ghost"
                size="md"
                onClick={() =>
                  document.getElementById("portafolio")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Icon icon="mdi:briefcase-outline" className="h-4.5 w-4.5" />
                VER PROYECTOS
              </Button>
            </motion.div>
          </motion.div>

          {/* ── Lado derecho: avatar grande ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="shrink-0"
          >
            <Avatar initials="SZ" src="/foto.png" size="2xl" />
          </motion.div>
        </div>
      </section>

      {/* Modal de perfil creativo */}
      <ProfileModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={data}
      />
    </>
  );
}
