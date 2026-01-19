"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { extractNumericValue, formatNumber } from "@/lib/utils";

interface MetricCounterProps {
  value: string;
  label: string;
  color?: string;
  delay?: number;
}

export default function MetricCounter({
  value,
  label,
  color = "#ffffff",
  delay = 0,
}: MetricCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState("0");

  const numericValue = extractNumericValue(value);
  const suffix = value.replace(/[0-9.,KMkm]/g, "").trim();

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = Date.now();
    const startDelay = delay * 1000;

    const timer = setTimeout(() => {
      const animate = () => {
        const elapsed = Date.now() - startTime - startDelay;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutExpo)
        const eased = 1 - Math.pow(2, -10 * progress);
        const current = Math.floor(numericValue * eased);

        setDisplayValue(formatNumber(current));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Ensure final value matches original format
          setDisplayValue(value.replace(/[^0-9.KMkm+]/g, ""));
        }
      };

      animate();
    }, startDelay);

    return () => clearTimeout(timer);
  }, [isInView, numericValue, value, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold" style={{ color }}>
        {displayValue}
        <span className="text-2xl">{suffix}</span>
      </div>
      <p className="mt-2 text-sm text-white/60 uppercase tracking-wider">
        {label}
      </p>
    </motion.div>
  );
}
