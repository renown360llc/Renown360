"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users, RefreshCw, Cloud, LayoutGrid, BarChart2, Zap, ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/FadeUp";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ElementType> = {
  Users, RefreshCw, Cloud, LayoutGrid, BarChart2, Zap,
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-14">
          <SectionLabel className="mx-auto mb-4">What We Do</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Full-Spectrum IT Services
          </h2>
          <p className="text-neutral-500 text-lg leading-relaxed">
            From sourcing specialised talent to executing large-scale digital programmes,
            Renown360 covers the entire IT value chain.
          </p>
        </FadeUp>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <motion.div key={service.slug} variants={cardVariants}>
                <Link
                  href={`/services#${service.slug}`}
                  className={cn(
                    "group relative bg-white rounded-2xl p-7 border border-neutral-200",
                    "hover:border-brand-cyan/30 hover:shadow-card-hover transition-all duration-300",
                    "flex flex-col gap-4 h-full"
                  )}
                >
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-brand-cyan/10 flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    {Icon && <Icon className="w-6 h-6 text-brand-cyan" />}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 3 && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-400">
                        +{service.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-brand-cyan text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 -mb-1">
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <FadeUp delay={0.2} className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-brand-cyan font-semibold text-sm hover:gap-3 transition-all duration-200"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
