import FeaturesSection from "@/components/features-8";
import FooterSection from "@/components/footer";
import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";
import React from "react";
import WebsiteHero from "@/components/website-hero";
import MobileViewStore from "@/components/mobile-view-store";
import Features from "@/components/more-fetures-section";

async function IntroPage() {
  return (
    <div className="  relative ">
      <div
        className="absolute inset-0 z-0 block dark:hidden"
        style={{
          backgroundImage: `
        linear-gradient(to right, #f0f0f0 1px, transparent 1px),
        linear-gradient(to bottom, #f0f0f0 1px, transparent 1px),
        radial-gradient(circle 800px at 100% 200px, #d5c5ff, transparent)
      `,
          backgroundSize: "96px 64px, 96px 64px, 100% 100%",
        }}
      />

      <div
        className="fixed hidden dark:block inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
        }}
      />

      <HeroHeader />
      <HeroSection />
      <FeaturesSection />
      <Features />
      <WebsiteHero />
      <MobileViewStore />

      <FooterSection />
    </div>
  );
}

export default IntroPage;
