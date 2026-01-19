"use client";

interface BadgeProps {
  text: string;
  color?: string;
}

export default function Badge({ text, color = "#ffffff" }: BadgeProps) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-md"
      style={{
        backgroundColor: `${color}15`,
        color: `${color}cc`,
        border: `1px solid ${color}30`,
      }}
    >
      {text}
    </span>
  );
}
