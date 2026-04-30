import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Target, Zap, Globe } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { VALUES, STATS } from "@/lib/constants";

export const metadata: Metadata = { title: "About" };

const iconMap: Record<string, React.ElementType> = { Shield, Target, Zap, Globe };

const milestones = [
  { year: "2020", event: "Founded in Durham, NC with a focus on enterprise IT staffing." },
  { year: "2021", event: "First Fortune 500 client: Java engineering for a top-five investment bank." },
  { year: "2022", event: "Added cloud, ERP, and data analytics as dedicated practice areas." },
  { year: "2023", event: "Crossed 50 active consultants and introduced multi-currency billing." },
  { year: "2024", event: "Added nearshore delivery and passed 50 enterprise clients." },
  { year: "2025", event: "100+ active consultants. Six practice areas. Clients in four countries." },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface pt-32 pb-20">
        <div className="container-wide">
          <FadeIn className="flex flex-col gap-6 max-w-3xl">
            <SectionLabel>About Renown360</SectionLabel>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] text-balance">
              We cut the time between a brief and a productive consultant
            </h1>
            <p className="text-ink/60 text-lg leading-relaxed max-w-2xl">
              Renown360 is an IT consulting and staffing firm based in Durham, NC. We started in 2020 with one goal: reduce the friction enterprises face when they need skilled IT people fast. Not a general job board. Not a recruiter blasting CVs. A firm that screens consultants in advance, keeps them on bench, and places them within days.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors w-fit"
            >
              Work with us <ArrowRight size={14} />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left" className="relative h-96 rounded-4xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
              alt="Renown360 team"
              fill
              className="object-cover"
            />
          </FadeIn>
          <FadeIn direction="right" className="flex flex-col gap-6">
            <SectionLabel>What we are</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">
              A firm, not a marketplace
            </h2>
            <p className="text-ink/60 leading-relaxed">
              Most staffing agencies search when you brief them. We match. Our consultants are already screened, already benchmarked, and already available. That&apos;s why the average time from brief to first day on-site is under 10 days.
            </p>
            <p className="text-ink/60 leading-relaxed">
              We operate on-shore, near-shore, and offshore depending on what your project actually needs, not what maximises our margin. Every engagement includes a dedicated delivery manager and a 30-day performance guarantee.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-primary py-20">
        <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {STATS.map((s) => (
            <div key={s.label} className="bg-primary flex flex-col items-center justify-center py-10 px-6 gap-2 text-center">
              <span className="font-serif text-5xl text-white">{s.value}{s.suffix}</span>
              <span className="text-sm text-white/50 font-medium">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-wide">
          <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink">
              Four things we take seriously
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VALUES.map((v, i) => {
              const Icon = iconMap[v.icon] ?? Target;
              return (
                <FadeIn key={v.title} delay={i * 0.08}>
                  <div className="flex gap-5 p-8 rounded-3xl border border-line bg-surface h-full">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl text-ink mb-2">{v.title}</h3>
                      <p className="text-sm text-ink/60 leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface py-20 md:py-28">
        <div className="container-wide">
          <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
            <SectionLabel>Timeline</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">How we got here</h2>
          </FadeIn>
          <div className="max-w-2xl mx-auto flex flex-col gap-0">
            {milestones.map((m, i) => (
              <FadeIn key={m.year} delay={i * 0.07}>
                <div className="flex gap-6 pb-8 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {m.year.slice(2)}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px flex-1 bg-line mt-2" />
                    )}
                  </div>
                  <div className="pt-2 pb-4">
                    <p className="text-xs font-semibold text-primary mb-1">{m.year}</p>
                    <p className="text-sm text-ink/70 leading-relaxed">{m.event}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 pb-20">
        <div className="container-wide">
          <FadeIn>
            <div className="bg-primary rounded-4xl p-10 md:p-14 text-center flex flex-col items-center gap-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-white max-w-xl text-balance">
                Want to work with us?
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="px-7 py-3.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-surface transition-colors inline-flex items-center gap-2">
                  Get in touch <ArrowRight size={14} />
                </Link>
                <Link href="/services" className="px-7 py-3.5 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors">
                  See our services
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
