"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";

const steps = [
  {
    number: "01",
    days: "Days 1–3",
    title: "Discovery",
    desc: "We align on requirements, technology stack, culture fit, and timelines. One point of contact from day one, and a signed SOW before anything moves.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
    objectPosition: "object-center",
  },
  {
    number: "02",
    days: "Days 4–10",
    title: "Match",
    desc: "We shortlist 2–3 consultants from our active bench, matched to your brief. You interview and choose. No filler candidates, no pressure.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=900&q=80",
    objectPosition: "object-top",
  },
  {
    number: "03",
    days: "Day 11+",
    title: "Deliver",
    desc: "Your consultant is onboarded and contributing from day one. Weekly check-ins keep the engagement on track for as long as you need them.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    objectPosition: "object-center",
  },
];

export function HowWeEngage() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-20 text-center">
          <SectionLabel>How it works</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink max-w-2xl text-balance">
            Brief to productive in 10 days
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-line -translate-x-1/2" />

          {steps.map((step, i) => {
            const isEven = i % 2 === 0;

            return (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 pb-20 last:pb-0">
                  {/* Center number */}
                  <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-primary text-white items-center justify-center text-sm font-bold shadow-sm">
                    {step.number}
                  </div>

                  {/* Mobile number */}
                  <div className="flex md:hidden items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {step.number}
                    </div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-widest">{step.days}</span>
                  </div>

                  {/* LEFT column */}
                  <div className={`md:pr-16 flex items-center ${isEven ? "" : "md:order-1"}`}>
                    {isEven ? (
                      <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden">
                        <Image src={step.image} alt={step.title} fill className={`object-cover ${step.objectPosition}`} />
                      </div>
                    ) : (
                      <div className="flex flex-col gap-4 md:max-w-sm md:ml-auto">
                        <span className="hidden md:block text-xs font-semibold uppercase tracking-widest text-primary">{step.days}</span>
                        <h3 className="font-serif text-3xl md:text-4xl text-ink">{step.title}</h3>
                        <p className="text-ink/60 text-base leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* RIGHT column */}
                  <div className={`md:pl-16 flex items-center ${isEven ? "" : "md:order-2"}`}>
                    {isEven ? (
                      <div className="flex flex-col gap-4 md:max-w-sm">
                        <span className="hidden md:block text-xs font-semibold uppercase tracking-widest text-primary">{step.days}</span>
                        <h3 className="font-serif text-3xl md:text-4xl text-ink">{step.title}</h3>
                        <p className="text-ink/60 text-base leading-relaxed">{step.desc}</p>
                      </div>
                    ) : (
                      <div className="relative w-full h-64 md:h-80 rounded-3xl overflow-hidden">
                        <Image src={step.image} alt={step.title} fill className={`object-cover ${step.objectPosition}`} />
                      </div>
                    )}
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
