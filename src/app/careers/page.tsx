"use client";

import { useState } from "react";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { OPEN_ROLES, SITE } from "@/lib/constants";

const perks = [
  { title: "W2 & C2C models",        desc: "Flexibility to work the way that suits you — W2 or C2C." },
  { title: "Competitive rates",       desc: "Market-leading compensation benchmarked quarterly." },
  { title: "Dedicated support",       desc: "A delivery manager in your corner throughout your engagement." },
  { title: "Visa & compliance help",  desc: "We handle OPT, H-1B, and compliance paperwork end-to-end." },
  { title: "Enterprise exposure",     desc: "Fortune 500 clients across finance, healthcare, and tech." },
  { title: "Long-term placements",    desc: "Average 14-month retention. We build careers, not just contracts." },
];

export default function CareersPage() {
  const [dept, setDept] = useState("All");
  const depts = ["All", ...Array.from(new Set(OPEN_ROLES.map((r) => r.department)))];
  const filtered = dept === "All" ? OPEN_ROLES : OPEN_ROLES.filter((r) => r.department === dept);

  return (
    <>
      <section className="bg-surface pt-32 pb-20">
        <div className="container-wide flex flex-col gap-6 max-w-3xl">
          <FadeIn><SectionLabel>Careers</SectionLabel></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] text-balance">
              Work on enterprise challenges that matter
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-ink/60 text-lg leading-relaxed max-w-2xl">
              We connect skilled IT professionals with Fortune 500 engagements across cloud, ERP, data,
              and software engineering. If you&apos;re exceptional at what you do, we have a place for you.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide">
          <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
            <SectionLabel>Why Renown360</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">Built for consultants who deliver</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {perks.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.07}>
                <div className="p-7 rounded-3xl border border-line bg-surface flex flex-col gap-2 h-full">
                  <h3 className="font-serif text-lg text-ink">{p.title}</h3>
                  <p className="text-sm text-ink/60 leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-wide">
          <FadeIn className="flex flex-col items-center gap-4 mb-10 text-center">
            <SectionLabel>Open roles</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">Current opportunities</h2>
          </FadeIn>

          <FadeIn className="flex flex-wrap gap-2 justify-center mb-8">
            {depts.map((d) => (
              <button
                key={d}
                onClick={() => setDept(d)} aria-label={`Filter by ${d}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  dept === d
                    ? "bg-primary text-white"
                    : "bg-white border border-line text-ink/60 hover:border-primary/40"
                }`}
              >
                {d}
              </button>
            ))}
          </FadeIn>

          <div className="flex flex-col gap-3">
            {filtered.map((role, i) => (
              <FadeIn key={role.title} delay={i * 0.05}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border border-line bg-white hover:border-primary/30 transition-colors">
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-serif text-lg text-ink">{role.title}</h3>
                    <div className="flex flex-wrap gap-3 text-xs text-ink/50">
                      <span className="flex items-center gap-1.5"><Briefcase size={11} /> {role.type}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={11} /> {role.location}</span>
                      <span className="px-2 py-0.5 rounded-full bg-primary-light text-primary font-medium">{role.department}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${SITE.email}?subject=Application: ${role.title}`}
                    className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
                  >
                    Apply <ArrowRight size={13} />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-8 text-center">
            <p className="text-sm text-ink/50">
              Don&apos;t see a match?{" "}
              <a href={`mailto:${SITE.email}?subject=Open Application`} className="text-primary font-semibold hover:underline">
                Send an open application
              </a>{" "}
              — we&apos;re always looking for exceptional talent.
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
