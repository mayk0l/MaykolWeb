"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMode } from "@/context/ModeProvider";
import { JOURNEY_TIMELINE } from "@/lib/constants";
import TimelineNode from "@/components/ui/TimelineNode";

export default function JourneySection() {
  const { modeConfig } = useMode();
  const [activeIndex, setActiveIndex] = useState(JOURNEY_TIMELINE.length - 1);

  return (
    <section id="journey" className="relative py-32 bg-black overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(${modeConfig.color} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Trayectoria
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Del Código a los Negocios
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            5 años de evolución continua. Cada paso construyendo sobre el anterior.
          </p>
        </motion.div>

        {/* Year selector (mobile) */}
        <div className="flex md:hidden justify-center gap-2 mb-8 overflow-x-auto pb-4">
          {JOURNEY_TIMELINE.map((event, index) => (
            <button
              key={event.year}
              onClick={() => setActiveIndex(index)}
              className={`
                flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium
                transition-all
              `}
              style={{
                backgroundColor: activeIndex === index ? modeConfig.color : "rgba(255,255,255,0.1)",
                color: activeIndex === index ? "#000" : "rgba(255,255,255,0.6)",
              }}
            >
              {event.year}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />

          {/* Timeline nodes */}
          <div className="space-y-12">
            {JOURNEY_TIMELINE.map((event, index) => (
              <div
                key={event.year}
                onMouseEnter={() => setActiveIndex(index)}
                className="cursor-pointer"
              >
                <TimelineNode
                  event={event}
                  index={index}
                  isActive={activeIndex === index}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Current status highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border"
            style={{
              borderColor: `${modeConfig.color}50`,
              backgroundColor: `${modeConfig.color}10`,
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: modeConfig.color }}
            />
            <span className="text-white/80">
              Actualmente cerrando tratos corporativos y escalando la Software Factory
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
