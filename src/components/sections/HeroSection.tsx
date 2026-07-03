import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="bg-cream overflow-hidden">
      <div className="container-xl">
        <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-16 items-stretch min-h-[88vh] py-16 lg:py-0">

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

            {/* Stats inline */}
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

          {/* RIGHT — Kate photo, pleine hauteur */}
          <div className="hidden lg:flex flex-col relative">
            <div className="flex-1 bg-primary relative overflow-hidden">
              {/* Photo de Kate */}
              <Image
                src="/kate.jpg"
                alt="Katsiaryna — English Coach"
                fill
                className="object-cover object-top"
                priority
              />

              {/* Overlay gradient bas */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"/>

              {/* Credential strip */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-5 z-10">
                <p className="text-[10px] text-white/45 uppercase tracking-widest mb-1">Your coach</p>
                <p className="text-on-dark font-bold text-sm">Katsiaryna · CELTA Certified · 10+ years</p>
                <p className="text-white/50 text-xs mt-0.5">🇷🇺 Russian · 🇬🇧 English · 🇫🇷 French</p>
              </div>
            </div>

            {/* Gold accent */}
            <div className="h-2 bg-gold flex-shrink-0"/>
          </div>

        </div>
      </div>
    </section>
  );
}
