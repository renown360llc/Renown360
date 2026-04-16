"use client";

import { useState } from "react";
import {
  Mail, Phone, MapPin, Clock, CheckCircle2, ArrowRight,
  Linkedin, Twitter,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const enquiryTypes = [
  "IT Staffing / Talent Acquisition",
  "Cloud Migration",
  "ERP / CRM Implementation",
  "Data Analytics & AI",
  "Digital Transformation",
  "Legacy Modernisation",
  "Careers / Join Renown360",
  "General Enquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient pt-32 pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-brand-cyan/8 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel className="mb-5">Get in Touch</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              Let&apos;s Start a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-cyan-light">
                Conversation
              </span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl">
              Whether you need to hire specialised IT talent, plan a cloud migration, or explore
              a transformation partnership — our team will get back to you within one business day.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: contact info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <SectionLabel className="mb-4">Contact Information</SectionLabel>
                <h2 className="text-2xl font-bold text-brand-navy tracking-tight mb-5">
                  Reach Our Team
                </h2>
              </div>

              {/* Cards */}
              <div className="space-y-4">
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-brand-cyan/30 hover:bg-white hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan/20 transition-colors">
                    <Mail className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-0.5">Email</p>
                    <p className="font-semibold text-brand-navy">{SITE.email}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">We respond within 1 business day</p>
                  </div>
                </a>

                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-neutral-50 hover:border-brand-cyan/30 hover:bg-white hover:shadow-card transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0 group-hover:bg-brand-cyan/20 transition-colors">
                    <Phone className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-0.5">Phone</p>
                    <p className="font-semibold text-brand-navy">{SITE.phone}</p>
                    <p className="text-xs text-neutral-500 mt-0.5">Mon–Fri, 9am–6pm ET</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-neutral-50">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-0.5">
                      Office
                    </p>
                    <p className="font-semibold text-brand-navy">{SITE.address.line1}</p>
                    <p className="text-sm text-neutral-500">
                      {SITE.address.city}, {SITE.address.state} {SITE.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl border border-neutral-200 bg-neutral-50">
                  <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-cyan" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-0.5">
                      Business Hours
                    </p>
                    <p className="font-semibold text-brand-navy">Monday – Friday</p>
                    <p className="text-sm text-neutral-500">9:00 AM – 6:00 PM Eastern Time</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  <a
                    href={SITE.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-neutral-100 hover:bg-brand-cyan/10 hover:border-brand-cyan/20 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-brand-cyan transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={SITE.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-neutral-100 hover:bg-brand-cyan/10 hover:border-brand-cyan/20 border border-neutral-200 flex items-center justify-center text-neutral-500 hover:text-brand-cyan transition-all duration-200"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 border border-brand-cyan/20 shadow-card text-center h-full flex flex-col items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-brand-cyan" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Message Sent</h3>
                  <p className="text-neutral-500 max-w-sm leading-relaxed">
                    Thank you for reaching out. A member of our consulting team will contact you
                    within one business day.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-2xl p-8 border border-neutral-200 shadow-card space-y-5"
                >
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-1">Send Us a Message</h3>
                    <p className="text-sm text-neutral-500">All fields marked * are required.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                        Work Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Corporation"
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                      Enquiry Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors bg-white"
                    >
                      <option value="">Select enquiry type</option>
                      {enquiryTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-brand-navy mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your initiative, challenge, or requirements. The more detail you provide, the more tailored our response will be."
                      className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 text-sm text-neutral-800 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan/30 focus:border-brand-cyan transition-colors resize-none"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="lg" className="w-full justify-center">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </Button>

                  <p className="text-xs text-neutral-400 text-center">
                    By submitting this form you agree to our{" "}
                    <a href="/privacy" className="underline hover:text-neutral-600">
                      Privacy Policy
                    </a>
                    . We never share your data with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
