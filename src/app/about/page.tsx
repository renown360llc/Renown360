import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Target, Zap, Globe, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";
import { SITE, VALUES, STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Renown360 — a Durham, NC-based IT consulting and staffing firm serving Fortune 500 enterprises with cloud, ERP, data, and talent solutions.",
};

const ICON_MAP: Record<string, React.ElementType> = { Shield, Target, Zap, Globe };

const milestones = [
  {
    year: "2020",
    title: "Founded in Durham, NC",
    desc: "Renown360 LLC incorporated with a mission to deliver enterprise-grade IT talent and consulting to Fortune 500 clients.",
  },
  {
    year: "2021",
    title: "First Enterprise Partnership",
    desc: "Secured first strategic staffing engagement with a Tier-1 IT services firm, placing consultants across the eastern US.",
  },
  {
    year: "2022",
    title: "Practice Expansion",
    desc: "Launched dedicated Cloud & DevOps and Data Analytics practices to meet growing client demand for transformation services.",
  },
  {
    year: "2023",
    title: "50+ Active Consultants",
    desc: "Scaled the bench to 50+ active consultants across Java, cloud, SAP, Salesforce, and data engineering disciplines.",
  },
  {
    year: "2024",
    title: "Multi-Currency Operations",
    desc: "Expanded staffing operations into Canada, adding multi-currency billing and cross-border compliance capabilities.",
  },
  {
    year: "2025",
    title: "100+ Consultants, Global Reach",
    desc: "Surpassed 100 active consultants, serving clients across the US and Canada with a growing pipeline of digital transformation engagements.",
  },
];

const certifications = [
  "AWS Certified Solutions Architect",
  "Microsoft Azure Solutions Expert",
  "SAP Certified Application Associate",
  "Salesforce Certified Platform Developer",
  "Databricks Certified Data Engineer",
  "PMP — Project Management Professional",
  "CSM — Certified Scrum Master",
  "Google Professional Cloud Architect",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-28 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-cyan/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel className="mb-5 border-brand-cyan/30">About Renown360</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Built to Deliver at{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-cyan-light">
                Enterprise Scale
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              Renown360 is a Durham, NC-based IT consulting and staffing firm focused on helping
              Fortune 500 enterprises hire the right talent and execute complex technology
              programmes — on time, within budget, and to measurable outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-navy py-14 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center lg:px-10">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-1.5">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-brand-cyan/80 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20">
            <div>
              <SectionLabel className="mb-4">Our Mission</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-5">
                Connecting Enterprises With Exceptional Talent and Transformative Ideas
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed mb-5">
                Our mission is simple: reduce the time and friction it takes for enterprises to
                access top-tier IT talent and expert consulting — while delivering outcomes that
                move the needle on their most critical programmes.
              </p>
              <p className="text-neutral-500 leading-relaxed">
                We believe that the best technology partnerships are built on trust, transparency,
                and a relentless focus on results. That philosophy shapes every engagement we take on,
                from a single contractor placement to a multi-year digital transformation programme.
              </p>
            </div>
            <div>
              <SectionLabel className="mb-4">Our Vision</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight mb-5">
                The Partner of Choice for Enterprise Technology Transformation
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed mb-5">
                We are building Renown360 into the firm that enterprise technology leaders call
                first — not because of scale, but because of the quality, predictability, and
                impact of every engagement we deliver.
              </p>
              <ul className="space-y-3">
                {[
                  "Certified consultants across all major platforms",
                  "SLA-backed delivery with dedicated governance",
                  "On-shore, near-shore, and offshore flexibility",
                  "Named account model — you always know your team",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-neutral-600">
                    <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <SectionLabel className="mx-auto mb-4">Our Values</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              The Principles We Work By
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => {
              const Icon = ICON_MAP[v.icon];
              return (
                <div
                  key={v.title}
                  className="bg-white rounded-2xl p-6 border border-neutral-200 hover:border-brand-cyan/30 hover:shadow-card transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-5 h-5 text-brand-cyan" />}
                  </div>
                  <h3 className="font-bold text-brand-navy mb-2">{v.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel className="mx-auto mb-4">Our Journey</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              From Startup to Enterprise Partner
            </h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-neutral-200 -translate-x-1/2" />

            <div className="space-y-8">
              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex gap-6 lg:gap-0 ${
                    i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 lg:left-1/2 w-4 h-4 rounded-full bg-brand-cyan border-2 border-white shadow -translate-x-1/2 mt-5 z-10" />

                  {/* Content */}
                  <div className={`ml-16 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                    <div className="bg-neutral-50 rounded-2xl p-5 border border-neutral-200 hover:border-brand-cyan/30 hover:bg-white transition-all duration-300">
                      <span className="text-brand-cyan font-bold text-sm">{m.year}</span>
                      <h3 className="font-bold text-brand-navy mt-1 mb-1.5">{m.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <SectionLabel className="mx-auto mb-4">Credentials</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
              Certified Across Every Major Platform
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-neutral-200 text-sm font-medium text-neutral-700"
              >
                <Award className="w-4 h-4 text-brand-cyan shrink-0" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
