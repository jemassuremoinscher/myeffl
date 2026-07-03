import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function CTASection() {
  const t = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="bg-green-800 rounded-3xl px-8 py-14 text-center relative overflow-hidden">
          {/* Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{backgroundImage: "radial-gradient(#fff 1.5px, transparent 0)", backgroundSize: "20px 20px"}}
          />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-gold-400/20 text-gold-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              🎯 Free first session
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-4 leading-tight">
              {t("title")}
            </h2>
            <p className="text-green-200 mb-8 max-w-md mx-auto text-base leading-relaxed">
              {t("subtitle")}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 bg-gold-400 text-green-950 px-8 py-4 rounded-xl font-bold text-base hover:bg-gold-300 transition-all"
            >
              {t("button")} →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
