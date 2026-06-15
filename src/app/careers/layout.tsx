import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Renown360 — IT consulting careers placing skilled professionals on Fortune 500 cloud, ERP, data, and software engineering engagements. W2 & C2C, competitive rates.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
