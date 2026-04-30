"use client";

import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const testimonials = [
  {
    quote: "Renown360 placed three senior Java engineers within nine days of our brief. All three are still with us 14 months later. That retention rate is extraordinary for contract talent.",
    name: "VP of Engineering",
    company: "Top-5 Investment Bank",
    industry: "Financial Services",
  },
  {
    quote: "Our HIPAA-compliant AWS migration needed to go live in under 90 days. Renown360's cloud architects delivered on week 7, zero downtime.",
    name: "Chief Technology Officer",
    company: "Regional Hospital Network",
    industry: "Healthcare",
  },
  {
    quote: "What sets them apart is the delivery manager. Someone who actually understands SAP landscapes and keeps the engagement on track. It felt like an extension of our own team.",
    name: "Director of IT",
    company: "Industrial Manufacturer",
    industry: "Manufacturing",
  },
];

export function Testimonials() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink">
            What our clients say
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="flex flex-col gap-5 p-8 rounded-3xl bg-white border border-line h-full">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-base text-ink/80 leading-relaxed flex-1 font-serif italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-4 border-t border-line">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50 mt-0.5">{t.company} · {t.industry}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
