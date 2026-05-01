"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const stats = [
  { value: "100+", label: "Active Consultants" },
  { value: "<10d", label: "Avg. Time-to-Place" },
  { value: "98%",  label: "Client Satisfaction" },
  { value: "50+",  label: "Enterprise Clients" },
];

export function Hero() {
  return (
    <section className="bg-surface pt-16">
      <div className="container-wide py-6 md:py-14">
        {/* Main green card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-primary rounded-3xl md:rounded-4xl overflow-hidden p-3 md:p-4"
        >
          <div className="flex flex-col lg:flex-row gap-3 md:gap-4 items-stretch">
            {/* Text */}
            <div className="flex-1 flex flex-col gap-5 md:gap-8 px-4 py-7 sm:px-6 lg:px-8 lg:py-10">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-1.5 text-xs font-medium text-white/60">
                  Trusted by Fortune 500 enterprises
                </span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-[3.4rem] leading-[1.1] text-white text-balance">
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

            {/* Photo — reduced height on mobile */}
            <div className="lg:w-[44%] relative rounded-2xl md:rounded-3xl overflow-hidden min-h-[200px] sm:min-h-[260px] lg:min-h-[440px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="Enterprise consulting team"
                fill
                sizes="(max-width: 1024px) 100vw, 44vw" className="object-cover object-center"
                priority
              />
            </div>
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
              <span className="font-serif text-2xl sm:text-3xl text-ink">{s.value}</span>
              <span className="text-[10px] sm:text-xs text-ink/50 font-medium text-center leading-tight">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
