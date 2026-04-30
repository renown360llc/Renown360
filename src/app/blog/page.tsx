import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = { title: "Blog" };

const posts = [
  {
    slug: "staffing-enterprise-java",
    category: "Staffing",
    title: "How to Staff Enterprise Java Projects in Under 2 Weeks",
    excerpt: "A practical guide to the pre-vetting model that lets Renown360 deliver qualified Java engineers in under 10 days for Fortune 500 engagements.",
    readTime: "5 min read",
    date: "April 2025",
  },
  {
    slug: "cloud-migration-aws-hipaa",
    category: "Cloud",
    title: "HIPAA-Compliant AWS Migration: Lessons from a 40TB Healthcare Project",
    excerpt: "How our team migrated a major hospital network's clinical data to AWS with zero downtime and full HIPAA compliance — completed in 7 weeks.",
    readTime: "7 min read",
    date: "March 2025",
  },
  {
    slug: "sap-s4hana-rollout",
    category: "ERP",
    title: "SAP S/4HANA Rollout Across 6 Plants: What We Learned",
    excerpt: "Running a multi-site SAP implementation with minimal production disruption. The planning, execution, and post-go-live lessons from a manufacturing deployment.",
    readTime: "8 min read",
    date: "March 2025",
  },
  {
    slug: "genai-enterprise-readiness",
    category: "Data & AI",
    title: "Is Your Enterprise Ready for GenAI? A Practical Readiness Framework",
    excerpt: "Beyond the hype — a structured approach to evaluating your data maturity, governance, and infrastructure before deploying LLMs in production.",
    readTime: "6 min read",
    date: "February 2025",
  },
  {
    slug: "devops-finops-cloud-cost",
    category: "DevOps",
    title: "DevOps Meets FinOps: Cutting Cloud Spend Without Slowing Delivery",
    excerpt: "Practical techniques our cloud architects use to reduce AWS/Azure costs by 20–35% without impacting engineering velocity.",
    readTime: "5 min read",
    date: "February 2025",
  },
  {
    slug: "digital-transformation-cxo",
    category: "Strategy",
    title: "What CXOs Get Wrong About Digital Transformation",
    excerpt: "The most common strategic mistakes we see — and how to reframe transformation programmes around measurable business outcomes, not technology adoption.",
    readTime: "6 min read",
    date: "January 2025",
  },
];

const categoryColors: Record<string, string> = {
  Staffing: "bg-blue-50 text-blue-700",
  Cloud:    "bg-sky-50 text-sky-700",
  ERP:      "bg-violet-50 text-violet-700",
  "Data & AI": "bg-emerald-50 text-emerald-700",
  DevOps:   "bg-orange-50 text-orange-700",
  Strategy: "bg-primary-light text-primary",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-surface pt-32 pb-20">
        <div className="container-wide flex flex-col gap-6 max-w-3xl">
          <FadeIn><SectionLabel>Blog</SectionLabel></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1]">
              Insights from the field
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-ink/60 text-lg leading-relaxed max-w-2xl">
              Practical perspectives on enterprise IT consulting, staffing, cloud migration,
              and digital transformation — written by practitioners who do this work every day.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 pb-28">
        <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 0.07}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-4 p-7 rounded-3xl border border-line bg-surface hover:border-primary/30 hover:bg-surface-green transition-all duration-200 h-full">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 text-xs rounded-full font-semibold ${categoryColors[post.category] ?? "bg-primary-light text-primary"}`}>
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-ink/40">
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
                <div className="flex flex-col gap-2 flex-1">
                  <h2 className="font-serif text-xl text-ink leading-snug group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-ink/60 leading-relaxed">{post.excerpt}</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-line">
                  <span className="text-xs text-ink/40">{post.date}</span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                    Read more <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
