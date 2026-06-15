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
    image: "/images/photo-1556761175-b413da4baf72.jpg",
    objectPosition: "object-center",
  },
  {
    number: "02",
    days: "Days 4–10",
    title: "Match",
    desc: "We shortlist 2–3 consultants from our active bench, matched to your brief. You interview and choose. No filler candidates, no pressure.",
    image: "/images/photo-1573496359142-b8d87734a5a2.jpg",
    objectPosition: "object-top",
  },
  {
    number: "03",
    days: "Day 11+",
    title: "Deliver",
    desc: "Your consultant is onboarded and contributing from day one. Weekly check-ins keep the engagement on track for as long as you need them.",
    image: "/images/photo-1522071820081-009f0129c71c.jpg",
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
              <FadeIn key={step.number} delay={i * 0.08} className="pb-16 md:pb-20 last:pb-0">
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 md:items-center">
                  {/* Center number (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-10 -translate-x-1/2 z-10 w-11 h-11 rounded-full bg-primary text-white items-center justify-center text-sm font-bold shadow-sm">
                    {step.number}
                  </div>

                  {/* Text — always before the image in DOM (mobile stacking) */}
                  <div
                    className={`flex ${
                      isEven ? "md:order-2 md:justify-start md:pl-16" : "md:order-1 md:justify-end md:pr-16"
                    }`}
                  >
                    <div className="flex flex-col gap-3 md:max-w-sm">
                      {/* Mobile number + days */}
                      <div className="flex md:hidden items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                          {step.number}
                        </div>
                        <span className="text-xs font-semibold text-primary uppercase tracking-widest">{step.days}</span>
                      </div>
                      {/* Desktop days */}
                      <span className="hidden md:block text-xs font-semibold uppercase tracking-widest text-primary">{step.days}</span>
                      <h3 className="font-serif text-3xl md:text-4xl text-ink">{step.title}</h3>
                      <p className="text-ink/60 text-base leading-relaxed">{step.desc}</p>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`relative w-full h-56 sm:h-64 md:h-80 rounded-3xl overflow-hidden ${isEven ? "md:order-1" : "md:order-2"}`}>
                    <Image src={step.image} alt={step.title} fill sizes="(max-width: 768px) 100vw, 50vw" className={`object-cover ${step.objectPosition}`} />
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
