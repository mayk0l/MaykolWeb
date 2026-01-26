"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeProvider";
import { ALL_VENTURES } from "@/lib/constants";
import BentoCard from "@/components/ui/BentoCard";
import GlowButton from "@/components/ui/GlowButton";
import type { Venture } from "@/types";
import { ArrowRight } from "lucide-react";

export default function EcosystemSection() {
  const { modeConfig } = useMode();

  // Cast to mutable array for map
  const ventures = ALL_VENTURES as unknown as Venture[];

  return (
    <section id="ecosystem" className="relative py-20 sm:py-24 bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: modeConfig.color }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span
            className="text-sm font-medium uppercase tracking-widest"
            style={{ color: modeConfig.color }}
          >
            Portfolio
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
            Proyectos que generan resultados
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Desde medios con +43K seguidores hasta plataformas enterprise.
            Estos son algunos de los proyectos en los que he trabajado.
          </p>
        </motion.div>

        {/* Bento Grid - Show only first 6 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ventures.slice(0, 6).map((venture, index) => (
            <BentoCard
              key={venture.id}
              venture={venture}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-white/50 mb-4">
            ¿Tu proyecto podría estar aquí?
          </p>
          <GlowButton href="#contact">
            Hablemos de tu idea
            <ArrowRight className="w-4 h-4 ml-2" />
          </GlowButton>
        </motion.div>
      </div>
    </section>
  );
}
