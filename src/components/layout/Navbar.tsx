"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";

const locales = [{ code:"en",label:"EN"},{ code:"fr",label:"FR"},{ code:"ru",label:"RU"}];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const getPath = (lc: string) => { const s = pathname.split("/"); s[1]=lc; return s.join("/"); };

  const nav = [
    { key:"about",    href:`/${locale}/about` },
    { key:"packages", href:`/${locale}/packages` },
    { key:"blog",     href:`/${locale}/blog` },
  ];

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur border-b border-border">
      <div className="container-xl flex items-center justify-between h-[68px]">

        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-gold font-black text-sm">E</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-[11px] font-black text-primary tracking-[0.2em] uppercase leading-none">EFFL</p>
            <p className="text-[9px] text-muted leading-tight mt-0.5 tracking-wide">English for Future Leaders</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map(item => (
            <Link key={item.key} href={item.href}
              className="text-sm text-muted hover:text-ink transition-colors font-medium">
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Lang switcher */}
          <div className="flex items-center border border-border rounded-lg overflow-hidden">
            {locales.map((loc, i) => (
              <Link key={loc.code} href={getPath(loc.code)}
                className={`px-2.5 py-1.5 text-[11px] font-bold transition-colors ${
                  i < locales.length - 1 ? "border-r border-border" : ""
                } ${
                  locale === loc.code
                    ? "bg-primary text-ink-inv"
                    : "text-muted hover:text-ink bg-transparent"
                }`}>
                {loc.label}
              </Link>
            ))}
          </div>

          <Link href={`/${locale}/contact`} className="hidden sm:inline-flex btn-primary">
            {t("book")}
          </Link>

          <button onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-border/50 text-ink transition-colors">
            {open ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden border-t border-border bg-cream px-4 py-4 space-y-1">
          {nav.map(item => (
            <Link key={item.key} href={item.href} onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-ink hover:bg-border/40 rounded-lg transition-colors">
              {t(item.key)}
            </Link>
          ))}
          <Link href={`/${locale}/contact`} onClick={() => setOpen(false)}
            className="block w-full text-center btn-primary mt-3 justify-center">
            {t("book")}
          </Link>
        </div>
      )}
    </header>
  );
}
