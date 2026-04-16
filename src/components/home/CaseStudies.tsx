"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Landmark, HeartPulse, Factory } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/FadeUp";

const studies = [
  {
    industry: "Financial Services",
    Icon: Landmark,
    iconColor: "#0ea5e9",
    iconBg: "rgba(14,165,233,0.1)",
    tag: "IT Staffing",
    headline: "Tier-1 bank cut time-to-hire from 90 days to 11",
    outcome: "62% faster hiring",
    detail:
      "Placed 14 Java and cloud engineers across 3 LOBs within a single quarter. Dedicated delivery manager handled all compliance and onboarding end-to-end.",
    metrics: [
      { label: "Engineers placed", value: "14" },
      { label: "Days to first placement", value: "11" },
      { label: "Retention at 12 months", value: "100%" },
    ],
    gradient: "from-sky-500/10 to-blue-600/5",
    border: "border-sky-500/20",
  },
  {
    industry: "Healthcare",
    Icon: HeartPulse,
    iconColor: "#10b981",
    iconBg: "rgba(16,185,129,0.1)",
    tag: "Cloud Migration",
    headline: "Regional health system migrated 40 TB to AWS in 8 weeks",
    outcome: "HIPAA-compliant, on time",
    detail:
      "Architected a HIPAA-compliant AWS landing zone, migrated 12 legacy apps, and trained 8 internal engineers — under budget and without a single downtime incident.",
    metrics: [
      { label: "Data migrated", value: "40 TB" },
      { label: "Apps modernised", value: "12" },
      { label: "Downtime incidents", value: "Zero" },
    ],
    gradient: "from-emerald-500/10 to-teal-600/5",
    border: "border-emerald-500/20",
  },
  {
    industry: "Manufacturing",
    Icon: Factory,
    iconColor: "#f59e0b",
    iconBg: "rgba(245,158,11,0.1)",
    tag: "ERP Implementation",
    headline: "SAP S/4HANA rollout across 6 plants — delivered on schedule",
    outcome: "25% reduction in downtime",
    detail:
      "Deployed a full SAP S/4HANA implementation with MES integration across 6 manufacturing plants. Data migration of 8 years of legacy records with zero data loss.",
    metrics: [
      { label: "Plants rolled out", value: "6" },
      { label: "Legacy records migrated", value: "8 yrs" },
      { label: "Reduction in unplanned downtime", value: "25%" },
    ],
    gradient: "from-amber-500/10 to-orange-600/5",
    border: "border-amber-500/20",
  },
];

export function CaseStudies() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <SectionLabel className="mb-3">Case Studies</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Results We&apos;ve Delivered
            </h2>
          </div>
          <p className="text-sm text-neutral-500 max-w-xs">
            Real outcomes from real engagements — not hypotheticals.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studies.map((s, i) => {
            const Icon = s.Icon;
            return (
              <motion.div
                key={s.headline}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.58, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className={`group relative bg-white rounded-3xl overflow-hidden border ${s.border} hover:shadow-card-hover transition-all duration-300 flex flex-col cursor-default`}
              >
                {/* Top gradient bar */}
                <div className={`h-1 w-full bg-gradient-to-r ${s.gradient.replace("/10", "/60").replace("/5", "/40")}`} />

                <div className="p-7 flex flex-col flex-1">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: s.iconBg }}
                      >
                        <Icon className="w-5 h-5" style={{ color: s.iconColor }} />
                      </div>
                      <div>
                        <p className="text-[11px] font-bold tracking-widest uppercase text-neutral-400">
                          {s.industry}
                        </p>
                        <span
                          className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
                          style={{ color: s.iconColor, backgroundColor: s.iconBg }}
                        >
                          {s.tag}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      whileHover={{ rotate: 45 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.div>
                  </div>

                  {/* Outcome pill */}
                  <div
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-bold mb-3 self-start"
                    style={{ color: s.iconColor, backgroundColor: s.iconBg }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: s.iconColor }} />
                    {s.outcome}
                  </div>

                  <h3 className="text-base font-bold text-brand-navy mb-3 leading-snug">
                    {s.headline}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed mb-6 flex-1">
                    {s.detail}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 pt-5 border-t border-neutral-100">
                    {s.metrics.map((m) => (
                      <div key={m.label} className="text-center">
                        <div className="text-base font-black text-brand-navy">{m.value}</div>
                        <div className="text-[10px] text-neutral-400 leading-snug mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
