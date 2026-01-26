"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useMode } from "@/context/ModeProvider";
import GlowButton from "@/components/ui/GlowButton";
import { CheckCircle2, MessageCircle, Clock, Shield } from "lucide-react";

const SERVICE_OPTIONS = [
  { value: "mvp", label: "MVP / Startup" },
  { value: "custom", label: "Software a medida" },
  { value: "ai", label: "Automatización con IA" },
  { value: "consulting", label: "Consultoría técnica" },
  { value: "other", label: "Otro" },
];

const BENEFITS = [
  { icon: Clock, text: "Respuesta en menos de 24 horas" },
  { icon: Shield, text: "Sin compromiso, cotización gratis" },
  { icon: MessageCircle, text: "Hablamos por WhatsApp si prefieres" },
];

export default function ContactSection() {
  const { modeConfig } = useMode();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío - aquí conectarías con Supabase
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(ellipse at center, ${modeConfig.color}, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left: Value Proposition */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className="text-sm font-medium uppercase tracking-widest"
              style={{ color: modeConfig.color }}
            >
              Contacto
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Cuéntame tu idea y te respondo con una propuesta clara, sin rodeos ni jerga técnica innecesaria.
            </p>

            {/* Benefits */}
            <div className="mt-8 space-y-4">
              {BENEFITS.map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div 
                    className="p-2 rounded-lg"
                    style={{ backgroundColor: `${modeConfig.color}15` }}
                  >
                    <benefit.icon className="w-5 h-5" style={{ color: modeConfig.color }} />
                  </div>
                  <span className="text-white/70">{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div className="mt-10 p-6 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/60 text-sm mb-3">
                ¿Prefieres hablar directamente?
              </p>
              <a 
                href="mailto:maykol.salgado@proton.me"
                className="text-white font-medium hover:underline"
                style={{ textDecorationColor: modeConfig.color }}
              >
                maykol.salgado@proton.me
              </a>
              <p className="text-white/40 text-sm mt-2">
                O escríbeme por LinkedIn para una respuesta más rápida
              </p>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8"
          >
            {isSubmitted ? (
              <div className="text-center py-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: `${modeConfig.color}20` }}
                >
                  <CheckCircle2 className="w-8 h-8" style={{ color: modeConfig.color }} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-white/60">
                  Te contactaré en las próximas 24 horas. <br />
                  Revisa tu email (y spam, por si acaso).
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      WhatsApp (opcional)
                    </label>
                    <input
                      type="tel"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="+56 9 1234 5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    ¿Qué necesitas? *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-white/30 transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-black">Selecciona una opción</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option.value} value={option.value} className="bg-black">
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Cuéntame tu idea *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Describe brevemente tu proyecto o idea. ¿Qué problema quieres resolver?"
                  />
                </div>

                <GlowButton 
                  onClick={() => {}} 
                  className="w-full justify-center"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    "Solicitar Cotización Gratis"
                  )}
                </GlowButton>

                <p className="text-center text-xs text-white/40">
                  Sin spam. Sin compromiso. Solo una propuesta clara.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* Urgency */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center p-6 rounded-xl border border-dashed"
          style={{ borderColor: `${modeConfig.color}40` }}
        >
          <p className="text-white/60">
            ⚡ <span className="text-white font-medium">Cupos limitados:</span> Solo trabajo con 3 clientes nuevos por mes para garantizar dedicación total a cada proyecto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
