"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Shield, Target, Zap, Globe } from "lucide-react";
import { VALUES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = { Shield, Target, Zap, Globe };

export function BentoSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
          <SectionLabel>Our values</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink max-w-2xl text-balance">
            Principles that guide every engagement
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Big image card */}
          <FadeIn className="md:row-span-2">
            <div className="relative h-full min-h-[360px] rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80"
                alt="Modern enterprise office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-2xl text-white leading-snug">
                  Enterprise partners who measure outcomes, not activity.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Value cards */}
          {VALUES.map((v, i) => {
            const Icon = iconMap[v.icon] ?? Target;
            return (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="flex gap-4 p-7 rounded-3xl border border-line bg-white h-full">
                  <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-ink mb-1">{v.title}</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">{v.desc}</p>
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
