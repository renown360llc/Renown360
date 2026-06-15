"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const stats = [
  { value: "100+", label: "Active Consultants" },
  { value: "<10d", label: "Avg. Time-to-Place" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "50+",  label: "Enterprise Clients" },
];

const heroImg =
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export function Hero() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Photo bleeds to the right edge on desktop */}
      <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[46%]">
        <Image src={heroImg} alt="Enterprise consulting team" fill sizes="46vw" className="object-cover object-center animate-kenburns" priority />
        {/* short clean feather on the photo's left edge into the green */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #1a4c40 0%, rgba(26,76,64,0.6) 10%, transparent 26%)" }}
        />
      </div>

      {/* Text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative container-wide pt-32 lg:pt-28 pb-12 lg:pb-16 min-h-[78vh] flex flex-col justify-center"
      >
        {/* Mobile image */}
        <motion.div variants={item} className="lg:hidden relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-8">
          <Image src={heroImg} alt="Enterprise consulting team" fill sizes="100vw" className="object-cover object-center animate-kenburns" priority />
        </motion.div>

        <div className="flex flex-col gap-6 md:gap-7 max-w-xl">
          <motion.div variants={item} className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
            ))}
            <span className="ml-1.5 text-xs font-medium text-white/70">
              Trusted by Fortune 500 enterprises
            </span>
          </motion.div>
          <motion.h1 variants={item} className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[3.9rem] leading-[1.05] text-white text-balance">
            Enterprise IT consulting that delivers real results
          </motion.h1>
          <motion.p variants={item} className="text-white/75 text-base sm:text-lg leading-relaxed max-w-lg">
            Screened consultants, cloud transformation, legacy modernisation,
            and ERP expertise. Placed in under 10 days.
          </motion.p>
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/20"
            >
              Get in touch
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 text-white font-semibold text-sm transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
            >
              What we do
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Full-width stats strip */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative border-t border-white/15"
      >
        <div className="container-wide grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={item}
              className={`flex flex-col items-center justify-center py-6 sm:py-7 px-3 gap-1 border-white/15 ${i < 3 ? "md:border-r" : ""} ${i % 2 === 0 ? "border-r md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""}`}
            >
              <span className="font-serif text-2xl sm:text-3xl text-white">{s.value}</span>
              <span className="text-[10px] sm:text-xs text-white/60 font-medium text-center leading-tight">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
