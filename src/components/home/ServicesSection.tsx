"use client";

import Link from "next/link";
import { ArrowRight, Check, Users, RefreshCw, Cloud, LayoutGrid, BarChart2, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Users, RefreshCw, Cloud, LayoutGrid, BarChart2, Zap,
};

export function ServicesSection() {
  return (
    <section className="bg-white py-16 md:py-28">
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-10 md:mb-14 text-center">
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl text-ink max-w-2xl text-balance">
            Reliable expertise to drive your greatest success
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Zap;
            return (
              <FadeIn key={service.slug} delay={i * 0.06}>
                <Link
                  href="/services"
                  className="group flex h-full flex-col gap-5 rounded-3xl bg-[#0b1a14] border border-white/10 p-6 sm:p-7 transition-colors hover:border-emerald-400/40"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-emerald-400/15 flex items-center justify-center">
                      <Icon size={18} className="text-emerald-300" />
                    </div>
                    <span className="font-mono text-[10px] text-white/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h3 className="font-display font-semibold text-lg sm:text-xl text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed line-clamp-2">
                      {service.shortDesc}
                    </p>
                  </div>

                  <ul className="flex flex-col gap-2">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-white/70">
                        <Check size={13} className="mt-0.5 shrink-0 text-emerald-400" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {service.technologies.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] text-white/45 rounded-md bg-white/5 px-2 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                    Learn more
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
