"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxBand } from "@/components/ui/ParallaxBand";

export function StatementBand() {
  return (
    <ParallaxBand image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80">
      <div className="container-wide py-24 md:py-36">
        <FadeIn className="max-w-3xl mx-auto text-center flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 self-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm px-3 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
            <span className="text-xs font-semibold uppercase tracking-widest text-white/80">Our promise</span>
          </span>
          <p className="font-serif text-3xl sm:text-4xl md:text-[2.9rem] text-white leading-[1.18] text-balance">
            We don&apos;t forward résumés. We send pre-vetted consultants who are
            productive from day one — and we do it in under ten days.
          </p>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            Screened in advance. Kept on bench. Matched to your brief, your stack, and your culture —
            so the engagement works from the first standup.
          </p>
        </FadeIn>
      </div>
    </ParallaxBand>
  );
}
