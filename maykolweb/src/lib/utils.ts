import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { LeadScore, FormOption } from "@/types";

/**
 * Merge Tailwind classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Calculate lead score from form responses
 */
export function calculateLeadScore(
  budget: string,
  projectPhase: string,
  techNeeds: string[],
  budgetOptions: readonly FormOption[],
  phaseOptions: readonly FormOption[],
  techOptions: readonly FormOption[]
): LeadScore {
  const budgetScore = budgetOptions.find((o) => o.value === budget)?.score || 0;
  const phaseScore = phaseOptions.find((o) => o.value === projectPhase)?.score || 0;
  const techScore = techNeeds.reduce((acc, need) => {
    return acc + (techOptions.find((o) => o.value === need)?.score || 0);
  }, 0);

  const total = budgetScore + phaseScore + Math.min(techScore, 10);

  let tier: LeadScore["tier"] = "cold";
  if (total >= 15) tier = "enterprise";
  else if (total >= 10) tier = "hot";
  else if (total >= 6) tier = "warm";

  return { total, tier };
}

/**
 * Format number with K/M suffix
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num.toString();
}

/**
 * Extract numeric value from string like "43K+" or "300+"
 */
export function extractNumericValue(str: string): number {
  const cleaned = str.replace(/[^0-9.KMkm]/g, "");
  const hasK = /k/i.test(cleaned);
  const hasM = /m/i.test(cleaned);
  const numStr = cleaned.replace(/[KMkm]/g, "");
  let num = parseFloat(numStr) || 0;

  if (hasM) num *= 1000000;
  else if (hasK) num *= 1000;

  return num;
}

/**
 * Smooth scroll to element
 */
export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if we're on the client side
 */
export const isClient = typeof window !== "undefined";

/**
 * Get random number in range
 */
export function randomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Lerp (linear interpolation)
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Clamp value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Map value from one range to another
 */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
