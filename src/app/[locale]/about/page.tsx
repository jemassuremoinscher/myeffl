import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  return (
    <main>
      <section className="bg-cream section-pad">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0 relative bg-primary">
                <Image src="/kate.jpg" alt="Katsiaryna" fill className="object-cover object-top"/>
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent"/>
                <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                  <p className="text-[10px] text-white/45 uppercase tracking-widest mb-1">Your coach</p>
                  <p className="text-on-dark font-bold text-sm">Katsiaryna · CELTA Certified</p>
                </div>
              </div>
              <div className="absolute -bottom-0 left-0 right-0 h-1.5 bg-gold max-w-sm mx-auto lg:mx-0"/>
            </div>

            <div>
              <p className="eyebrow mb-5">{t("title")}</p>
              <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-ink leading-tight mb-4">
                {t("subtitle")}
              </h1>
              <div className="w-10 h-0.5 bg-gold mb-8"/>
              <p className="text-muted leading-[1.85] mb-5">{t("bio")}</p>
              <p className="text-ink font-semibold leading-[1.85] mb-8 italic">"{t("bio2")}"</p>
              <ul className="space-y-3 mb-10">
                {(["feature1","feature2","feature3"] as const).map(f => (
                  <li key={f} className="flex items-center gap-3">
                    <Check size={15} className="text-primary flex-shrink-0" strokeWidth={2.5}/>
                    <span className="text-sm font-medium text-ink-soft">{t(f)}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted border-t border-border pt-6 mb-8">{t("creds")}</p>
              <Link href={`/${locale}/contact`} className="btn-dark">{t("cta")}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container-xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { val:"CELTA", lab:"Cambridge Certification" },
              { val:"10+",   lab:"Years of experience" },
              { val:"3",     lab:"Languages taught in" },
            ].map(({ val, lab }) => (
              <div key={lab} className="py-8 px-8 text-center">
                <p className="text-3xl font-black text-on-dark mb-1">{val}</p>
                <p className="text-xs text-white/50">{lab}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
