# Portafolio Web — Santiago Zapata Barahona

Proyecto evaluativo 1 del curso de **Ingeniería Web** (Juan Pablo Arango) — Universidad de Antioquia.

Portafolio personal interactivo construido con Next.js, TypeScript y Tailwind CSS, estructurado con el patrón **Atomic Design**.

---

## Tecnologías

| Tecnología | Versión | Rol |
|---|---|---|
| Next.js | 16 | Framework principal (App Router) |
| TypeScript | 5 | Tipado estático |
| Tailwind CSS | v4 | Estilos (CSS-first config) |
| Framer Motion | latest | Animaciones y transiciones |
| Iconify React | latest | Íconos SVG |

---

## Cómo ejecutar localmente

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

```bash
# Build de producción
npm run build
npm start
```

---

## Estructura del Proyecto (Atomic Design)

```
app/
  globals.css        # Design tokens y Tailwind v4
  layout.tsx         # Fuentes (Barlow Condensed + Barlow), metadata
  page.tsx           # Layout principal de 3 columnas

lib/
  types.ts           # Interfaces TypeScript del portafolio
  data.ts            # Todos los datos del portafolio

components/
  atoms/             # Unidades mínimas e indivisibles
    Button.tsx         → Botón con variantes y animación hover
    Badge.tsx          → Etiqueta de tecnología/habilidad
    ProgressBar.tsx    → Barra de progreso animada (Framer Motion)
    SectionTitle.tsx   → Título de sección con línea decorativa
    Avatar.tsx         → Foto/placeholder con iniciales e indicador de estado

  molecules/         # Combinaciones de 2–3 átomos
    ContactItem.tsx    → Fila de dato de contacto (ícono + label + valor)
    SkillBar.tsx       → Habilidad + porcentaje + ProgressBar
    SocialIconButton.tsx → Botón circular de red social
    KnowledgeCard.tsx  → Card de conocimiento (ícono + título + descripción)
    EducationCard.tsx  → Ítem de educación con timeline visual
    ProjectCard.tsx    → Card de proyecto con hover y links

  organisms/         # Secciones completas de la interfaz
    LeftSidebar.tsx    → Panel fijo izquierdo (perfil, contacto, skills)
    RightSidebar.tsx   → Panel fijo derecho (redes sociales)
    HeroSection.tsx    → Sección principal con animación de entrada
    KnowledgeSection.tsx → Grid 3×2 de conocimientos
    EducationSection.tsx → Timeline de educación
    PortfolioSection.tsx → Scroll horizontal de proyectos
    FooterSection.tsx  → Pie de página con créditos

  modals/            # Diálogos interactivos
    ProfileModal.tsx   → "La Bitácora de Santiago" — 3 pestañas creativas
    ProjectModal.tsx   → Detalle completo de un proyecto
```

---

## Decisiones de Diseño

### Paleta de colores
Tema oscuro azul-noche como fondo con ámbar dorado como acento.
```css
--bg:     oklch(0.12 0.009 250)  /* Azul oscuro noche   */
--accent: oklch(0.80 0.17  68)   /* Ámbar */
```

### Tipografía
- **Barlow Condensed** (Display) — condensado industrial
- **Barlow** (Body) — limpio y legible, de la misma familia para coherencia

### Modal creativo "La Bitácora de Santiago"
El botón "Sobre Mí" abre un modal con 3 pestañas:
1. **Sobre Mí** — Historia, valores y fun fact
2. **Mi Día** — Timeline de un día típico (Universidad → turno Metro → coding)
3. **Mi Stack** — Visualización por categorías con barras de confianza

---

## Secciones implementadas

- **Sidebar izquierdo** — Foto, datos de contacto, idiomas, lenguajes de programación, habilidades extra
- **Hero** — Presentación animada con botón modal creativo
- **Conocimientos** — 6 cards con ícono, título y descripción
- **Educación** — Timeline con Universidad de Antioquia, CodeFactory, Platzi
- **Portafolio** — Scroll horizontal: LocalFriend, danigurumi.com, Gurumi App, Portafolio Web
- **Sidebar derecho** — GitHub, LinkedIn, Email
- **Footer** — Créditos y tech stack

---

## Despliegue

El proyecto está configurado para desplegarse en **Vercel** directamente desde el repositorio.

Dominio: `santiago-zapata.vercel.app`

---

## Criterios cubiertos

- [x] Mínimo 6 componentes reutilizables con Atomic Design
- [x] Scroll horizontal en portafolio
- [x] Modal/diálogo creativo en sección Perfil
- [x] Modal de detalle en cada proyecto
- [x] Responsivo (móvil, tablet, desktop)
- [x] Animaciones (Framer Motion)
- [x] TypeScript en todo el código
- [x] Tailwind CSS para estilos
- [x] GitHub y LinkedIn en sidebar derecho

---

