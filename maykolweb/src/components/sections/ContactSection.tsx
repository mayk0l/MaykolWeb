"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMode } from "@/context/ModeProvider";
import {
  BUDGET_OPTIONS,
  PROJECT_PHASE_OPTIONS,
  TECH_NEEDS_OPTIONS,
} from "@/lib/constants";
import { calculateLeadScore } from "@/lib/utils";
import GlowButton from "@/components/ui/GlowButton";
import type { ConsultingFormData, LeadScore } from "@/types";

export default function ContactSection() {
  const { modeConfig } = useMode();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [leadScore, setLeadScore] = useState<LeadScore | null>(null);

  const [formData, setFormData] = useState<ConsultingFormData>({
    name: "",
    email: "",
    company: "",
    budget: "",
    projectPhase: "",
    techNeeds: [],
    description: "",
  });

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleTechNeedToggle = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      techNeeds: prev.techNeeds.includes(value)
        ? prev.techNeeds.filter((t) => t !== value)
        : [...prev.techNeeds, value],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Calculate lead score
    const score = calculateLeadScore(
      formData.budget,
      formData.projectPhase,
      formData.techNeeds,
      BUDGET_OPTIONS,
      PROJECT_PHASE_OPTIONS,
      TECH_NEEDS_OPTIONS
    );
    setLeadScore(score);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const stepVariants = {
    enter: { opacity: 0, x: 20 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  };

  return (
    <section id="contact" className="relative py-32 bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(ellipse at center, ${modeConfig.color}, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span
            className="text-sm font-medium uppercase tracking-widest"
            style={{ color: modeConfig.color }}
          >
            Contacto
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            ¿Listo para construir?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-xl mx-auto">
            Este formulario me ayuda a entender tu proyecto y asegurar que puedo
            aportar valor real. Solo trabajo en proyectos donde el fit es perfecto.
          </p>
        </motion.div>

        {/* Progress indicator */}
        {!isSubmitted && (
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                      s === step
                        ? "scale-110"
                        : s < step
                        ? "opacity-100"
                        : "opacity-40"
                    }`}
                    style={{
                      backgroundColor: s <= step ? modeConfig.color : "rgba(255,255,255,0.1)",
                      color: s <= step ? "#000" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {s < step ? "✓" : s}
                  </div>
                  {s < 3 && (
                    <div
                      className="w-12 h-0.5 mx-2"
                      style={{
                        backgroundColor: s < step ? modeConfig.color : "rgba(255,255,255,0.1)",
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${modeConfig.color}20` }}
              >
                <svg
                  className="w-10 h-10"
                  style={{ color: modeConfig.color }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                ¡Mensaje recibido!
              </h3>
              <p className="text-white/60 mb-4">
                Tu lead score es:{" "}
                <span
                  className="font-bold"
                  style={{ color: modeConfig.color }}
                >
                  {leadScore?.tier.toUpperCase()}
                </span>
              </p>
              <p className="text-white/60">
                Te contactaré dentro de las próximas 24-48 horas hábiles.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Cuéntame sobre ti
                    </h3>
                    
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
                        placeholder="Tu nombre"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
                        placeholder="tu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        Empresa (opcional)
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30"
                        placeholder="Tu empresa"
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Sobre el proyecto
                    </h3>
                    
                    <div>
                      <label className="block text-sm text-white/60 mb-3">
                        Presupuesto estimado *
                      </label>
                      <div className="space-y-2">
                        {BUDGET_OPTIONS.map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                              formData.budget === option.value
                                ? "border-opacity-100"
                                : "border-white/10 hover:border-white/20"
                            }`}
                            style={{
                              borderColor:
                                formData.budget === option.value
                                  ? modeConfig.color
                                  : undefined,
                              backgroundColor:
                                formData.budget === option.value
                                  ? `${modeConfig.color}10`
                                  : undefined,
                            }}
                          >
                            <input
                              type="radio"
                              name="budget"
                              value={option.value}
                              checked={formData.budget === option.value}
                              onChange={(e) =>
                                setFormData({ ...formData, budget: e.target.value })
                              }
                              className="sr-only"
                            />
                            <span className="text-white">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-white/60 mb-3">
                        Fase del proyecto *
                      </label>
                      <div className="space-y-2">
                        {PROJECT_PHASE_OPTIONS.map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                              formData.projectPhase === option.value
                                ? "border-opacity-100"
                                : "border-white/10 hover:border-white/20"
                            }`}
                            style={{
                              borderColor:
                                formData.projectPhase === option.value
                                  ? modeConfig.color
                                  : undefined,
                              backgroundColor:
                                formData.projectPhase === option.value
                                  ? `${modeConfig.color}10`
                                  : undefined,
                            }}
                          >
                            <input
                              type="radio"
                              name="projectPhase"
                              value={option.value}
                              checked={formData.projectPhase === option.value}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  projectPhase: e.target.value,
                                })
                              }
                              className="sr-only"
                            />
                            <span className="text-white">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Necesidades técnicas
                    </h3>
                    
                    <div>
                      <label className="block text-sm text-white/60 mb-3">
                        ¿Qué necesitas? (selección múltiple)
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {TECH_NEEDS_OPTIONS.map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all ${
                              formData.techNeeds.includes(option.value)
                                ? "border-opacity-100"
                                : "border-white/10 hover:border-white/20"
                            }`}
                            style={{
                              borderColor: formData.techNeeds.includes(option.value)
                                ? modeConfig.color
                                : undefined,
                              backgroundColor: formData.techNeeds.includes(
                                option.value
                              )
                                ? `${modeConfig.color}10`
                                : undefined,
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={formData.techNeeds.includes(option.value)}
                              onChange={() => handleTechNeedToggle(option.value)}
                              className="sr-only"
                            />
                            <span className="text-sm text-white">{option.label}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        Cuéntame más sobre tu proyecto
                      </label>
                      <textarea
                        rows={4}
                        value={formData.description}
                        onChange={(e) =>
                          setFormData({ ...formData, description: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 resize-none"
                        placeholder="Describe brevemente tu proyecto, objetivos y timeline..."
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="px-6 py-3 text-white/60 hover:text-white transition-colors"
                  >
                    ← Atrás
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <GlowButton onClick={handleNext}>
                    Siguiente →
                  </GlowButton>
                ) : (
                  <GlowButton onClick={() => {}}>
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      "Enviar consulta"
                    )}
                  </GlowButton>
                )}
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
