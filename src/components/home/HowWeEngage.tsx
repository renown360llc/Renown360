"use client";

import { motion } from "framer-motion";
import { Search, UserCheck, Rocket, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/FadeUp";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    subtitle: "Days 1–3",
    desc: "We run a structured discovery: understand your tech stack, skill gaps, delivery timelines, and compliance requirements. No generic intake forms.",
    color: "#0ea5e9",
    glow: "rgba(14,165,233,0.15)",
  },
  {
    number: "02",
    icon: UserCheck,
    title: "Match",
    subtitle: "Days 4–10",
    desc: "Our team screens, interviews, and shortlists pre-vetted candidates from our active bench. You interview 2–3 finals — not 20 resumes.",
    color: "#6366f1",
    glow: "rgba(99,102,241,0.15)",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Deliver",
    subtitle: "Day 11+",
    desc: "Consultant is onboarded, compliance is handled, and a dedicated delivery manager ensures performance throughout the engagement.",
    color: "#10b981",
    glow: "rgba(16,185,129,0.15)",
  },
];

const connector = {
  hidden: { scaleX: 0, opacity: 0 },
  show:   { scaleX: 1, opacity: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function HowWeEngage() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <SectionLabel className="mx-auto mb-4">How We Engage</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            From Brief to Billable in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-indigo-500">
              10 Days
            </span>
          </h2>
          <p className="text-neutral-500 leading-relaxed">
            A repeatable, three-phase process that eliminates hiring friction and gets
            the right people working on your programme — fast.
          </p>
        </FadeUp>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-[16.6%] right-[16.6%] h-px z-0">
            <motion.div
              className="h-full origin-left"
              style={{
                background: "linear-gradient(90deg, #0ea5e9 0%, #6366f1 50%, #10b981 100%)",
              }}
              variants={connector}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <motion.div
                    className="relative w-[104px] h-[104px] rounded-full flex items-center justify-center mb-6 shrink-0"
                    style={{
                      background: `radial-gradient(circle at center, ${step.glow} 0%, transparent 70%)`,
                      boxShadow: `0 0 0 1px ${step.color}25, 0 0 32px ${step.color}18`,
                    }}
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${step.color}18`, border: `1.5px solid ${step.color}35` }}
                    >
                      <Icon className="w-7 h-7" style={{ color: step.color }} />
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-black text-white"
                      style={{ backgroundColor: step.color }}
                    >
                      {i + 1}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="max-w-xs">
                    <div
                      className="inline-block text-[11px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full mb-2"
                      style={{ color: step.color, backgroundColor: `${step.color}12` }}
                    >
                      {step.subtitle}
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Mobile arrow */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden mt-6 text-neutral-300">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom metric strip */}
        <motion.div
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            { metric: "< 10 days",  label: "Average time-to-placement" },
            { metric: "2–3",        label: "Shortlisted candidates, not 20" },
            { metric: "98%",        label: "Engagement completion rate" },
          ].map((m) => (
            <div
              key={m.metric}
              className="flex flex-col items-center justify-center text-center p-5 rounded-2xl bg-neutral-50 border border-neutral-200"
            >
              <span className="text-2xl font-black text-brand-navy mb-1">{m.metric}</span>
              <span className="text-xs text-neutral-500 font-medium">{m.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
