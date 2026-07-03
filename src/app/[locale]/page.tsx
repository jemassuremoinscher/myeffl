import { useTranslations } from "next-intl";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import HowItWorks from "@/components/sections/HowItWorks";
import PackagesPreview from "@/components/sections/PackagesPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <HowItWorks />
      <PackagesPreview />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
