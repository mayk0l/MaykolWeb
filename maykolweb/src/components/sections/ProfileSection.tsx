"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeProvider";
import { PERSONAL_INFO } from "@/lib/constants";


export default function ProfileSection() {
  const { modeConfig } = useMode();

  return (
    <section id="profile" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Frame/Border Effect */}
            <div 
              className="absolute -inset-4 border-2 opacity-50 rounded-lg"
              style={{ borderColor: modeConfig.color }}
            />
            <div 
              className="absolute -inset-4 border border-white/10 rounded-lg translate-x-2 translate-y-2"
            />
            
            <div className="relative aspect-[3/4] bg-neutral-900 rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
               {/* Placeholder for Profile Photo */}
               <div className="absolute inset-0 flex items-center justify-center text-white/20 bg-white/5">
                  <span className="text-sm font-mono uppercase">Foto Profesional Aquí</span>
               </div>
               {/* Un-comment when image is available
               <Image 
                 src="/maykol-profile.jpg" 
                 alt="Maykol - Venture Architect"
                 fill
                 className="object-cover"
               />
               */}
            </div>
            
            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2" style={{ borderColor: modeConfig.color }} />
            <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2" style={{ borderColor: modeConfig.color }} />
          </motion.div>

          {/* Bio Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Más que Código. <br />
              <span style={{ color: modeConfig.color }}>Visión Estratégica.</span>
            </h2>
            
            <p className="text-lg text-white/70 leading-relaxed">
              Como <strong>{PERSONAL_INFO.title}</strong> de {PERSONAL_INFO.age} años, mi enfoque no se limita a escribir funciones, sino a diseñar ecosistemas tecnológicos que operan con eficiencia y escalabilidad.
            </p>
            
            <p className="text-lg text-white/70 leading-relaxed">
              Desde liderar equipos de ingeniería hasta fundar mis propios ventures, entiendo ambos lados de la mesa: la complejidad técnica y la urgencia del ROI.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-1">5+ Años</h3>
                    <p className="text-sm text-white/60">Experiencia Full Stack</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                    <h3 className="text-xl font-bold text-white mb-1">3 Ventures</h3>
                    <p className="text-sm text-white/60">Fundados & Operativos</p>
                </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
