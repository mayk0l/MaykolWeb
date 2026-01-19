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
      className="relative py-32 bg-black"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(ellipse at center, ${modeConfig.color}, transparent 70%)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8 ml-3"
        >
          <span
            className="text-sm font-medium uppercase tracking-widest"
            style={{ color: modeConfig.color }}
          >
            El Manifiesto
          </span>
        </motion.div>

        {/* Quote marks */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isVisible ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-9xl font-serif text-white absolute -top-4 -left-4"
        >
          &ldquo;
        </motion.div>

        {/* Text - Simple fade in instead of word-by-word */}
        <div className="relative">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-light"
          >
            {MANIFESTO.text}
          </motion.p>
        </div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-12 flex items-center gap-4"
        >
          <div
            className="w-12 h-[2px]"
            style={{ backgroundColor: modeConfig.color }}
          />
          <span className="text-white/60 text-sm">Maykol Salgado, 2025</span>
        </motion.div>
      </div>
    </section>
  );
}
