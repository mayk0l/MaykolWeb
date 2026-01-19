"use client";

import { motion } from "framer-motion";
import type { TimelineEvent } from "@/types";
import { useMode } from "@/context/ModeProvider";

interface TimelineNodeProps {
  event: TimelineEvent;
  index: number;
  isActive: boolean;
}

const iconMap: Record<string, React.ReactNode> = {
  code: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  server: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  briefcase: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  users: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  rocket: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>
  ),
  crown: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.5 7L12 6l3.5 4L19 3M5 21h14M5 17h14M7 13h10" />
    </svg>
  ),
};

export default function TimelineNode({ event, index, isActive }: TimelineNodeProps) {
  const { modeConfig } = useMode();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8`}
    >
      {/* Content */}
      <div className={`flex-1 ${isEven ? "md:text-right" : "md:text-left"}`}>
        <motion.div
          className={`
            inline-block p-6 rounded-2xl
            bg-white/5 border border-white/10
            ${isActive ? "border-opacity-100" : "border-opacity-50"}
          `}
          style={{
            borderColor: isActive ? modeConfig.color : undefined,
          }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm font-medium text-white/40">
              {event.year}
            </span>
            <span className="text-sm text-white/20">•</span>
            <span className="text-sm text-white/40">{event.age} años</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">{event.title}</h3>
          <p className="text-sm text-white/60 leading-relaxed">
            {event.description}
          </p>
        </motion.div>
      </div>

      {/* Center node */}
      <div className="relative z-10 flex-shrink-0">
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: isActive ? modeConfig.color : "rgba(255,255,255,0.1)",
            color: isActive ? "#000" : "rgba(255,255,255,0.5)",
          }}
          whileHover={{ scale: 1.1 }}
        >
          {iconMap[event.icon] || iconMap.code}
        </motion.div>
      </div>

      {/* Spacer for opposite side */}
      <div className="flex-1 hidden md:block" />
    </motion.div>
  );
}
