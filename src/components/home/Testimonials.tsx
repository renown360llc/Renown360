"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeUp } from "@/components/ui/FadeUp";

const testimonials = [
  {
    quote:
      "Renown360 placed three senior Java engineers within 9 days of our brief. The quality was exceptional — all three are still with us 14 months later. This is not a typical staffing experience.",
    name: "Michael Torres",
    title: "VP of Engineering",
    company: "Financial Services Firm",
    industry: "Banking",
    avatar: "MT",
    color: "#0ea5e9",
  },
  {
    quote:
      "We've worked with three staffing vendors. Renown360 is the only one that assigned us a dedicated delivery manager who actually understood our SAP landscape. The SAP S/4HANA consultants they placed were billable from day one.",
    name: "Priya Mehta",
    title: "Director of IT Transformation",
    company: "Global Manufacturer",
    industry: "Manufacturing",
    avatar: "PM",
    color: "#f59e0b",
  },
  {
    quote:
      "Our HIPAA-compliant AWS migration was on an 8-week deadline that most vendors said was impossible. Renown360 delivered on week 7 with zero downtime. I'd recommend them to any healthcare CTO.",
    name: "Dr. James Whitfield",
    title: "Chief Technology Officer",
    company: "Regional Health System",
    industry: "Healthcare",
    avatar: "JW",
    color: "#10b981",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel className="mx-auto mb-4">Client Testimonials</SectionLabel>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-navy tracking-tight mb-4">
            Trusted by Enterprise{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-indigo-500">
              Technology Leaders
            </span>
          </h2>
          <p className="text-neutral-500 leading-relaxed">
            Don&apos;t take our word for it — here&apos;s what the people who&apos;ve
            worked with us say.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="group relative bg-neutral-50 rounded-3xl p-7 border border-neutral-200 hover:border-neutral-300 hover:shadow-card-hover transition-all duration-300 flex flex-col cursor-default"
            >
              {/* Gradient top border */}
              <div
                className="absolute top-0 left-7 right-7 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${t.color}60, transparent)`,
                }}
              />

              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0"
                style={{ backgroundColor: `${t.color}12`, border: `1px solid ${t.color}25` }}
              >
                <Quote className="w-4 h-4" style={{ color: t.color }} />
              </div>

              {/* Stars */}
              <Stars />

              {/* Quote text */}
              <blockquote className="mt-4 mb-6 text-sm text-neutral-600 leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-neutral-200">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">{t.name}</p>
                  <p className="text-xs text-neutral-500">{t.title}</p>
                  <p className="text-xs text-neutral-400">{t.company}</p>
                </div>
                <div className="ml-auto">
                  <span
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                    style={{ color: t.color, backgroundColor: `${t.color}12` }}
                  >
                    {t.industry}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-8 text-sm text-neutral-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {["Fortune 500 clients", "Multi-year engagements", "SLA-backed delivery", "NDA-protected"].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-brand-cyan" />
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
