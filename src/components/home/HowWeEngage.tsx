"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    days: "Days 1–3",
    title: "Discovery",
    desc: "We align on requirements, technology stack, culture fit, and timelines. One point of contact from day one, and a signed SOW before anything moves.",
  },
  {
    number: "02",
    days: "Days 4–10",
    title: "Match",
    desc: "We shortlist 2–3 consultants from our active bench, matched to your brief. You interview and choose. No filler candidates, no pressure.",
  },
  {
    number: "03",
    days: "Day 11+",
    title: "Deliver",
    desc: "Your consultant is onboarded and contributing from day one. Weekly check-ins keep the engagement on track for as long as you need them.",
  },
];

export function HowWeEngage() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-12 md:mb-16 text-center">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="font-display font-semibold tracking-tight text-3xl sm:text-4xl md:text-5xl text-ink max-w-2xl text-balance">
            Brief to productive in 10 days
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <div className="relative flex h-full flex-col gap-5 rounded-3xl bg-white border border-line p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-display font-semibold text-5xl text-primary/15 leading-none">
                    {step.number}
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-primary rounded-full bg-primary-light px-2.5 py-1">
                    {step.days}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-display font-semibold text-2xl text-ink">{step.title}</h3>
                  <p className="text-ink/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
