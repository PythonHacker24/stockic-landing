import Image from "next/image";
import HeroSection from "@/src/components/hero-section";
import Features from "@/src/components/features-1"
import StatsSection from "@/src/components/stats"
import StatsSectionTime from "@/src/components/stats-time"
import ContentSection from "@/src/components/content-4"

import FooterSection from "@/src/components/footer"

export default function Home() {
  return (
      <div>
        <HeroSection />
        <StatsSectionTime />
        <Features />
        <StatsSection />
        <ContentSection />
        <FooterSection />
      </div>
  );
}
