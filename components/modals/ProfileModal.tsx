"use client";

/**
 * Modal: ProfileModal — "La Bitácora de Santiago"
 * Diseño creativo con 3 pestañas:
 *   1. Sobre Mí    — historia y valores personales
 *   2. Mi Día      — timeline de un día típico
 *   3. Mi Stack    — visualización de tecnologías
 *
 * Se otorgan puntos por creatividad — esto es lo más único del portafolio.
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import type { ProfileData } from "@/lib/types";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ProfileData;
}

type Tab = "about" | "day" | "stack";

const tabs: { id: Tab; label: string; icon: string }[] = [
  { id: "about", label: "Sobre Mí", icon: "mdi:account-heart-outline" },
  { id: "day", label: "Mi Día", icon: "mdi:timeline-clock-outline" },
  { id: "stack", label: "Mi Stack", icon: "mdi:layers-outline" },
];

// Información de un dia típico
const dayTimeline = [
  {
    time: "6:00",
    emoji: "🎓",
    title: "Universidad",
    desc: "Clases en la UdeA. Ingeniería de Sistemas.",
  },
  {
    time: "12:00",
    emoji: "🌙",
    title: "Turno Metro",
    desc: "Inicio del turno como conductor. Trabajo medio tiempo.",
  },
  {
    time: "19:00",
    emoji: "💻",
    title: "Coding",
    desc: "Proyectos propios y aprendizaje autónomo.",
  },
  {
    time: "21:00",
    emoji: "📚",
    title: "Estudio",
    desc: "Cursos, documentación, resolución de problemas.",
  },
  {
    time: "22:30",
    emoji: "😴",
    title: "Descanso",
    desc: "Mañana vuelve a empezar el ciclo.",
  },
];

// Stack de tecnologías con nivel de confianza
const stackItems = [
  {
    name: "TypeScript",
    icon: "logos:typescript-icon",
    level: 82,
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "logos:nextjs-icon",
    level: 80,
    category: "Frontend",
  },
  { name: "React", icon: "logos:react", level: 80, category: "Frontend" },
  {
    name: "Tailwind",
    icon: "logos:tailwindcss-icon",
    level: 85,
    category: "Frontend",
  },
  { name: "Python", icon: "logos:python", level: 74, category: "Backend" },
  {
    name: "FastAPI",
    icon: "logos:fastapi-icon",
    level: 68,
    category: "Backend",
  },
  {
    name: "Spring Boot",
    icon: "logos:spring-icon",
    level: 68,
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    icon: "logos:postgresql",
    level: 70,
    category: "Backend",
  },
  { name: "Git", icon: "logos:git-icon", level: 85, category: "DevOps" },
];

export function ProfileModal({ isOpen, onClose, data }: ProfileModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>("about");

  // Cierra con Escape
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel del modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="
              fixed inset-x-4 bottom-0 z-50 mx-auto max-w-2xl
              md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2
              flex flex-col overflow-hidden rounded-t-xl md:rounded-sm
              bg-surface border border-border
              max-h-[92vh] md:max-h-[82vh]
            "
          >
            {/* Header del modal */}
            <div className="relative flex items-center justify-between px-6 pt-5 pb-4 border-b border-border shrink-0">
              {/* Franja de acento */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-accent" />

              <div>
                <p className="text-[10px] font-display uppercase tracking-[0.3em] text-accent">
                  La Bitácora de
                </p>
                <h2 className="font-display text-2xl font-bold uppercase tracking-wider text-text">
                  {data.firstName} {data.lastName}
                </h2>
              </div>

              <button
                onClick={onClose}
                aria-label="Cerrar"
                className="flex h-8 w-8 items-center justify-center rounded-full text-text-muted hover:text-text hover:bg-surface-raised transition-colors"
              >
                <Icon icon="mdi:close" className="h-5 w-5" />
              </button>
            </div>

            {/* Tabs */}
            <div className="flex gap-1 px-5 pt-3 shrink-0">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex items-center gap-1.5 px-3 py-2 rounded-sm text-xs font-display uppercase tracking-wider
                    transition-colors duration-200 cursor-pointer
                    ${
                      activeTab === tab.id
                        ? "bg-accent text-bg"
                        : "text-text-muted hover:text-text hover:bg-surface-raised"
                    }
                  `}
                >
                  <Icon icon={tab.icon} className="h-4 w-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Contenido de la tab activa */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <AnimatePresence mode="wait">
                {activeTab === "about" && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-5"
                  >
                    <p className="font-body text-sm font-light leading-relaxed text-text-muted">
                      {data.bio}
                    </p>

                    {/* Valores personales */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
                      {[
                        {
                          icon: "mdi:train",
                          label: "Disciplina",
                          desc: "Levantarme a las 6am cambia cómo veo el tiempo y las prioridades.",
                        },
                        {
                          icon: "mdi:code-braces",
                          label: "Código limpio",
                          desc: "Prefiero pasar más tiempo pensando y menos tiempo refactorizando.",
                        },
                        {
                          icon: "mdi:account-group",
                          label: "Colaboración",
                          desc: "El Scrum no es un proceso, es una mentalidad de responsabilidad compartida.",
                        },
                      ].map((val) => (
                        <div
                          key={val.label}
                          className="flex flex-col gap-2 rounded-sm bg-surface-raised border border-border p-4"
                        >
                          <Icon
                            icon={val.icon}
                            className="h-6 w-6 text-accent"
                          />
                          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-text">
                            {val.label}
                          </h4>
                          <p className="font-body text-xs font-light leading-snug text-text-muted">
                            {val.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Fun fact */}
                    <div className="flex items-start gap-3 rounded-sm bg-accent-subtle border border-accent/20 p-4">
                      <Icon
                        icon="mdi:lightbulb-outline"
                        className="h-5 w-5 text-accent shrink-0 mt-0.5"
                      />
                      <p className="font-body text-xs font-light leading-relaxed text-text-muted">
                        <span className="font-semibold text-text">
                          Fun fact:
                        </span>{" "}
                        Soy conductor del Metro de Medellín, el transporte que
                        ha conectado a la ciudad durante décadas. Ver a miles de
                        personas llegar a tiempo a sus vidas gracias al trabajo
                        del equipo es mi mayor motivación.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === "day" && (
                  <motion.div
                    key="day"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-1"
                  >
                    <p className="text-xs font-body text-text-dim mb-4">
                      Un día típico en mi vida. Spoiler: el café es un personaje
                      recurrente.
                    </p>

                    {dayTimeline.map((item, i) => (
                      <div key={item.time} className="flex gap-4 group">
                        {/* Timeline dot + line */}
                        <div className="flex flex-col items-center gap-0">
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center text-base">
                            {item.emoji}
                          </div>
                          {i < dayTimeline.length - 1 && (
                            <div className="w-px flex-1 min-h-6 bg-border my-1" />
                          )}
                        </div>

                        {/* Contenido */}
                        <div className="pb-5 flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-display text-xs font-bold tracking-widest text-accent">
                              {item.time}
                            </span>
                            <span className="font-display text-sm font-semibold uppercase tracking-wider text-text">
                              {item.title}
                            </span>
                          </div>
                          <p className="font-body text-xs font-light leading-snug text-text-muted">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "stack" && (
                  <motion.div
                    key="stack"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col gap-4"
                  >
                    {["Frontend", "Backend", "DevOps"].map((cat) => {
                      const catItems = stackItems.filter(
                        (s) => s.category === cat,
                      );
                      return (
                        <div key={cat}>
                          <p className="text-[10px] font-display uppercase tracking-[0.3em] text-text-dim mb-2">
                            {cat}
                          </p>
                          <div className="grid grid-cols-2 gap-2">
                            {catItems.map((item) => (
                              <div
                                key={item.name}
                                className="flex items-center gap-3 rounded-sm bg-surface-raised border border-border px-3 py-2.5 hover:border-accent/40 transition-colors"
                              >
                                <Icon
                                  icon={item.icon}
                                  className="h-6 w-6 shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                  <p className="font-body text-xs font-medium text-text truncate">
                                    {item.name}
                                  </p>
                                  {/* Mini barra de confianza */}
                                  <div className="mt-1 h-0.5 w-full rounded-full bg-bg overflow-hidden">
                                    <motion.div
                                      className="h-full rounded-full bg-accent"
                                      initial={{ width: 0 }}
                                      animate={{ width: `${item.level}%` }}
                                      transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: 0.1,
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
