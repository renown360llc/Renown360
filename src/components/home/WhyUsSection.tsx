"use client";

import { X, Check } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const otherFirms = [
  { title: "Generic talent pools", desc: "Unvetted candidates with no enterprise-grade screening." },
  { title: "Weeks to first shortlist", desc: "Slow sourcing cycles that stall critical projects." },
  { title: "No delivery accountability", desc: "Placed and forgotten. No governance, no follow-through." },
  { title: "Hidden fees", desc: "Opaque pricing that inflates total engagement cost." },
  { title: "No performance guarantee", desc: "You absorb all the risk if a placement underperforms." },
];

const withUs = [
  { title: "100+ pre-vetted consultants", desc: "Enterprise-ready talent screened for skills and culture fit." },
  { title: "Placed in under 10 days", desc: "Our bench model means candidates are ready to deploy now." },
  { title: "Dedicated delivery manager", desc: "Ongoing governance included on every engagement." },
  { title: "Transparent, SLA-backed pricing", desc: "Clear pricing structure from day one." },
  { title: "30-day performance guarantee", desc: "We replace at no cost if the fit isn't right." },
];

export function WhyUsSection() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
          <SectionLabel>Why choose us</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink max-w-2xl text-balance">
            The consulting partner enterprises call first
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-4xl overflow-hidden border border-line bg-line">
            {/* Other firms */}
            <div className="bg-surface-DEFAULT flex flex-col gap-6 p-8 md:p-10">
              <h3 className="font-serif text-2xl text-ink/50">Other Firms</h3>
              <ul className="flex flex-col gap-5">
                {otherFirms.map((item) => (
                  <li key={item.title} className="flex gap-3.5">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-ink/8 flex items-center justify-center shrink-0">
                      <X size={11} className="text-ink/40" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink/50">{item.title}</p>
                      <p className="text-xs text-ink/40 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* With Renown360 */}
            <div className="bg-white rounded-3xl flex flex-col gap-6 p-8 md:p-10 shadow-sm">
              <h3 className="font-serif text-2xl text-ink">With Renown360</h3>
              <ul className="flex flex-col gap-5">
                {withUs.map((item) => (
                  <li key={item.title} className="flex gap-3.5">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-primary-light flex items-center justify-center shrink-0">
                      <Check size={11} className="text-primary" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="text-xs text-ink/50 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
