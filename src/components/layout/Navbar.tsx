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
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-border">
      <div className="container-xl flex items-center justify-between h-[66px]">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-gold font-black text-sm">E</span>
          </div>
          <div className="hidden sm:block leading-tight">
            <p className="text-[10px] font-black text-primary tracking-[0.22em] uppercase">EFFL</p>
            <p className="text-[9px] text-muted tracking-wide">English for Future Leaders</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {nav.map(item => (
            <Link key={item.key} href={item.href}
              className="text-sm font-medium text-muted hover:text-ink transition-colors">
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <div className="flex border border-border rounded-lg overflow-hidden text-[11px] font-bold">
            {locales.map((loc, i) => (
              <Link key={loc.code} href={getPath(loc.code)}
                className={`px-2.5 py-1.5 transition-colors ${i < 2 ? "border-r border-border":""}
                  ${locale===loc.code ? "bg-primary text-on-dark" : "text-muted hover:text-ink"}`}>
                {loc.label}
              </Link>
            ))}
          </div>
          <Link href={`/${locale}/contact`} className="hidden sm:inline-flex btn-dark text-sm">
            {t("book")}
          </Link>
          <button onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-cream-dark transition-colors">
            {open ? <X size={18}/> : <Menu size={18}/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-cream border-t border-border px-4 pb-4 pt-2 space-y-1">
          {nav.map(item => (
            <Link key={item.key} href={item.href} onClick={() => setOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium hover:bg-cream-dark rounded-lg transition-colors">
              {t(item.key)}
            </Link>
          ))}
          <Link href={`/${locale}/contact`} onClick={() => setOpen(false)}
            className="block w-full text-center btn-dark mt-3 justify-center">
            {t("book")}
          </Link>
        </div>
      )}
    </header>
  );
}
