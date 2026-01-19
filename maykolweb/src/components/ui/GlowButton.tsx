"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeProvider";
import { useState } from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export default function GlowButton({
  children,
  onClick,
  href,
  variant = "primary",
  size = "md",
  className = "",
  disabled,
  ...props
}: GlowButtonProps) {
  const { modeConfig } = useMode();
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const baseClasses = `
    relative inline-flex items-center justify-center gap-3
    font-mono uppercase tracking-widest
    transition-all duration-300
    ${sizeClasses[size]}
    ${className}
    group overflow-hidden cursor-pointer
    ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""}
  `;

  // Dynamic styles based on mode
  const buttonStyle = {
    backgroundColor: variant === "primary" ? `${modeConfig.color}15` : "transparent",
    color: "#fff",
    border: `1px solid ${variant === "primary" ? modeConfig.color : "rgba(255,255,255,0.2)"}`,
    boxShadow: variant === "primary" && isHovered && !disabled
      ? `0 0 30px -5px ${modeConfig.color}60, inset 0 0 10px ${modeConfig.color}20` 
      : "none",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={baseClasses}
      style={buttonStyle}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onHoverStart={() => !disabled && setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
      disabled={disabled}
      {...props}
    >
      {/* Background Scan Effect */}
      <motion.div
        className="absolute inset-0 w-[200%] translate-x-[-100%] skew-x-12"
        animate={{
          translateX: isHovered ? "200%" : "-100%",
        }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        style={{
          background: `linear-gradient(90deg, transparent, ${modeConfig.color}60, transparent)`,
        }}
      />

      {/* Tech Corners (Cyberpunk style) */}
      {variant === "primary" && (
        <>
          <motion.div 
            className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2"
            style={{ borderColor: modeConfig.color }}
            animate={{ opacity: isHovered ? 1 : 0.5 }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2"
            style={{ borderColor: modeConfig.color }}
            animate={{ opacity: isHovered ? 1 : 0.5 }}
          />
        </>
      )}
      
      {/* Content Layer */}
      <span className="relative z-10 flex items-center gap-2 font-bold drop-shadow-md">
        {children}
      </span>
      
      {/* Ambient Glow */}
      <div 
        className="absolute inset-0 blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
        style={{ backgroundColor: variant === "primary" ? modeConfig.color : '#fff' }}
      />
    </Component>
  );
}
