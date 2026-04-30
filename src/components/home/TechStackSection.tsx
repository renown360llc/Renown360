"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { TECH_STACK } from "@/lib/constants";

export function TechStackSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
          <SectionLabel>Technology</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink">
            30+ technologies. One trusted partner.
          </h2>
          <p className="text-ink/60 text-base max-w-xl leading-relaxed">
            Deep expertise across every layer of the modern enterprise technology stack.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TECH_STACK.map((cat, i) => (
            <FadeIn key={cat.category} delay={i * 0.07}>
              <div className="p-6 rounded-3xl border border-line bg-surface h-full">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
                  {cat.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-full border border-line bg-white text-ink/70 font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
