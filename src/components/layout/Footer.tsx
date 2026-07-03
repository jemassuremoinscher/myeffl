import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-on-surface text-surface-bright">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-primary rounded-2xl flex items-center justify-center shadow-elevation-1">
                <span className="text-secondary font-black text-base">E</span>
              </div>
              <span className="font-black text-sm tracking-widest uppercase text-surface-bright">EFFL</span>
            </div>
            <p className="text-sm text-surface-dim/60 leading-relaxed max-w-[220px]">{t("tagline")}</p>
            <div className="flex gap-2 mt-5">
              {["🇷🇺","🇬🇧","🇫🇷"].map(f => (
                <span key={f} className="text-xl">{f}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-surface-dim/50 mb-5">{t("links_title")}</h4>
            <ul className="space-y-3">
              {[
                {label:"Home", href:`/${locale}`},
                {label:"Packages", href:`/${locale}/packages`},
                {label:"About", href:`/${locale}/about`},
                {label:"Blog", href:`/${locale}/blog`},
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-surface-dim/60 hover:text-surface-bright transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-surface-dim/50 mb-5">{t("legal_title")}</h4>
            <ul className="space-y-3">
              <li><Link href={`/${locale}/legal/terms`} className="text-sm text-surface-dim/60 hover:text-surface-bright transition-colors">{t("terms")}</Link></li>
              <li><Link href={`/${locale}/legal/privacy`} className="text-sm text-surface-dim/60 hover:text-surface-bright transition-colors">{t("privacy")}</Link></li>
              <li><Link href={`/${locale}/legal/refund`} className="text-sm text-surface-dim/60 hover:text-surface-bright transition-colors">{t("refund")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-surface-dim/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-surface-dim/40">{t("copy")}</p>
          <p className="text-xs text-surface-dim/30">📍 Dubai, UAE · 🌍 Online Worldwide</p>
        </div>
      </div>
    </footer>
  );
}
