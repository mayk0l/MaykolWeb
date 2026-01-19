"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeProvider";

export default function Loading() {
  const { modeConfig } = useMode();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Animated logo */}
        <motion.div
          className="w-16 h-16 rounded-2xl"
          style={{ backgroundColor: modeConfig?.color || "#22D3EE" }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            borderRadius: ["20%", "50%", "20%"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Loading text */}
        <motion.p
          className="text-white/60 text-sm uppercase tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Loading
        </motion.p>
      </motion.div>
    </div>
  );
}
