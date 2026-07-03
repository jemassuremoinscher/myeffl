import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="container-xl py-14">
        <div className="grid sm:grid-cols-4 gap-10 mb-12">

          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-gold font-black text-sm">E</span>
              </div>
              <span className="text-[10px] font-black tracking-[0.22em] uppercase text-white/60">EFFL</span>
            </div>
            <p className="text-sm text-white/30 leading-relaxed max-w-[28ch]">{t("tagline")}</p>
            <p className="text-xs text-white/15 mt-5">📍 Dubai, UAE · 🌍 Online Worldwide</p>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/25 mb-5">{t("links_title")}</p>
            <ul className="space-y-3">
              {[
                {l:"Home",     h:`/${locale}`},
                {l:"Packages", h:`/${locale}/packages`},
                {l:"About",    h:`/${locale}/about`},
                {l:"Blog",     h:`/${locale}/blog`},
              ].map(item => (
                <li key={item.h}>
                  <Link href={item.h} className="text-sm text-white/40 hover:text-white/80 transition-colors">
                    {item.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/25 mb-5">{t("legal_title")}</p>
            <ul className="space-y-3">
              <li><Link href={`/${locale}/legal/terms`}   className="text-sm text-white/40 hover:text-white/80 transition-colors">{t("terms")}</Link></li>
              <li><Link href={`/${locale}/legal/privacy`} className="text-sm text-white/40 hover:text-white/80 transition-colors">{t("privacy")}</Link></li>
              <li><Link href={`/${locale}/legal/refund`}  className="text-sm text-white/40 hover:text-white/80 transition-colors">{t("refund")}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-xs text-white/20">{t("copy")}</p>
          <p className="text-xs text-white/10">English for Future Leaders</p>
        </div>
      </div>
    </footer>
  );
}
