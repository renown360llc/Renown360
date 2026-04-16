import type { Metadata } from "next";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTASection } from "@/components/home/CTASection";
import { FadeUp } from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the Renown360 leadership and consulting team — experienced IT professionals delivering enterprise staffing and transformation programmes.",
};

const leadership = [
  {
    name: "Vinay Raj",
    title: "Founder & CEO",
    avatar: "VR",
    color: "#0ea5e9",
    bio: "Founded Renown360 with a vision to make enterprise IT talent acquisition faster, more transparent, and outcome-driven. Background in IT staffing, enterprise delivery, and business operations across the US and Canada.",
    expertise: ["IT Staffing Strategy", "Enterprise Sales", "Business Operations", "Multi-currency Billing"],
    linkedin: "#",
    email: "careers@renown360.com",
  },
  {
    name: "Delivery Leadership",
    title: "Head of Delivery",
    avatar: "DL",
    color: "#6366f1",
    bio: "Oversees all active engagements and consultant placements. Ensures SLA compliance, client satisfaction, and consultant performance across every active account.",
    expertise: ["Delivery Management", "SLA Governance", "Client Relations", "Escalation Management"],
    linkedin: "#",
    email: "careers@renown360.com",
  },
  {
    name: "Cloud Practice Lead",
    title: "Practice Lead — Cloud & DevOps",
    avatar: "CP",
    color: "#10b981",
    bio: "Leads the Cloud & DevOps practice with expertise in AWS, Azure, and GCP migrations. Certified across all three major cloud platforms with hands-on delivery at Fortune 500 scale.",
    expertise: ["AWS / Azure / GCP", "Terraform & IaC", "DevOps & CI/CD", "FinOps"],
    linkedin: "#",
    email: "careers@renown360.com",
  },
  {
    name: "Data Practice Lead",
    title: "Practice Lead — Data & AI",
    avatar: "DP",
    color: "#f59e0b",
    bio: "Drives the Data & AI practice covering Databricks, Snowflake, and ML platform implementations. Formerly an enterprise data architect for a Tier-1 financial services firm.",
    expertise: ["Databricks / Snowflake", "dbt & Apache Spark", "ML Platforms", "Data Governance"],
    linkedin: "#",
    email: "careers@renown360.com",
  },
];

const advisors = [
  {
    name: "ERP Advisory",
    title: "SAP Practice Advisor",
    avatar: "EA",
    color: "#0891b2",
    focus: "SAP S/4HANA, ECC-to-Cloud migration strategy",
  },
  {
    name: "CRM Advisory",
    title: "Salesforce Practice Advisor",
    avatar: "CA",
    color: "#7c3aed",
    focus: "Salesforce CRM, Sales Cloud, Service Cloud implementations",
  },
  {
    name: "Security Advisory",
    title: "Cybersecurity Advisor",
    avatar: "SA",
    color: "#dc2626",
    focus: "Zero-trust architecture, FedRAMP compliance, SIEM deployment",
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-cyan/8 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel className="mb-5">Our Team</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              The People Behind{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-cyan-light">
                Every Engagement
              </span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Renown360 is built on the belief that great outcomes come from great people.
              Meet the team that sources, delivers, and stands behind every engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-12">
            <SectionLabel className="mb-3">Leadership</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy tracking-tight">
              Leadership Team
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((member, i) => (
              <div
                key={member.name}
                className="group bg-neutral-50 rounded-3xl border border-neutral-200 p-7 hover:border-neutral-300 hover:shadow-card-hover hover:bg-white transition-all duration-300"
              >
                <div className="flex items-start gap-5 mb-5">
                  {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-black text-white shrink-0 relative"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.avatar}
                    {/* Glow */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-40 blur-lg"
                      style={{ backgroundColor: member.color }}
                    />
                    <span className="relative z-10">{member.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-brand-navy text-lg">{member.name}</h3>
                    <p className="text-sm font-medium" style={{ color: member.color }}>{member.title}</p>
                  </div>
                </div>

                <p className="text-sm text-neutral-500 leading-relaxed mb-5">{member.bio}</p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {member.expertise.map((e) => (
                    <span
                      key={e}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-lg border text-neutral-600 bg-neutral-100 border-neutral-200"
                    >
                      {e}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-5 border-t border-neutral-200">
                  <a
                    href={member.linkedin}
                    className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-brand-blue transition-colors duration-200"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-1.5 text-xs font-semibold text-neutral-500 hover:text-brand-cyan transition-colors duration-200"
                  >
                    <Mail className="w-3.5 h-3.5" /> Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 lg:py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp className="mb-10">
            <SectionLabel className="mb-3">Practice Advisors</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
              Technical Advisory Network
            </h2>
            <p className="text-neutral-500 mt-2 text-sm max-w-xl">
              Domain specialists who advise on practice strategy, quality standards, and complex client engagements.
            </p>
          </FadeUp>

          <div className="grid sm:grid-cols-3 gap-5">
            {advisors.map((a) => (
              <div
                key={a.name}
                className="bg-white rounded-2xl border border-neutral-200 p-6 hover:border-neutral-300 hover:shadow-card transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-black text-white shrink-0"
                    style={{ backgroundColor: a.color }}
                  >
                    {a.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">{a.name}</h4>
                    <p className="text-xs" style={{ color: a.color }}>{a.title}</p>
                  </div>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">{a.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the team */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionLabel className="mx-auto mb-4">Join Us</SectionLabel>
          <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight mb-4">
            We&apos;re Always Looking for Exceptional People
          </h2>
          <p className="text-neutral-500 leading-relaxed mb-8">
            Whether you&apos;re a seasoned IT consultant looking for your next engagement or a
            business professional who wants to build the future of enterprise staffing with us —
            we&apos;d love to hear from you.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 bg-brand-cyan text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-brand-cyan-light transition-colors duration-200"
          >
            View Open Positions <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
