import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = { title: "Team" };

const certifications = [
  "AWS Solutions Architect", "Azure Administrator", "Google Cloud Professional",
  "SAP Certified Consultant", "Salesforce Certified", "Databricks Associate",
  "PMP", "CSM", "CISSP",
];

const teamPhoto = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80";

export default function TeamPage() {
  return (
    <>
      <section className="bg-surface pt-32 pb-20">
        <div className="container-wide flex flex-col gap-6 max-w-3xl">
          <FadeIn><SectionLabel>Our team</SectionLabel></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] text-balance">
              100+ certified enterprise consultants
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-ink/60 text-lg leading-relaxed max-w-2xl">
              Our bench spans software engineers, cloud architects, data engineers, ERP consultants,
              and cybersecurity specialists — all pre-vetted, enterprise-ready, and available to deploy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team photo */}
      <section className="bg-white py-10">
        <div className="container-wide">
          <FadeIn>
            <div className="relative h-96 md:h-[500px] rounded-4xl overflow-hidden">
              <Image src={teamPhoto} alt="Renown360 consulting team" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-serif text-3xl text-white max-w-lg leading-snug text-balance">
                  Experts who&apos;ve delivered at the world&apos;s largest enterprises.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Practice areas */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-wide">
          <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
            <SectionLabel>Practice areas</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">Specialists, not generalists</h2>
            <p className="text-ink/60 max-w-lg text-base leading-relaxed">
              Each consultant is screened and benchmarked within their specific domain — not just technically qualified.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { area: "Software Engineering", skills: ["Java / Spring Boot", "Python", "Node.js", "Go", ".NET", "React / Next.js"] },
              { area: "Cloud & DevOps",        skills: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "CI/CD"] },
              { area: "Data & AI",             skills: ["Databricks", "Snowflake", "Apache Spark", "dbt", "TensorFlow", "OpenAI"] },
              { area: "ERP & CRM",             skills: ["SAP S/4HANA", "Oracle EBS", "Salesforce", "HubSpot", "MuleSoft"] },
              { area: "Cybersecurity",         skills: ["SIEM / SOAR", "Zero Trust", "IAM", "Penetration Testing", "FedRAMP"] },
              { area: "Program Management",    skills: ["Agile / SAFe", "PMP", "JIRA", "ServiceNow", "Change Management"] },
            ].map((pa, i) => (
              <FadeIn key={pa.area} delay={i * 0.07}>
                <div className="p-7 rounded-3xl border border-line bg-white h-full flex flex-col gap-4">
                  <h3 className="font-serif text-xl text-ink">{pa.area}</h3>
                  <div className="flex flex-wrap gap-2">
                    {pa.skills.map((s) => (
                      <span key={s} className="px-3 py-1.5 text-xs rounded-full border border-line text-ink/60 font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-white py-20">
        <div className="container-wide">
          <FadeIn className="flex flex-col items-center gap-4 mb-10 text-center">
            <SectionLabel>Credentials</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">
              Certified across every major platform
            </h2>
          </FadeIn>
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <span key={cert} className="px-4 py-2 rounded-full border border-line bg-surface text-sm text-ink/60 font-medium">
                  {cert}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-10 pb-20">
        <div className="container-wide">
          <FadeIn>
            <div className="bg-primary rounded-4xl p-10 md:p-14 text-center flex flex-col items-center gap-6">
              <h2 className="font-serif text-3xl sm:text-4xl text-white max-w-xl text-balance">
                Looking for a specific skill set?
              </h2>
              <p className="text-white/70 max-w-md">
                Tell us what you need. We&apos;ll have 2–3 pre-vetted candidates in front of you within the week.
              </p>
              <Link href="/contact" className="px-7 py-3.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-surface transition-colors inline-flex items-center gap-2">
                Request talent <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
