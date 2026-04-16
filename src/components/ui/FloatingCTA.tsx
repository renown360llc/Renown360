"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/constants";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div ref={ref} className="fixed bottom-5 right-5 lg:right-8 z-50 flex flex-col items-end gap-3">
          {/* Expanded panel */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                key="panel"
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 12 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-2xl shadow-2xl border border-neutral-200 p-5 w-72"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-bold text-brand-navy text-sm">Talk to Our Team</h4>
                    <p className="text-xs text-neutral-500 mt-0.5">
                      We respond within 1 business day.
                    </p>
                  </div>
                  <button
                    onClick={() => setExpanded(false)}
                    className="text-neutral-400 hover:text-neutral-600 transition-colors"
                    aria-label="Close"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-brand-cyan/30 hover:bg-white transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center shrink-0">
                      <Mail className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-navy">Email Us</p>
                      <p className="text-[11px] text-neutral-400">{SITE.email}</p>
                    </div>
                  </a>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-brand-cyan/30 hover:bg-white transition-all duration-200 group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-brand-cyan/10 flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4 text-brand-cyan" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-brand-navy">Call Us</p>
                      <p className="text-[11px] text-neutral-400">{SITE.phone}</p>
                    </div>
                  </a>
                </div>

                <Link
                  href="/contact"
                  onClick={() => setExpanded(false)}
                  className="w-full flex items-center justify-center gap-2 bg-brand-cyan text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-brand-cyan-light transition-colors duration-200"
                >
                  Schedule a Consultation
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          {/* FAB button */}
          <motion.button
            key="fab"
            onClick={() => setExpanded((p) => !p)}
            className="w-14 h-14 rounded-full bg-brand-cyan text-white flex items-center justify-center shadow-xl hover:bg-brand-cyan-light transition-colors duration-200 relative"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contact us"
          >
            <AnimatePresence mode="wait">
              {expanded ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}>
                  <MessageCircle className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
            {/* Pulse ring */}
            {!expanded && (
              <span className="absolute inset-0 rounded-full border-2 border-brand-cyan/40 animate-ping" />
            )}
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
