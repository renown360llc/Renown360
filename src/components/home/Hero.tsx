"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
  { end: 100, suffix: "+",              label: "Active Consultants" },
  { end: 10,  prefix: "<", suffix: "d", label: "Avg. Time-to-Place" },
  { end: 98,  suffix: "%",              label: "Client Satisfaction" },
  { end: 50,  suffix: "+",              label: "Enterprise Clients" },
];

const heroImg =
  "/images/photo-1600880292203-757bb62b4baf.jpg";

export function Hero() {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Depth: soft highlight top-left, subtle shade bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_12%_0%,rgba(255,255,255,0.10),transparent_60%)]"
      />

      {/* ── Top zone: copy (left) + photo (right) ───────────── */}
      <div className="relative">
        {/* Photo panel — spans only this zone, ending cleanly at the stats band */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-[44%] overflow-hidden">
          <Image
            src={heroImg}
            alt="Enterprise consulting team"
            fill
            sizes="44vw"
            className="object-cover object-center animate-kenburns"
            priority
          />
          {/* soft feather of the green into the photo's left edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/20 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary to-transparent" />
        </div>

        <div className="relative container-wide pt-32 lg:pt-36 pb-16 lg:pb-24 min-h-[80vh] flex flex-col justify-center">
          {/* Mobile image */}
          <div className="lg:hidden relative w-full h-52 sm:h-64 rounded-2xl overflow-hidden mb-8">
            <Image src={heroImg} alt="Enterprise consulting team" fill sizes="100vw" className="object-cover object-center animate-kenburns" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-6 md:gap-8 max-w-xl"
          >
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/5 backdrop-blur-sm pl-2.5 pr-3.5 py-1.5">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="text-xs font-medium text-white/80">
                Trusted by Fortune 500 enterprises
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[4.1rem] leading-[1.04] text-white text-balance">
              Enterprise IT consulting that delivers real results
            </h1>
            <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-lg">
              Screened consultants, cloud transformation, legacy modernisation,
              and ERP expertise. Placed in under 10 days.
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-primary font-semibold text-sm shadow-lg shadow-ink/10 hover:bg-surface transition-colors"
              >
                Get in touch
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors"
              >
                What we do
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Stats band: a deliberate zone below the photo ───── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="relative border-t border-white/15 bg-primary-dark/30"
      >
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center gap-1.5 bg-primary py-7 sm:py-8 px-3 text-center"
            >
              <span className="font-serif text-3xl sm:text-4xl text-white tracking-tight">
                <AnimatedCounter end={s.end} prefix={s.prefix} suffix={s.suffix} />
              </span>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/55 font-medium leading-tight">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
