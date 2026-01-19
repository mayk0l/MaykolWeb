// ═══════════════════════════════════════════════════════════════════════════
// TYPE DEFINITIONS
// ═══════════════════════════════════════════════════════════════════════════

export type Mode = "dev" | "business";

export interface ModeConfig {
  id: Mode;
  label: string;
  color: string;
  gradient: string;
  description: string;
}

export interface Venture {
  id: string;
  name: string;
  role: string;
  description: string;
  category: "core" | "leadership" | "opensource";
  image?: string; // Optional project image path
  metrics: {
    label: string;
    value: string;
  };
  secondaryMetrics?: {
    label: string;
    value: string;
  };
  technologies: readonly string[];
  color: string;
  link: string | null;
}

export interface TimelineEvent {
  year: number;
  age: number;
  title: string;
  description: string;
  milestone: string;
  icon: string;
}

export interface FormOption {
  value: string;
  label: string;
  score: number;
}

export interface ConsultingFormData {
  name: string;
  email: string;
  company?: string;
  budget: string;
  projectPhase: string;
  techNeeds: string[];
  description: string;
}

export interface LeadScore {
  total: number;
  tier: "cold" | "warm" | "hot" | "enterprise";
}

// ═══════════════════════════════════════════════════════════════════════════
// 3D TYPES
// ═══════════════════════════════════════════════════════════════════════════

export interface PrismProps {
  mode: Mode;
  isHovered?: boolean;
}

export interface SceneProps {
  mode: Mode;
  className?: string;
}

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENT PROPS
// ═══════════════════════════════════════════════════════════════════════════

export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

export interface BentoCardProps {
  venture: Venture;
  index: number;
  mode: Mode;
}

export interface MetricCounterProps {
  value: string;
  label: string;
  color?: string;
  delay?: number;
}

export interface TimelineNodeProps {
  event: TimelineEvent;
  index: number;
  isActive: boolean;
}
