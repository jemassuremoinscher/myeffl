import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/seo/JsonLd";
import { faqSchemaEN, faqSchemaRU } from "@/components/seo/schemas";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string,string> = {
    en: "FAQ — English Coaching for Russian Speakers | EFFL",
    fr: "FAQ — Coaching Anglais pour Russophones | EFFL",
    ru: "FAQ — Коучинг английского для русскоязычных | EFFL",
  };
  const descs: Record<string,string> = {
    en: "Answers to the most common questions about professional English coaching for Russian-speaking executives and managers. Pricing, method, online sessions.",
    fr: "Réponses aux questions les plus fréquentes sur le coaching anglais pour les professionnels russophones.",
    ru: "Ответы на самые популярные вопросы о коучинге профессионального английского для русскоязычных руководителей. Цены, методика, онлайн-занятия.",
  };
  return { title: titles[locale]??titles.en, description: descs[locale]??descs.en };
}

const faqData: Record<string,{ h1:string; sub:string; cta:string; items:{q:string;a:string}[] }> = {
  en: {
    h1: "Frequently Asked Questions",
    sub: "Everything you need to know about professional English coaching with Katsiaryna.",
    cta: "Book a free session",
    items: [
      { q:"How long does it take to improve professional English?", a:"Most students notice significant improvement in confidence and fluency within 4–8 weeks of consistent weekly sessions. Our programme targets your specific professional context — meetings, presentations, emails, negotiations — so results come faster than general English classes." },
      { q:"Do I need to be advanced in English to join?", a:"We work with intermediate (B1) level and above. You need to be able to hold a basic conversation in English. Coaching is most effective when you already have a foundation and want to polish your professional communication and confidence." },
      { q:"Is online coaching as effective as in-person?", a:"Yes. All sessions are delivered via Zoom or Google Meet and are as effective as in-person. The advantage is complete flexibility — you can attend from your office, home, or anywhere in the world." },
      { q:"What makes EFFL different from other English coaching services?", a:"Katsiaryna is a native Russian speaker who is CELTA-certified with 10+ years coaching executives and business professionals. She understands exactly where Russian speakers struggle in English — specific pronunciation challenges, cultural differences in communication style, and professional vocabulary gaps. This insider knowledge makes the coaching uniquely effective." },
      { q:"What is the first session like?", a:"The first session (included free) is a 20-minute conversation to understand your goals, assess your current level, and explain how we would structure your learning. No test. No pressure. A professional, relaxed conversation." },
      { q:"Can I get coaching in Russian?", a:"Katsiaryna is a native Russian speaker and can explain concepts, grammar rules and cultural nuances in Russian when needed. However, sessions are conducted primarily in English to maximise your practice time." },
      { q:"What is the Discovery package?", a:"The Discovery package ($49) includes 2 × 50-minute sessions. It starts with a full level assessment (speaking, writing, listening), produces a personalised 3-month learning plan, identifies your top 3 professional communication gaps, and ends with a follow-up mini-session to set goals." },
      { q:"Do you teach business English specifically?", a:"Yes. All coaching is focused on professional and business English. We work on meetings and presentations, negotiations and persuasion, business writing (emails, reports, proposals), networking and small talk, and confidence in international contexts." },
    ],
  },
  ru: {
    h1: "Часто задаваемые вопросы",
    sub: "Всё, что нужно знать о коучинге профессионального английского с Катериной.",
    cta: "Записаться на бесплатное занятие",
    items: [
      { q:"Сколько времени нужно, чтобы улучшить деловой английский?", a:"Большинство учеников замечают значительное улучшение уверенности и беглости речи уже через 4–8 недель регулярных занятий. Наша программа направлена именно на ваш профессиональный контекст — встречи, презентации, переписка, переговоры — поэтому результаты приходят быстрее, чем при обычных курсах английского." },
      { q:"Нужен ли продвинутый уровень английского для занятий?", a:"Мы работаем с уровнем Intermediate (B1) и выше. Вы должны уметь поддерживать базовый разговор на английском. Коучинг наиболее эффективен, когда у вас уже есть основа, и вы хотите отполировать профессиональную коммуникацию и уверенность." },
      { q:"Так ли эффективны онлайн-занятия, как очные?", a:"Да. Все занятия проходят по видеосвязи (Zoom или Google Meet) и столь же эффективны, как и очные. Преимущество — полная гибкость: вы можете заниматься из офиса, дома или из любой точки мира." },
      { q:"Чем EFFL отличается от других курсов английского?", a:"Катерина — носитель русского языка с сертификатом CELTA и 10+ лет опыта обучения руководителей и бизнес-профессионалов. Она точно знает, где русскоязычные допускают ошибки в английском — специфические проблемы с произношением, культурные различия в стиле общения, профессиональные пробелы в словарном запасе. Это уникальное знание изнутри делает коучинг особенно эффективным." },
      { q:"Как проходит первое занятие?", a:"Первое занятие (бесплатно) — 20-минутный разговор, чтобы понять ваши цели, оценить текущий уровень и объяснить, как будет структурировано ваше обучение. Никаких тестов и давления. Профессиональная, непринуждённая беседа." },
      { q:"Где найти курсы делового английского для русских в Дубае?", a:"English for Future Leaders (EFFL) предлагает специализированный коучинг делового английского для русскоязычных профессионалов, базируясь в Дубае. Все занятия проходят онлайн — ученики подключаются из Дубая, Москвы, Алма-Аты, Лондона и других городов." },
      { q:"Можно ли заниматься на русском языке?", a:"Катерина — носитель русского языка и может объяснять концепции, правила грамматики и культурные нюансы на русском при необходимости. Однако занятия проводятся преимущественно на английском, чтобы максимально увеличить время практики." },
      { q:"Преподаёте ли вы деловой английский?", a:"Да. Весь коучинг сосредоточен на профессиональном и деловом английском: встречи и презентации, переговоры и убеждение, деловая переписка (письма, отчёты, предложения), нетворкинг и светские беседы, уверенность в международном контексте." },
    ],
  },
  fr: {
    h1: "Questions fréquemment posées",
    sub: "Tout ce que vous devez savoir sur le coaching anglais professionnel avec Katsiaryna.",
    cta: "Réserver une séance gratuite",
    items: [
      { q:"Combien de temps faut-il pour améliorer son anglais professionnel ?", a:"La plupart des étudiants remarquent une amélioration significative de leur confiance et de leur aisance en 4 à 8 semaines de sessions hebdomadaires. Notre programme cible spécifiquement votre contexte professionnel — réunions, présentations, emails, négociations." },
      { q:"Faut-il un niveau avancé pour commencer ?", a:"Nous travaillons à partir du niveau intermédiaire (B1). Vous devez pouvoir soutenir une conversation basique en anglais. Le coaching est plus efficace quand vous avez déjà une base et souhaitez affiner votre communication professionnelle." },
      { q:"Le coaching en ligne est-il aussi efficace qu'en présentiel ?", a:"Oui. Toutes les sessions se déroulent via Zoom ou Google Meet et sont aussi efficaces qu'en présentiel. L'avantage : une flexibilité totale pour participer depuis n'importe où dans le monde." },
      { q:"Qu'est-ce qui distingue EFFL des autres services de coaching anglais ?", a:"Katsiaryna est une locutrice native du russe, certifiée CELTA avec 10+ ans d'expérience auprès de cadres et professionnels. Elle comprend exactement où les russophones rencontrent des difficultés en anglais." },
    ],
  },
};

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const d = faqData[locale] ?? faqData.en;
  const schema = locale === "ru" ? faqSchemaRU : faqSchemaEN;

  return (
    <>
      <JsonLd data={schema} />
      <main>
        <section className="bg-cream section-pad">
          <div className="container-xl max-w-3xl">
            <p className="eyebrow mb-5">FAQ</p>
            <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-ink mb-4">{d.h1}</h1>
            <div className="w-10 h-0.5 bg-gold mb-4"/>
            <p className="text-muted mb-14">{d.sub}</p>

            <div className="space-y-0">
              {d.items.map((item, i) => (
                <div key={i} className="border-t border-border py-7">
                  <h2 className="font-bold text-ink mb-3">{item.q}</h2>
                  <p className="text-muted text-sm leading-[1.9]">{item.a}</p>
                </div>
              ))}
              <div className="border-t border-border"/>
            </div>

            <div className="mt-14 bg-primary rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <div className="w-8 h-0.5 bg-gold mb-4"/>
                <p className="text-on-dark font-black text-lg">Still have questions?</p>
                <p className="text-white/50 text-sm mt-1">Send a message — I respond within 24 hours.</p>
              </div>
              <Link href={`/${locale}/contact`} className="btn-gold flex-shrink-0">{d.cta}</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
