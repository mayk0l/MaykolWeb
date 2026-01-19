"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useMode } from "@/context/ModeProvider";
import GlowButton from "@/components/ui/GlowButton";
import { ArrowRight } from "lucide-react";

// Dynamic import for 3D to avoid SSR issues
const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false });
const Prism = dynamic(() => import("@/components/3d/Prism"), { ssr: false });
const ParticleField = dynamic(() => import("@/components/3d/ParticleField"), { ssr: false });

export default function HeroSection() {
  const { mode, modeConfig } = useMode();

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* 3D Background - Slightly offset */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Scene mode={mode} className="w-full h-full">
          <Prism mode={mode} />
          <ParticleField mode={mode} count={150} />
        </Scene>
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-10 pointer-events-none" />

      {/* Content Grid */}
      <div className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Typography & Manifesto */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
             <span
              className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono uppercase tracking-widest border rounded-full backdrop-blur-md"
              style={{
                borderColor: `${modeConfig.color}40`,
                color: modeConfig.color,
                backgroundColor: `${modeConfig.color}10`,
              }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: modeConfig.color }}></span>
                <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: modeConfig.color }}></span>
              </span>
              Limache, Valparaíso · Disponible
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl sm:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] text-white"
          >
            THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/50">
              BUILDER&apos;S
            </span> <br />
            LOGIC.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-white/80 max-w-2xl font-light leading-relaxed mt-6 border-l-4 pl-6"
            style={{ borderColor: modeConfig.color }}
          >
            <p>
              Arquitectura de ecosistemas que <span className="font-semibold text-white">facturan</span>.
            </p>
            <p className="mt-2 text-base sm:text-lg opacity-80">
              De <span className="font-medium underline decoration-2 underline-offset-4" style={{ textDecorationColor: modeConfig.color }}>autodidacta</span> a Venture Architect en 5 años.
            </p>
            <span className="text-sm font-mono opacity-60 mt-4 block tracking-wide">
              {/* Comment style text */}
              {'// No soy una agencia. Soy tu socio técnico.'}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <GlowButton href="#contact" size="lg">
              Construyamos Juntos
            </GlowButton>
            
            <button 
              onClick={() => document.getElementById('ecosystem')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-2 px-6 py-3 text-white/60 hover:text-white transition-colors font-mono text-sm uppercase tracking-wider hover:bg-white/5 rounded-full"
            >
              Explorar Ecosistema
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Bottom Right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 right-8 hidden sm:flex items-center gap-3"
      >
        <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
