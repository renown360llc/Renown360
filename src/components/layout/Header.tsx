"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, CheckCircle2 } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";


export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || pathname !== "/"
          ? "bg-brand-navy/95 backdrop-blur-md border-b border-white/10 shadow-[0_4px_32px_-4px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      )}
    >


      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="relative w-9 h-9 lg:w-10 lg:h-10 rounded-xl overflow-hidden shadow-sm">
              <Image src="/logo.jpeg" alt="Renown360 Logo" fill className="object-cover" priority />
            </div>
            <div className="hidden sm:block">
              <span className="text-base font-bold tracking-tight text-white">
                Renown<span className="text-brand-cyan">360</span>
              </span>
              <p className="text-[9px] font-medium tracking-widest uppercase text-brand-cyan/80">
                IT Consulting
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname === link.href
                    ? "text-brand-cyan bg-brand-cyan/10"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              <Phone className="w-3.5 h-3.5" />
              {SITE.phone}
            </a>
            <Button href="/contact" size="sm" variant="primary">
              Get Started
            </Button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="bg-brand-navy-light rounded-2xl shadow-xl border border-white/10 mb-4 overflow-hidden">
            <div className="py-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block px-5 py-3 text-sm font-medium transition-colors duration-200",
                    pathname === link.href
                      ? "text-brand-cyan bg-brand-cyan/10"
                      : "text-white/80 hover:text-white hover:bg-white/8"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-white/10 flex flex-col gap-2">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2 text-sm font-medium text-white/70">
                <Phone className="w-4 h-4 text-brand-cyan" />
                {SITE.phone}
              </a>
              <Button href="/contact" size="sm" variant="primary" className="w-full justify-center">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
