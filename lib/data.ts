// Datos del portafolio de Santiago Zapata Barahona
import type { ProfileData } from "./types";

export const profileData: ProfileData = {
  firstName: "Santiago",
  lastName: "Zapata Barahona",
  fullName: "Santiago Zapata Barahona",
  tagline: "Ingeniero de Sistemas",
  bio: "Ingeniero de sistemas de la Universidad de Antioquia apasionado por construir software que resuelve problemas reales. Me interesan temas relacionados a la inteligencia artificial, agenetes de IA y automatización. Tengo experiencia práctica en desarrollo web full stack, metodologías ágiles y liderazgo de equipos. Este portafolio es una muestra de mi trabajo, habilidades y proyectos personales. ¡Gracias por visitar!",

  roles: [
    "Desarrollador Full Stack",
    "Scrum Master en CodeFactory",
    "Conductor Metro Medellín",
  ],

  contact: {
    city: "Medellín, Colombia",
    phone: "+57 311 000 0000",
    email: "santiago.zapatab@udea.edu.co",
    age: 23,
  },

  social: [
    {
      name: "GitHub",
      url: "https://github.com/SantiagoBarahona",
      icon: "mdi:github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/santiago-zapata-barahona",
      icon: "mdi:linkedin",
    },
    {
      name: "Email",
      url: "mailto:santiago.zapatab@udea.edu.co",
      icon: "mdi:email",
    },
  ],

  languages: [
    { name: "Español", level: 100, flag: "🇨🇴" },
    { name: "Inglés", level: 72, flag: "🇺🇸" },
  ],

  programmingLanguages: [
    { name: "TypeScript", level: 82, color: "#3178C6" },
    { name: "JavaScript", level: 80, color: "#F7DF1E" },
    { name: "Python", level: 74, color: "#3776AB" },
    { name: "Java", level: 58, color: "#ED8B00" },
    { name: "SQL", level: 70, color: "#336791" },
  ],

  extraSkills: [
    { label: "Scrum / Agile" },
    { label: "Git & GitHub" },
    { label: "React / Next.js" },
    { label: "Liderazgo de equipos" },
    { label: "Docker basics" },
    { label: "REST APIs" },
    { label: "Figma" },
    { label: "Resolución de problemas" },
  ],

  knowledge: [
    {
      title: "Desarrollo Web",
      description:
        "React, Next.js, TypeScript y Tailwind para interfaces modernas y accesibles.",
      icon: "mdi:code-braces",
      color: "#3B82F6",
    },
    {
      title: "Backend & APIs",
      description:
        "Python con FastAPI y Node.js para APIs RESTful robustas y escalables.",
      icon: "mdi:server",
      color: "#10B981",
    },
    {
      title: "Scrum Master",
      description:
        "Facilitación de sprints, retrospectivas y planificación en equipos ágiles.",
      icon: "mdi:chart-timeline-variant",
      color: "#8B5CF6",
    },
    {
      title: "Bases de Datos",
      description:
        "PostgreSQL, MongoDB y diseño de esquemas para aplicaciones de producción.",
      icon: "mdi:database",
      color: "#F59E0B",
    },
    {
      title: "Control de Versiones",
      description:
        "Git avanzado, GitHub Actions y flujos de trabajo colaborativos en equipo.",
      icon: "mdi:git",
      color: "#F97316",
    },
    {
      title: "Inteligencia Artificial",
      description:
        "IA generativa, incluyendo modelos de lenguaje, imagenes, video.",
      icon: "mdi:brain",
      color: "#EC4899",
    },
  ],

  education: [
    {
      institution: "Universidad de Antioquia",
      degree: "Ingeniería de Sistemas",
      period: "2021 — Presente",
      description:
        "Octavo semestre. Enfocado en desarrollo de software, bases de datos, ingeniería web, arquitectura de software, inteligencia artificial y metodologías ágiles.",
      type: "university",
      ongoing: true,
    },
  ],

  projects: [
    {
      id: "danigurumi",
      title: "danigurumi.com",
      shortDescription:
        "Tienda online artesanal de muñecos amigurumi con proceso de compra.",
      fullDescription:
        "Tienda en línea completa para la venta de productos de crochet artesanales. Motor de e-commerce con MedusaJS, búsqueda con Meilisearch, pagos locales colombianos (Nequi, Bancolombia, PSE) con Wompi, logística con EnvioClick. CI/CD con GitHub Actions, pruebas con Jest y Playwright.",
      image: "#3d1a5c",
      tech: [
        "Next.js",
        "Tailwind CSS",
        "TypeScript",
        "MedusaJS",
        "Postgres",
        "Redis",
        "Meilisearch",
        "Wompi",
        "Jest",
        "Playwright",
        "Vercel",
      ],
      liveUrl: "https://danigurumi.com",
      year: "2026",
    },
    {
      id: "vegas",
      title: "Proyecto Vegas",
      shortDescription:
        "Proyecto integrador, ERP de gestión para la cadena de panaderias las vegas.",
      fullDescription:
        "MVP de gestión multi-sede para una franquicia de panadería con 5 puntos de venta. Incluye control de inventario, cálculo de costo promedio unitario (NIC 2), dashboard gerencial y autenticación con AWS Cognito. Proyecto de ingeniería en equipo — Universidad de Antioquia.",
      image: "#1a4a3d",
      tech: [
        "Next",
        "TypeScript",
        "Tailwind",
        "AWS Cognito",
        "PostgreSQL",
        "JAVA",
        "Spring Boot",
      ],
      videoUrl: "/demo_las_vegas.mp4",
      year: "2025",
    },
    {
      id: "portafolio",
      title: "Portafolio Web",
      shortDescription:
        "Este portafolio — construido como proyecto de Ingeniería Web en la UdeA.",
      fullDescription:
        "Portafolio personal construido como evaluación del curso de Ingeniería Web en la Universidad de Antioquia. Implementa Atomic Design, Next.js App Router, TypeScript y Tailwind CSS v4. Integra animaciones con Framer Motion y se despliega en Vercel.",
      image: "#1a2a4a",
      tech: ["Next.js", "TypeScript", "Tailwind CSS v4", "Framer Motion"],
      githubUrl: "https://github.com/santiago-zapatab/portafolio",
      liveUrl: "https://santiago-zapata.vercel.app",
      year: "2026",
    },
  ],
};
