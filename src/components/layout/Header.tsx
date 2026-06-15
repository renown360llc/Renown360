"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Routes whose page begins with a dark hero (green/photo) the nav floats over.
  const DARK_HERO_ROUTES = ["/", "/services", "/industries", "/about", "/team", "/careers", "/contact"];
  const overlay = DARK_HERO_ROUTES.includes(pathname) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-line shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-wide flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo-icon.png"
            alt={SITE.name}
            width={40}
            height={40}
            priority
            className={cn("h-9 w-9 object-contain", overlay && "brightness-0 invert")}
          />
          <span className={cn("font-serif text-xl", overlay ? "text-white" : "text-ink")}>{SITE.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors duration-150",
                overlay
                  ? "text-white/80 hover:text-white hover:bg-white/10"
                  : "text-ink/70 hover:text-ink hover:bg-primary-light"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className={cn(
              "px-5 py-2.5 text-sm font-semibold rounded-full transition-colors duration-150",
              overlay
                ? "bg-white text-primary hover:bg-surface"
                : "bg-primary text-white hover:bg-primary-dark"
            )}
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            overlay ? "text-white hover:bg-white/10" : "text-ink hover:bg-primary-light"
          )}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-line bg-white px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-ink/80 border-b border-line/60 last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-3 text-center py-3 text-sm font-semibold bg-primary text-white rounded-full"
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
