import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles: Record<string, string> = {
    en: "English for Future Leaders | Professional English Coaching",
    fr: "Anglais pour Les Leaders de Demain | Coaching Anglais Professionnel",
    ru: "Английский для Лидеров Будущего | Профессиональный коучинг",
  };

  const descriptions: Record<string, string> = {
    en: "Expert 1-on-1 English coaching for intermediate+ Russian speakers. Transform your professional communication. Based in Dubai, teaching worldwide.",
    fr: "Coaching anglais expert pour russophones intermédiaires+. Transformez votre communication professionnelle. Basée à Dubaï, cours dans le monde entier.",
    ru: "Экспертный коучинг по английскому для русскоговорящих среднего уровня+. Трансформируйте профессиональную коммуникацию. Дубай, преподаю по всему миру.",
  };

  return {
    title: titles[locale] || titles.en,
    description: descriptions[locale] || descriptions.en,
    metadataBase: new URL("https://myeffl.com"),
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", fr: "/fr", ru: "/ru" },
    },
    openGraph: {
      title: titles[locale] || titles.en,
      description: descriptions[locale] || descriptions.en,
      url: `https://myeffl.com/${locale}`,
      siteName: "English for Future Leaders",
      locale: locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "fr" | "ru")) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
