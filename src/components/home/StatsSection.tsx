"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";
import { ParallaxBand } from "@/components/ui/ParallaxBand";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, 1400 / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsSection() {
  return (
    <ParallaxBand image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80">
      <div className="container-wide py-20 md:py-28">
        <FadeIn className="text-center mb-10 md:mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            The numbers
          </h2>
          <p className="text-white/70 mt-2 text-sm sm:text-base max-w-lg mx-auto">
            Focused delivery across enterprise technology, from day one.
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/15 rounded-2xl md:rounded-3xl overflow-hidden border border-white/15">
          {STATS.map((stat) => (
            <FadeIn key={stat.label}>
              <div className="bg-white/[0.06] backdrop-blur-sm flex flex-col items-center justify-center py-8 sm:py-10 px-4 gap-1.5 text-center h-full">
                <span className="font-serif text-4xl sm:text-5xl text-white">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-xs sm:text-sm text-white/60 font-medium">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </ParallaxBand>
  );
}
