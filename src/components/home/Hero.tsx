"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 100, suffix: "+",          label: "Active Consultants" },
  { end: 10,  prefix: "<", suffix: "d", label: "Avg. Time-to-Place" },
  { end: 98,  suffix: "%",          label: "Client Satisfaction" },
  { end: 50,  suffix: "+",          label: "Enterprise Clients" },
];

const heroImg =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80";

export function Hero() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Photo bleeds to the right edge on desktop */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[46%] overflow-hidden">
        <Image src={heroImg} alt="Enterprise consulting team" fill sizes="46vw" className="object-cover object-center animate-kenburns" priority />
        {/* feather only the photo's left edge into the green */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent" />
      </div>

      {/* Text */}
      <div className="relative container-wide pt-32 lg:pt-28 pb-12 lg:pb-16 min-h-[78vh] flex flex-col justify-center">
        {/* Mobile image */}
        <div className="lg:hidden relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-8">
          <Image src={heroImg} alt="Enterprise consulting team" fill sizes="100vw" className="object-cover object-center animate-kenburns" priority />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:gap-7 max-w-xl"
        >
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1.5 text-xs font-medium text-white/70">
              Trusted by Fortune 500 enterprises
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[3.9rem] leading-[1.05] text-white text-balance">
            Enterprise IT consulting that delivers real results
          </h1>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-lg">
            Screened consultants, cloud transformation, legacy modernisation,
            and ERP expertise. Placed in under 10 days.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold text-sm hover:bg-surface transition-colors"
            >
              Get in touch <ArrowRight size={14} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              What we do
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Full-width stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-primary border-t border-white/15"
      >
        <div className="container-wide grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center justify-center py-6 sm:py-7 px-3 gap-1 border-white/15 ${i < 3 ? "md:border-r" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
            >
              <span className="font-serif text-2xl sm:text-3xl text-white">
                <AnimatedCounter end={s.end} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="text-[10px] sm:text-xs text-white/60 font-medium text-center leading-tight">{s.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
