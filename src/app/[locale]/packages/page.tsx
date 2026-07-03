import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema } from "@/components/seo/schemas";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string,string> = {
    en: "English Coaching Packages & Pricing | EFFL Dubai",
    fr: "Forfaits Coaching Anglais & Tarifs | EFFL Dubaï",
    ru: "Пакеты коучинга английского и цены | EFFL Дубай",
  };
  const descs: Record<string,string> = {
    en: "Transparent pricing for professional English coaching. Discovery $49 · Regular $100 · Intensive $300. First session free. 1-on-1 online sessions with CELTA-certified coach.",
    fr: "Tarifs transparents pour le coaching anglais professionnel. Découverte 49$ · Régulier 100$ · Intensif 300$. Première séance gratuite.",
    ru: "Прозрачные цены на коучинг профессионального английского. Знакомство $49 · Регулярный $100 · Интенсив $300. Первое занятие бесплатно.",
  };
  return { title: titles[locale]??titles.en, description: descs[locale]??descs.en };
}

const content: Record<string, {
  eyebrow: string; h1: string; sub: string;
  packages: { name: string; price: string; period: string; desc: string; tag?: string;
    features: string[]; ideal: string; cta: string }[];
  faqTitle: string;
  faqs: { q: string; a: string }[];
  bottomTitle: string; bottomSub: string; bottomCta: string;
}> = {
  en: {
    eyebrow: "Pricing",
    h1: "Invest in the English that opens doors.",
    sub: "Transparent pricing. No hidden fees. Cancel anytime. First session is always free.",
    packages: [
      {
        name: "Discovery",
        price: "$49",
        period: "2 × 50-min sessions",
        desc: "The perfect starting point. Test the coaching, assess your level, and get a personalised roadmap — before committing to a full programme.",
        features: ["Level assessment (speaking, writing, listening)", "Personalised 3-month learning plan", "Identification of your top 3 professional communication gaps", "Follow-up mini-session to set goals"],
        ideal: "Ideal for: Professionals who want to try coaching before committing.",
        cta: "Start with Discovery",
      },
      {
        name: "Regular",
        price: "$100",
        period: "5 × 50-min sessions",
        tag: "Most popular",
        desc: "Consistent, structured progress. Weekly sessions targeting your specific professional context — meetings, negotiations, presentations or written communication.",
        features: ["Flexible scheduling (book sessions as needed)", "Custom materials for your industry and role", "Written feedback and corrections after each session", "WhatsApp support between sessions", "Progress report after 5 sessions"],
        ideal: "Ideal for: Professionals who want steady, measurable improvement.",
        cta: "Start Regular Coaching",
      },
      {
        name: "Intensive",
        price: "$300",
        period: "10 × 50-min sessions",
        desc: "A complete professional transformation in 4–6 weeks. High-frequency sessions for those preparing for a promotion, relocation, major presentation or new role.",
        features: ["Priority scheduling (within 24h)", "Fully custom curriculum built around your goals", "Real-time email and document review", "Interview and presentation preparation", "Comprehensive progress report", "30-day support after programme ends"],
        ideal: "Ideal for: Professionals with an urgent goal or deadline.",
        cta: "Start Intensive Programme",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "Is the first session really free?", a: "Yes. Every new student gets a free 20-minute discovery session. No credit card required. It's a conversation to understand your goals and see if we're a good fit." },
      { q: "How are sessions delivered?", a: "All sessions are online via Zoom or Google Meet. You can attend from anywhere in the world — Dubai, London, Moscow, Almaty or wherever you are." },
      { q: "Can I pause my package?", a: "Yes. Life happens. You can pause your package for up to 60 days. After 60 days, unused sessions are forfeited." },
      { q: "What if I don't see results?", a: "If after the Discovery package you don't feel the coaching is working for you, we'll refund the remaining session cost. We want you to succeed — that's our only goal." },
    ],
    bottomTitle: "Not sure which package to choose?",
    bottomSub: "Book a free 20-minute call and we'll figure it out together.",
    bottomCta: "Book free discovery call",
  },
  ru: {
    eyebrow: "Цены",
    h1: "Инвестируйте в английский, который открывает двери.",
    sub: "Прозрачные цены. Никаких скрытых платежей. Отмена в любое время. Первое занятие всегда бесплатно.",
    packages: [
      {
        name: "Знакомство",
        price: "$49",
        period: "2 × 50 мин",
        desc: "Идеальная отправная точка. Попробуйте коучинг, оцените свой уровень и получите персонализированный план — до того, как принять обязательство по полной программе.",
        features: ["Оценка уровня (речь, письмо, аудирование)", "Персональный план обучения на 3 месяца", "Определение 3 главных пробелов в профессиональной коммуникации", "Мини-сессия для постановки целей"],
        ideal: "Идеально для: специалистов, которые хотят попробовать коучинг перед полным погружением.",
        cta: "Начать знакомство",
      },
      {
        name: "Регулярный",
        price: "$100",
        period: "5 × 50 мин",
        tag: "Самый популярный",
        desc: "Последовательный, структурированный прогресс. Еженедельные занятия, нацеленные на ваш профессиональный контекст — встречи, переговоры, презентации или деловая переписка.",
        features: ["Гибкое расписание (бронирование по необходимости)", "Материалы под вашу отрасль и должность", "Письменная обратная связь после каждого занятия", "Поддержка в WhatsApp между занятиями", "Отчёт о прогрессе после 5 занятий"],
        ideal: "Идеально для: специалистов, желающих стабильного, измеримого улучшения.",
        cta: "Начать регулярный коучинг",
      },
      {
        name: "Интенсив",
        price: "$300",
        period: "10 × 50 мин",
        desc: "Полная профессиональная трансформация за 4–6 недель. Высокочастотные занятия для тех, кто готовится к повышению, переезду, важной презентации или новой должности.",
        features: ["Приоритетное расписание (в течение 24 часов)", "Полностью индивидуальная программа под ваши цели", "Разбор писем и документов в режиме реального времени", "Подготовка к собеседованиям и презентациям", "Комплексный отчёт о прогрессе", "Поддержка 30 дней после окончания программы"],
        ideal: "Идеально для: специалистов с конкретной срочной целью или дедлайном.",
        cta: "Начать интенсивную программу",
      },
    ],
    faqTitle: "Часто задаваемые вопросы",
    faqs: [
      { q: "Первое занятие действительно бесплатное?", a: "Да. Каждый новый ученик получает бесплатное 20-минутное знакомство. Карта не нужна. Это беседа, чтобы понять ваши цели и убедиться, что мы подходим друг другу." },
      { q: "Как проходят занятия?", a: "Все занятия онлайн через Zoom или Google Meet. Вы можете подключаться из любой точки мира — Дубай, Лондон, Москва, Алма-Ата или где угодно." },
      { q: "Можно ли поставить пакет на паузу?", a: "Да. Жизнь бывает непредсказуемой. Вы можете приостановить пакет на срок до 60 дней. После 60 дней неиспользованные занятия сгорают." },
      { q: "Что если я не увижу результатов?", a: "Если после пакета «Знакомство» вы не почувствуете, что коучинг работает, мы вернём стоимость оставшихся занятий. Ваш успех — наша единственная цель." },
    ],
    bottomTitle: "Не уверены, какой пакет выбрать?",
    bottomSub: "Запишитесь на бесплатный 20-минутный звонок, и мы разберёмся вместе.",
    bottomCta: "Записаться на бесплатный звонок",
  },
  fr: {
    eyebrow: "Tarifs",
    h1: "Investissez dans l'anglais qui ouvre des portes.",
    sub: "Prix transparents. Sans frais cachés. Annulation possible à tout moment. Première séance toujours gratuite.",
    packages: [
      {
        name: "Découverte",
        price: "49$",
        period: "2 × 50 min",
        desc: "Le point de départ parfait. Testez le coaching, évaluez votre niveau et obtenez une feuille de route personnalisée — avant de vous engager dans un programme complet.",
        features: ["Évaluation du niveau (expression, écriture, compréhension)", "Plan d'apprentissage personnalisé sur 3 mois", "Identification de vos 3 lacunes principales", "Mini-séance de suivi pour fixer des objectifs"],
        ideal: "Idéal pour : les professionnels qui veulent tester avant de s'engager.",
        cta: "Commencer avec Découverte",
      },
      {
        name: "Régulier",
        price: "100$",
        period: "5 × 50 min",
        tag: "Le plus populaire",
        desc: "Des progrès constants et structurés. Des séances hebdomadaires ciblant votre contexte professionnel spécifique.",
        features: ["Planning flexible", "Matériaux personnalisés pour votre secteur", "Feedback écrit après chaque séance", "Support WhatsApp entre les séances", "Rapport de progrès après 5 séances"],
        ideal: "Idéal pour : les professionnels qui veulent une amélioration régulière et mesurable.",
        cta: "Commencer le coaching régulier",
      },
      {
        name: "Intensif",
        price: "300$",
        period: "10 × 50 min",
        desc: "Une transformation professionnelle complète en 4–6 semaines pour ceux qui se préparent à une promotion, un déménagement ou une présentation majeure.",
        features: ["Planning prioritaire (sous 24h)", "Programme entièrement personnalisé", "Revue d'emails et documents en temps réel", "Préparation aux entretiens et présentations", "Rapport de progrès complet", "Support 30 jours après le programme"],
        ideal: "Idéal pour : les professionnels avec un objectif urgent.",
        cta: "Commencer le programme intensif",
      },
    ],
    faqTitle: "Questions fréquentes",
    faqs: [
      { q: "La première séance est-elle vraiment gratuite ?", a: "Oui. Chaque nouvel étudiant bénéficie d'une séance découverte gratuite de 20 minutes. Sans carte bancaire. C'est une conversation pour comprendre vos objectifs." },
      { q: "Comment se déroulent les séances ?", a: "Toutes les séances sont en ligne via Zoom ou Google Meet. Vous pouvez participer depuis n'importe où dans le monde." },
      { q: "Puis-je mettre mon forfait en pause ?", a: "Oui. Vous pouvez suspendre votre forfait jusqu'à 60 jours. Après 60 jours, les séances non utilisées sont perdues." },
      { q: "Et si je ne vois pas de résultats ?", a: "Si après le forfait Découverte vous ne sentez pas que le coaching fonctionne, nous rembourserons le coût des séances restantes." },
    ],
    bottomTitle: "Vous ne savez pas quel forfait choisir ?",
    bottomSub: "Réservez un appel gratuit de 20 minutes et nous le déterminerons ensemble.",
    bottomCta: "Réserver un appel découverte gratuit",
  },
};

