// ═══════════════════════════════════════════════════════════════════════════
// THE BUILDER'S LOGIC - Datos del Ecosistema de Maykol
// ═══════════════════════════════════════════════════════════════════════════

export const PERSONAL_INFO = {
  name: "Maykol Nicolás Salgado Ramos",
  shortName: "Maykol",
  title: "Venture Architect",
  age: 23,
  startedCodingAge: 18,
  location: "Limache, Valparaíso",
  country: "Chile",
  email: "maykol.salgado@proton.me",
  portfolio: "maykolsalgado.me",
  github: "mayk0l",
  linkedin: "maykol-nicolas-salgado-ramos",
} as const;

export const MANIFESTO = {
  headline: "La Lógica del Constructor",
  text: `A los 18 años, el código fue mi refugio autodidacta; hoy, a los 23, es mi herramienta para construir realidades comerciales. No soy un programador que busca un ticket de Jira; soy un Venture Architect que diseña infraestructuras que facturan. Mi trayectoria no es un título en una pared, es un ecosistema de negocios vivos, desde la gestión masiva de servidores de juego hasta la automatización de prensa con IA. Si buscas una mano de obra, busca en LinkedIn. Si buscas el motor técnico de tu próxima ventaja competitiva, hablemos.`,
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// PILLAR I: THE CORE VENTURES (Capital & Equity)
// ═══════════════════════════════════════════════════════════════════════════

export const CORE_VENTURES = [
  {
    id: "volat",
    name: "Volat / CajaPyme 2.0",
    role: "Fundador y Arquitecto",
    description: "SaaS POS con foco en el mercado chileno. Transición de producto propio a Software Factory de élite.",
    category: "core",
    metrics: {
      label: "Software Factory",
      value: "Elite",
    },
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    color: "#10B981", // Emerald
    link: null,
    image: "/VolatCajaPyme.png",
  },
  {
    id: "datoquinta",
    name: "DatoQuinta.cl",
    role: "Socio Administrador y Lead Dev",
    description: "Automatización de un medio con +43k seguidores mediante scripts de scraping e integración con LLMs para naturalización de noticias.",
    category: "core",
    metrics: {
      label: "Seguidores",
      value: "43K+",
    },
    technologies: ["Python", "LLMs", "Scraping", "Automation"],
    color: "#F59E0B", // Amber
    link: "https://datoquinta.cl",
    image: "/datoquintass.jpeg",
  },
  {
    id: "mayorista-textil",
    name: "Mayorista Textil",
    role: "Socio de Operaciones y Logística",
    description: "Gestión de stock y ventas para una comunidad de +15k seguidores.",
    category: "core",
    metrics: {
      label: "Comunidad",
      value: "15K+",
    },
    technologies: ["E-commerce", "Logistics", "Inventory"],
    color: "#EC4899", // Pink
    link: null,
    image: "/comprasxmayorss.jpeg",
  },
] as const;

// ═══════════════════════════════════════════════════════════════════════════
// PILLAR II: ENGINEERING LEADERSHIP (High-Ticket Services)
// ═══════════════════════════════════════════════════════════════════════════

export const ENGINEERING_LEADERSHIP = [
  {
    id: "panorama",
    name: "Panorama",
    role: "Tech Lead",
    description: "Startup de turismo. Dirección de equipo multidisciplinario y arquitectura de backend.",
    category: "leadership",
    metrics: {
      label: "Rol",
      value: "Tech Lead",
    },
    technologies: ["NestJS", "React", "PostgreSQL", "AWS"],
    color: "#3B82F6", // Blue
    link: null,
    image: "/panoramalanding.png",
  },
  {
    id: "boilerapp",
    name: "BoilerApp",
    role: "Desarrollador Senior",
    description: "Plataforma administrativa para producción de eventos a gran escala.",
    category: "leadership",
    metrics: {
      label: "Escala",
      value: "Enterprise",
    },
    technologies: ["React", "NestJS", "PostgreSQL", "Real-time"],
    color: "#8B5CF6", // Violet
    link: null,
    image: "/boilerapp.png",
  },
  {
    id: "italenpro",
    name: "iTalenPRO",
    role: "Ex-Líder Técnico (Legacy)",
    description: "Experto en desarrollo de software, arquitecturas RAG y entornos de IA empresarial.",
    category: "leadership",
    metrics: {
      label: "Especialidad",
      value: "AI/RAG",
    },
    technologies: ["Software", "RAG", "AI", "Enterprise"],
    color: "#6366F1", // Indigo
    link: null,
  },
] as const;

// ═══════════════════════════════════════════════════════════════════════════
// PILLAR III: THE OPEN SOURCE LEGACY
// ═══════════════════════════════════════════════════════════════════════════

export const OPEN_SOURCE = [
  {
    id: "cajapyme-os",
    name: "CajaPyme OS",
    role: "Creator & Maintainer",
    description: "Proyecto con +11 estrellas en GitHub y validación social masiva (+300 reacciones). Prueba de compromiso con la transparencia financiera y la comunidad técnica.",
    category: "opensource",
    metrics: {
      label: "GitHub Stars",
      value: "11+",
    },
    secondaryMetrics: {
      label: "Reacciones",
      value: "300+",
    },
    technologies: ["TypeScript", "Open Source", "POS"],
    color: "#22D3EE", // Cyan
    link: "https://github.com/maykol/cajapyme",
  },
  {
    id: "gelic-network",
    name: "Gelic Network",
    role: "Founder (El Origen)",
    description: "Optimización de servidores Java (Spigot API) y administración de infraestructura VPS crítica bajo Linux.",
    category: "opensource",
    metrics: {
      label: "Infraestructura",
      value: "VPS/Linux",
    },
    technologies: ["Java", "Spigot API", "Linux", "VPS"],
    color: "#14B8A6", // Teal
    link: null,
  },
] as const;

// ═══════════════════════════════════════════════════════════════════════════
// JOURNEY TIMELINE
// ═══════════════════════════════════════════════════════════════════════════

export const JOURNEY_TIMELINE = [
  {
    year: 2020,
    age: 18,
    title: "El Despertar Autodidacta",
    description: "Comenzó el viaje en programación de manera autodidacta. El código se convirtió en refugio y herramienta de expresión.",
    milestone: "origin",
    icon: "code",
  },
  {
    year: 2021,
    age: 19,
    title: "Gelic Network",
    description: "Administración de servidores de juego. Primeras experiencias con infraestructura crítica y optimización de rendimiento.",
    milestone: "infrastructure",
    icon: "server",
  },
  {
    year: 2022,
    age: 20,
    title: "Entrada al Mundo Profesional",
    description: "Primeros proyectos de alto impacto. Desarrollo de habilidades en arquitectura de software empresarial.",
    milestone: "professional",
    icon: "briefcase",
  },
  {
    year: 2023,
    age: 21,
    title: "Liderazgo Técnico",
    description: "iTalenPRO y roles de Tech Lead. Especialización en CI/CD y arquitecturas RAG.",
    milestone: "leadership",
    icon: "users",
  },
  {
    year: 2024,
    age: 22,
    title: "El Ecosistema Crece",
    description: "Fundación de Volat, sociedad en DatoQuinta. Transición de developer a Venture Architect.",
    milestone: "ventures",
    icon: "rocket",
  },
  {
    year: 2025,
    age: 23,
    title: "The Builder's Logic",
    description: "Consolidación del ecosistema. Software Factory de élite y cierre de tratos corporativos.",
    milestone: "present",
    icon: "crown",
  },
] as const;

// ═══════════════════════════════════════════════════════════════════════════
// CONSULTING FORM OPTIONS (The Filter)
// ═══════════════════════════════════════════════════════════════════════════

export const BUDGET_OPTIONS = [
  { value: "exploration", label: "Exploración (< $1,000 USD)", score: 1 },
  { value: "starter", label: "Starter ($1,000 - $5,000 USD)", score: 2 },
  { value: "growth", label: "Growth ($5,000 - $15,000 USD)", score: 3 },
  { value: "scale", label: "Scale ($15,000 - $50,000 USD)", score: 4 },
  { value: "enterprise", label: "Enterprise ($50,000+ USD)", score: 5 },
] as const;

export const PROJECT_PHASE_OPTIONS = [
  { value: "idea", label: "Solo una idea", score: 1 },
  { value: "validation", label: "Validando el mercado", score: 2 },
  { value: "mvp", label: "Necesito un MVP", score: 3 },
  { value: "scaling", label: "Escalando producto existente", score: 4 },
  { value: "optimization", label: "Optimización/Refactoring", score: 3 },
] as const;

export const TECH_NEEDS_OPTIONS = [
  { value: "frontend", label: "Frontend / UI", score: 2 },
  { value: "backend", label: "Backend / API", score: 3 },
  { value: "fullstack", label: "Full-Stack", score: 4 },
  { value: "architecture", label: "Arquitectura de Software", score: 5 },
  { value: "ai-integration", label: "Integración de IA", score: 5 },
  { value: "consulting", label: "Consultoría Técnica", score: 4 },
] as const;

// ═══════════════════════════════════════════════════════════════════════════
// MODE CONFIGURATIONS
// ═══════════════════════════════════════════════════════════════════════════

export const MODES = {
  dev: {
    id: "dev",
    label: "Developer",
    color: "#22D3EE", // Cyan
    gradient: "from-cyan-500 to-blue-600",
    description: "Código, arquitectura y open source",
  },
  business: {
    id: "business",
    label: "Business",
    color: "#F59E0B", // Amber/Gold
    gradient: "from-amber-500 to-orange-600",
    description: "Ventures, ROI y estrategia",
  },
} as const;

// ═══════════════════════════════════════════════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════════════════════════════════════════════

export const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#ecosystem", label: "Portfolio" },
  { href: "#manifesto", label: "Sobre Mí" },
  { href: "#contact", label: "Contacto" },
] as const;

// ═══════════════════════════════════════════════════════════════════════════
// ALL VENTURES (Combined for Bento Grid)
// ═══════════════════════════════════════════════════════════════════════════

export const ALL_VENTURES = [
  ...CORE_VENTURES,
  ...ENGINEERING_LEADERSHIP,
  ...OPEN_SOURCE,
] as const;
