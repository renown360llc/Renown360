import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-neutral lg:prose-lg">
        <h1 className="text-brand-navy">Privacy Policy</h1>
        <p className="text-neutral-500 text-sm">Last updated: April 2026</p>
        <p>
          Renown360 LLC (&quot;Renown360&quot;, &quot;we&quot;, &quot;us&quot;) is committed to
          protecting your personal information. This policy explains what data we collect, how we
          use it, and your rights.
        </p>
        <h2>Information We Collect</h2>
        <p>
          We collect information you provide directly (name, email, phone, company) when you fill
          out forms on this website. We also collect standard server logs (IP address, browser type,
          pages visited) for security and analytics purposes.
        </p>
        <h2>How We Use Your Information</h2>
        <p>
          We use your information solely to respond to your enquiries, process applications, and
          improve our services. We do not sell or rent your data to third parties.
        </p>
        <h2>Data Retention</h2>
        <p>
          We retain contact form submissions for up to 24 months. You may request deletion at any
          time by emailing{" "}
          <a href={`mailto:${SITE.email}`} className="text-brand-cyan">
            {SITE.email}
          </a>
          .
        </p>
        <h2>Contact</h2>
        <p>
          For privacy-related questions, contact us at{" "}
          <a href={`mailto:${SITE.email}`} className="text-brand-cyan">
            {SITE.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
