"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const results = [
  {
    industry: "Financial Services",
    client: "Top-5 Investment Bank",
    challenge: "Needed 14 Java engineers in under two weeks for a trading platform overhaul.",
    metrics: ["14 engineers placed", "11 days to first hire", "14-month retention"],
    quote: "Three senior Java engineers placed in nine days. All three are still with us 14 months later. That retention rate is extraordinary for contract talent.",
    name: "VP of Engineering",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    industry: "Healthcare",
    client: "Regional Hospital Network",
    challenge: "HIPAA-compliant AWS migration with a hard 90-day deadline and zero tolerance for downtime.",
    metrics: ["40 TB migrated", "12 apps modernised", "Zero downtime"],
    quote: "They delivered on week 7. Not week 10, not week 12. Week 7, with zero downtime. I didn't think that timeline was realistic until it happened.",
    name: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    industry: "Manufacturing",
    client: "Industrial Equipment Maker",
    challenge: "SAP S/4HANA rollout across 6 plants without halting production schedules.",
    metrics: ["6 plants live", "On-time delivery", "25% less downtime"],
    quote: "The delivery manager actually understood our SAP landscape. That alone saved us months of back-and-forth. It felt like they were part of our team.",
    name: "Director of IT",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
  },
];

export function Results() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
          <SectionLabel>Results</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink max-w-2xl text-balance">
            A sample of what we&apos;ve delivered
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {results.map((r, i) => (
            <FadeIn key={r.industry} delay={i * 0.1}>
              <div className="flex flex-col rounded-3xl border border-line overflow-hidden bg-surface h-full">
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <Image src={r.image} alt={r.industry} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                  <div className="absolute inset-0 bg-primary/55" />
                  <div className="absolute bottom-4 left-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">{r.industry}</p>
                    <p className="font-serif text-lg text-white mt-0.5">{r.client}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-5 p-6 flex-1">
                  <p className="text-sm text-ink/60 leading-relaxed">{r.challenge}</p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {r.metrics.map((m) => (
                      <span key={m} className="px-3 py-1 text-xs rounded-full bg-primary-light text-primary font-semibold">
                        {m}
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="mt-auto pt-4 border-t border-line flex flex-col gap-3">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-ink/70 leading-relaxed italic font-serif">
                      &ldquo;{r.quote}&rdquo;
                    </p>
                    <p className="text-xs font-semibold text-ink/50">{r.name}, {r.client}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
