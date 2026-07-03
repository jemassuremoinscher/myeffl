import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="bg-cream overflow-hidden">
      <div className="container-xl">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-stretch min-h-[82vh] py-16 lg:py-0">

          {/* LEFT */}
          <div className="flex flex-col justify-center py-16">
            <p className="eyebrow mb-7">Professional English Coaching · Dubai · Online</p>

            <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-black text-ink leading-[1.02] mb-8">
              {t("title")}
              <br/>
              <em className="not-italic text-primary">{t("title2")}</em>
            </h1>

            <p className="text-base sm:text-lg text-muted leading-[1.85] mb-10 max-w-[46ch]">
              {t("subtitle")}
            </p>

            <div className="flex flex-wrap gap-3 mb-14">
              <Link href={`/${locale}/contact`} className="btn-dark">
                {t("cta")} <ArrowRight size={15}/>
              </Link>
              <Link href={`/${locale}/packages`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink border border-border px-6 py-3.5 rounded-xl hover:bg-cream-dark transition-colors">
                {t("cta_secondary")}
              </Link>
            </div>

            {/* Stats inline — BetterUp style */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              {[
                { val:"500+",   lab:"Professionals coached" },
                { val:"4.9/5",  lab:"Average rating" },
                { val:"10 yrs", lab:"Teaching experience" },
              ].map(s => (
                <div key={s.lab}>
                  <p className="text-3xl font-black text-ink">{s.val}</p>
                  <p className="text-xs text-muted mt-1">{s.lab}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Kate — pleine hauteur */}
          <div className="hidden lg:flex flex-col relative">
            {/* Full-height green card */}
            <div className="flex-1 bg-primary flex flex-col items-center justify-center relative overflow-hidden">
              {/* Texture subtile */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"14px 14px"}}/>

              {/* Placeholder */}
              <div className="relative z-10 flex flex-col items-center gap-4 px-8">
                <div className="w-36 h-36 rounded-full bg-white/10 ring-2 ring-gold/40 flex items-center justify-center">
                  <svg viewBox="0 0 80 80" width="72" height="72" fill="currentColor" className="text-white/25">
                    <circle cx="40" cy="26" r="16"/>
                    <path d="M8 72c0-17.7 14.3-32 32-32s32 14.3 32 32"/>
                  </svg>
                </div>
                <p className="text-white/30 text-sm text-center">Kate's photo<br/>coming soon</p>
              </div>

              {/* Bottom strip */}
              <div className="absolute bottom-0 left-0 right-0 bg-ink/80 backdrop-blur-sm px-6 py-5">
                <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Your coach</p>
                <p className="text-on-dark font-bold text-sm">CELTA Certified · 10+ years</p>
                <p className="text-white/50 text-xs mt-0.5">🇷🇺 Native Russian · 🇬🇧 Fluent English · 🇫🇷 French</p>
              </div>
            </div>

            {/* Gold accent line */}
            <div className="h-2 bg-gold"/>
          </div>
        </div>
      </div>
    </section>
  );
}
