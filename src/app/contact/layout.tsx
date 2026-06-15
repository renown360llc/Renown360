import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Renown360 to scope your IT staffing or consulting needs. We respond within 4 business hours and shortlist pre-vetted candidates within the week.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
