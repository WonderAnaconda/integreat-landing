"use client"; 

// export const metadata = {
//   title: "Integreat - AI-Powered Business Solutions",
//   description: "Transform your business with AI-driven automation and intelligent solutions",
// };

import PageIllustration from "@/components/page-illustration";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MetaHead from "@/components/MetaHead";

export default function Home() {
  return (
    <>
      <MetaHead />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}
