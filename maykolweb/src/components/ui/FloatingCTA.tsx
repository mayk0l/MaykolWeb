"use client";

import { useState, useEffect } from "react";
import { useMode } from "@/context/ModeProvider";
import { MessageCircle, X } from "lucide-react";

export default function FloatingCTA() {
  const { modeConfig } = useMode();
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (roughly 100vh)
      const scrolled = window.scrollY > window.innerHeight * 0.5;
      setIsVisible(scrolled && !isDismissed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 md:hidden">
      {/* Dismiss button */}
      <button
        onClick={() => setIsDismissed(true)}
        className="p-1 bg-black/50 rounded-full text-white/50 hover:text-white"
      >
        <X className="w-4 h-4" />
      </button>
      
      {/* CTA Button */}
      <a
        href="#contact"
        className="flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-black shadow-lg animate-pulse"
        style={{ backgroundColor: modeConfig.color }}
        onClick={() => setIsDismissed(true)}
      >
        <MessageCircle className="w-5 h-5" />
        Cotizar Gratis
      </a>
    </div>
  );
}
