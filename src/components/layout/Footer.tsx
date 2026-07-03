import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-800 rounded-md flex items-center justify-center">
                <span className="text-gold-400 font-bold text-sm">E</span>
              </div>
              <p className="font-bold text-cream text-sm">EFFL</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{t("tagline")}</p>
            <p className="text-gray-500 text-xs mt-3">📍 Dubai, UAE · 🌍 Online Worldwide</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-cream text-sm mb-4">{t("links_title")}</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: `/${locale}` },
                { label: "Packages", href: `/${locale}/packages` },
                { label: "About", href: `/${locale}/about` },
                { label: "Blog", href: `/${locale}/blog` },
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-gray-400 hover:text-cream text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-cream text-sm mb-4">{t("legal_title")}</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href={`/${locale}/legal/terms`} className="text-gray-400 hover:text-cream text-sm transition-colors">
                  {t("terms")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/legal/privacy`} className="text-gray-400 hover:text-cream text-sm transition-colors">
                  {t("privacy")}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/legal/refund`} className="text-gray-400 hover:text-cream text-sm transition-colors">
                  {t("refund")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-500 text-xs">{t("copy")}</p>
        </div>
      </div>
    </footer>
  );
}
