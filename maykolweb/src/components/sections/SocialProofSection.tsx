"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeProvider";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Kevin",
    role: "DatoQuinta, BoilerApp & Control Panadería",
    content: "Maykol ha desarrollado varios proyectos para mí: automatización con IA para DatoQuinta y un sistema de gestión completo para mi panadería. Siempre entiende lo que necesito.",
    metric: "3 proyectos juntos",
    image: "/kevin.jpg",
  },
  {
    name: "Oscar",
    role: "Panorama - Startup de turismo",
    content: "Maykol no solo desarrolló nuestro backend, lideró todo el equipo técnico. Entrega puntual y comunicación impecable.",
    metric: "Entrega on-time",
    image: "/oscar.png",
  },
  {
    name: "Proyecto iTalenPRO",
    role: "Plataforma de IA empresarial",
    content: "Arquitectura RAG y sistemas de IA para empresas. El conocimiento técnico de Maykol en inteligencia artificial es de primer nivel.",
    metric: "Especialista IA",
    image: "/italenpro.png",
  },
];

const LOGOS = [
  { name: "DatoQuinta", abbr: "DQ", image: "/datoquintalogo.jpg" },
  { name: "Panorama", abbr: "PA", image: "/panoramalogo.png" },
  { name: "Gelic Network", abbr: "GN", image: "/gelicnetwork.jpeg" },
  { name: "iTalenPRO", abbr: "IT", image: "/italenpro.png" },
  { name: "Control Panadería", abbr: "CP", image: "/logo-panaderiaapp.webp" },
];

const RESULTS = [
  { metric: "5+", label: "Años desarrollando software" },
  { metric: "10+", label: "Proyectos entregados con éxito" },
  { metric: "43K+", label: "Usuarios alcanzados (DatoQuinta)" },
  { metric: "<24h", label: "Tiempo de respuesta promedio" },
];

