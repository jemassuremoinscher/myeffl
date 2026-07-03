import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Check } from "lucide-react";

const packageKeys = ["discovery","regular","intensive"] as const;

const cardStyles = [
  { bg:"bg-container-tertiary", title:"text-primary", price:"text-primary", feat:"text-on-muted", btn:"bg-primary text-on-primary", tag:null },
  { bg:"bg-primary", title:"text-on-primary", price:"text-on-primary", feat:"text-on-primary/70", btn:"bg-secondary text-on-secondary", tag:"Most popular" },
  { bg:"bg-container-secondary", title:"text-on-surface", price:"text-on-surface", feat:"text-on-muted", btn:"bg-primary text-on-primary", tag:null },
];

export default function PackagesPreview() {
  const t = useTranslations("packages");
  const locale = useLocale();

  return (
    <section className="py-24 px-4 bg-surface-dim">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Pricing</p>
          <h2 className="text-display-sm font-black text-on-surface mb-4">{t("title")}</h2>
          <p className="text-on-muted max-w-sm mx-auto text-sm">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 items-start">
          {packageKeys.map((key, idx) => {
            const s = cardStyles[idx];
            const isMain = idx === 1;
            return (
              <div key={key}
                className={`relative ${s.bg} rounded-5xl p-8 flex flex-col overflow-hidden shadow-elevation-1 hover:shadow-elevation-3 transition-all ${isMain ? "scale-105 shadow-elevation-3" : ""}`}>
                {/* Blob */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-10 bg-current pointer-events-none" style={{transform:"translate(40%,-40%)"}}/>

                {s.tag && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-secondary text-on-secondary text-[10px] font-bold px-3 py-1 rounded-full">
                      {t("popular")}
                    </span>
                  </div>
                )}

                <div className="mb-6 relative z-10">
                  <h3 className={`text-lg font-black mb-1 ${s.title}`}>{t(`${key}.name`)}</h3>
                  <p className={`text-xs ${s.feat}`}>{t(`${key}.desc`)}</p>
                </div>

                <div className="relative z-10 mb-2">
                  <span className={`text-5xl font-black ${s.price}`}>{t(`${key}.price`)}</span>
                </div>
                <p className={`text-xs mb-7 relative z-10 ${s.feat}`}>{t(`${key}.sessions`)}</p>

                <ul className="space-y-3 mb-8 flex-1 relative z-10">
                  {(["feature1","feature2","feature3"] as const).map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isMain?"bg-secondary":"bg-primary"}`}>
                        <Check size={11} className={isMain?"text-on-secondary":"text-on-primary"} strokeWidth={3}/>
                      </div>
                      <span className={`text-sm ${s.feat}`}>{t(`${key}.${f}`)}</span>
                    </li>
                  ))}
                </ul>

                <Link href={`/${locale}/contact`}
                  className={`w-full text-center py-3.5 rounded-full font-semibold text-sm transition-all shadow-elevation-1 hover:shadow-elevation-2 md3-state-layer relative z-10 ${s.btn}`}>
                  {t("cta")}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="text-center text-on-muted text-xs mt-8 flex items-center justify-center gap-3">
          <span>✓ First session free</span>
          <span className="w-1 h-1 rounded-full bg-outline-variant"/>
          <span>✓ No hidden fees</span>
          <span className="w-1 h-1 rounded-full bg-outline-variant"/>
          <span>✓ Cancel anytime</span>
        </p>
      </div>
    </section>
  );
}
