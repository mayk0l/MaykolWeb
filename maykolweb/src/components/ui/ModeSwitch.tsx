"use client";

import { useMode } from "@/context/ModeProvider";
import { MODES } from "@/lib/constants";
import { motion } from "framer-motion";
import type { Mode } from "@/types";

export default function ModeSwitch() {
  const { mode, setMode, modeConfig } = useMode();

  const modes = Object.values(MODES) as typeof MODES[keyof typeof MODES][];

  return (
    <div className="flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/10">
      {modes.map((m) => (
        <button
          key={m.id}
          onClick={() => setMode(m.id as Mode)}
          className="relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors"
        >
          {mode === m.id && (
            <motion.div
              layoutId="activeMode"
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: modeConfig.color }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span
            className={`relative z-10 ${
              mode === m.id ? "text-black" : "text-white/60"
            }`}
          >
            {m.label}
          </span>
        </button>
      ))}
    </div>
  );
}
