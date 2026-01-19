"use client";

import { motion } from "framer-motion";
import type { Venture, Mode } from "@/types";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import Badge from "./Badge";

interface BentoCardProps {
  venture: Venture;
  index: number;
  mode: Mode;
}

export default function BentoCard({ venture, index }: Omit<BentoCardProps, 'mode'>) {
  const [ref, isVisible] = useScrollTrigger<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Determine card size based on category and index
  const isLarge = venture.category === "core" && index === 0;
  const isMedium = venture.category === "core" || venture.category === "opensource";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`
        group relative overflow-hidden rounded-2xl border border-white/10
        bg-gradient-to-br from-white/5 to-transparent
        backdrop-blur-sm
        hover:border-white/20 transition-all duration-300
        ${isLarge ? "md:col-span-2 md:row-span-2" : ""}
        ${isMedium && !isLarge ? "md:col-span-1 md:row-span-1" : ""}
      `}
      whileHover={{ scale: 1.02 }}
    >
      {/* Glow effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 50% 50%, ${venture.color}, transparent 70%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Project Image Area */}
        <div 
          className="relative w-full h-44 bg-white/5 flex items-center justify-center overflow-hidden rounded-t-2xl"
          style={{ borderBottom: `1px solid ${venture.color}30` }}
        >
          {venture.image ? (
            <img 
              src={venture.image} 
              alt={venture.name}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          ) : (
            <div className="flex flex-col items-center gap-2">
              <svg className="w-8 h-8 text-white/10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-mono text-white/15 uppercase tracking-wider">Proyecto</span>
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          {/* Category Badge */}
          <div className="mb-4">
            <span
              className="inline-block px-2 py-1 text-xs font-medium rounded-full"
              style={{
                backgroundColor: `${venture.color}20`,
                color: venture.color,
              }}
            >
              {venture.category === "core" && "Core Venture"}
              {venture.category === "leadership" && "Liderazgo"}
              {venture.category === "opensource" && "Open Source"}
            </span>
          </div>

        {/* Title & Role */}
        <h3 className="text-xl font-bold text-white mb-1">{venture.name}</h3>
        <p className="text-sm text-white/60 mb-4">{venture.role}</p>

        {/* Description */}
        <p className="text-sm text-white/70 leading-relaxed flex-grow">
          {venture.description}
        </p>

        {/* Metrics */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider">
                {venture.metrics.label}
              </p>
              <p
                className="text-2xl font-bold"
                style={{ color: venture.color }}
              >
                {venture.metrics.value}
              </p>
            </div>
            {venture.secondaryMetrics && (
              <div className="text-right">
                <p className="text-xs text-white/40 uppercase tracking-wider">
                  {venture.secondaryMetrics.label}
                </p>
                <p className="text-lg font-semibold text-white">
                  {venture.secondaryMetrics.value}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {venture.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} text={tech} color={venture.color} />
          ))}
        </div>
        </div>

        {/* Link arrow */}
        {venture.link && (
          <a
            href={venture.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
          >
            <svg
              className="w-4 h-4 text-white/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );
}
