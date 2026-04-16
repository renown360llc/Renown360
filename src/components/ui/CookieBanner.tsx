"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import Link from "next/link";

const STORAGE_KEY = "renown360_cookie_consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const t = setTimeout(() => setVisible(true), 1800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-5 right-5 sm:left-auto sm:right-5 sm:max-w-sm z-[9998] bg-white rounded-2xl shadow-2xl border border-neutral-200 p-5"
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
              <Cookie className="w-4 h-4 text-brand-cyan" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-brand-navy text-sm mb-1">We use cookies</h4>
              <p className="text-xs text-neutral-500 leading-relaxed">
                We use cookies to analyse traffic and improve your experience. See our{" "}
                <Link href="/privacy" className="text-brand-cyan underline hover:no-underline">
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
            </div>
            <button
              onClick={decline}
              className="text-neutral-400 hover:text-neutral-600 transition-colors shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={decline}
              className="flex-1 py-2 rounded-xl border border-neutral-200 text-xs font-semibold text-neutral-600 hover:bg-neutral-50 transition-colors duration-200"
            >
              Decline
            </button>
            <button
              onClick={accept}
              className="flex-1 py-2 rounded-xl bg-brand-cyan text-white text-xs font-semibold hover:bg-brand-cyan-light transition-colors duration-200"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
