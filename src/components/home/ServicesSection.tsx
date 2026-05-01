"use client";

import { useState, useRef, useEffect, useCallback } from "react";
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
const GAP = 16;
const wrap = (n: number) => ((n % N) + N) % N;
const SPRING = { type: "spring" as const, stiffness: 340, damping: 36, mass: 0.72 };

export function ServicesSection() {
  const [vi, setVi] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [cardW, setCardW] = useState(560);
  const [cardH, setCardH] = useState(430);
  const [sideGap, setSideGap] = useState(300);
  const dragStart = useRef(0);

  const measure = useCallback(() => {
    if (!sectionRef.current) return;
    const vw = sectionRef.current.offsetWidth;
    const w = vw < 500 ? vw - 40 : vw < 768 ? Math.min(440, vw - 60) : vw < 1024 ? Math.min(500, vw - 80) : 560;
    const h = vw < 500 ? 340 : vw < 768 ? 380 : 430;
    setCardW(w);
    setCardH(h);
    setSideGap((vw - w) / 2);
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const STEP = cardW + GAP;
  const positions = [-2, -1, 0, 1, 2].map((d) => vi + d);

  return (
    <section className="bg-white py-16 md:py-28">
      <div className="container-wide">
        <FadeIn className="flex flex-col items-center gap-4 mb-10 md:mb-14 text-center">
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink max-w-2xl text-balance">
            Reliable expertise to drive your greatest success
          </h2>
        </FadeIn>
      </div>

      {/* Carousel */}
      <div
        ref={sectionRef}
        className="relative overflow-hidden select-none"
        style={{ height: cardH + 24 }}
        onPointerDown={(e) => { dragStart.current = e.clientX; }}
        onPointerUp={(e) => {
          const delta = dragStart.current - e.clientX;
          if (Math.abs(delta) > 40) setVi((v) => v + (delta > 0 ? 1 : -1));
        }}
      >
        {positions.map((vpos) => {
          const ri = wrap(vpos);
          const isActive = vpos === vi;
          const dist = Math.abs(vpos - vi);
          const Icon = iconMap[SERVICES[ri].icon] ?? Zap;
          const x = sideGap + (vpos - vi) * STEP;

          return (
            <motion.div
              key={ri}
              style={{ position: "absolute", top: 12, width: cardW, height: cardH }}
              animate={{ x, scale: isActive ? 1 : 0.88, opacity: dist === 0 ? 1 : dist === 1 ? 0.45 : 0 }}
              transition={SPRING}
              className={`rounded-3xl overflow-hidden${!isActive ? " cursor-pointer" : ""}`}
              onClick={() => !isActive && setVi(vpos)}
            >
              <Image
                src={serviceImages[ri]}
                alt={SERVICES[ri].title}
                fill
                sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 500px, 560px" className="object-cover"
                priority={ri === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 flex flex-col gap-2">
                <div className="w-7 h-7 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center mb-1">
                  <Icon size={14} className="text-white" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white leading-snug">{SERVICES[ri].title}</h3>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed line-clamp-2">{SERVICES[ri].shortDesc}</p>
                {isActive && (
                  <Link
                    href="/services"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors w-fit"
                  >
                    Learn more <ArrowRight size={11} />
                  </Link>
                )}
              </div>
            </motion.div>
          );
        })}

        {/* Arrows */}
        <button
          onClick={() => setVi((v) => v - 1)}
          aria-label="Previous"
          style={{ left: sideGap, top: "50%" }}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors"
        >
          <ArrowLeft size={16} />
        </button>
        <button
          onClick={() => setVi((v) => v + 1)}
          aria-label="Next"
          style={{ left: sideGap + cardW, top: "50%" }}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors"
        >
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <div className="flex gap-2">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const diff = wrap(i - wrap(vi));
                setVi((v) => v + (diff <= N / 2 ? diff : diff - N));
              }}
              aria-label={`Service ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                wrap(vi) === i ? "bg-primary w-7" : "bg-line w-3.5"
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
