import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import HowItWorks from "@/components/sections/HowItWorks";
import PackagesPreview from "@/components/sections/PackagesPreview";
import WhitebookSection from "@/components/sections/WhitebookSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <TrustSection />
      <HowItWorks />
      <PackagesPreview />
      <WhitebookSection />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </>
  );
}