export default function SocialProofSection() {
  const { modeConfig } = useMode();

  return (
    <section className="relative py-20 sm:py-24 bg-gradient-to-b from-black to-neutral-950">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Logos Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-center text-sm text-white/40 mb-6 uppercase tracking-widest">
            Empresas que han confiado en mi trabajo
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {LOGOS.map((logo) => (
              <div 
                key={logo.name}
                className="flex items-center justify-center w-16 h-16 rounded-full bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-colors"
                title={logo.name}
              >
                {logo.image ? (
                  <img 
                    src={logo.image} 
                    alt={logo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-white/40 font-semibold text-lg">
                    {logo.abbr}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Results Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 p-6 bg-white/5 rounded-2xl border border-white/10"
        >
          {RESULTS.map((result, i) => (
            <div key={i} className="text-center py-4">
              <div 
                className="text-2xl sm:text-3xl font-bold mb-1"
                style={{ color: modeConfig.color }}
              >
                {result.metric}
              </div>
              <div className="text-xs sm:text-sm text-white/50">
                {result.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-center text-2xl font-bold text-white mb-8">
            Lo que dicen mis clientes
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={`${testimonial.name}-${testimonial.role}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex flex-col p-5 sm:p-6 bg-white/5 border border-white/10 rounded-xl relative h-full"
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-white/10 absolute top-4 right-4" />
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-current" 
                      style={{ color: modeConfig.color }}
                    />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-white/70 text-sm mb-4 leading-relaxed flex-1">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                {/* Metric highlight */}
                <div 
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 self-start"
                  style={{ 
                    backgroundColor: `${modeConfig.color}15`,
                    color: modeConfig.color
                  }}
                >
                  {testimonial.metric}
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 mt-auto border-t border-white/10">
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                    />
                  ) : (
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0"
                      style={{ 
                        backgroundColor: `${modeConfig.color}20`,
                        color: modeConfig.color
                      }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <div className="text-white font-medium text-sm truncate">
                      {testimonial.name}
                    </div>
                    <div className="text-white/40 text-xs truncate">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-center text-2xl font-bold text-white mb-4">
            Proyectos en acción
          </h3>
          <p className="text-center text-white/50 text-sm mb-8 max-w-xl mx-auto">
            Mira cómo transformamos ideas en productos reales que funcionan
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Video 1 - Panorama */}
            <div className="relative bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              {/* Video Label */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div 
                  className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                  style={{ 
                    backgroundColor: `${modeConfig.color}90`,
                    color: '#fff'
                  }}
                >
                  🎬 Demo Panorama
                </div>
              </div>
              
              {/* YouTube Embed */}
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/m3cXLcNY7Z0?rel=0&modestbranding=1"
                  title="Demo Panorama - Startup de turismo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              {/* Video Info */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Panorama</h4>
                    <p className="text-white/50 text-sm">Plataforma de turismo con reservas</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img 
                      src="/oscar.png" 
                      alt="Oscar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white/40 text-xs">Oscar</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video 2 - Scrapper de Noticias */}
            <div className="relative bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              {/* Video Label */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div 
                  className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                  style={{ 
                    backgroundColor: `${modeConfig.color}90`,
                    color: '#fff'
                  }}
                >
                  🤖 Demo Scrapper IA
                </div>
              </div>
              
              {/* YouTube Embed */}
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/MkRhqDWg4Ek?rel=0&modestbranding=1"
                  title="Demo Scrapper de Noticias con IA"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              {/* Video Info */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Scrapper de Noticias</h4>
                    <p className="text-white/50 text-sm">Automatización con IA para DatoQuinta</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img 
                      src="/kevin.jpg" 
                      alt="Kevin"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white/40 text-xs">Kevin</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video 3 - Control Panadería */}
            <div className="relative bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
              {/* Video Label */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <div 
                  className="px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm"
                  style={{ 
                    backgroundColor: `${modeConfig.color}90`,
                    color: '#fff'
                  }}
                >
                  🥖 Control Panadería
                </div>
              </div>
              
              {/* YouTube Embed */}
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/koNxLIQTayA?rel=0&modestbranding=1"
                  title="Demo Control Panadería - Sistema de gestión"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              
              {/* Video Info */}
              <div className="p-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">Control Panadería</h4>
                    <p className="text-white/50 text-sm">Sistema de gestión completo</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <img 
                      src="/kevin.jpg" 
                      alt="Kevin"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-white/40 text-xs">Kevin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Open Source Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-center text-2xl font-bold text-white mb-4">
            Contribuciones Open Source
          </h3>
          <p className="text-center text-white/50 text-sm mb-8 max-w-xl mx-auto">
            Comparto mi conocimiento con la comunidad de desarrolladores chilenos
          </p>
          
          <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${modeConfig.color}20` }}
                    >
                      <span className="text-xl">💼</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">CajaPyme</h4>
                      <p className="text-white/40 text-sm">Gestión financiera para PYMEs chilenas</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-yellow-400">
                      <Star size={16} fill="currentColor" />
                      <span className="font-bold">11</span>
                    </div>
                    <span className="text-white/40 text-xs">GitHub Stars</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1" style={{ color: modeConfig.color }}>
                      <span className="text-lg">👍</span>
                      <span className="font-bold">279</span>
                    </div>
                    <span className="text-white/40 text-xs">Reacciones</span>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-4">
                Plataforma web open source para control de caja diaria, ingresos, egresos y reportes financieros. 
                Stack: React + Vite + TypeScript + TailwindCSS + Node.js + Express + Prisma + PostgreSQL.
              </p>
              <a 
                href="https://github.com/mayk0l/CajaPyme" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: modeConfig.color }}
              >
                Ver en GitHub →
              </a>
            </div>
            
            {/* Screenshots Grid */}
            <div className="grid md:grid-cols-2 gap-4 p-4">
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="/cajapyme1.png" 
                  alt="CajaPyme - Publicación en Facebook con 279 reacciones"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 rounded-lg text-xs text-white/80">
                  📱 Publicación en Facebook
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="/cajapyme2.png" 
                  alt="CajaPyme - Comentarios de la comunidad"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 rounded-lg text-xs text-white/80">
                  💬 Feedback de la comunidad
                </div>
              </div>
            </div>
            
            {/* Community Quote */}
            <div className="p-4 border-t border-white/10 bg-white/[0.02]">
              <div className="flex items-start gap-3">
                <Quote size={20} className="text-white/20 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/70 text-sm italic">
                    &ldquo;Ya y quieres que te aplauda? Por supuesto rey 👏👏👏👏👏&rdquo;
                  </p>
                  <p className="text-white/40 text-xs mt-2">— Pablo De Kaus Australis, Programadores en Chile ™</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contratos Agent */}
          <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl border border-white/10 overflow-hidden mt-6">
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${modeConfig.color}20` }}
                    >
                      <span className="text-xl">🧾</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Contratos Agent</h4>
                      <p className="text-white/40 text-sm">Generador de Contratos Chilenos con IA</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="flex items-center gap-1" style={{ color: modeConfig.color }}>
                      <span className="text-lg">🤖</span>
                      <span className="font-bold">IA</span>
                    </div>
                    <span className="text-white/40 text-xs">Powered</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-green-400">
                      <span className="text-lg">⚖️</span>
                      <span className="font-bold">Legal</span>
                    </div>
                    <span className="text-white/40 text-xs">Chile</span>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-4">
                Asistente legal inteligente con chat conversacional tipo WhatsApp que genera contratos válidos según legislación chilena.
                Stack: React 19 + TypeScript + Vite + TailwindCSS + Node.js + Express + OpenRouter AI (Mistral & Mixtral).
              </p>
              <a 
                href="https://github.com/mayk0l/contratos-agent" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: modeConfig.color }}
              >
                Ver en GitHub →
              </a>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60">Chat Conversacional</span>
                <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60">IA Especializada</span>
                <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60">Validación Automática</span>
                <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60">Documentos Profesionales</span>
              </div>
            </div>
            
            {/* Screenshots Grid */}
            <div className="grid md:grid-cols-2 gap-4 p-4">
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="/contratosagent1.png" 
                  alt="Contratos Agent - Interfaz de chat conversacional"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 rounded-lg text-xs text-white/80">
                  💬 Chat con IA
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="/contratosagent2.png" 
                  alt="Contratos Agent - Contrato generado"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 rounded-lg text-xs text-white/80">
                  📄 Contrato Generado
                </div>
              </div>
            </div>
          </div>

          {/* Formateador de Tesis */}
          <div className="max-w-4xl mx-auto bg-white/5 rounded-2xl border border-white/10 overflow-hidden mt-6">
            {/* Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${modeConfig.color}20` }}
                    >
                      <span className="text-xl">📚</span>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg">Formateador de Tesis IA</h4>
                      <p className="text-white/40 text-sm">Automatiza formateo de documentos académicos</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <div className="flex items-center gap-1" style={{ color: modeConfig.color }}>
                      <span className="text-lg">🐍</span>
                      <span className="font-bold">Python</span>
                    </div>
                    <span className="text-white/40 text-xs">3.8+</span>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center gap-1 text-green-400">
                      <span className="text-lg">💰</span>
                      <span className="font-bold">$0.30</span>
                    </div>
                    <span className="text-white/40 text-xs">por doc</span>
                  </div>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-4">
                Herramienta que usa IA (OpenRouter) para formatear tesis e informes académicos según estándares chilenos/latinoamericanos. 
                Analiza pautas, extrae formatos de referencia y aplica estilos consistentes automáticamente.
              </p>
              <a 
                href="https://github.com/mayk0l/formateador-tesis-ia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-3 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: modeConfig.color }}
              >
                Ver en GitHub →
              </a>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60">🔍 Analiza pautas</span>
                <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60">📄 Extrae formatos</span>
                <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60">✨ Auto-formateo</span>
                <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60">📝 Estilos consistentes</span>
              </div>
            </div>
            
            {/* Screenshots Grid */}
            <div className="grid md:grid-cols-2 gap-4 p-4">
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="/tesis1.png" 
                  alt="Formateador de Tesis - Interfaz"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 rounded-lg text-xs text-white/80">
                  🖥️ Interfaz CLI
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <img 
                  src="/tesis2.png" 
                  alt="Formateador de Tesis - Documento formateado"
                  className="w-full h-auto"
                />
                <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/70 rounded-lg text-xs text-white/80">
                  📄 Resultado formateado
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
