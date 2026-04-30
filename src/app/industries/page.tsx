import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Landmark, HeartPulse, Factory, ShoppingBag, Radio, Building2 } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { INDUSTRIES } from "@/lib/constants";

export const metadata: Metadata = { title: "Industries" };

const iconMap: Record<string, React.ElementType> = {
  Landmark, HeartPulse, Factory, ShoppingBag, Radio, Building2,
};

const results = [
  { industry: "Financial Services", metric: "40% reduction", desc: "in time-to-market for new products" },
  { industry: "Healthcare",         metric: "30% faster",    desc: "clinical data processing" },
  { industry: "Manufacturing",      metric: "25% less",      desc: "unplanned downtime" },
  { industry: "Retail",             metric: "18% uplift",    desc: "in conversion from faster page loads" },
  { industry: "Telecom",            metric: "35% reduction", desc: "in subscriber churn" },
  { industry: "Government",         metric: "< 6 months",    desc: "FedRAMP ATO achieved" },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-surface pt-32 pb-20">
        <div className="container-wide flex flex-col gap-6 max-w-3xl">
          <FadeIn><SectionLabel>Industries</SectionLabel></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] text-balance">
              We speak your industry&apos;s language
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-ink/60 text-lg leading-relaxed max-w-2xl">
              Domain expertise means understanding your regulatory environment, your toolchain,
              and the specific pressures your sector faces. We don&apos;t generalist our way through engagements.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Industry cards */}
      <section className="bg-white py-20">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 gap-4">
          {INDUSTRIES.map((ind, i) => {
            const Icon = iconMap[ind.icon] ?? Building2;
            return (
              <FadeIn key={ind.slug} delay={i * 0.07}>
                <div className="flex flex-col gap-5 p-8 rounded-3xl border border-line bg-surface h-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary-light flex items-center justify-center">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <h2 className="font-serif text-xl text-ink">{ind.title}</h2>
                  </div>
                  <p className="text-sm text-ink/60 leading-relaxed">{ind.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {ind.clients.map((c) => (
                      <span key={c} className="px-3 py-1 text-xs rounded-full border border-line bg-white text-ink/50 font-medium">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* Results */}
      <section className="bg-surface py-20 md:py-28">
        <div className="container-wide">
          <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
            <SectionLabel>Proven outcomes</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink">Results across every sector</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((r, i) => (
              <FadeIn key={r.industry} delay={i * 0.07}>
                <div className="p-7 rounded-3xl bg-white border border-line flex flex-col gap-2">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">{r.industry}</p>
                  <p className="font-serif text-3xl text-ink">{r.metric}</p>
                  <p className="text-sm text-ink/60">{r.desc}</p>
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
                Your industry. Your challenge. Our expertise.
              </h2>
              <Link href="/contact" className="px-7 py-3.5 rounded-full bg-white text-primary font-semibold text-sm hover:bg-surface transition-colors inline-flex items-center gap-2">
                Start a conversation <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
