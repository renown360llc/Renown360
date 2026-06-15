"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxBand } from "@/components/ui/ParallaxBand";

export function CTASection() {
  return (
    <ParallaxBand
      image="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=80"
      className="text-white"
    >
      <div className="container-wide py-24 md:py-36">
        <FadeIn className="flex flex-col items-center gap-6 text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-[1.12] text-balance">
            Ready to build your team?
          </h2>
          <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-md">
            Schedule a 30-minute call. We&apos;ll scope your requirements and have shortlisted
            candidates in front of you within the week.
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-1">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-primary font-semibold text-sm shadow-lg shadow-ink/20 hover:bg-surface transition-colors"
            >
              Schedule a call <ArrowRight size={15} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Our services
            </Link>
          </div>
        </FadeIn>
      </div>
    </ParallaxBand>
  );
}
