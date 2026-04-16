"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

const ease = [0.22, 1, 0.36, 1] as const;

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-cta-gradient relative overflow-hidden">
      {/* Animated blobs */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
          <span className="text-xs font-semibold tracking-widest uppercase text-white/70">
            Let&apos;s Build Together
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1, ease }}
        >
          Ready to Accelerate Your <br className="hidden sm:block" />
          Digital Transformation?
        </motion.h2>

        <motion.p
          className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          Tell us about your initiative. Our consulting team will scope a tailored engagement
          and get back to you within one business day.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.3, ease }}
        >
          <Button href="/contact" size="lg" variant="primary">
            Schedule a Consultation
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

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.42, ease }}
        >
          <a
            href={`mailto:${SITE.email}`}
            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
          >
            <Mail className="w-4 h-4 text-brand-cyan" />
            {SITE.email}
          </a>
          <span className="hidden sm:block w-px h-4 bg-white/20" />
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 hover:text-white transition-colors duration-200"
          >
            <Phone className="w-4 h-4 text-brand-cyan" />
            {SITE.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
