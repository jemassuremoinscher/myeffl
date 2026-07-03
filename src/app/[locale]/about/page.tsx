import { setRequestLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import StructuredData from "@/components/layout/StructuredData";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const titles: Record<string,string> = {
    en: "About Katsiaryna | English Coach for Russian-Speaking Professionals",
    fr: "À propos de Katsiaryna | Coach en anglais pour russophones",
    ru: "О Катерине | Коуч по английскому для русскоязычных профессионалов",
  };
  const descs: Record<string,string> = {
    en: "CELTA-certified English coach with 10+ years of corporate experience in the MEA region. Specialising in business English for Russian-speaking professionals based in Dubai and worldwide.",
    fr: "Coach en anglais certifiée CELTA avec 10+ ans d'expérience corporate dans la région MEA. Spécialisée dans l'anglais des affaires pour les russophones.",
    ru: "Коуч по английскому с сертификатом CELTA и 10+ годами корпоративного опыта на рынках MEA. Специализация — деловой английский для русскоязычных специалистов.",
  };
  return { title: titles[locale]??titles.en, description: descs[locale]??descs.en };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Katsiaryna",
    jobTitle: "English Language Coach",
    description: "CELTA-certified professional English coach specialising in business English for Russian-speaking professionals. Based in Dubai, teaching worldwide.",
    url: `https://myeffl.com/${locale}/about`,
    image: "https://myeffl.com/kate.jpg",
    worksFor: { "@type": "Organization", name: "English for Future Leaders", url: "https://myeffl.com" },
    knowsLanguage: ["Russian","English","French"],
    knowsAbout: ["Business English","Professional Communication","Executive Coaching","English for Negotiations","IELTS Preparation"],
    hasCredential: { "@type": "EducationalOccupationalCredential", name: "CELTA", credentialCategory: "Cambridge Certificate in English Language Teaching to Adults" },
    address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type":"Question", name: t("faq1_q"), acceptedAnswer: { "@type":"Answer", text: t("faq1_a") } },
      { "@type":"Question", name: t("faq2_q"), acceptedAnswer: { "@type":"Answer", text: t("faq2_a") } },
      { "@type":"Question", name: t("faq3_q"), acceptedAnswer: { "@type":"Answer", text: t("faq3_a") } },
      { "@type":"Question", name: t("faq4_q"), acceptedAnswer: { "@type":"Answer", text: t("faq4_a") } },
    ],
  };

  const faqs = [
    { q: t("faq1_q"), a: t("faq1_a") },
    { q: t("faq2_q"), a: t("faq2_a") },
    { q: t("faq3_q"), a: t("faq3_a") },
    { q: t("faq4_q"), a: t("faq4_a") },
  ];

  return (
    <>
      <StructuredData data={[personSchema, faqSchema]} />
      <main>
        {/* Hero */}
        <section className="bg-cream section-pad">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0 relative bg-primary shadow-xl">
                  <Image src="/kate.jpg" alt="Katsiaryna — English Coach" fill className="object-cover object-top"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"/>
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-5">
                    <p className="text-[10px] text-white/45 uppercase tracking-widest mb-1">Your coach</p>
                    <p className="text-on-dark font-bold text-sm">Katsiaryna · CELTA Certified</p>
                    <p className="text-white/50 text-xs mt-0.5">🇷🇺 Russian · 🇬🇧 English · 🇫🇷 French</p>
                  </div>
                </div>
                <div className="h-1.5 bg-gold max-w-sm mx-auto lg:mx-0 rounded-full mt-0"/>
              </div>

              <div className="lg:pt-4">
                <p className="eyebrow mb-5">{t("title")}</p>
                <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-ink leading-tight mb-4">{t("subtitle")}</h1>
                <div className="w-10 h-0.5 bg-gold mb-8"/>
                <p className="text-muted leading-[1.85] mb-5 text-base">{t("bio")}</p>
                <p className="text-ink font-semibold leading-[1.85] mb-5 text-base">{t("bio_long")}</p>
                <blockquote className="border-l-2 border-gold pl-5 mb-8">
                  <p className="text-ink italic text-base leading-relaxed">"{t("bio2")}"</p>
                </blockquote>
                <ul className="space-y-3 mb-10">
                  {(["feature1","feature2","feature3"] as const).map(f => (
                    <li key={f} className="flex items-start gap-3">
                      <Check size={15} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5}/>
                      <span className="text-sm font-medium text-ink-soft">{t(f)}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted border-t border-border pt-6 mb-8 leading-relaxed">{t("creds")}</p>
                <Link href={`/${locale}/contact`} className="btn-dark">{t("cta")}</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials strip */}
        <section className="bg-primary">
          <div className="container-xl">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {[
                { val:"CELTA", lab:"Cambridge Certified" },
                { val:"500+",  lab:locale==="ru"?"Специалистов обучено":locale==="fr"?"Professionnels coachés":"Professionals Coached" },
                { val:"10+",   lab:locale==="ru"?"Лет корпоративного опыта":locale==="fr"?"Ans d'expérience corporate":"Years Corporate Experience" },
              ].map(({ val, lab }) => (
                <div key={lab} className="py-10 px-8 text-center">
                  <p className="text-4xl font-black text-on-dark mb-1">{val}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wide">{lab}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream-dark section-pad">
          <div className="container-xl max-w-3xl">
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-ink mb-10">{t("faq_title")}</h2>
            <div className="space-y-6">
              {faqs.map(({ q, a }, i) => (
                <div key={i} className="border-b border-border pb-6">
                  <p className="font-bold text-ink mb-3 text-base">{q}</p>
                  <p className="text-muted text-sm leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex gap-3">
              <Link href={`/${locale}/contact`} className="btn-dark">{t("cta")}</Link>
              <Link href={`/${locale}/packages`} className="btn-outline-light border-ink/20 !text-ink hover:bg-cream-dark">
                {locale==="ru"?"Смотреть пакеты":locale==="fr"?"Voir les forfaits":"View Packages"}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
