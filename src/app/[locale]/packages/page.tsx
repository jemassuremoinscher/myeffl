import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { Check } from "lucide-react";

const packageKeys = ["discovery","regular","intensive"] as const;

export default async function PackagesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("packages");

  return (
    <main>
      <section className="bg-cream section-pad">
        <div className="container-xl">
          <div className="mb-14">
            <p className="eyebrow mb-5">Pricing</p>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-ink mb-4">{t("title")}</h1>
            <p className="text-muted max-w-[44ch]">{t("subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {packageKeys.map((key, idx) => {
              const isMain = idx === 1;
              return (
                <div key={key} className={`rounded-2xl flex flex-col overflow-hidden transition-shadow ${
                  isMain ? "bg-ink text-on-dark shadow-2xl scale-[1.02]" : "bg-cream-dark border border-border hover:border-ink/30"
                }`}>
                  <div className={`px-7 pt-7 pb-6 ${isMain ? "border-b border-white/10" : "border-b border-border"}`}>
                    {isMain && (
                      <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-gold text-ink px-3 py-1 rounded-full mb-4">
                        {t("popular")}
                      </span>
                    )}
                    <h2 className={`text-lg font-black mb-1 ${isMain ? "text-on-dark" : "text-ink"}`}>{t(`${key}.name`)}</h2>
                    <p className={`text-xs ${isMain ? "text-white/50" : "text-muted"}`}>{t(`${key}.desc`)}</p>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="mb-7">
                      <span className={`text-5xl font-black ${isMain ? "text-on-dark" : "text-ink"}`}>{t(`${key}.price`)}</span>
                      <p className={`text-xs mt-1 ${isMain ? "text-white/40" : "text-muted"}`}>{t(`${key}.sessions`)}</p>
                    </div>
                    <ul className="space-y-3.5 flex-1 mb-8">
                      {(["feature1","feature2","feature3"] as const).map(f => (
                        <li key={f} className="flex items-start gap-3">
                          <Check size={14} className={`mt-0.5 flex-shrink-0 ${isMain ? "text-gold" : "text-primary"}`} strokeWidth={2.5}/>
                          <span className={`text-sm ${isMain ? "text-white/75" : "text-ink-soft"}`}>{t(`${key}.${f}`)}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={`/${locale}/contact`} className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                      isMain ? "bg-gold text-ink hover:bg-gold-light" : "bg-ink text-on-dark hover:bg-ink-soft"
                    }`}>{t("cta")}</Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-16 bg-cream-dark rounded-2xl p-8 border border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <p className="font-bold text-ink mb-1">Not sure which package is right for you?</p>
              <p className="text-sm text-muted">Book a free 20-minute discovery call and we'll figure it out together.</p>
            </div>
            <Link href={`/${locale}/contact`} className="btn-dark flex-shrink-0">Book free call</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
