"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useMode } from "@/context/ModeProvider";
import GlowButton from "@/components/ui/GlowButton";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Dynamic import for 3D to avoid SSR issues
const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });
const Prism = dynamic(() => import("@/components/3d/Prism"), { ssr: false });
const ParticleField = dynamic(() => import("@/components/3d/ParticleField"), { ssr: false });

const TRUST_METRICS = [
  { value: "5+", label: "Años de experiencia" },
  { value: "43K+", label: "Usuarios impactados" },
  { value: "10+", label: "Proyectos entregados" },
  { value: "100%", label: "Clientes satisfechos" },
];

const VALUE_PROPS = [
  "Sin agencias, sin intermediarios",
  "Comunicación directa conmigo",
  "Resultados medibles garantizados",
];

export default function HeroSection() {
  const { mode, modeConfig } = useMode();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
        <Scene mode={mode} className="w-full h-full">
          <Prism mode={mode} />
          <ParticleField mode={mode} count={50} />
        </Scene>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl mx-auto w-full pt-20 pb-10 px-2">
        
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border rounded-full"
            style={{
              borderColor: `${modeConfig.color}50`,
              color: modeConfig.color,
              backgroundColor: `${modeConfig.color}15`,
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: modeConfig.color }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: modeConfig.color }}></span>
            </span>
            Disponible para nuevos proyectos · Quinta Región
          </span>
        </motion.div>

        {/* Main Headline - Client focused */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
            Convierte tu idea en un
            <br />
            <span 
              className="bg-clip-text text-transparent bg-gradient-to-r"
              style={{ backgroundImage: `linear-gradient(to right, ${modeConfig.color}, ${modeConfig.color}80)` }}
            >
              producto que factura
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Desarrollo de software a medida para startups y empresas de la Quinta Región.
            <span className="text-white font-medium"> Sin código de agencia. Sin sorpresas. Solo resultados.</span>
          </p>
        </motion.div>

        {/* Value Props */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8"
        >
          {VALUE_PROPS.map((prop, i) => (
            <div key={i} className="flex items-center gap-2 text-white/80 text-sm sm:text-base">
              <CheckCircle2 className="w-5 h-5" style={{ color: modeConfig.color }} />
              <span>{prop}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <GlowButton href="#contact" size="lg">
            Solicitar Cotización Gratis
          </GlowButton>
          
          <button 
            onClick={() => document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center gap-2 px-6 py-3 text-white/70 hover:text-white transition-colors text-sm font-medium hover:bg-white/5 rounded-full border border-white/10"
          >
            Ver qué puedo hacer por ti
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-white/10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {TRUST_METRICS.map((metric, i) => (
              <div key={i} className="text-center">
                <div 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color: modeConfig.color }}
                >
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm text-white/50 mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 text-center"
        >
          <p className="text-xs sm:text-sm text-white/40">
            ⚡ Solo acepto <span className="text-white/60 font-medium">3 proyectos nuevos por mes</span> para garantizar calidad
          </p>
        </motion.div>
      </div>
    </section>
  );
}
