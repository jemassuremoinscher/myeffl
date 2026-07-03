import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Check } from "lucide-react";

const packageKeys = ["discovery", "regular", "intensive"] as const;

export default function PackagesPreview() {
  const t = useTranslations("packages");
  const locale = useLocale();

  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">{t("title")}</h2>
          <p className="text-ink-muted text-base max-w-sm mx-auto">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packageKeys.map((key, idx) => {
            const isPopular = key === "regular";
            return (
              <div
                key={key}
                className={`relative rounded-2xl p-7 flex flex-col transition-all ${
                  isPopular
                    ? "bg-green-800 text-cream shadow-2xl scale-105"
                    : "bg-cream border border-green-100 hover:border-green-300 hover:shadow-md"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-400 text-green-950 text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
                      {t("popular")}
                    </span>
                  </div>
                )}

                <div className="mb-5">
                  <h3 className={`text-lg font-bold mb-1 ${isPopular ? "text-cream" : "text-ink"}`}>
                    {t(`${key}.name`)}
                  </h3>
                  <p className={`text-xs ${isPopular ? "text-green-200" : "text-ink-muted"}`}>
                    {t(`${key}.desc`)}
                  </p>
                </div>

                <div className={`text-4xl font-bold mb-1 ${isPopular ? "text-cream" : "text-green-800"}`}>
                  {t(`${key}.price`)}
                </div>
                <p className={`text-xs mb-6 ${isPopular ? "text-green-200" : "text-ink-muted"}`}>
                  {t(`${key}.sessions`)}
                </p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {(["feature1","feature2","feature3"] as const).map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm">
                      <Check
                        size={15}
                        className={`mt-0.5 flex-shrink-0 ${isPopular ? "text-gold-400" : "text-green-700"}`}
                      />
                      <span className={isPopular ? "text-green-100" : "text-ink-light"}>
                        {t(`${key}.${feat}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/contact`}
                  className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                    isPopular
                      ? "bg-gold-400 text-green-950 hover:bg-gold-300"
                      : "bg-green-800 text-cream hover:bg-green-900"
                  }`}
                >
                  {t("cta")}
                </Link>
              </div>
            );
          })}
        </div>

        <p className="text-center text-ink-muted text-xs mt-8">
          ✓ First session free &nbsp;·&nbsp; ✓ No hidden fees &nbsp;·&nbsp; ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
}
