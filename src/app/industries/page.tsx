import type { Metadata } from "next";
import {
  Landmark, HeartPulse, Factory, ShoppingBag, Radio, Building2,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Renown360 serves Financial Services, Healthcare, Manufacturing, Retail, Telecom, and Government with specialised IT consulting and staffing.",
};

const ICON_MAP: Record<string, React.ElementType> = {
  Landmark, HeartPulse, Factory, ShoppingBag, Radio, Building2,
};

const industryDetails: Record<string, { challenges: string[]; solutions: string[]; outcomes: string[] }> = {
  "financial-services": {
    challenges: [
      "Core banking systems running on legacy COBOL",
      "Regulatory compliance (SOX, PCI-DSS, Basel III)",
      "Real-time fraud detection at transaction scale",
      "Digital channel modernisation",
    ],
    solutions: [
      "Phased core banking migration to cloud-native platforms",
      "GRC tooling and compliance automation",
      "ML-powered fraud and risk models",
      "Omnichannel digital banking platforms",
    ],
    outcomes: [
      "40% reduction in time-to-market for new products",
      "99.99% uptime SLAs on critical banking systems",
      "Passed SOX audits with zero findings",
    ],
  },
  "healthcare-life-sciences": {
    challenges: [
      "EHR interoperability across disparate systems",
      "HIPAA-compliant cloud infrastructure",
      "Clinical data analytics at population scale",
      "Accelerating drug discovery pipelines",
    ],
    solutions: [
      "HL7/FHIR API integrations between EHR platforms",
      "HIPAA-compliant AWS/Azure landing zones",
      "Clinical data lakehouse on Databricks",
      "AI/ML models for genomics and trial matching",
    ],
    outcomes: [
      "30% faster clinical data processing",
      "Zero HIPAA violations across all cloud deployments",
      "50% reduction in manual data reconciliation",
    ],
  },
  "manufacturing": {
    challenges: [
      "Disconnected shop-floor and ERP systems",
      "Supply chain visibility and resilience",
      "Predictive maintenance for critical equipment",
      "Sustainability reporting requirements",
    ],
    solutions: [
      "SAP S/4HANA rollouts with MES integration",
      "End-to-end supply chain visibility platforms",
      "IoT sensor networks with ML-based alerting",
      "ESG data platforms and reporting dashboards",
    ],
    outcomes: [
      "25% reduction in unplanned downtime",
      "15% improvement in inventory turns",
      "Full real-time visibility across 12 plants",
    ],
  },
  "retail-ecommerce": {
    challenges: [
      "Legacy monolith ecommerce platforms",
      "Personalisation at 10M+ customer scale",
      "Omnichannel inventory synchronisation",
      "Returns fraud and chargeback management",
    ],
    solutions: [
      "Headless commerce re-platform on Next.js + APIs",
      "Real-time ML recommendation engines",
      "Unified inventory management system",
      "ML-powered fraud detection pipelines",
    ],
    outcomes: [
      "3x faster page load → 18% uplift in conversion",
      "22% increase in average order value via personalisation",
      "99.5% inventory accuracy across all channels",
    ],
  },
  "telecom-media": {
    challenges: [
      "BSS/OSS modernisation for 5G readiness",
      "Subscriber churn prediction and retention",
      "Content delivery at streaming scale",
      "Network capacity planning and optimisation",
    ],
    solutions: [
      "Microservices-based BSS re-platforming",
      "Real-time churn analytics on Snowflake",
      "CDN architecture and video pipeline engineering",
      "Predictive capacity planning models",
    ],
    outcomes: [
      "35% reduction in subscriber churn",
      "50ms latency on content delivery globally",
      "60% faster BSS release cycles",
    ],
  },
  "government-public-sector": {
    challenges: [
      "FedRAMP compliance for cloud migrations",
      "Citizen-facing digital services modernisation",
      "Cross-agency data interoperability",
      "Cybersecurity posture and zero-trust adoption",
    ],
    solutions: [
      "FedRAMP Moderate/High cloud landing zones",
      "Human-centred digital services on cloud",
      "FHIR/API-based data sharing frameworks",
      "Zero-trust architecture and SIEM deployment",
    ],
    outcomes: [
      "FedRAMP ATO achieved in under 6 months",
      "80% reduction in citizen service wait times",
      "Zero critical security incidents post-deployment",
    ],
  },
};

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-cyan/8 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel className="mb-5">Industry Expertise</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Deep{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-cyan-light">
                Vertical Expertise
              </span>{" "}
              Across Six Sectors
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              We don&apos;t just understand technology — we understand the regulatory environments,
              competitive pressures, and operational realities of the industries we serve.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ICON_MAP[ind.icon];
            const detail = industryDetails[ind.slug];
            const isEven = i % 2 === 0;
            return (
              <div
                key={ind.slug}
                id={ind.slug}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
                  !isEven ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-brand-cyan/10 flex items-center justify-center">
                      {Icon && <Icon className="w-7 h-7 text-brand-cyan" />}
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy tracking-tight">
                        {ind.title}
                      </h2>
                    </div>
                  </div>
                  <p className="text-neutral-500 leading-relaxed mb-5">{ind.desc}</p>

                  {/* Clients */}
                  <div className="flex flex-wrap gap-2 mb-7">
                    {ind.clients.map((c) => (
                      <span key={c} className="text-xs font-medium px-3 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy border border-brand-navy/10">
                        {c}
                      </span>
                    ))}
                  </div>

                  <Button href="/contact" size="md" variant="primary">
                    Discuss Your Initiative
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                {/* Challenges / Solutions / Outcomes */}
                {detail && (
                  <div className="space-y-5">
                    <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
                      <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-400 mb-4">
                        Common Challenges
                      </h4>
                      <ul className="space-y-2">
                        {detail.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2.5 text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 shrink-0 mt-1.5" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-brand-cyan/5 rounded-2xl p-6 border border-brand-cyan/15">
                      <h4 className="text-xs font-bold tracking-widest uppercase text-brand-cyan mb-4">
                        Our Approach
                      </h4>
                      <ul className="space-y-2">
                        {detail.solutions.map((s) => (
                          <li key={s} className="flex items-start gap-2.5 text-sm text-neutral-700">
                            <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-brand-navy rounded-2xl p-6">
                      <h4 className="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">
                        Typical Outcomes
                      </h4>
                      <ul className="space-y-2">
                        {detail.outcomes.map((o) => (
                          <li key={o} className="flex items-start gap-2.5 text-sm text-white/80">
                            <CheckCircle2 className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" />
                            {o}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </>
  );
}
