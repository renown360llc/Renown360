"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const cases = [
  {
    industry: "Financial Services",
    client: "Top-5 Investment Bank",
    challenge: "Needed 14 Java engineers in under two weeks for a critical trading platform modernisation.",
    result: "14 engineers placed, first consultant onboarded in 11 days. 14-month average retention.",
    metrics: ["14 engineers", "11 days", "14-month retention"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
  },
  {
    industry: "Healthcare",
    client: "Regional Hospital Network",
    challenge: "Legacy on-premise infrastructure needed HIPAA-compliant migration to AWS with zero downtime.",
    result: "40 TB migrated, 12 applications modernised. Go-live on week 7 with zero downtime incidents.",
    metrics: ["40 TB migrated", "12 apps modernised", "Zero downtime"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
  },
  {
    industry: "Manufacturing",
    client: "Industrial Equipment Manufacturer",
    challenge: "SAP S/4HANA rollout across 6 plants with minimal disruption to production schedules.",
    result: "All 6 plants live on schedule. 25% reduction in unplanned downtime within 90 days.",
    metrics: ["6 plants deployed", "On-time delivery", "25% less downtime"],
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=800&q=80",
  },
];

export function CaseStudies() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink max-w-2xl text-balance">
            Real engagements, measurable outcomes
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cases.map((c, i) => (
            <FadeIn key={c.industry} delay={i * 0.1}>
              <div className="flex flex-col rounded-3xl border border-line overflow-hidden bg-surface h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image src={c.image} alt={c.industry} fill className="object-cover" />
                  <div className="absolute inset-0 bg-primary/60" />
                  <div className="absolute bottom-4 left-5">
                    <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
                      {c.industry}
                    </span>
                    <p className="font-serif text-lg text-white mt-0.5">{c.client}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-6 flex-1">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-1.5">Challenge</p>
                    <p className="text-sm text-ink/70 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-1.5">Outcome</p>
                    <p className="text-sm text-ink/70 leading-relaxed">{c.result}</p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {c.metrics.map((m) => (
                      <span key={m} className="px-3 py-1 text-xs rounded-full bg-primary-light text-primary font-semibold">
                        {m}
                      </span>
                    ))}
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
