"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star, Circle } from "lucide-react";

const stats = [
  { value: "100+", label: "Active Consultants" },
  { value: "<10d", label: "Avg. Time-to-Place" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "50+",  label: "Enterprise Clients" },
];

const bench = [
  { role: "Senior Cloud Architect", stack: "AWS · Terraform", match: 98, status: "Available" },
  { role: "SAP S/4HANA Lead",       stack: "ABAP · FICO",     match: 96, status: "Available" },
  { role: "Data Engineer",          stack: "Databricks · Spark", match: 94, status: "Interviewing" },
  { role: "Salesforce Architect",   stack: "Apex · LWC",      match: 92, status: "Available" },
];

export function Hero() {
  return (
    <section className="relative bg-surface pt-16 overflow-hidden">
      {/* grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #d1e8dc 1px, transparent 1px), linear-gradient(to bottom, #d1e8dc 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
        }}
      />

      <div className="relative container-wide py-6 md:py-14">
        {/* Main green card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-primary rounded-3xl md:rounded-4xl overflow-hidden p-3 md:p-4"
        >
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4 items-stretch">
            {/* Text */}
            <div className="flex-1 flex flex-col gap-5 md:gap-7 px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 text-xs font-medium text-white/60">
                  Trusted by Fortune 500 enterprises
                </span>
              </div>
              <h1 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-[3.3rem] leading-[1.05] tracking-tight text-white text-balance">
                Enterprise IT consulting that delivers real results
              </h1>
              <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                Screened consultants, cloud transformation, legacy modernisation,
                and ERP expertise. Placed in under 10 days.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-white text-primary font-semibold text-sm hover:bg-surface transition-colors"
                >
                  Get in touch <ArrowRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  What we do
                </Link>
              </div>
            </div>

            {/* Live bench console */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="lg:w-[44%] rounded-2xl md:rounded-3xl bg-[#0b1a14] border border-white/10 p-4 sm:p-5 flex flex-col gap-4 min-h-[260px] lg:min-h-[440px]"
            >
              {/* window chrome */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
                </div>
                <span className="font-mono text-[10px] tracking-wider text-white/40">renown360 / bench</span>
                <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-300">
                  <Circle size={6} className="fill-emerald-400 text-emerald-400 animate-pulse" />
                  live
                </span>
              </div>

              {/* bench rows */}
              <div className="flex flex-col gap-2.5">
                {bench.map((b, i) => (
                  <motion.div
                    key={b.role}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center gap-3 rounded-xl bg-white/[0.04] border border-white/5 px-3 py-2.5"
                  >
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-white truncate">{b.role}</p>
                      <p className="font-mono text-[10px] text-white/40 truncate">{b.stack}</p>
                    </div>
                    <div className="hidden sm:flex flex-col items-end gap-1 w-16">
                      <span className="font-mono text-[10px] text-emerald-300">{b.match}% match</span>
                      <div className="w-full h-1 rounded-full bg-white/10 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${b.match}%` }}
                          transition={{ duration: 0.8, delay: 0.6 + i * 0.12, ease: "easeOut" }}
                          className="h-full bg-emerald-400"
                        />
                      </div>
                    </div>
                    <span
                      className={`shrink-0 text-[10px] font-medium px-2 py-0.5 rounded-full ${
                        b.status === "Available"
                          ? "bg-emerald-400/15 text-emerald-300"
                          : "bg-amber-400/15 text-amber-300"
                      }`}
                    >
                      {b.status}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* footer metric */}
              <div className="mt-auto flex items-center justify-between rounded-xl bg-white/[0.04] border border-white/5 px-3 py-2.5">
                <span className="font-mono text-[10px] text-white/40">avg. time-to-place</span>
                <span className="font-mono text-sm font-semibold text-white">8.2 days</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-3 md:mt-4 grid grid-cols-2 md:grid-cols-4 border border-line rounded-2xl md:rounded-3xl overflow-hidden bg-line gap-px"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white flex flex-col items-center justify-center py-4 sm:py-6 px-3 gap-1">
              <span className="font-display font-semibold text-2xl sm:text-3xl text-ink tracking-tight">{s.value}</span>
              <span className="text-[10px] sm:text-xs text-ink/50 font-medium text-center leading-tight">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
