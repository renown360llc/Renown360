"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "", service: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const info = [
    { icon: Phone,  label: "Phone",   value: SITE.phone,   href: `tel:${SITE.phone}` },
    { icon: Mail,   label: "Email",   value: SITE.email,   href: `mailto:${SITE.email}` },
    { icon: MapPin, label: "Address", value: `${SITE.address.line1}, ${SITE.address.city}, ${SITE.address.state}` },
    { icon: Clock,  label: "Hours",   value: "Mon–Fri, 9am–6pm EST" },
  ];

  return (
    <>
      <section className="bg-surface pt-32 pb-20">
        <div className="container-wide flex flex-col gap-6 max-w-3xl">
          <FadeIn><SectionLabel>Contact us</SectionLabel></FadeIn>
          <FadeIn delay={0.07}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.1] text-balance">
              Let&apos;s talk about your next engagement
            </h1>
          </FadeIn>
          <FadeIn delay={0.14}>
            <p className="text-ink/60 text-lg leading-relaxed">
              Whether you need a single consultant or a full transformation team — we&apos;ll scope
              your requirements and have shortlisted candidates within the week.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-wide grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact info */}
          <FadeIn direction="left" className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              {info.map((item) => (
                <div key={item.label} className="flex gap-4 p-5 rounded-2xl border border-line bg-surface">
                  <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center shrink-0">
                    <item.icon size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-ink/40 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-ink hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm text-ink">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-primary-light border border-line">
              <p className="font-serif text-lg text-ink mb-2">Typical response time</p>
              <p className="text-sm text-ink/60 leading-relaxed">
                We respond to all enquiries within 4 business hours. For urgent staffing needs,
                call us directly and we&apos;ll begin sourcing immediately.
              </p>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn direction="right" className="lg:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-16 px-8 rounded-3xl border border-line bg-surface">
                <div className="w-14 h-14 rounded-full bg-primary-light flex items-center justify-center">
                  <Send size={22} className="text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-ink">Message received</h2>
                <p className="text-sm text-ink/60 max-w-sm">
                  Thank you for reaching out. A member of our delivery team will be in touch within 4 business hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 rounded-3xl border border-line bg-surface">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-ink/60">Full name *</label>
                    <input
                      id="name" required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Smith"
                      className="px-4 py-3 rounded-xl border border-line bg-white text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="company" className="text-xs font-semibold text-ink/60">Company *</label>
                    <input
                      id="company" required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Acme Corp"
                      className="px-4 py-3 rounded-xl border border-line bg-white text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-ink/60">Work email *</label>
                    <input
                      id="email" required type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="px-4 py-3 rounded-xl border border-line bg-white text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-semibold text-ink/60">Phone</label>
                    <input
                      id="phone"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="px-4 py-3 rounded-xl border border-line bg-white text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-semibold text-ink/60">Service of interest</label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-line bg-white text-sm text-ink focus:outline-none focus:border-primary/50 transition-colors"
                  >
                    <option value="">Select a service...</option>
                    <option>IT Staffing & Consulting</option>
                    <option>Legacy System Modernization</option>
                    <option>Cloud Migration & DevOps</option>
                    <option>ERP & CRM Implementation</option>
                    <option>Data Analytics & AI/ML</option>
                    <option>Digital Transformation</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-ink/60">Tell us about your project *</label>
                  <textarea
                    id="message" required rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Describe your requirements, timeline, and team size..."
                    className="px-4 py-3 rounded-xl border border-line bg-white text-sm text-ink placeholder:text-ink/30 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                >
                  Send message <Send size={14} />
                </button>
                <p className="text-xs text-ink/40 text-center">
                  We respond within 4 business hours. No spam, ever.
                </p>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
