import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-ink text-ink-inv">
      <div className="container-xl py-14">
        <div className="grid sm:grid-cols-4 gap-10 mb-12">

          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-gold font-black text-sm">E</span>
              </div>
              <span className="text-xs font-black tracking-[0.2em] uppercase text-ink-inv/80">EFFL</span>
            </div>
            <p className="text-sm text-ink-inv/40 leading-relaxed max-w-[28ch]">{t("tagline")}</p>
            <p className="text-xs text-ink-inv/25 mt-5">📍 Dubai, UAE · 🌍 Online Worldwide</p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-inv/30 mb-5">
              {t("links_title")}
            </p>
            <ul className="space-y-3">
              {[
                {label:"Home",     href:`/${locale}`},
                {label:"Packages", href:`/${locale}/packages`},
                {label:"About",    href:`/${locale}/about`},
                {label:"Blog",     href:`/${locale}/blog`},
              ].map(item => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-inv/50 hover:text-ink-inv transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-ink-inv/30 mb-5">
              {t("legal_title")}
            </p>
            <ul className="space-y-3">
              <li><Link href={`/${locale}/legal/terms`}   className="text-sm text-ink-inv/50 hover:text-ink-inv transition-colors">{t("terms")}</Link></li>
              <li><Link href={`/${locale}/legal/privacy`} className="text-sm text-ink-inv/50 hover:text-ink-inv transition-colors">{t("privacy")}</Link></li>
              <li><Link href={`/${locale}/legal/refund`}  className="text-sm text-ink-inv/50 hover:text-ink-inv transition-colors">{t("refund")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ink-inv/10 pt-6 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-ink-inv/25">{t("copy")}</p>
          <p className="text-xs text-ink-inv/15">English for Future Leaders · All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
