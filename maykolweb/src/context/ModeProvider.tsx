"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Mode, ModeConfig } from "@/types";
import { MODES } from "@/lib/constants";

interface ModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  modeConfig: ModeConfig;
  cycleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

const modeOrder: Mode[] = ["dev", "business"];

export function ModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>("dev");

  const modeConfig = MODES[mode];

  const cycleMode = useCallback(() => {
    setMode((current) => {
      const currentIndex = modeOrder.indexOf(current);
      const nextIndex = (currentIndex + 1) % modeOrder.length;
      return modeOrder[nextIndex];
    });
  }, []);

  return (
    <ModeContext.Provider value={{ mode, setMode, modeConfig, cycleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
