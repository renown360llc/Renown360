"use client";

import { useState } from "react";
import {
  MapPin, Briefcase, Clock, ArrowRight, CheckCircle2,
  Star, Coffee, Globe, TrendingUp, Shield,
} from "lucide-react";
import { OPEN_ROLES, SITE } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Structured career ladders, annual performance reviews, and clear paths to senior and leadership roles.",
  },
  {
    icon: Globe,
    title: "Remote-First",
    desc: "Most roles are fully remote or hybrid. We trust our team to deliver from wherever they do their best work.",
  },
  {
    icon: Star,
    title: "Enterprise Projects",
    desc: "Work on marquee programmes for Fortune 500 clients — the kind of experience that accelerates your career.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    desc: "Reasonable hours, no weekend firefighting culture, and a leadership team that respects your time.",
  },
  {
    icon: Shield,
    title: "Stability",
    desc: "Long-term engagements mean long-term income security — we don't bench consultants between contracts.",
  },
  {
    icon: CheckCircle2,
    title: "Compliance Support",
    desc: "Full visa and immigration support for H1B, OPT, and CPT candidates. We handle the paperwork.",
  },
];

const applicationSteps = [
  { step: "1", title: "Apply Online", desc: "Submit your resume via the form below. We review every application personally." },
  { step: "2", title: "Screening Call", desc: "A 20-minute call with our recruiting team to align on your background, goals, and availability." },
  { step: "3", title: "Technical Assessment", desc: "A role-specific technical screen — usually a take-home assignment or a live coding session." },
  { step: "4", title: "Client Interview", desc: "For client-facing roles, a final interview with the end client team." },
  { step: "5", title: "Offer & Onboarding", desc: "Offer letter, compliance paperwork, and a smooth onboarding process — typically within 5–10 business days." },
];

export default function CareersPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-cyan/8 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel className="mb-5">Careers at Renown360</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Build Your Career at the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-cyan-light">
                Forefront of Enterprise IT
              </span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Join a team of top-tier consultants delivering enterprise transformation programmes
              for the world&apos;s most demanding technology environments.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel className="mx-auto mb-4">Why Join Us</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Built for Consultants Who Care About Their Work
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:border-brand-cyan/30 hover:bg-white hover:shadow-card transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-cyan/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <h3 className="font-bold text-brand-navy mb-2">{b.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <SectionLabel className="mb-3">Open Positions</SectionLabel>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
                Current Openings
              </h2>
            </div>
            <p className="text-neutral-500 text-sm">
              Don&apos;t see a fit?{" "}
              <a href={`mailto:${SITE.email}`} className="text-brand-cyan font-semibold hover:underline">
                Send us your resume
              </a>
            </p>
          </div>
          <div className="space-y-3">
            {OPEN_ROLES.map((role) => (
              <div
                key={role.title}
                className="group bg-white rounded-2xl p-5 border border-neutral-200 hover:border-brand-cyan/30 hover:shadow-card transition-all duration-300 flex flex-col sm:flex-row sm:items-center gap-4"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-bold text-brand-navy">{role.title}</h3>
                    <Badge variant={role.type === "Full-Time" ? "blue" : "cyan"}>
                      {role.type}
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-500">
                    <span className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      {role.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {role.location}
                    </span>
                  </div>
                </div>
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan group-hover:gap-3 transition-all duration-200 shrink-0"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application process */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionLabel className="mx-auto mb-4">Application Process</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
              What to Expect
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {applicationSteps.map((s) => (
              <div key={s.step} className="text-center bg-neutral-50 rounded-2xl p-5 border border-neutral-200">
                <div className="w-9 h-9 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-brand-cyan text-xs font-bold">{s.step}</span>
                </div>
                <h3 className="font-bold text-brand-navy text-sm mb-1.5">{s.title}</h3>
                <p className="text-xs text-neutral-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="py-20 lg:py-24 bg-neutral-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <SectionLabel className="mx-auto mb-4">Apply Now</SectionLabel>
            <h2 className="text-3xl font-bold text-brand-navy tracking-tight">
              Submit Your Application
            </h2>
            <p className="text-neutral-500 mt-2 text-sm">
              We review every application personally and respond within 2 business days.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white rounded-2xl p-10 border border-brand-cyan/20 shadow-card text-center">
              <div className="w-14 h-14 rounded-full bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-brand-cyan" />
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-2">Application Received</h3>
              <p className="text-neutral-500 text-sm">
                Thank you! Our team will review your application and reach out within 2 business days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-card space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Doe"
                    className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                  Position of Interest <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors bg-white"
                >
                  <option value="">Select a position</option>
                  {OPEN_ROLES.map((r) => (
                    <option key={r.title} value={r.title}>
                      {r.title}
                    </option>
                  ))}
                  <option value="other">Other / Open Application</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                  Brief Introduction <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your background, key skills, and what you're looking for..."
                  className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors resize-none"
                />
              </div>
              <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                Submit Application
                <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
