"use client";

import { useRef, useEffect, ReactNode } from "react";
import Image from "next/image";

interface ParallaxBandProps {
  image: string;
  children: ReactNode;
  className?: string;
}

/**
 * A full-bleed section whose background photo drifts slightly slower than the
 * page as it scrolls through the viewport. Transform-based (GPU-friendly, works
 * on mobile) and disabled under prefers-reduced-motion.
 */
export function ParallaxBand({ image, children, className = "" }: ParallaxBandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const el = ref.current;
      const im = imgRef.current;
      if (!el || !im) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // -1 when the band sits below the viewport, +1 when above it.
      const progress = (rect.top + rect.height / 2 - vh / 2) / (vh / 2 + rect.height / 2);
      const shift = Math.max(-1, Math.min(1, progress)) * -8; // ±8%
      im.style.transform = `translate3d(0, ${shift}%, 0)`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={ref} className={`relative overflow-hidden bg-primary ${className}`}>
      {/* Oversized, drifting background */}
      <div ref={imgRef} className="absolute inset-x-0 -top-[20%] h-[140%] will-change-transform">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover object-center" />
      </div>

      {/* Brand + legibility overlays — strong enough for white text */}
      <div className="absolute inset-0 bg-primary/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-primary/30 to-ink/40" />

      <div className="relative">{children}</div>
    </section>
  );
}
