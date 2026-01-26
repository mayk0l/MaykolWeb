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

  // Volat gets full width (col-span-2)
  const isVolat = venture.id === "volat";
  // Other core ventures are medium size
  const isMedium = venture.category === "core" || venture.category === "opensource";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`
        group relative overflow-hidden rounded-2xl border border-white/10
        bg-white/[0.02] h-full
        hover:border-white/20 transition-colors duration-300
        ${isVolat ? "sm:col-span-2" : ""}
        ${isMedium && !isVolat ? "col-span-1 row-span-1" : ""}
      `}
    >
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="p-4 sm:p-5 flex flex-col flex-grow">
          {/* Category Badge */}
          <div className="mb-3">
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
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 line-clamp-1">{venture.name}</h3>
        <p className="text-xs sm:text-sm text-white/60 mb-3">{venture.role}</p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-3">
          {venture.description}
        </p>

        {/* Metrics */}
        <div className="mt-3 pt-3 border-t border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider">
                {venture.metrics.label}
              </p>
              <p
                className="text-xl sm:text-2xl font-bold"
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
        <div className="mt-3 flex flex-wrap gap-1.5">
          {venture.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} text={tech} color={venture.color} />
          ))}
        </div>
        </div>

        {/* Project Image Area - Moved to bottom */}
        {venture.image ? (
          <div 
            className="relative w-full overflow-hidden mt-auto"
            style={{ borderTop: `1px solid ${venture.color}30` }}
          >
            <img 
              src={venture.image} 
              alt={venture.name}
              className={`w-full ${venture.id === 'volat' ? 'h-auto max-h-64 object-contain object-left' : 'h-48 object-cover object-top'}`}
              loading="lazy"
            />
          </div>
        ) : (
          <div 
            className="relative w-full overflow-hidden mt-auto p-4 flex items-center justify-center gap-2"
            style={{ borderTop: `1px solid ${venture.color}30`, backgroundColor: `${venture.color}05` }}
          >
            <svg className="w-4 h-4 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs text-white/30 font-medium">Proyecto privado</span>
          </div>
        )}

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
