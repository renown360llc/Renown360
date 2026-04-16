"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Landmark, HeartPulse, Factory, ShoppingBag, Radio, Building2, ArrowRight,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/FadeUp";

const ICON_MAP: Record<string, React.ElementType> = {
  Landmark, HeartPulse, Factory, ShoppingBag, Radio, Building2,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const tile = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function IndustriesStrip() {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <FadeUp>
            <SectionLabel className="mb-3">Industries</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Vertical Expertise
            </h2>
          </FadeUp>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-brand-cyan font-semibold text-sm hover:gap-3 transition-all duration-200 shrink-0"
            >
              All industries
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {INDUSTRIES.map((ind) => {
            const Icon = ICON_MAP[ind.icon];
            return (
              <motion.div key={ind.slug} variants={tile}>
                <Link
                  href={`/industries#${ind.slug}`}
                  className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-neutral-100 bg-neutral-50 hover:border-brand-cyan/30 hover:bg-white hover:shadow-card transition-all duration-300 text-center h-full"
                >
                  <motion.div
                    className="w-11 h-11 rounded-xl bg-brand-cyan/10 flex items-center justify-center"
                    whileHover={{ scale: 1.15, rotate: -6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                  >
                    {Icon && <Icon className="w-5 h-5 text-brand-cyan" />}
                  </motion.div>
                  <span className="text-xs font-semibold text-brand-navy leading-snug">
                    {ind.title}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
