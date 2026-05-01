"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

export function CTASection() {
  return (
    <section className="bg-white py-10 pb-16 md:pb-20">
      <div className="container-wide">
        <FadeIn>
          <div className="relative bg-primary rounded-4xl overflow-hidden p-8 sm:p-10 md:p-16 flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <div className="flex-1 flex flex-col gap-5 md:gap-6 text-center md:text-left">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-[1.15] text-balance">
                Ready to build your team?
              </h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0">
                Schedule a 30-minute call. We&apos;ll scope your requirements and have shortlisted candidates in front of you within the week.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary font-semibold text-sm hover:bg-surface transition-colors"
                >
                  Schedule a call <ArrowRight size={14} />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
                >
                  Our services
                </Link>
              </div>
            </div>

            {/* Image — hidden on mobile */}
            <div className="hidden md:block w-72 lg:w-96 h-64 md:h-72 relative rounded-3xl overflow-hidden shrink-0">
              <Image
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80"
                alt="Schedule a consultation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
