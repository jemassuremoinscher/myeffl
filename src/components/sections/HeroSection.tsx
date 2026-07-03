import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="bg-cream pt-20 pb-28 px-4">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <p className="label mb-8">Professional English Coaching · Dubai</p>

            <h1 className="text-[clamp(2.6rem,5.5vw,4.2rem)] font-black text-ink leading-[1.05] mb-6">
              {t("title")}<br />
              <span className="text-primary">{t("title2")}</span>
            </h1>

            <div className="divider" />

            <p className="text-base text-muted leading-[1.8] mb-10 max-w-[44ch]">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-3 mb-14">
              <Link href={`/${locale}/contact`} className="btn-primary">
                {t("cta")} <ArrowRight size={15}/>
              </Link>
              <Link href={`/${locale}/packages`} className="btn-outline">
                {t("cta_secondary")}
              </Link>
            </div>

            {/* Proof row */}
            <div className="flex flex-wrap items-center gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-black text-ink">500+</p>
                <p className="text-xs text-muted mt-0.5">Professionals coached</p>
              </div>
              <div className="w-px h-8 bg-border"/>
              <div>
                <p className="text-2xl font-black text-ink">4.9<span className="text-gold">★</span></p>
                <p className="text-xs text-muted mt-0.5">Average rating</p>
              </div>
              <div className="w-px h-8 bg-border"/>
              <div>
                <p className="text-2xl font-black text-ink">10+</p>
                <p className="text-xs text-muted mt-0.5">Years experience</p>
              </div>
            </div>
          </div>

          {/* RIGHT — Kate */}
          <div className="relative">
            {/* Fond vert profond */}
            <div className="bg-primary rounded-2xl aspect-[4/5] max-w-[400px] mx-auto relative overflow-hidden flex items-center justify-center">

              {/* Placeholder portrait */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-32 h-32 rounded-full bg-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 80 80" width="64" height="64" fill="currentColor" className="text-white/30">
                    <circle cx="40" cy="27" r="16"/>
                    <path d="M8 72c0-17.7 14.3-32 32-32s32 14.3 32 32"/>
                  </svg>
                </div>
                <p className="text-white/40 text-sm font-medium">Kate · Photo coming soon</p>
              </div>

              {/* Accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold"/>

              {/* Bottom credential strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-ink/70 backdrop-blur-sm px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest">Coach</p>
                  <p className="text-sm font-bold text-ink-inv">CELTA Certified · 🇷🇺 🇬🇧 🇫🇷</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-white/50">Based in</p>
                  <p className="text-sm font-bold text-ink-inv">Dubai, UAE</p>
                </div>
              </div>
            </div>

            {/* Side note — discrete */}
            <p className="absolute -bottom-8 right-0 text-[11px] text-muted italic text-right">
              Teaches online · All time zones
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
