"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Menu, X } from "lucide-react";

const locales = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "ru", label: "RU", flag: "🇷🇺" },
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
    { key: "home", href: `/${locale}` },
    { key: "packages", href: `/${locale}/packages` },
    { key: "about", href: `/${locale}/about` },
    { key: "blog", href: `/${locale}/blog` },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-9 h-9 bg-navy-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">✨</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-bold text-navy-500 leading-tight">EFFL</p>
              <p className="text-xs text-gray-500 leading-tight">Future Leaders</p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-navy-500 rounded-lg hover:bg-navy-50 transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
          </div>

          {/* Right: lang + CTA */}
          <div className="flex items-center gap-3">
            {/* Language switcher */}
            <div className="flex bg-gray-100 rounded-lg p-0.5 gap-0.5">
              {locales.map((loc) => (
                <Link
                  key={loc.code}
                  href={getLocalizedPath(loc.code)}
                  className={`px-2 py-1 text-xs font-bold rounded-md transition-all ${
                    locale === loc.code
                      ? "bg-navy-500 text-white shadow-sm"
                      : "text-gray-600 hover:text-navy-500"
                  }`}
                >
                  {loc.label}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/${locale}/contact`}
              className="hidden sm:inline-flex items-center bg-navy-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-navy-600 transition-colors"
            >
              {t("book")}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 text-sm font-medium text-gray-700 hover:text-navy-500 hover:bg-navy-50 rounded-lg transition-colors"
              >
                {t(item.key)}
              </Link>
            ))}
            <div className="pt-2 px-4">
              <Link
                href={`/${locale}/contact`}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-navy-500 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-navy-600 transition-colors"
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
