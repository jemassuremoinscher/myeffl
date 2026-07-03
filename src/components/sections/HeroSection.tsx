import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white pt-20 pb-28 px-4">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-navy-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-navy-500/10 text-navy-500 text-sm font-semibold px-4 py-1.5 rounded-full mb-8">
          <span>🎯</span>
          <span>Intermediate+ Russian Speakers</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-500 leading-tight mb-2">
          {t("title")}
        </h1>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-500 leading-tight mb-6">
          {t("title2")}
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("subtitle")}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-2 bg-navy-500 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-navy-600 transition-all hover:shadow-lg hover:shadow-navy-500/25 group"
          >
            {t("cta")}
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`/${locale}/packages`}
            className="inline-flex items-center justify-center gap-2 bg-white border-2 border-navy-500 text-navy-500 px-8 py-4 rounded-xl font-bold text-base hover:bg-navy-50 transition-all"
          >
            {t("cta_secondary")}
          </Link>
        </div>
      </div>
    </section>
  );
}
