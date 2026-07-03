import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-navy-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">✨</span>
              </div>
              <div>
                <p className="font-bold text-white">EFFL</p>
                <p className="text-xs text-blue-200">English for Future Leaders</p>
              </div>
            </div>
            <p className="text-blue-200 text-sm max-w-xs leading-relaxed">
              {t("tagline")}
            </p>
            <p className="text-blue-200 text-sm mt-2">📍 Dubai, UAE • 🌍 Worldwide</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">{t("links_title")}</h4>
            <ul className="space-y-2">
              {["home", "packages", "about", "blog"].map((key) => (
                <li key={key}>
                  <Link
                    href={`/${locale}/${key === "home" ? "" : key}`}
                    className="text-blue-200 hover:text-white text-sm transition-colors capitalize"
                  >
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm">{t("legal_title")}</h4>
            <ul className="space-y-2">
              <li>
                <Link href={`/${locale}/legal/terms`} className="text-blue-200 hover:text-white text-sm transition-colors">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/legal/privacy`} className="text-blue-200 hover:text-white text-sm transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/legal/refund`} className="text-blue-200 hover:text-white text-sm transition-colors">
                  {t("refund")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-blue-200 text-xs">{t("copy")}</p>
        </div>
      </div>
    </footer>
  );
}
