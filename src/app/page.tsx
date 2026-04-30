import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Marquee } from "@/components/home/Marquee";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { HowWeEngage } from "@/components/home/HowWeEngage";
import { StatsSection } from "@/components/home/StatsSection";
import { BentoSection } from "@/components/home/BentoSection";
import { CaseStudies } from "@/components/home/CaseStudies";
import { Testimonials } from "@/components/home/Testimonials";
import { TechStackSection } from "@/components/home/TechStackSection";
import { IndustriesStrip } from "@/components/home/IndustriesStrip";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Renown360 — Enterprise IT Consulting & Staffing Solutions",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <WhyUsSection />
      <ServicesSection />
      <HowWeEngage />
      <StatsSection />
      <BentoSection />
      <CaseStudies />
      <Testimonials />
      <TechStackSection />
      <IndustriesStrip />
      <CTASection />
    </>
  );
}
