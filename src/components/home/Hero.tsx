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
      <div className="container-wide py-10 md:py-14">
        {/* Main green card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-primary rounded-4xl overflow-hidden p-4"
        >
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            {/* Text */}
            <div className="flex-1 flex flex-col justify-between gap-8 px-4 py-8 lg:px-8 lg:py-10">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-amber-400 text-amber-400" />
                ))}
                <span className="ml-2 text-xs font-medium text-white/60">
                  Trusted by Fortune 500 enterprises
                </span>
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="font-serif text-4xl sm:text-5xl xl:text-[3.6rem] leading-[1.1] text-white text-balance">
                  Enterprise IT consulting that delivers real results
                </h1>
                <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-md">
                  Pre-vetted talent, cloud transformation, legacy modernisation,
                  and ERP expertise. Placed in under 10 days.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold text-sm hover:bg-surface transition-colors"
                >
                  Get in touch <ArrowRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  What we do
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="lg:w-[44%] relative rounded-3xl overflow-hidden min-h-[260px] lg:min-h-[440px]">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="Enterprise consulting team"
                fill
                className="object-cover object-center"
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
          className="mt-4 grid grid-cols-2 md:grid-cols-4 border border-line rounded-3xl overflow-hidden bg-line gap-px"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white flex flex-col items-center justify-center py-6 px-4 gap-1.5">
              <span className="font-serif text-3xl text-ink">{s.value}</span>
              <span className="text-xs text-ink/50 font-medium text-center leading-tight">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
