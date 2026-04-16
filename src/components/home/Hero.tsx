"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const highlights = [
  "IT Staffing & Consulting",
  "Cloud Migration",
  "ERP / CRM Implementation",
  "Digital Transformation",
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center mesh-gradient noise-overlay overflow-hidden">

      {/* Pulsing orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[700px] h-[700px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/6 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(30,64,175,0.22) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.22, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-[350px] h-[350px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(8,145,178,0.12) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.28, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-4xl">
          {/* Eyebrow badges */}
          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            <Badge variant="cyan" className="text-xs">
              IT Consulting & Staffing
            </Badge>
            <Badge
              variant="default"
              className="bg-white/10 text-white/80 border-white/20 text-xs"
            >
              Serving USA & Canada
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            End-to-End IT{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-sky-300 to-brand-cyan-light">
                Consulting
              </span>
              {/* Underline glow */}
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/70 to-brand-cyan/0"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.7, ease }}
              />
            </span>{" "}
            &amp; Staffing for the Enterprise
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mb-8"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
          >
            Renown360 delivers pre-vetted IT talent, cloud transformation, legacy modernisation,
            and ERP/CRM expertise to Fortune 500 companies and fast-scaling enterprises worldwide.
          </motion.p>

          {/* CTA row */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.34, ease }}
          >
            <Button href="/contact" size="lg" variant="primary">
              Start a Conversation
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              href="/services"
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
            >
              Explore Services
            </Button>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            className="flex flex-wrap gap-x-6 gap-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.46, ease }}
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item}
                className="flex items-center gap-2 text-sm text-white/70"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.46 + i * 0.08, ease }}
              >
                <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0" />
                {item}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#marquee"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors duration-200 z-10"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
