"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";

const locales = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ru", label: "RU" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();

  const getLocalizedPath = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    return segments.join("/");
  };

  const navItems = [
    { key: "about", href: `/${locale}/about` },
    { key: "packages", href: `/${locale}/packages` },
    { key: "blog", href: `/${locale}/blog` },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-green-800 rounded-md flex items-center justify-center">
              <span className="text-gold-400 font-bold text-sm">E</span>
            </div>
            <div>
              <p className="text-sm font-bold text-green-800 leading-tight tracking-tight">EFFL</p>
              <p className="text-xs text-ink-muted leading-tight">English for Future Leaders</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-ink-light hover:text-green-800 transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Lang switcher */}
            <div className="flex bg-green-100 rounded-lg p-0.5 gap-0.5">
              {locales.map((loc) => (
                <Link
                  key={loc.code}
                  href={getLocalizedPath(loc.code)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
                    locale === loc.code
                      ? "bg-green-800 text-cream"
                      : "text-ink-muted hover:text-green-800"
                  }`}
                >
                  {loc.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/${locale}/contact`}
              className="hidden sm:inline-flex items-center bg-green-800 text-cream px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-900 transition-colors"
            >
              {t("book")}
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-green-100 text-ink"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-green-100 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2.5 text-sm font-medium text-ink hover:text-green-800 hover:bg-green-50 rounded-lg transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href={`/${locale}/contact`}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-green-800 text-cream px-4 py-2.5 rounded-lg text-sm font-semibold"
              >
                {t("book")}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
