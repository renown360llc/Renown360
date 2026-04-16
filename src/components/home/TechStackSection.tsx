"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/FadeUp";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function TechStackSection() {
  return (
    <section className="py-20 lg:py-28 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel className="mx-auto mb-4">Technology Expertise</SectionLabel>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-4">
            Enterprise-Grade Technology Stack
          </h2>
          <p className="text-neutral-500 leading-relaxed">
            Our consultants are certified and battle-tested across the platforms that power
            the world&apos;s largest enterprises.
          </p>
        </FadeUp>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {TECH_STACK.map((group) => (
            <motion.div
              key={group.category}
              variants={card}
              whileHover={{ y: -4, boxShadow: "0 12px 40px -8px rgba(15,23,42,0.12)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-brand-cyan/30 cursor-default"
            >
              <h3 className="text-xs font-bold tracking-widest uppercase text-brand-cyan mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-neutral-50 border border-neutral-200 text-sm font-medium text-neutral-700"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ scale: 1.05, borderColor: "#0ea5e9", color: "#0ea5e9" }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
