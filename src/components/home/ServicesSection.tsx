"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Users, RefreshCw, Cloud, LayoutGrid, BarChart2, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Users, RefreshCw, Cloud, LayoutGrid, BarChart2, Zap,
};

const serviceImages = [
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
];

const N = SERVICES.length;
const CARD_W = 560;
const CARD_H = 430;
const GAP = 20;
const STEP = CARD_W + GAP;

// Map any integer to 0..N-1 (circular)
const wrap = (n: number) => ((n % N) + N) % N;

const SPRING = { type: "spring" as const, stiffness: 340, damping: 36, mass: 0.72 };

export function ServicesSection() {
  const [vi, setVi] = useState(0);          // unbounded virtual index
  const sectionRef = useRef<HTMLDivElement>(null);
  const [sideGap, setSideGap] = useState(300);

  useEffect(() => {
    const measure = () => {
      if (sectionRef.current)
        setSideGap((sectionRef.current.offsetWidth - CARD_W) / 2);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Render a window of 5 virtual positions around vi
  const positions = [-2, -1, 0, 1, 2].map((d) => vi + d);

  return (
    <section className="bg-white py-20 md:py-28">
      {/* Heading */}
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-14 text-center">
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink max-w-2xl text-balance">
            Reliable expertise to drive your greatest success
          </h2>
        </FadeIn>
      </div>

      {/* Carousel */}
      <div
        ref={sectionRef}
        className="relative overflow-hidden"
        style={{ height: CARD_H + 24 }}
      >
        {positions.map((vpos) => {
          const ri = wrap(vpos);
          const isActive = vpos === vi;
          const dist = Math.abs(vpos - vi);
          const Icon = iconMap[SERVICES[ri].icon] ?? Zap;

          // x: center the active card at sideGap, offset others by STEP
          const x = sideGap + (vpos - vi) * STEP;

          return (
            <motion.div
              key={ri}                        // stable key → reuse + animate
              style={{ position: "absolute", top: 12, width: CARD_W, height: CARD_H }}
              animate={{
                x,
                scale: isActive ? 1 : 0.88,
                opacity: dist === 0 ? 1 : dist === 1 ? 0.5 : 0,
              }}
              transition={SPRING}
              className={`rounded-3xl overflow-hidden${!isActive ? " cursor-pointer" : ""}`}
              onClick={() => !isActive && setVi(vpos)}
            >
              <Image
                src={serviceImages[ri]}
                alt={SERVICES[ri].title}
                fill
                className="object-cover"
                priority={ri === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 flex flex-col gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center mb-1">
                  <Icon size={14} className="text-white" />
                </div>
                <h3 className="font-serif text-2xl text-white leading-snug">
                  {SERVICES[ri].title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed line-clamp-2">
                  {SERVICES[ri].shortDesc}
                </p>
                {isActive && (
                  <Link
                    href="/services"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors w-fit"
                  >
                    Learn more <ArrowRight size={11} />
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Arrows — fixed at edges of the always-centered active card */}
        <button
          onClick={() => setVi((v) => v - 1)}
          aria-label="Previous service"
          style={{ left: sideGap, top: "50%" }}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors duration-150"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          onClick={() => setVi((v) => v + 1)}
          aria-label="Next service"
          style={{ left: sideGap + CARD_W, top: "50%" }}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors duration-150"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      {/* Dots + counter */}
      <div className="flex items-center justify-center gap-5 mt-8">
        <div className="flex gap-2">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                // navigate to nearest virtual position mapping to i
                const diff = wrap(i - wrap(vi));
                const delta = diff <= N / 2 ? diff : diff - N;
                setVi((v) => v + delta);
              }}
              aria-label={`Service ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                wrap(vi) === i ? "bg-primary w-7" : "bg-line w-3.5 hover:bg-ink/20"
              }`}
            />
          ))}
        </div>
        <span className="text-xs font-medium text-ink/40 tabular-nums">
          {String(wrap(vi) + 1).padStart(2, "0")} / {String(N).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
