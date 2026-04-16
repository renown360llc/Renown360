import Link from "next/link";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-hero-gradient noise-overlay flex items-center justify-center relative overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(14,165,233,0.1) 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)" }} />

      <div className="relative z-10 text-center px-4 sm:px-6 max-w-2xl mx-auto">
        {/* 404 */}
        <div className="text-[120px] sm:text-[160px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 select-none mb-2">
          404
        </div>

        <div className="w-16 h-1 bg-gradient-to-r from-brand-cyan to-indigo-500 mx-auto rounded-full mb-8" />

        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">
          Page not found
        </h1>
        <p className="text-white/60 leading-relaxed mb-10 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        {/* Quick links */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg bg-white/8 border border-white/10 text-white/70 text-sm font-medium hover:bg-white/12 hover:text-white transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-cyan text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-cyan-light transition-colors duration-200"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/20 text-white/80 font-semibold px-6 py-3 rounded-xl hover:bg-white/8 hover:text-white transition-all duration-200"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
