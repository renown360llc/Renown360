import type { Metadata } from "next";
import {
  Users, RefreshCw, Cloud, LayoutGrid, BarChart2, Zap,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { SERVICES, TECH_STACK } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Renown360 delivers IT staffing, cloud migration, ERP/CRM implementation, data analytics, legacy modernisation, and digital transformation for enterprise clients.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Users, RefreshCw, Cloud, LayoutGrid, BarChart2, Zap,
};

const process = [
  {
    step: "01",
    title: "Discovery & Scoping",
    desc: "We run a structured discovery to understand your technology landscape, team gaps, and programme goals.",
  },
  {
    step: "02",
    title: "Proposal & SOW",
    desc: "A clear Statement of Work with defined deliverables, timelines, resource plan, and SLAs — no ambiguity.",
  },
  {
    step: "03",
    title: "Talent Matching / Team Assembly",
    desc: "We source and screen candidates or assemble a project team within 5–10 business days for most engagements.",
  },
  {
    step: "04",
    title: "Delivery & Governance",
    desc: "Weekly status reports, sprint reviews, and a dedicated delivery manager ensure you're always in control.",
  },
  {
    step: "05",
    title: "Hypercare & Transition",
    desc: "Post go-live support, knowledge transfer, and a structured handover to your internal team.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-cyan/8 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel className="mb-5">Our Services</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Full-Spectrum{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-cyan-light">
                IT Services
              </span>{" "}
              for the Enterprise
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              From sourcing specialised talent to executing large-scale transformation programmes,
              Renown360 covers every dimension of enterprise IT.
            </p>
          </div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.slug}
                id={service.slug}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  !isEven ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Content */}
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center mb-5">
                    {Icon && <Icon className="w-7 h-7 text-brand-cyan" />}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-3">
                    {service.title}
                  </h2>
                  <p className="text-neutral-500 leading-relaxed mb-6">{service.longDesc}</p>
                  <ul className="space-y-2.5 mb-7">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" size="md" variant="primary">
                    Discuss This Service
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Tech tags */}
                <div className="bg-neutral-50 rounded-2xl p-7 border border-neutral-200">
                  <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-5">
                    Technologies & Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-white border border-neutral-200 text-sm font-medium text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-neutral-200 pt-6">
                    <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">
                      Engagement Models
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Contract", "Contract-to-Hire", "Project-Based", "Managed Service"].map(
                        (model) => (
                          <Badge key={model} variant="cyan">
                            {model}
                          </Badge>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Delivery process */}
      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel className="mx-auto mb-4">How We Work</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Our Delivery Process
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {/* Connector line (desktop) */}
            <div className="hidden lg:block absolute top-9 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-brand-cyan/30 to-transparent" />
            {process.map((p) => (
              <div key={p.step} className="relative bg-white rounded-2xl p-6 border border-neutral-200 hover:border-brand-cyan/30 hover:shadow-card transition-all duration-300 text-center">
                <div className="w-10 h-10 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-cyan text-xs font-bold">{p.step}</span>
                </div>
                <h3 className="font-bold text-brand-navy mb-2 text-sm">{p.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel className="mx-auto mb-4">Technology Depth</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
              Enterprise-Grade Technology Stack
            </h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH_STACK.map((group) => (
              <div key={group.category} className="bg-neutral-50 rounded-xl p-5 border border-neutral-200">
                <h3 className="text-xs font-bold tracking-widest uppercase text-brand-cyan mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg bg-white border border-neutral-200 text-neutral-600 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
