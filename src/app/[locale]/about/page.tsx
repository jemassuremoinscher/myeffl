import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { personSchema } from "@/components/seo/schemas";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string,string> = {
    en: "About Katsiaryna | CELTA-Certified English Coach | EFFL",
    fr: "À propos de Katsiaryna | Coach Anglais certifiée CELTA | EFFL",
    ru: "О Катерине | Репетитор английского с сертификатом CELTA | EFFL",
  };
  const descs: Record<string,string> = {
    en: "Meet Katsiaryna — CELTA-certified English coach with 10+ years experience coaching Russian-speaking executives and managers. Based in Dubai, teaching worldwide online.",
    fr: "Rencontrez Katsiaryna — coach anglais certifiée CELTA avec plus de 10 ans d'expérience auprès de cadres et managers russophones. Basée à Dubaï.",
    ru: "Познакомьтесь с Катериной — репетитор английского с сертификатом CELTA и 10+ летним опытом работы с русскоязычными руководителями. Дубай, онлайн.",
  };
  return { title: titles[locale]??titles.en, description: descs[locale]??descs.en };
}

const content: Record<string, {
  eyebrow: string; h1: string; tagline: string; bio1: string; bio2: string; bio3: string;
  quoteText: string; method: string; methodItems: string[];
  credTitle: string; features: string[]; cta: string;
  reviewsTitle: string; reviews: { name: string; role: string; text: string }[];
}> = {
  en: {
    eyebrow: "Your Coach",
    h1: "Bilingual educator. Russian native. English expert.",
    tagline: "CELTA Certified · 10+ Years · 500+ Professionals Coached",
    bio1: "I'm a native Russian speaker who became fluent in English and French through years of immersion, study and professional practice. I know exactly what it feels like to walk into a meeting in a foreign language — the nerves, the self-censorship, the frustration of not being able to express your real intelligence.",
    bio2: "Over 10+ years, I have coached 500+ professionals — from startup founders to C-suite executives — in Dubai, Russia, Kazakhstan, Europe and beyond. My students include people who closed $2M deals in English, got promoted after just 3 months, and went from silent in meetings to leading them.",
    bio3: "My background in B2B marketing and cross-functional team leadership means I understand the business context deeply. I don't teach you textbook English. I teach you the English that works in your world.",
    quoteText: "I don't just teach English. I teach the confidence and cultural intelligence that opens doors.",
    method: "My Method",
    methodItems: [
      "Diagnosis first — every programme starts with understanding your specific professional context and communication gaps",
      "Real-world scenarios — roleplay, live email review, presentation feedback, negotiation practice",
      "Cultural intelligence — understanding not just what to say but how British and American professionals communicate",
      "Accountability — structured feedback after every session, measurable progress tracking",
    ],
    credTitle: "Credentials & Experience",
    features: ["CELTA Certificate — Cambridge Assessment English", "10+ years coaching executives and managers", "Experience in Dubai, Russia, Kazakhstan, Europe", "Languages: Russian (native), English (fluent), French (fluent)"],
    cta: "Book a Free Discovery Session",
    reviewsTitle: "What students say",
    reviews: [
      { name: "Natalia K.", role: "VP Marketing, Dubai", text: "She completely changed my approach to English. I got promoted 6 months after our sessions started. The ROI is extraordinary." },
      { name: "Alex M.", role: "Software Engineer, London", text: "From silent in meetings to confident speaker. The way Katsiaryna explains English communication patterns for Russian thinkers is unique and very effective." },
      { name: "Dmitry S.", role: "Startup Founder", text: "I closed a $2M deal in English after 3 months of coaching. Best professional investment I've ever made." },
    ],
  },
  fr: {
    eyebrow: "Votre Coach",
    h1: "Éducatrice bilingue. Russophone native. Experte en anglais.",
    tagline: "Certifiée CELTA · 10+ ans · 500+ professionnels coachés",
    bio1: "Je suis une locutrice native du russe qui est devenue bilingue en anglais et en français. Je sais exactement ce que ressent quelqu'un qui entre dans une réunion dans une langue étrangère — l'anxiété, l'autocensure, la frustration de ne pas pouvoir exprimer sa vraie intelligence.",
    bio2: "En 10+ ans, j'ai coaché 500+ professionnels — de fondateurs de startups à des cadres dirigeants — à Dubaï, en Russie, au Kazakhstan, en Europe et au-delà.",
    bio3: "Mon expérience en marketing B2B et en leadership d'équipes transfonctionnelles signifie que je comprends le contexte business en profondeur. Je n'enseigne pas l'anglais des manuels scolaires. J'enseigne l'anglais qui fonctionne dans votre monde.",
    quoteText: "Je n'enseigne pas seulement l'anglais. J'enseigne la confiance et l'intelligence culturelle qui ouvrent des portes.",
    method: "Ma Méthode",
    methodItems: [
      "Diagnostic d'abord — chaque programme commence par comprendre votre contexte professionnel spécifique",
      "Scénarios réels — jeux de rôle, revue d'emails en direct, feedback sur vos présentations",
      "Intelligence culturelle — comprendre non seulement quoi dire, mais comment les professionnels britanniques et américains communiquent",
      "Responsabilité — feedback structuré après chaque séance, suivi des progrès mesurable",
    ],
    credTitle: "Diplômes & Expérience",
    features: ["Certificat CELTA — Cambridge Assessment English", "10+ ans à coacher cadres et managers", "Expérience à Dubaï, Russie, Kazakhstan, Europe", "Langues : Russe (natif), Anglais (courant), Français (courant)"],
    cta: "Réserver une séance découverte gratuite",
    reviewsTitle: "Ce que disent les étudiants",
    reviews: [
      { name: "Natalia K.", role: "VP Marketing, Dubaï", text: "Elle a complètement changé mon approche de l'anglais. J'ai été promue 6 mois après le début de nos séances. Le ROI est extraordinaire." },
      { name: "Alex M.", role: "Ingénieur, Londres", text: "De silencieux en réunion à orateur confiant. La façon dont Katsiaryna explique la communication en anglais pour les locuteurs russophones est unique." },
      { name: "Dmitry S.", role: "Fondateur de startup", text: "J'ai conclu un accord de 2M$ en anglais après 3 mois de coaching. Le meilleur investissement professionnel que j'aie jamais fait." },
    ],
  },
  ru: {
    eyebrow: "Ваш коуч",
    h1: "Двуязычный педагог. Носитель русского. Эксперт по английскому.",
    tagline: "Сертификат CELTA · 10+ лет · 500+ обученных специалистов",
    bio1: "Я носитель русского языка, который свободно владеет английским и французским. Я точно знаю, каково это — заходить на встречу на иностранном языке: волнение, самоцензура, frustration от того, что не можешь выразить свой настоящий интеллект.",
    bio2: "За 10+ лет я обучила 500+ специалистов — от основателей стартапов до топ-менеджеров — в Дубае, России, Казахстане, Европе и не только. Мои ученики заключали сделки на $2M на английском, получали повышения уже через 3 месяца и превращались из молчунов на встречах в их ведущих.",
    bio3: "Мой опыт в B2B-маркетинге и руководстве кросс-функциональными командами означает, что я глубоко понимаю бизнес-контекст. Я не учу английскому из учебников. Я учу английскому, который работает в вашем мире.",
    quoteText: "Я учу не просто английскому. Я учу уверенности и культурному интеллекту, которые открывают двери.",
    method: "Мой метод",
    methodItems: [
      "Сначала диагностика — каждая программа начинается с понимания вашего профессионального контекста и пробелов в коммуникации",
      "Реальные сценарии — ролевые игры, разбор писем в режиме реального времени, обратная связь по презентациям",
      "Культурный интеллект — понимание не только что говорить, но и как общаются британские и американские профессионалы",
      "Ответственность — структурированная обратная связь после каждого занятия, измеримое отслеживание прогресса",
    ],
    credTitle: "Квалификация и опыт",
    features: ["Сертификат CELTA — Cambridge Assessment English", "10+ лет коучинга руководителей и менеджеров", "Опыт работы в Дубае, России, Казахстане, Европе", "Языки: Русский (родной), Английский (свободно), Французский (свободно)"],
    cta: "Записаться на бесплатное знакомство",
    reviewsTitle: "Отзывы учеников",
    reviews: [
      { name: "Наталья К.", role: "VP Marketing, Дубай", text: "Она полностью изменила мой подход к английскому. Я получила повышение через 6 месяцев после начала занятий. Возврат инвестиций невероятный." },
      { name: "Алексей М.", role: "Инженер-программист, Лондон", text: "От молчуна на встречах до уверенного оратора. То, как Катерина объясняет паттерны английской коммуникации для русскоязычных — уникально и очень эффективно." },
      { name: "Дмитрий С.", role: "Основатель стартапа", text: "Я закрыл сделку на $2M на английском после 3 месяцев коучинга. Лучшая профессиональная инвестиция, которую я когда-либо делал." },
    ],
  },
};

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = content[locale] ?? content.en;

  return (
    <>
      <JsonLd data={personSchema} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
          ...personSchema,
          description: c.bio1 + " " + c.bio2,
        }
      }} />
      <main>
        {/* HERO */}
        <section className="bg-cream section-pad">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Photo */}
              <div className="sticky top-24">
                <div className="rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0 relative bg-primary shadow-xl">
                  <Image src="/kate.jpg" alt="Katsiaryna — English Coach" fill className="object-cover object-top"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent"/>
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-6">
                    <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">{c.eyebrow}</p>
                    <p className="text-on-dark font-bold">Katsiaryna</p>
                    <p className="text-white/50 text-xs mt-1">{c.tagline}</p>
                  </div>
                </div>
                <div className="h-1.5 bg-gold max-w-sm mx-auto lg:mx-0 rounded-b"/>
              </div>

              {/* Content */}
              <div>
                <p className="eyebrow mb-5">{c.eyebrow}</p>
                <h1 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-ink leading-tight mb-6">{c.h1}</h1>
                <div className="w-10 h-0.5 bg-gold mb-8"/>

                <p className="text-muted leading-[1.9] mb-5">{c.bio1}</p>
                <p className="text-muted leading-[1.9] mb-5">{c.bio2}</p>
                <p className="text-muted leading-[1.9] mb-8">{c.bio3}</p>

                <blockquote className="border-l-2 border-gold pl-6 mb-10">
                  <p className="text-ink font-semibold italic leading-relaxed">"{c.quoteText}"</p>
                  <p className="text-xs text-muted mt-2">— Katsiaryna</p>
                </blockquote>

                {/* Method */}
                <h2 className="text-xl font-black text-ink mb-5">{c.method}</h2>
                <ul className="space-y-4 mb-10">
                  {c.methodItems.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={15} className="text-primary flex-shrink-0 mt-0.5" strokeWidth={2.5}/>
                      <span className="text-sm text-ink-soft leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Credentials */}
                <div className="bg-cream-dark rounded-2xl p-6 border border-border mb-10">
                  <h3 className="font-bold text-ink text-sm mb-4">{c.credTitle}</h3>
                  <ul className="space-y-2.5">
                    {c.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-muted">
                        <span className="text-primary font-bold flex-shrink-0">·</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/${locale}/contact`} className="btn-dark">{c.cta}</Link>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-primary section-pad">
          <div className="container-xl">
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-black text-on-dark mb-12">{c.reviewsTitle}</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {c.reviews.map((r, i) => (
                <div key={i} className={`rounded-2xl p-7 ${i===0?"bg-white/10 ring-1 ring-white/20":"bg-white/5"}`}>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_,j)=><Star key={j} size={13} className="fill-gold text-gold"/>)}
                  </div>
                  <p className="text-white/80 text-sm leading-[1.8] italic mb-6">"{r.text}"</p>
                  <div>
                    <p className="font-bold text-on-dark text-sm">{r.name}</p>
                    <p className="text-white/45 text-xs">{r.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
