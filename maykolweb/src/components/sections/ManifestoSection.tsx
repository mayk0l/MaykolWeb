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

  // Split text into words for animation
  const words = MANIFESTO.text.split(" ");

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

        {/* Animated text */}
        <div className="relative">
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed font-light">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: 0.3 + index * 0.03,
                }}
                className="inline-block mr-[0.3em]"
              >
                {/* Highlight key phrases */}
                {word.includes("18") || word.includes("23") ? (
                  <span style={{ color: modeConfig.color, fontWeight: 600 }}>
                    {word}
                  </span>
                ) : word.includes("Venture") || word.includes("Architect") ? (
                  <span style={{ color: modeConfig.color, fontWeight: 600 }}>
                    {word}
                  </span>
                ) : word.includes("facturan") ? (
                  <span className="text-white font-semibold">{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </p>
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
