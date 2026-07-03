import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { Check } from "lucide-react";
import StructuredData from "@/components/layout/StructuredData";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const titles: Record<string,string> = {
    en:"English Coaching Packages & Pricing | EFFL",
    fr:"Forfaits et tarifs coaching anglais | EFFL",
    ru:"Пакеты и цены на коучинг по английскому | EFFL",
  };
  const descs: Record<string,string> = {
    en:"Transparent pricing for professional English coaching. Discovery ($49), Regular ($100) or Intensive ($300). First session always free.",
    fr:"Tarifs transparents pour le coaching en anglais professionnel. Découverte (49€), Régulier (100€) ou Intensif (300€). Première séance gratuite.",
    ru:"Прозрачные цены на коучинг по деловому английскому. Знакомство ($49), Регулярный ($100) или Интенсив ($300). Первое занятие — бесплатно.",
  };
  return { title: titles[locale]??titles.en, description: descs[locale]??descs.en };
}

const packageKeys = ["discovery","regular","intensive"] as const;

export default async function PackagesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("packages");
  const faqT = await getTranslations("faq");

  const offersSchema = {
    "@context":"https://schema.org",
    "@type":"ItemList",
    name: t("title"),
    itemListElement: [
      { "@type":"ListItem", position:1, item:{ "@type":"Offer", name:t("discovery.name"), price:"49", priceCurrency:"USD", description:t("discovery.desc"), seller:{ "@type":"Organization", name:"English for Future Leaders" } } },
      { "@type":"ListItem", position:2, item:{ "@type":"Offer", name:t("regular.name"), price:"100", priceCurrency:"USD", description:t("regular.desc"), seller:{ "@type":"Organization", name:"English for Future Leaders" } } },
      { "@type":"ListItem", position:3, item:{ "@type":"Offer", name:t("intensive.name"), price:"300", priceCurrency:"USD", description:t("intensive.desc"), seller:{ "@type":"Organization", name:"English for Future Leaders" } } },
    ],
  };

  const faqSchema = {
    "@context":"https://schema.org",
    "@type":"FAQPage",
    mainEntity: [1,2,3,4,5].map(i => ({
      "@type":"Question",
      name: faqT(`q${i}`),
      acceptedAnswer: { "@type":"Answer", text: faqT(`a${i}`) },
    })),
  };

  const faqs = [1,2,3,4,5].map(i => ({ q: faqT(`q${i}`), a: faqT(`a${i}`) }));

  return (
    <>
      <StructuredData data={[offersSchema, faqSchema]} />
      <main>
        <section className="bg-cream section-pad">
          <div className="container-xl">
            <div className="mb-14">
              <p className="eyebrow mb-5">Pricing</p>
              <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-ink mb-4">{t("title")}</h1>
              <p className="text-muted max-w-[44ch] text-base">{t("subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 mb-16">
              {packageKeys.map((key, idx) => {
                const isMain = idx === 1;
                return (
                  <div key={key} className={`rounded-2xl flex flex-col overflow-hidden transition-shadow ${
                    isMain ? "bg-ink text-on-dark shadow-2xl scale-[1.02]" : "bg-cream-dark border border-border hover:shadow-md"
                  }`}>
                    <div className={`px-7 pt-7 pb-6 ${isMain ? "border-b border-white/10" : "border-b border-border"}`}>
                      {isMain && (
                        <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-gold text-ink px-3 py-1 rounded-full mb-4">
                          {t("popular")}
                        </span>
                      )}
                      <h2 className={`text-lg font-black mb-1 ${isMain?"text-on-dark":"text-ink"}`}>{t(`${key}.name`)}</h2>
                      <p className={`text-xs ${isMain?"text-white/50":"text-muted"}`}>{t(`${key}.desc`)}</p>
                    </div>
                    <div className="p-7 flex-1 flex flex-col">
                      <div className="mb-7">
                        <span className={`text-5xl font-black ${isMain?"text-on-dark":"text-ink"}`}>{t(`${key}.price`)}</span>
                        <p className={`text-xs mt-1.5 ${isMain?"text-white/40":"text-muted"}`}>{t(`${key}.sessions`)}</p>
                      </div>
                      <ul className="space-y-3.5 flex-1 mb-8">
                        {(["feature1","feature2","feature3"] as const).map(f => (
                          <li key={f} className="flex items-start gap-3">
                            <Check size={14} className={`mt-0.5 flex-shrink-0 ${isMain?"text-gold":"text-primary"}`} strokeWidth={2.5}/>
                            <span className={`text-sm leading-snug ${isMain?"text-white/75":"text-ink-soft"}`}>{t(`${key}.${f}`)}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={`/${locale}/contact`} className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                        isMain ? "bg-gold text-ink hover:bg-gold-light" : "bg-ink text-on-dark hover:bg-ink-soft"
                      }`}>{t("cta")}</Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Comparison table */}
            <div className="bg-cream-dark rounded-2xl border border-border overflow-hidden mb-16">
              <div className="px-7 py-5 border-b border-border">
                <h2 className="font-black text-ink text-base">
                  {locale==="ru"?"Сравнение пакетов":locale==="fr"?"Comparaison des forfaits":"Package Comparison"}
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left px-7 py-3 text-xs font-bold text-muted uppercase tracking-wide">Feature</th>
                      {packageKeys.map(k => <th key={k} className="px-5 py-3 text-xs font-bold text-muted uppercase tracking-wide">{t(`${k}.name`)}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { label: locale==="ru"?"Цена":"Price", vals:["$49","$100","$300"] },
                      { label: locale==="ru"?"Занятий":"Sessions", vals:["2","5","10"] },
                      { label: locale==="ru"?"Оценка уровня":locale==="fr"?"Évaluation":"Assessment", vals:["✓","✓","✓"] },
                      { label: locale==="ru"?"Поддержка WhatsApp":locale==="fr"?"Support WhatsApp":"WhatsApp Support", vals:["—","—","✓"] },
                      { label: locale==="ru"?"Запись занятий":locale==="fr"?"Enregistrements":"Session Recordings", vals:["✓","—","✓"] },
                    ].map(({ label, vals }) => (
                      <tr key={label} className="border-b border-border last:border-0">
                        <td className="px-7 py-3 text-muted text-xs">{label}</td>
                        {vals.map((v, i) => (
                          <td key={i} className={`px-5 py-3 text-center text-sm ${i===1?"font-bold text-primary":""}`}>{v}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQ */}
            <div className="max-w-3xl">
              <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-black text-ink mb-10">{faqT("title")}</h2>
              <div className="space-y-6">
                {faqs.map(({ q, a }, i) => (
                  <div key={i} className="border-b border-border pb-6">
                    <p className="font-bold text-ink mb-3">{q}</p>
                    <p className="text-muted text-sm leading-relaxed">{a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
