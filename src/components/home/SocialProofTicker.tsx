"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "Senior Java Developer placed with a Fortune 500 bank · 3 days ago",
  "SAP S/4HANA consultant matched for manufacturing client · 1 week ago",
  "AWS Cloud Architect placed — remote position · 5 days ago",
  "Data Engineer (Databricks) onboarded for healthcare firm · 2 days ago",
  "Salesforce Developer placed in Charlotte, NC · 4 days ago",
  "Cloud migration project kicked off for fintech client · this week",
  "3 Java engineers placed across eastern US · 6 days ago",
];

export function SocialProofTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 3800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-brand-navy/95 border-b border-white/8 py-2.5 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] font-bold tracking-widest uppercase text-white/40 hidden sm:block">
            Live Activity
          </span>
        </div>
        <div className="h-5 overflow-hidden relative flex-1 max-w-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 absolute inset-0"
            >
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span className="text-[12px] text-white/70 truncate font-medium">
                {items[index]}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
