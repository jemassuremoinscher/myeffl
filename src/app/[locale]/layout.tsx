import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/layout/StructuredData";
import Analytics from "@/components/layout/Analytics";
import TelegramButton from "@/components/layout/TelegramButton";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string,string> = {
    en:"English for Future Leaders | Business English Coaching for Russian Speakers",
    fr:"Anglais pour Les Leaders de Demain | Coaching Anglais Professionnel pour Russophones",
    ru:"Английский для Лидеров Будущего | Деловой английский для русскоязычных специалистов",
  };
  const descs: Record<string,string> = {
    en:"Expert 1-on-1 business English coaching for Russian-speaking professionals. CELTA-certified coach based in Dubai. Presentations, negotiations, leadership communication. First session free.",
    fr:"Coaching individuel en anglais des affaires pour professionnels russophones. Coach certifiée CELTA basée à Dubaï. Présentations, négociations, communication de leadership. Première séance gratuite.",
    ru:"Индивидуальный коучинг по деловому английскому для русскоязычных специалистов. Сертифицированный коуч CELTA в Дубае. Презентации, переговоры, лидерская коммуникация. Первое занятие — бесплатно.",
  };
  return {
    title: titles[locale]??titles.en,
    description: descs[locale]??descs.en,
    metadataBase: new URL("https://myeffl.com"),
    alternates: { canonical:`/${locale}`, languages:{ en:"/en", fr:"/fr", ru:"/ru" } },
    openGraph: { title:titles[locale]??titles.en, description:descs[locale]??descs.en, url:`https://myeffl.com/${locale}`, siteName:"English for Future Leaders", locale, type:"website", images:[{ url:"/kate.jpg", width:800, height:800, alt:"Katsiaryna — English Coach" }] },
  };
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "fr" | "ru")) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  const orgSchema = {
    "@context":"https://schema.org",
    "@type":"EducationalOrganization",
    name:"English for Future Leaders",
    alternateName:"EFFL",
    url:"https://myeffl.com",
    logo:"https://myeffl.com/kate.jpg",
    description:"Expert business English coaching for Russian-speaking professionals. 1-on-1 sessions with a CELTA-certified coach based in Dubai.",
    address:{ "@type":"PostalAddress", addressLocality:"Dubai", addressCountry:"AE" },
    foundingDate:"2022",
    numberOfEmployees:1,
    inLanguage:["en","fr","ru"],
    offers:[
      { "@type":"Offer", name:"Discovery Package", price:"49", priceCurrency:"USD" },
      { "@type":"Offer", name:"Regular Package", price:"100", priceCurrency:"USD" },
      { "@type":"Offer", name:"Intensive Package", price:"300", priceCurrency:"USD" },
    ],
    sameAs:["https://www.linkedin.com/in/e-yashchanka/"],
  };

  return (
    <html lang={locale} dir="ltr" className="scroll-smooth">
      <head>
        <StructuredData data={orgSchema} />
        <Analytics />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <TelegramButton />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
