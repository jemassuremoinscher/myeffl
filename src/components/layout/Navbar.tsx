"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";

const locales = [{ code:"en",label:"EN" },{ code:"fr",label:"FR" },{ code:"ru",label:"RU" }];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalizedPath = (lc: string) => {
    const s = pathname.split("/"); s[1] = lc; return s.join("/");
  };

  const navItems = [
    { key:"about", href:`/${locale}/about` },
    { key:"packages", href:`/${locale}/packages` },
    { key:"blog", href:`/${locale}/blog` },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 bg-primary rounded-2xl flex items-center justify-center shadow-elevation-1 group-hover:shadow-elevation-2 transition-shadow">
            <span className="text-secondary font-black text-base">E</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-black text-primary tracking-widest uppercase leading-none">EFFL</p>
            <p className="text-[10px] text-on-muted leading-tight">English for Future Leaders</p>
          </div>
        </Link>

        {/* Nav desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map(item => (
            <Link key={item.key} href={item.href}
              className="px-4 py-2 rounded-full text-sm font-medium text-on-surface hover:bg-container-tertiary transition-colors md3-state-layer">
              {t(item.key)}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Lang pill */}
          <div className="flex bg-container-tertiary rounded-full p-0.5 gap-0.5">
            {locales.map(loc => (
              <Link key={loc.code} href={getLocalizedPath(loc.code)}
                className={`px-3 py-1 text-[11px] font-bold rounded-full transition-all ${
                  locale === loc.code
                    ? "bg-primary text-on-primary shadow-elevation-1"
                    : "text-on-muted hover:text-primary"
                }`}>
                {loc.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <Link href={`/${locale}/contact`}
            className="hidden sm:inline-flex items-center gap-1.5 bg-primary text-on-primary px-5 py-2.5 rounded-full text-sm font-semibold shadow-elevation-1 hover:shadow-elevation-2 transition-all md3-state-layer">
            {t("book")}
          </Link>

          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full hover:bg-container-tertiary text-on-surface transition-colors">
            {mobileOpen ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-outline-variant/30 bg-surface px-4 pb-4 pt-2 space-y-1">
          {navItems.map(item => (
            <Link key={item.key} href={item.href} onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 text-sm font-medium text-on-surface hover:bg-container-tertiary rounded-2xl transition-colors">
              {t(item.key)}
            </Link>
          ))}
          <Link href={`/${locale}/contact`} onClick={() => setMobileOpen(false)}
            className="block w-full text-center bg-primary text-on-primary px-4 py-3 rounded-full text-sm font-semibold mt-2">
            {t("book")}
          </Link>
        </div>
      )}
    </nav>
  );
}
