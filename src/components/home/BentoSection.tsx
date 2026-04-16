"use client";

import { motion } from "framer-motion";
import {
  Zap, Shield, Globe, Users, TrendingUp, Clock,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { FadeUp } from "@/components/ui/FadeUp";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";

const ease = [0.22, 1, 0.36, 1] as const;

const metrics = [
  { value: "< 10", unit: "days", label: "Average time-to-placement" },
  { value: "100+", unit: "",     label: "Active consultants on bench" },
  { value: "98%",  unit: "",     label: "Client satisfaction rate" },
];

export function BentoSection() {
  return (
    <section className="py-20 lg:py-28 bg-brand-navy noise-overlay overflow-hidden relative">
      {/* Background glow */}
      <motion.div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/8 border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-cyan/80">
              The Renown360 Platform
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
            Everything Your Enterprise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-sky-300">
              Needs to Scale
            </span>
          </h2>
          <p className="text-white/50 leading-relaxed">
            One partner. Every dimension of enterprise IT — talent, cloud, data, and transformation.
          </p>
        </FadeUp>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">

          {/* Card 1 — Large feature (spans 2 cols on lg) */}
          <motion.div
            className="lg:col-span-2 glass-card glass-card-hover rounded-3xl p-8 relative overflow-hidden group cursor-default"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            whileHover={{ y: -3 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-brand-cyan/15 border border-brand-cyan/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-brand-cyan" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-brand-cyan/70">
                  Speed Without Compromise
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Hire enterprise IT talent in under 10 days — not 3 months.
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-lg">
                Our active bench of 100+ pre-screened consultants means we skip the sourcing phase
                entirely. You get shortlisted candidates on day 4, not week 6.
              </p>
              <div className="grid grid-cols-3 gap-4">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-white/5 rounded-2xl p-4 border border-white/8">
                    <div className="text-2xl font-black text-white mb-0.5">
                      {m.value}
                      <span className="text-brand-cyan text-base">{m.unit}</span>
                    </div>
                    <p className="text-[11px] text-white/40 leading-snug">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Compliance */}
          <motion.div
            className="glass-card glass-card-hover rounded-3xl p-7 relative overflow-hidden group cursor-default"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            whileHover={{ y: -3 }}
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/20 flex items-center justify-center mb-5">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Fully Compliant. Always.
            </h3>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              W2, C2C, H1B, OPT, CPT — we handle every employment structure, visa type,
              and background check. Zero compliance risk for your organisation.
            </p>
            <ul className="space-y-2">
              {["W2 & C2C contracts", "H1B / OPT / CPT support", "BGV & reference checks", "SOC-2 ready processes"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-white/60">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3 — Global reach */}
          <motion.div
            className="glass-card glass-card-hover rounded-3xl p-7 relative overflow-hidden group cursor-default"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            whileHover={{ y: -3 }}
          >
            <div className="w-11 h-11 rounded-xl bg-violet-500/15 border border-violet-500/20 flex items-center justify-center mb-5">
              <Globe className="w-5 h-5 text-violet-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              On-Shore. Near-Shore. Off-Shore.
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Delivery models calibrated to your budget without sacrificing quality. US, Canada, and
              global resource pools — one single point of contact.
            </p>
            <div className="mt-5 flex gap-2 flex-wrap">
              {["USA", "Canada", "India", "Latin America"].map((loc) => (
                <span key={loc} className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-violet-500/12 text-violet-300 border border-violet-500/20">
                  {loc}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 4 — Dedicated team */}
          <motion.div
            className="glass-card glass-card-hover rounded-3xl p-7 relative overflow-hidden group cursor-default"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease }}
            whileHover={{ y: -3 }}
          >
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center mb-5">
              <Users className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">
              Named Account Team
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              You always know who owns your account. A dedicated delivery manager, not a rotating
              call-centre team. One number to call. One clear point of accountability.
            </p>
          </motion.div>

          {/* Card 5 — Outcome CTA (spans 2 cols) */}
          <motion.div
            className="lg:col-span-2 rounded-3xl p-8 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(14,165,233,0.18) 0%, rgba(99,102,241,0.14) 50%, rgba(16,185,129,0.1) 100%)",
              border: "1px solid rgba(14,165,233,0.25)",
            }}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            whileHover={{ y: -3 }}
          >
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(14,165,233,0.08) 0%, transparent 70%)" }}
            />
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-5 h-5 text-brand-cyan" />
                  <span className="text-xs font-bold tracking-widest uppercase text-brand-cyan/80">
                    Outcome Guarantee
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  30-Day Performance Guarantee
                </h3>
                <p className="text-white/50 text-sm max-w-md">
                  Every placement comes with a 30-day performance guarantee. If a consultant
                  doesn&apos;t meet agreed KPIs, we replace them — no questions, no invoices.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-cyan text-white text-sm font-semibold hover:bg-brand-cyan-light transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
