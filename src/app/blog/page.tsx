import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Blog & Insights",
  description:
    "IT hiring guides, cloud migration best practices, and enterprise technology insights from the Renown360 consulting team.",
};

const CATEGORY_COLORS: Record<string, { text: string; bg: string }> = {
  "IT Staffing": { text: "#0ea5e9", bg: "rgba(14,165,233,0.1)" },
  "Cloud":       { text: "#6366f1", bg: "rgba(99,102,241,0.1)" },
  "ERP":         { text: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
  "Industry":    { text: "#10b981", bg: "rgba(16,185,129,0.1)" },
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric",
  });
}

export default function BlogPage() {
  const [featured, ...rest] = BLOG_POSTS;
  const colors = (cat: string) => CATEGORY_COLORS[cat] ?? { text: "#64748b", bg: "rgba(100,116,139,0.1)" };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-cyan/8 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel className="mb-5">Insights</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              IT Hiring &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-cyan-light">
                Technology Insights
              </span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl">
              Practical guides and analysis from the Renown360 consulting team — on hiring
              IT talent, cloud strategy, ERP implementation, and enterprise transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block mb-16 bg-neutral-50 rounded-3xl border border-neutral-200 overflow-hidden hover:border-brand-cyan/30 hover:shadow-card-hover transition-all duration-300"
          >
            <div className="grid lg:grid-cols-2">
              {/* Graphic pane */}
              <div className="bg-hero-gradient min-h-[240px] lg:min-h-full flex items-center justify-center p-10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
                />
                <div className="relative z-10 text-center">
                  <div className="text-6xl font-black text-white/10 leading-none">01</div>
                  <div className="text-2xl font-bold text-white mt-2">Featured Article</div>
                  <div className="w-12 h-1 bg-brand-cyan mx-auto mt-3 rounded-full" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-10 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ color: colors(featured.category).text, backgroundColor: colors(featured.category).bg }}
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {featured.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors duration-200">
                  {featured.title}
                </h2>
                <p className="text-neutral-500 leading-relaxed flex-1 mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neutral-400">{formatDate(featured.publishedAt)}</span>
                  <span className="inline-flex items-center gap-1.5 text-brand-cyan font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-neutral-50 rounded-2xl border border-neutral-200 p-7 hover:border-brand-cyan/30 hover:shadow-card hover:bg-white transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span
                    className="text-[11px] font-bold px-2.5 py-0.5 rounded-full"
                    style={{ color: colors(post.category).text, backgroundColor: colors(post.category).bg }}
                  >
                    {post.category}
                  </span>
                  <span className="text-[11px] text-neutral-400 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {post.readTime}
                  </span>
                </div>
                <h3 className="text-base font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors duration-200 flex-1">
                  {post.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-5 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <span className="text-xs text-neutral-400">{formatDate(post.publishedAt)}</span>
                  <span className="inline-flex items-center gap-1 text-brand-cyan font-semibold text-xs group-hover:gap-2 transition-all duration-200">
                    Read <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
