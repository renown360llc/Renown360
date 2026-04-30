"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1400;
    const steps = 50;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(interval);
  }, [inView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function StatsSection() {
  return (
    <section className="bg-primary py-20 md:py-24">
      <div className="container-wide">
        <FadeIn className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            The numbers
          </h2>
          <p className="text-white/60 mt-3 text-base max-w-lg mx-auto">
            Five years of focused delivery across enterprise technology.
          </p>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10">
          {STATS.map((stat) => (
            <FadeIn key={stat.label}>
              <div className="bg-primary flex flex-col items-center justify-center py-10 px-6 gap-2 text-center">
                <span className="font-serif text-5xl text-white">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-white/50 font-medium">{stat.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
