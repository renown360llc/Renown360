import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";

const company = [
  { label: "About",    href: "/about" },
  { label: "Team",     href: "/team" },
  { label: "Careers",  href: "/careers" },
  { label: "Blog",     href: "/blog" },
  { label: "Contact",  href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use",   href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-wide pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-1.5 w-fit">
              <Image
                src="/logo.png"
                alt={SITE.name}
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="font-serif text-xl text-white">{SITE.name}</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm text-white/60">
              IT consulting and staffing for enterprises. We screen consultants in advance, keep them on bench, and place them within 10 days.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Phone size={14} className="text-primary-muted shrink-0" />
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 hover:text-white transition-colors">
                <Mail size={14} className="text-primary-muted shrink-0" />
                {SITE.email}
              </a>
              <span className="flex items-start gap-2.5">
                <MapPin size={14} className="text-primary-muted shrink-0 mt-0.5" />
                <span>{SITE.address.line1}, {SITE.address.city}, {SITE.address.state} {SITE.address.zip}</span>
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Services</p>
            <ul className="flex flex-col gap-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-sm hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Company</p>
              <ul className="flex flex-col gap-3">
                {company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-5">Legal</p>
              <ul className="flex flex-col gap-3">
                {legal.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} {SITE.fullName}. All rights reserved.</p>
          <p>Sheridan, WY · Durham, NC</p>
        </div>
      </div>
    </footer>
  );
}
