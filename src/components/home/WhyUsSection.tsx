"use client";

import { motion } from "framer-motion";
import { Shield, Target, Zap, Globe } from "lucide-react";
import { VALUES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { FadeUp } from "@/components/ui/FadeUp";

const ICON_MAP: Record<string, React.ElementType> = { Shield, Target, Zap, Globe };

const differentiators = [
  {
    number: "01",
    title: "Pre-Vetted Talent",
    desc: "Every consultant undergoes technical screening, background checks, and reference validation before joining our bench. You get productive contributors from week one.",
  },
  {
    number: "02",
    title: "Enterprise Delivery Model",
    desc: "Dedicated delivery managers, SLA-backed placements, and weekly governance cadences that meet Fortune 500 procurement standards.",
  },
  {
    number: "03",
    title: "Multi-Shore Flexibility",
    desc: "On-shore, near-shore, and offshore delivery options calibrated to your budget and collaboration preferences — without compromising quality.",
  },
  {
    number: "04",
    title: "Outcome Accountability",
    desc: "We define measurable KPIs at engagement start and report against them every sprint. No vanity metrics, no hidden costs.",
  },
];

const listContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const listItem = {
  hidden: { opacity: 0, x: 24 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function WhyUsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left */}
          <FadeIn direction="left">
            <SectionLabel className="mb-4">Why Renown360</SectionLabel>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-5">
              Built for Enterprise.{" "}
              <span className="text-brand-cyan">Delivered at Scale.</span>
            </h2>
            <p className="text-neutral-500 text-lg leading-relaxed mb-8">
              We combine the rigour of top-tier consulting firms with the agility of a boutique
              partner — giving enterprises the quality they demand without the overhead they dread.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {VALUES.map((v, i) => {
                const Icon = ICON_MAP[v.icon];
                return (
                  <motion.div
                    key={v.title}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-brand-cyan/10 flex items-center justify-center shrink-0 mt-0.5">
                      {Icon && <Icon className="w-4 h-4 text-brand-cyan" />}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-brand-navy mb-0.5">{v.title}</h4>
                      <p className="text-xs text-neutral-500 leading-relaxed">{v.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </FadeIn>

          {/* Right: numbered list */}
          <motion.div
            className="space-y-5"
            variants={listContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
          >
            {differentiators.map((d) => (
              <motion.div
                key={d.number}
                variants={listItem}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex gap-5 p-5 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-brand-cyan/20 hover:bg-white cursor-default"
                style={{ transition: "border-color 0.2s, background-color 0.2s, box-shadow 0.2s" }}
              >
                <div className="text-3xl font-black text-brand-cyan/20 leading-none shrink-0 w-10 pt-0.5">
                  {d.number}
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy mb-1">{d.title}</h4>
                  <p className="text-sm text-neutral-500 leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
