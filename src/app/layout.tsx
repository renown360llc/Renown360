import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { BackToTop } from "@/components/ui/BackToTop";
import { FloatingCTA } from "@/components/ui/FloatingCTA";
import { CookieBanner } from "@/components/ui/CookieBanner";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.fullName} — Enterprise IT Consulting & Staffing`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "IT consulting", "IT staffing", "enterprise consulting", "cloud migration",
    "digital transformation", "ERP consulting", "SAP consulting",
    "Salesforce consulting", "software development", "Wyoming", "USA", "Renown360",
  ],
  authors: [{ name: SITE.fullName, url: SITE.url }],
  creator: SITE.fullName,
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.fullName,
    title: `${SITE.fullName} — Enterprise IT Consulting & Staffing`,
    description: SITE.description,
    images: [{ url: "/logo.jpeg", width: 1200, height: 630, alt: SITE.fullName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.fullName} — Enterprise IT Consulting & Staffing`,
    description: SITE.description,
    creator: "@renown360",
    images: ["/logo.jpeg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
};

export const viewport: Viewport = {
  themeColor: "#0b1f3a",
  width: "device-width",
  initialScale: 1,
};

// JSON-LD Structured Data
function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.fullName,
        url: SITE.url,
        logo: { "@type": "ImageObject", url: `${SITE.url}/logo.jpeg` },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: SITE.phone,
          email: SITE.email,
          contactType: "customer service",
          areaServed: ["US", "CA"],
          availableLanguage: "English",
        },
        sameAs: [SITE.social.linkedin, SITE.social.twitter],
        description: SITE.description,
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#localbusiness`,
        name: SITE.fullName,
        image: `${SITE.url}/logo.jpeg`,
        url: SITE.url,
        telephone: SITE.phone,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: SITE.address.line1,
          addressLocality: SITE.address.city,
          addressRegion: SITE.address.state,
          postalCode: SITE.address.zip,
          addressCountry: SITE.address.country,
        },
        geo: { "@type": "GeoCoordinates", latitude: 44.7977, longitude: -106.9562 },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        priceRange: "$$",
        servesCuisine: undefined,
        description: SITE.description,
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <FloatingCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
