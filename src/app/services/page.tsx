import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, RefreshCw, Cloud, LayoutGrid, BarChart2, Zap, Check } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = { title: "Services" };

const iconMap: Record<string, React.ElementType> = {
  Users, RefreshCw, Cloud, LayoutGrid, BarChart2, Zap,
};

const engagementModels = [
  { title: "Contract", desc: "W2 and C2C models. Short or long-term. Start in days." },
  { title: "Contract-to-Hire", desc: "Try before you commit. Convert after 90 days." },
  { title: "Project-Based", desc: "Fixed-scope delivery with clear milestones and SOW." },
  { title: "Managed Service", desc: "Full team ownership. We run the delivery end-to-end." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface pt-32 pb-20">
        <div className="container-wide flex flex-col gap-6 max-w-3xl">
          <FadeIn>
            <SectionLabel>Services</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] text-balance">
              Six practice areas. One trusted partner.
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-ink/60 text-lg leading-relaxed max-w-2xl">
              From staffing single engineers to leading full digital transformations — we cover
              the complete enterprise technology lifecycle with pre-vetted talent and proven
              delivery methodology.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white py-20">
        <div className="container-wide flex flex-col gap-4">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] ?? Zap;
            return (
              <FadeIn key={service.slug} delay={i * 0.06}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-10 rounded-3xl border border-line bg-surface hover:border-primary/30 transition-colors">
                  <div className="lg:col-span-1 flex flex-col gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary-light flex items-center justify-center">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl text-ink">{service.title}</h2>
                    <p className="text-sm text-ink/60 leading-relaxed">{service.shortDesc}</p>
                  </div>
                  <div className="lg:col-span-1 flex flex-col gap-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-1">What&apos;s included</p>
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2.5">
                        <Check size={13} className="text-primary shrink-0" />
                        <span className="text-sm text-ink/70">{f}</span>
                      </div>
                    ))}
                  </div>
                  <div className="lg:col-span-1 flex flex-col gap-3">
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-1">Technologies</p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1.5 text-xs rounded-full border border-line bg-white text-ink/60 font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Engagement models */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-wide">
          <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
            <SectionLabel>Engagement models</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">
              Flexible structures for every need
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {engagementModels.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.08}>
                <div className="p-7 rounded-3xl border border-line bg-white flex flex-col gap-3 h-full">
                  <span className="font-serif text-lg text-ink">{m.title}</span>
                  <p className="text-sm text-ink/60 leading-relaxed">{m.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-10 pb-20">
        <div className="container-wide">
          <FadeIn>
            <div className="bg-primary rounded-4xl p-10 md:p-14 text-center flex flex-col items-center gap-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-white max-w-xl text-balance">
                Not sure which service fits your need?
              </h2>
              <p className="text-white/70 max-w-md">
                Schedule a 30-minute discovery call. We&apos;ll map your challenge to the right practice area.
              </p>
              <Link href="/contact" className="px-7 py-3.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-surface transition-colors inline-flex items-center gap-2">
                Schedule a call <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
