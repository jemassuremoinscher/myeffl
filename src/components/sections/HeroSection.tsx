import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="bg-surface overflow-hidden pt-10 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] gap-10 items-center">

          {/* LEFT */}
          <div>
            {/* Eyebrow chip */}
            <div className="inline-flex items-center gap-2 bg-container-primary text-primary text-xs font-semibold px-4 py-2 rounded-full mb-8 shadow-elevation-1">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Dubai · Online · Worldwide
            </div>

            {/* Headline */}
            <h1 className="text-display-lg font-black text-on-surface mb-6">
              {t("title")}
              <br />
              <span className="text-primary relative inline-block">
                {t("title2")}
                {/* Underline decoration */}
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 8 Q75 2 150 8 Q225 14 298 8" stroke="#C9A96E" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            <p className="text-lg text-on-muted leading-relaxed mb-10 max-w-xl">
              {t("subtitle")}
            </p>

            {/* Social proof row */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex -space-x-2">
                {["A","М","D","K"].map((l, i) => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-surface bg-primary flex items-center justify-center text-on-primary text-xs font-bold shadow-elevation-1">
                    {l}
                  </div>
                ))}
              </div>
              <div className="h-8 w-px bg-outline-variant" />
              <div>
                <div className="flex items-center gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-secondary text-secondary"/>)}
                  <span className="text-sm font-bold text-on-surface ml-1">4.9</span>
                </div>
                <p className="text-xs text-on-muted">500+ professionals coached</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-7 py-4 rounded-full font-semibold text-base shadow-elevation-2 hover:shadow-elevation-3 transition-all group md3-state-layer">
                {t("cta")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href={`/${locale}/packages`}
                className="inline-flex items-center gap-2 bg-container-secondary text-on-secondary px-7 py-4 rounded-full font-semibold text-base hover:shadow-elevation-1 transition-all md3-state-layer">
                {t("cta_secondary")}
              </Link>
            </div>
          </div>

          {/* RIGHT — Kate card */}
          <div className="relative">
            {/* Main card */}
            <div className="bg-container-primary rounded-5xl overflow-hidden aspect-[3/4] relative shadow-elevation-3 flex flex-col items-center justify-center">

              {/* Blob background */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/20 rounded-full blur-2xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

              {/* Silhouette */}
              <div className="relative z-10 flex flex-col items-center gap-2 mb-6">
                <div className="w-28 h-28 rounded-full bg-primary/20 flex items-center justify-center">
                  <svg viewBox="0 0 80 80" className="w-18 h-18 text-primary/50" fill="currentColor" width="72" height="72">
                    <circle cx="40" cy="26" r="15"/>
                    <path d="M8 72c0-17.7 14.3-32 32-32s32 14.3 32 32"/>
                  </svg>
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-primary/60 text-sm font-semibold">Kate · Coach</p>
                  <p className="text-primary/40 text-xs">Photo coming soon</p>
                </div>
              </div>

              {/* Bottom info card */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur rounded-4xl p-4 shadow-elevation-2">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-black text-on-surface text-sm">Kate</p>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_,i) => <Star key={i} size={11} className="fill-secondary text-secondary"/>)}
                  </div>
                </div>
                <div className="flex gap-1.5 flex-wrap">
                  {["CELTA", "10+ years", "🇷🇺🇬🇧"].map(tag => (
                    <span key={tag} className="text-[10px] font-semibold bg-container-primary text-primary px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating chips */}
            <div className="absolute -top-3 -right-3 bg-primary text-on-primary text-xs font-bold px-4 py-2 rounded-full shadow-elevation-2 rotate-3">
              Free trial ✨
            </div>
            <div className="absolute top-1/2 -left-8 bg-surface shadow-elevation-3 text-[11px] font-semibold text-on-surface px-3 py-2 rounded-2xl -rotate-2 hidden md:block">
              🎯 Intermediate+ only
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
