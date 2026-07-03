import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Check } from "lucide-react";

const packageKeys = ["discovery","regular","intensive"] as const;

export default function PackagesPreview() {
  const t = useTranslations("packages");
  const locale = useLocale();

  return (
    <section className="section-pad bg-cream">
      <div className="container-xl">

        <div className="mb-14">
          <p className="eyebrow mb-5">Pricing</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-black text-ink">
              {t("title")}
            </h2>
            <p className="text-sm text-muted max-w-[36ch] sm:text-right">{t("subtitle")}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {packageKeys.map((key, idx) => {
            const isMain = idx === 1;
            return (
              <div key={key}
                className={`rounded-2xl flex flex-col overflow-hidden transition-all
                  ${isMain
                    ? "bg-ink text-on-dark shadow-2xl scale-[1.02]"
                    : "bg-cream-dark border border-border hover:border-ink/30"
                  }`}>

                {/* Header */}
                <div className={`px-7 pt-7 pb-6 ${isMain ? "border-b border-white/10" : "border-b border-border"}`}>
                  {isMain && (
                    <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-gold text-ink px-3 py-1 rounded-full mb-4">
                      {t("popular")}
                    </span>
                  )}
                  <h3 className={`text-lg font-black mb-1.5 ${isMain ? "text-on-dark" : "text-ink"}`}>
                    {t(`${key}.name`)}
                  </h3>
                  <p className={`text-xs ${isMain ? "text-white/50" : "text-muted"}`}>
                    {t(`${key}.desc`)}
                  </p>
                </div>

                {/* Price */}
                <div className="px-7 py-6 flex-1 flex flex-col">
                  <div className="mb-7">
                    <span className={`text-5xl font-black ${isMain ? "text-on-dark" : "text-ink"}`}>
                      {t(`${key}.price`)}
                    </span>
                    <p className={`text-xs mt-1.5 ${isMain ? "text-white/40" : "text-muted"}`}>
                      {t(`${key}.sessions`)}
                    </p>
                  </div>

                  <ul className="space-y-3.5 flex-1 mb-8">
                    {(["feature1","feature2","feature3"] as const).map(f => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={14} className={`mt-0.5 flex-shrink-0 ${isMain ? "text-gold" : "text-primary"}`} strokeWidth={2.5}/>
                        <span className={`text-sm leading-snug ${isMain ? "text-white/75" : "text-ink-soft"}`}>
                          {t(`${key}.${f}`)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/${locale}/contact`}
                    className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                      isMain
                        ? "bg-gold text-ink hover:bg-gold-light"
                        : "bg-ink text-on-dark hover:bg-ink-soft"
                    }`}>
                    {t("cta")}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-muted mt-8">
          First session included · No hidden fees · Cancel anytime
        </p>
      </div>
    </section>
  );
}
