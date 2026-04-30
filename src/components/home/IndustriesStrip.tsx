"use client";

import { Landmark, HeartPulse, Factory, ShoppingBag, Radio, Building2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Landmark, HeartPulse, Factory, ShoppingBag, Radio, Building2,
};

export function IndustriesStrip() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
          <SectionLabel>Industries</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink">
            Sector expertise that matters
          </h2>
          <p className="text-ink/60 text-base max-w-xl leading-relaxed">
            We know the tools, compliance requirements, and pressures specific to your sector.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind, i) => {
            const Icon = iconMap[ind.icon] ?? Building2;
            return (
              <FadeIn key={ind.slug} delay={i * 0.07}>
                <div className="group flex flex-col gap-4 p-7 rounded-3xl border border-line bg-white hover:border-primary/30 hover:bg-surface-green transition-all duration-200 h-full">
                  <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-ink mb-1.5">{ind.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">{ind.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                    {ind.clients.map((c) => (
                      <span key={c} className="px-2.5 py-1 text-xs rounded-full border border-line text-ink/50 font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
