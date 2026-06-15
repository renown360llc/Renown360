"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  image: string;
  cta?: { label: string; href: string };
}

export function PageHero({ label, title, subtitle, image, cta }: PageHeroProps) {
  return (
    <section className="relative bg-primary text-white overflow-hidden">
      {/* Background photo + green/legibility overlays */}
      <div aria-hidden className="absolute inset-0">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary/85 to-primary/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_12%_0%,rgba(255,255,255,0.10),transparent_60%)]" />
      </div>

      <div className="relative container-wide pt-36 pb-16 md:pt-44 md:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-5 md:gap-6 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80">{label}</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-[1.06] text-white text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl">{subtitle}</p>
          )}
          {cta && (
            <Link
              href={cta.href}
              className="mt-1 inline-flex items-center gap-2 self-start px-6 py-3 rounded-full bg-white text-primary font-semibold text-sm hover:bg-surface transition-colors"
            >
              {cta.label} <ArrowRight size={14} />
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
