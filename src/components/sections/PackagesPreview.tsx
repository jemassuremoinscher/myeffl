import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Check } from "lucide-react";

const packageKeys = ["discovery", "regular", "group", "intensive"] as const;

export default function PackagesPreview() {
  const t = useTranslations("packages");
  const locale = useLocale();

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packageKeys.map((key, idx) => {
            const isPopular = key === "regular";
            return (
              <div
                key={key}
                className={`relative rounded-2xl p-6 flex flex-col transition-all hover:shadow-xl ${
                  isPopular
                    ? "bg-navy-500 text-white shadow-xl shadow-navy-500/20 scale-105"
                    : "bg-white border border-gray-200 text-gray-900 hover:border-navy-500/30"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-400 text-navy-500 text-xs font-bold px-3 py-1 rounded-full">
                      {t("popular")}
                    </span>
                  </div>
                )}

                <h3 className={`text-lg font-bold mb-1 ${isPopular ? "text-white" : "text-navy-500"}`}>
                  {t(`${key}.name`)}
                </h3>
                <p className={`text-sm mb-4 ${isPopular ? "text-blue-200" : "text-gray-500"}`}>
                  {t(`${key}.desc`)}
                </p>
                <div className={`text-4xl font-bold mb-1 ${isPopular ? "text-white" : "text-navy-500"}`}>
                  {t(`${key}.price`)}
                </div>
                <p className={`text-xs mb-6 ${isPopular ? "text-blue-200" : "text-gray-500"}`}>
                  {t(`${key}.sessions`)}
                </p>

                <ul className="space-y-2 mb-8 flex-1">
                  {["feature1", "feature2", "feature3"].map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm">
                      <Check
                        size={16}
                        className={isPopular ? "text-gold-400 flex-shrink-0" : "text-navy-500 flex-shrink-0"}
                      />
                      <span className={isPopular ? "text-blue-100" : "text-gray-700"}>
                        {t(`${key}.${feat}`)}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/${locale}/packages`}
                  className={`block w-full text-center py-2.5 rounded-xl font-bold text-sm transition-all ${
                    isPopular
                      ? "bg-white text-navy-500 hover:bg-gray-100"
                      : "bg-navy-500 text-white hover:bg-navy-600"
                  }`}
                >
                  {t("cta")}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
