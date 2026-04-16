import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blog";
import { CTASection } from "@/components/home/CTASection";
import { SITE } from "@/lib/constants";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
    },
  };
}

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

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const colors = CATEGORY_COLORS[post.category] ?? { text: "#64748b", bg: "rgba(100,116,139,0.1)" };
  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-16 lg:pt-40 lg:pb-20 relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-xs font-bold px-3 py-1 rounded-full"
              style={{ color: colors.text, backgroundColor: "rgba(255,255,255,0.1)" }}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/50">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/50">
              <Calendar className="w-3 h-3" /> {formatDate(post.publishedAt)}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15] mb-6">
            {post.title}
          </h1>
          <p className="text-white/60 text-lg leading-relaxed">{post.excerpt}</p>

          {/* Author */}
          <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/10">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
              style={{ backgroundColor: colors.text }}
            >
              {post.author.avatar}
            </div>
            <div>
              <p className="text-sm font-semibold text-white">{post.author.name}</p>
              <p className="text-xs text-white/50">{post.author.title} · {SITE.fullName}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {post.body.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl sm:text-2xl font-bold text-brand-navy mb-4 tracking-tight">
                  {section.heading}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className="text-neutral-600 leading-relaxed text-[15px]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* End CTA */}
          <div className="mt-14 p-7 rounded-2xl bg-brand-navy text-white">
            <h3 className="text-lg font-bold mb-2">Ready to solve this at your organisation?</h3>
            <p className="text-white/60 text-sm mb-4">
              Talk to the Renown360 team — no commitment required.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-cyan text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-brand-cyan-light transition-colors duration-200"
            >
              Schedule a Call <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-14 bg-neutral-50 border-t border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-lg font-bold text-brand-navy mb-6">More Insights</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {related.map((p) => {
                const c = CATEGORY_COLORS[p.category] ?? { text: "#64748b", bg: "rgba(100,116,139,0.1)" };
                return (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:border-brand-cyan/30 hover:shadow-card transition-all duration-300"
                  >
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-3 inline-block"
                      style={{ color: c.text, backgroundColor: c.bg }}>
                      {p.category}
                    </span>
                    <h4 className="font-bold text-brand-navy text-sm mb-2 group-hover:text-brand-blue transition-colors duration-200">
                      {p.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-brand-cyan text-xs font-semibold group-hover:gap-2 transition-all duration-200">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}
