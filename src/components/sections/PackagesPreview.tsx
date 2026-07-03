import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Check } from "lucide-react";

const packageKeys = ["discovery","regular","intensive"] as const;

export default function PackagesPreview() {
  const t = useTranslations("packages");
  const locale = useLocale();

  return (
    <section className="section bg-[#F0EDE6]">
      <div className="container-xl">

        <div className="mb-14">
          <p className="label mb-4">Pricing</p>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black text-ink">{t("title")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {packageKeys.map((key, idx) => {
            const isMain = idx === 1;
            return (
              <div key={key} className={`relative rounded-2xl flex flex-col transition-shadow hover:shadow-lg ${
                isMain
                  ? "bg-primary text-ink-inv shadow-xl"
                  : "bg-cream border border-border"
              }`}>
                {isMain && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gold text-ink text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider">
                      {t("popular")}
                    </span>
                  </div>
                )}

                <div className="p-8 pb-6 border-b border-white/10">
                  <h3 className={`text-lg font-black mb-1 ${isMain ? "text-ink-inv" : "text-ink"}`}>
                    {t(`${key}.name`)}
                  </h3>
                  <p className={`text-sm ${isMain ? "text-white/60" : "text-muted"}`}>
                    {t(`${key}.desc`)}
                  </p>
                </div>

                <div className="p-8 pt-6 flex-1 flex flex-col">
                  <div className="mb-6">
                    <span className={`text-5xl font-black ${isMain ? "text-ink-inv" : "text-ink"}`}>
                      {t(`${key}.price`)}
                    </span>
                    <p className={`text-xs mt-1 ${isMain ? "text-white/50" : "text-muted"}`}>
                      {t(`${key}.sessions`)}
                    </p>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {(["feature1","feature2","feature3"] as const).map(f => (
                      <li key={f} className="flex items-start gap-3">
                        <Check size={14} className={`mt-0.5 flex-shrink-0 ${isMain ? "text-gold" : "text-primary"}`} strokeWidth={2.5}/>
                        <span className={`text-sm ${isMain ? "text-white/80" : "text-muted"}`}>
                          {t(`${key}.${f}`)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/${locale}/contact`}
                    className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                      isMain
                        ? "bg-gold text-ink hover:bg-[#D9BC8E]"
                        : "bg-primary text-ink-inv hover:bg-[#003520]"
                    }`}>
                    {t("cta")}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-muted mt-8 text-center">
          First session included · No hidden fees · Cancel anytime
        </p>
      </div>
    </section>
  );
}
