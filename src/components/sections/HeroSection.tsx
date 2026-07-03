import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="bg-cream pt-12 pb-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT — Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
              Dubai · Online · Worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-ink leading-[1.1] mb-5">
              {t("title")}{" "}
              <span className="text-green-800">{t("title2")}</span>
            </h1>

            <p className="text-lg text-ink-muted leading-relaxed mb-8 max-w-md">
              {t("subtitle")}
            </p>

            {/* Social proof mini */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-green-800 border-2 border-cream flex items-center justify-center text-cream text-xs font-bold">
                    {["A","М","D","K"][i-1]}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={12} className="fill-gold-400 text-gold-400" />
                  ))}
                </div>
                <p className="text-xs text-ink-muted">500+ professionals coached</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-green-800 text-cream px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-green-900 transition-all group"
              >
                {t("cta")}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href={`/${locale}/packages`}
                className="inline-flex items-center justify-center gap-2 border border-green-800 text-green-800 px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-green-50 transition-all"
              >
                {t("cta_secondary")}
              </Link>
            </div>
          </div>

          {/* RIGHT — Kate placeholder */}
          <div className="relative">
            <div className="relative bg-green-100 rounded-2xl aspect-[4/5] max-w-sm mx-auto flex flex-col items-center justify-center overflow-hidden">
              {/* Placeholder silhouette */}
              <div className="w-32 h-32 rounded-full bg-green-800/20 flex items-center justify-center mb-4">
                <svg viewBox="0 0 80 80" className="w-20 h-20 text-green-800/40" fill="currentColor">
                  <circle cx="40" cy="28" r="16" />
                  <path d="M8 72c0-17.7 14.3-32 32-32s32 14.3 32 32" />
                </svg>
              </div>
              <p className="text-green-800/50 text-sm font-medium">Photo de Kate</p>
              <p className="text-green-800/30 text-xs mt-1">À ajouter</p>

              {/* Floating card — credentials */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur rounded-xl p-3 shadow-lg">
                <p className="text-xs font-bold text-green-800 mb-1">Kate</p>
                <p className="text-xs text-ink-muted">CELTA Certified · 10+ years</p>
                <div className="flex items-center gap-1 mt-1.5">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={10} className="fill-gold-400 text-gold-400" />
                  ))}
                  <span className="text-xs text-ink-muted ml-1">4.9</span>
                </div>
              </div>

              {/* Floating badge — languages */}
              <div className="absolute top-4 right-4 bg-green-800 text-cream text-xs font-bold px-2.5 py-1.5 rounded-lg">
                🇷🇺 🇬🇧
              </div>
            </div>

            {/* Decorative dot grid */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20 pointer-events-none"
              style={{backgroundImage: "radial-gradient(#004225 1.5px, transparent 0)", backgroundSize: "12px 12px"}}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
