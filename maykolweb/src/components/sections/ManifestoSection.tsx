"use client";

import { motion } from "framer-motion";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { useMode } from "@/context/ModeProvider";
import { MANIFESTO } from "@/lib/constants";

export default function ManifestoSection() {
  const [ref, isVisible] = useScrollTrigger<HTMLElement>({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { modeConfig } = useMode();

  return (
    <section
      ref={ref}
      id="manifesto"
      className="relative py-24 bg-black"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(ellipse at center, ${modeConfig.color}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-12"
        >
          <span
            className="text-sm font-medium uppercase tracking-widest"
            style={{ color: modeConfig.color }}
          >
            Sobre Mí
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
            El Constructor Detrás del Código
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-none"
          >
            <div 
              className="aspect-[4/5] rounded-2xl overflow-hidden border-2"
              style={{ borderColor: `${modeConfig.color}30` }}
            >
              <img 
                src="/maykol.jpeg" 
                alt="Maykol Salgado"
                className="w-full h-full object-cover object-top"
              />
            </div>
            
            {/* Decorative element */}
            <div 
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl -z-10 opacity-20"
              style={{ backgroundColor: modeConfig.color }}
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Quote */}
            <div className="relative">
              <span 
                className="text-6xl font-serif absolute -top-8 -left-4 opacity-20"
                style={{ color: modeConfig.color }}
              >
                &ldquo;
              </span>
              <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-light pl-4 border-l-2" style={{ borderColor: `${modeConfig.color}50` }}>
                {MANIFESTO.text}
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 flex items-center gap-4">
              <div
                className="w-12 h-[2px]"
                style={{ backgroundColor: modeConfig.color }}
              />
              <span className="text-white/60 text-sm">Maykol Salgado, 2026</span>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: "Ubicación", value: "Limache, Chile" },
                { label: "Experiencia", value: "5+ años" },
                { label: "Especialidad", value: "Full-Stack & IA" },
                { label: "Disponibilidad", value: "Inmediata" },
              ].map((fact, i) => (
                <div key={i} className="p-3 bg-white/5 rounded-lg">
                  <p className="text-xs text-white/40 uppercase tracking-wider">{fact.label}</p>
                  <p className="text-white font-medium mt-1">{fact.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