export default async function PackagesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = content[locale] ?? content.en;

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: c.h1,
    itemListElement: c.packages.map((pkg, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Course",
        name: pkg.name,
        description: pkg.desc,
        offers: { "@type": "Offer", price: pkg.price.replace("$",""), priceCurrency: "USD", availability: "https://schema.org/InStock" },
        provider: { "@type": "Organization", name: "English for Future Leaders", url: "https://myeffl.com" },
      }
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map(f => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={courseSchema} />
      <JsonLd data={faqSchema} />
      <main>
        {/* Header */}
        <section className="bg-cream section-pad pb-16">
          <div className="container-xl">
            <p className="eyebrow mb-5">{c.eyebrow}</p>
            <h1 className="text-[clamp(2rem,4.5vw,3.5rem)] font-black text-ink mb-5 max-w-[22ch]">{c.h1}</h1>
            <p className="text-muted max-w-[50ch]">{c.sub}</p>
          </div>
        </section>

        {/* Packages */}
        <section className="bg-cream-dark pb-24 px-4 sm:px-8">
          <div className="container-xl">
            <div className="grid md:grid-cols-3 gap-5">
              {c.packages.map((pkg, idx) => {
                const isMain = idx === 1;
                return (
                  <div key={idx} className={`rounded-2xl flex flex-col overflow-hidden ${
                    isMain ? "bg-ink text-on-dark shadow-2xl scale-[1.02]" : "bg-cream border border-border"
                  }`}>
                    <div className={`px-7 pt-7 pb-6 ${isMain ? "border-b border-white/10" : "border-b border-border"}`}>
                      {pkg.tag && (
                        <span className="inline-block text-[10px] font-black uppercase tracking-wider bg-gold text-ink px-3 py-1 rounded-full mb-4">
                          {pkg.tag}
                        </span>
                      )}
                      <h2 className={`text-lg font-black mb-1 ${isMain?"text-on-dark":"text-ink"}`}>{pkg.name}</h2>
                      <p className={`text-xs leading-relaxed ${isMain?"text-white/55":"text-muted"}`}>{pkg.desc}</p>
                    </div>
                    <div className="p-7 flex-1 flex flex-col">
                      <div className="mb-6">
                        <span className={`text-5xl font-black ${isMain?"text-on-dark":"text-ink"}`}>{pkg.price}</span>
                        <p className={`text-xs mt-1 ${isMain?"text-white/40":"text-muted"}`}>{pkg.period}</p>
                      </div>
                      <ul className="space-y-3 flex-1 mb-4">
                        {pkg.features.map((f,i) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check size={13} className={`mt-0.5 flex-shrink-0 ${isMain?"text-gold":"text-primary"}`} strokeWidth={2.5}/>
                            <span className={`text-xs leading-relaxed ${isMain?"text-white/75":"text-ink-soft"}`}>{f}</span>
                          </li>
                        ))}
                      </ul>
                      <p className={`text-[11px] mb-6 italic ${isMain?"text-white/35":"text-muted"}`}>{pkg.ideal}</p>
                      <Link href={`/${locale}/contact`} className={`w-full text-center py-3.5 rounded-xl font-semibold text-sm transition-colors ${
                        isMain ? "bg-gold text-ink hover:bg-gold-light" : "bg-ink text-on-dark hover:bg-ink-soft"
                      }`}>{pkg.cta}</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream section-pad">
          <div className="container-xl max-w-3xl">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-black text-ink mb-10">{c.faqTitle}</h2>
            <div className="space-y-6">
              {c.faqs.map((faq, i) => (
                <div key={i} className="border-t border-border pt-6">
                  <h3 className="font-bold text-ink mb-2">{faq.q}</h3>
                  <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-primary section-pad">
          <div className="container-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <div className="w-10 h-0.5 bg-gold mb-6"/>
              <h2 className="text-2xl font-black text-on-dark mb-2">{c.bottomTitle}</h2>
              <p className="text-white/55 text-sm">{c.bottomSub}</p>
            </div>
            <Link href={`/${locale}/contact`} className="btn-gold flex-shrink-0 flex items-center gap-2">
              {c.bottomCta} <ArrowRight size={15}/>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
