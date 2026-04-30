"use client";

import Link from "next/link";
import { Landmark, HeartPulse, Factory, ShoppingBag, Radio, Building2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Landmark, HeartPulse, Factory, ShoppingBag, Radio, Building2,
};

export function IndustriesStrip() {
  return (
    <section className="bg-surface py-20 md:py-24">
      <div className="container-wide">
        <FadeIn className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="flex flex-col gap-3">
            <SectionLabel>Industries</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">
              Sectors we know well
            </h2>
          </div>
          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline shrink-0"
          >
            See all industries <ArrowRight size={13} />
          </Link>
        </FadeIn>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-stretch">
          {INDUSTRIES.map((ind, i) => {
            const Icon = iconMap[ind.icon] ?? Building2;
            return (
              <FadeIn key={ind.slug} delay={i * 0.05} className="h-full">
                <Link
                  href="/industries"
                  className="group h-full flex flex-col items-center justify-center gap-3 p-5 rounded-2xl border border-line bg-white hover:border-primary/30 hover:bg-surface-green transition-all duration-200 text-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center group-hover:bg-primary transition-colors duration-200 shrink-0">
                    <Icon size={18} className="text-primary group-hover:text-white transition-colors duration-200" />
                  </div>
                  <p className="text-xs font-semibold text-ink leading-snug">{ind.title}</p>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
