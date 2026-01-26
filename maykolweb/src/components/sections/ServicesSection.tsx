"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeProvider";
import GlowButton from "@/components/ui/GlowButton";
import { 
  Rocket, 
  Code2, 
  Bot, 
  LineChart, 
  Shield, 
  Zap,
  ArrowRight
} from "lucide-react";

const SERVICES = [
  {
    icon: Rocket,
    title: "MVPs y Startups",
    description: "Transforma tu idea en un producto funcional en semanas, no meses.",
    benefits: ["Validación rápida de mercado", "Arquitectura escalable desde el día 1", "Costo 60% menor que una agencia"],
    ideal: "Emprendedores con una idea validada",
  },
  {
    icon: Code2,
    title: "Desarrollo a Medida",
    description: "Software personalizado que se adapta 100% a tu negocio.",
    benefits: ["Sin código genérico de plantillas", "Integración con tus sistemas actuales", "Soporte y mantenimiento incluido"],
    ideal: "Empresas que necesitan soluciones únicas",
  },
  {
    icon: Bot,
    title: "Automatización con IA",
    description: "Reduce costos operativos automatizando tareas repetitivas.",
    benefits: ["Ahorra +20 horas semanales", "Integración con ChatGPT, Claude, etc.", "ROI medible desde el primer mes"],
    ideal: "Empresas con procesos manuales costosos",
  },
  {
    icon: LineChart,
    title: "Consultoría Técnica",
    description: "Asesoría estratégica para decisiones tecnológicas críticas.",
    benefits: ["Evita errores costosos", "Roadmap técnico claro", "Sesiones 1:1 sin rodeos"],
    ideal: "CTOs y fundadores técnicos",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Shield,
    title: "Sin sorpresas",
    description: "Presupuesto cerrado. Sin costos ocultos ni horas extras facturadas.",
  },
  {
    icon: Zap,
    title: "Respuesta en 24h",
    description: "Comunicación directa por WhatsApp. Sin tickets ni esperas eternas.",
  },
];

export default function ServicesSection() {
  const { modeConfig } = useMode();

  return (
    <section id="servicios" className="relative py-20 sm:py-24 bg-black">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span
            className="text-sm font-medium uppercase tracking-widest"
            style={{ color: modeConfig.color }}
          >
            Servicios
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            ¿Qué problema necesitas resolver?
          </h2>
          <p className="mt-4 text-lg text-white/60 max-w-2xl mx-auto">
            No vendo horas de código. Vendo soluciones que generan resultados medibles para tu negocio.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-white/20 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div 
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${modeConfig.color}15` }}
                >
                  <service.icon 
                    className="w-6 h-6" 
                    style={{ color: modeConfig.color }} 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">
                    {service.description}
                  </p>
                  
                  {/* Benefits */}
                  <ul className="space-y-2 mb-4">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-white/70">
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: modeConfig.color }}
                        />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Ideal for */}
                  <p className="text-xs text-white/40">
                    Ideal para: <span className="text-white/60">{service.ideal}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {DIFFERENTIATORS.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex items-center gap-4 p-4 bg-gradient-to-r from-white/5 to-transparent rounded-xl border border-white/5"
            >
              <diff.icon className="w-8 h-8 text-white/40" />
              <div>
                <h4 className="font-semibold text-white">{diff.title}</h4>
                <p className="text-sm text-white/50">{diff.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <GlowButton href="#contact" size="lg">
            Cuéntame tu proyecto
            <ArrowRight className="w-4 h-4 ml-2" />
          </GlowButton>
          <p className="mt-4 text-sm text-white/40">
            Respondo personalmente en menos de 24 horas
          </p>
        </motion.div>
      </div>
    </section>
  );
}
