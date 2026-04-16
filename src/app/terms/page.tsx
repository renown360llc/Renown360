import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = { title: "Terms of Service" };

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral lg:prose-lg">
        <h1 className="text-brand-navy">Terms of Service</h1>
        <p className="text-neutral-500 text-sm">Last updated: April 2026</p>
        <p>
          By accessing renown360.com you agree to these Terms of Service. If you do not agree,
          please do not use this website.
        </p>
        <h2>Use of This Website</h2>
        <p>
          This website is provided for informational purposes only. You may not use it for any
          unlawful purpose or in a way that could damage Renown360 LLC or any third party.
        </p>
        <h2>Intellectual Property</h2>
        <p>
          All content on this website — including text, graphics, logos, and code — is the
          property of Renown360 LLC and is protected by applicable copyright law.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          Renown360 LLC shall not be liable for any indirect, incidental, or consequential
          damages arising from your use of this website.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these Terms?{" "}
          <a href={`mailto:${SITE.email}`} className="text-brand-cyan">
            {SITE.email}
          </a>
        </p>
      </div>
    </section>
  );
}
