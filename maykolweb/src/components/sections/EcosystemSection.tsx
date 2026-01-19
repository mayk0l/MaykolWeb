"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeProvider";
import { ALL_VENTURES } from "@/lib/constants";
import BentoCard from "@/components/ui/BentoCard";
import type { Venture } from "@/types";

export default function EcosystemSection() {
  const { modeConfig } = useMode();

  // Cast to mutable array for map
  const ventures = ALL_VENTURES as unknown as Venture[];

  return (
    <section id="ecosystem" className="relative py-32 bg-black">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[128px] opacity-20"
          style={{ backgroundColor: modeConfig.color }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[128px] opacity-10"
          style={{ backgroundColor: modeConfig.color }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm font-medium uppercase tracking-widest"
            style={{ color: modeConfig.color }}
          >
            Hitos y Proyectos
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            El Ecosistema
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            Capital, liderazgo técnico y código abierto.
            Cada pilar refuerza al siguiente.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { id: "all", label: "Todos", color: modeConfig.color },
            { id: "core", label: "Core Ventures", color: "#10B981" },
            { id: "leadership", label: "Leadership", color: "#3B82F6" },
            { id: "opensource", label: "Open Source", color: "#22D3EE" },
          ].map((category) => (
            <button
              key={category.id}
              className="px-4 py-2 text-sm font-medium rounded-full border transition-all hover:scale-105"
              style={{
                borderColor: `${category.color}50`,
                color: category.color,
                backgroundColor: `${category.color}10`,
              }}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {ventures.map((venture, index) => (
            <BentoCard
              key={venture.id}
              venture={venture}
              index={index}
            />
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 p-8 rounded-2xl bg-white/5 border border-white/10"
        >
          {[
            { value: "5+", label: "Ventures Activos" },
            { value: "58K+", label: "Alcance Total" },
            { value: "11+", label: "GitHub Stars" },
            { value: "5", label: "Años de Experiencia" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold"
                style={{ color: modeConfig.color }}
              >
                {stat.value}
              </div>
              <p className="mt-1 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
