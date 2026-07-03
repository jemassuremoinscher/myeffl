import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StructuredData from "@/components/layout/StructuredData";
import { notFound } from "next/navigation";

type Article = { title: Record<string,string>; category: Record<string,string>; intro: Record<string,string>; sections: { heading: Record<string,string>; body: Record<string,string> }[]; cta: Record<string,string> };

const articles: Record<string, Article> = {
  "confident-in-meetings": {
    title: {
      en:"7 Phrases That Make You Sound Confident in English Meetings",
      fr:"7 phrases pour paraître confiant lors de réunions en anglais",
      ru:"7 фраз, которые делают вас уверенным на совещаниях на английском",
    },
    category: { en:"Business English", fr:"Anglais des affaires", ru:"Деловой английский" },
    intro: {
      en:"Sounding confident in English meetings is not about perfect grammar. It's about choosing the right phrases at the right moments. Native English speakers use specific language patterns to demonstrate authority, manage conversations, and build credibility — and these patterns can be learned.",
      fr:"Paraître confiant lors de réunions en anglais ne dépend pas d'une grammaire parfaite. Il s'agit de choisir les bonnes formules au bon moment. Les anglophones natifs utilisent des patterns linguistiques spécifiques pour démontrer leur autorité, gérer les conversations et construire leur crédibilité.",
      ru:"Уверенно звучать на совещаниях на английском — это не про идеальную грамматику. Это про выбор правильных фраз в нужный момент. Носители английского языка используют особые речевые паттерны, чтобы демонстрировать авторитет, управлять разговором и строить доверие.",
    },
    sections: [
      {
        heading: { en:"1. \"Let me build on that...\"", fr:"1. «Let me build on that...»", ru:"1. «Let me build on that...»" },
        body: { en:"Use this to add to a colleague's point without dismissing it. It signals collaboration and intellectual engagement. Example: \"Let me build on what Maria said — if we apply that approach to our MENA segment, we could see a 20% improvement.\"", fr:"Utilisez cette formule pour développer le propos d'un collègue sans le contredire. Elle signale la collaboration et l'engagement intellectuel.", ru:"Используйте эту фразу, чтобы развить мысль коллеги, не отвергая её. Это сигнализирует о сотрудничестве. Пример: «Let me build on what Maria said — if we apply that to our segment, we could see a 20% improvement.»" },
      },
      {
        heading: { en:"2. \"I'd like to push back on that slightly...\"", fr:"2. «I'd like to push back on that slightly...»", ru:"2. «I'd like to push back on that slightly...»" },
        body: { en:"Disagree professionally without being aggressive. This phrase is used by senior leaders to challenge ideas respectfully. It opens a debate without creating conflict.", fr:"Désaccordez-vous professionnellement sans être agressif. Cette phrase est utilisée par les leaders seniors pour challenger les idées respectueusement.", ru:"Несогласие без агрессии. Эту фразу используют топ-менеджеры, чтобы уважительно оспорить идею. Она открывает дискуссию, не создавая конфликта." },
      },
      {
        heading: { en:"3. \"The key takeaway here is...\"", fr:"3. «The key takeaway here is...»", ru:"3. «The key takeaway here is...»" },
        body: { en:"Summarise and steer the conversation. Using this phrase positions you as someone who synthesises information and drives the meeting forward — a leadership behaviour.", fr:"Résumez et orientez la conversation. Cette formule vous positionne comme quelqu'un qui synthétise l'information et fait avancer la réunion — un comportement de leader.", ru:"Резюмируйте и направляйте разговор. Эта фраза позиционирует вас как человека, который анализирует информацию и продвигает совещание вперёд." },
      },
      {
        heading: { en:"4. \"What's the timeline on this?\"", fr:"4. «What's the timeline on this?»", ru:"4. «What's the timeline on this?»" },
        body: { en:"Show you're results-focused and action-oriented. Asking about timelines moves the meeting from discussion to decision — which is what leaders do.", fr:"Montrez que vous êtes orienté résultats et actions. Poser une question sur les délais fait passer la réunion de la discussion à la décision.", ru:"Покажите, что вы ориентированы на результат. Вопрос о сроках переводит совещание от обсуждения к принятию решений — именно так действуют лидеры." },
      },
      {
        heading: { en:"5. \"My recommendation would be...\"", fr:"5. «My recommendation would be...»", ru:"5. «My recommendation would be...»" },
        body: { en:"Lead with authority. \"My recommendation\" is stronger than \"I think\" or \"maybe we should.\" It signals that you have considered the options and are proposing a course of action — not just an opinion.", fr:"Parlez avec autorité. «My recommendation» est plus fort que «I think» ou «maybe we should.» Cela signale que vous avez évalué les options et proposez une voie d'action.", ru:"Говорите с авторитетом. «My recommendation» сильнее, чем «I think» или «maybe we should». Это сигнализирует, что вы взвесили варианты и предлагаете конкретное действие." },
      },
      {
        heading: { en:"Practice makes permanent", fr:"La pratique rend permanent", ru:"Практика закрепляет навык" },
        body: { en:"Reading these phrases is not enough. The goal is to use them naturally, without thinking, under pressure. That requires deliberate practice with a coach who can give real-time feedback on your delivery, tone, and word choice in a professional context.", fr:"Lire ces formules ne suffit pas. L'objectif est de les utiliser naturellement, sans réfléchir, sous pression. Cela nécessite une pratique délibérée avec un coach.", ru:"Читать эти фразы недостаточно. Цель — использовать их естественно, не задумываясь, под давлением. Для этого нужна целенаправленная практика с коучем, который дает обратную связь в реальном времени." },
      },
    ],
    cta: {
      en:"Want to practise these phrases with a coach? Book a free session with Katsiaryna.",
      fr:"Vous voulez pratiquer ces formules avec un coach ? Réservez une session gratuite avec Katsiaryna.",
      ru:"Хотите отработать эти фразы с коучем? Запишитесь на бесплатное занятие с Катериной.",
    },
  },

  "english-job-interview": {
    title: {
      en:"How to Nail Your English Job Interview as a Non-Native Speaker",
      fr:"Comment réussir son entretien d'embauche en anglais en tant que non-natif",
      ru:"Как пройти собеседование на английском, если вы не носитель языка",
    },
    category: { en:"Interview Prep", fr:"Préparation aux entretiens", ru:"Подготовка к собеседованию" },
    intro: {
      en:"A job interview in English as a non-native speaker requires more than language skills — it requires strategic communication. Most Russian-speaking candidates lose interviews not because of language errors, but because of structural weaknesses in how they present themselves.",
      fr:"Un entretien d'embauche en anglais en tant que non-natif nécessite plus que des compétences linguistiques — il nécessite une communication stratégique.",
      ru:"Собеседование на английском как неносителю языка требует большего, чем просто языковые навыки — это стратегическая коммуникация. Большинство русскоязычных кандидатов проигрывают собеседования не из-за языковых ошибок, а из-за структурных слабостей в самопрезентации.",
    },
    sections: [
      {
        heading: { en:"The STAR Method: Your Structural Foundation", fr:"La méthode STAR : votre fondation structurelle", ru:"Метод STAR: структурная основа ваших ответов" },
        body: { en:"STAR stands for Situation, Task, Action, Result. Every behavioural interview question — \"Tell me about a time when...\" — should be answered using this framework. Structure signals competence.", fr:"STAR signifie Situation, Tâche, Action, Résultat. Chaque question comportementale doit recevoir une réponse structurée selon ce cadre.", ru:"STAR расшифровывается как Situation (Ситуация), Task (Задача), Action (Действие), Result (Результат). Каждый поведенческий вопрос на собеседовании должен быть отвечен по этой структуре. Структура сигнализирует о компетентности." },
      },
      {
        heading: { en:"Your \"Tell Me About Yourself\" Must Be Under 2 Minutes", fr:"Votre «Parlez-moi de vous» doit durer moins de 2 minutes", ru:"«Расскажите о себе» — не более 2 минут" },
        body: { en:"This is the most important answer in any interview. Focus it on value delivered, not biography. Structure: current role → key achievement → why this opportunity. Practice until it flows naturally.", fr:"C'est la réponse la plus importante dans tout entretien. Concentrez-vous sur la valeur apportée, pas la biographie.", ru:"Это самый важный ответ на любом собеседовании. Сосредоточьтесь на ценности, которую вы принесли, а не на биографии. Структура: текущая роль → ключее достижение → почему эта возможность." },
      },
      {
        heading: { en:"Use Their Language Back to Them", fr:"Utilisez leur vocabulaire dans vos réponses", ru:"Используйте их язык в своих ответах" },
        body: { en:"Research the company's values, mission statement, and job description. Mirror their specific words and phrases throughout the interview. This signals cultural alignment and preparation.", fr:"Recherchez les valeurs, la mission et la description de poste de l'entreprise. Réutilisez leurs mots spécifiques durant l'entretien.", ru:"Изучите ценности, миссию и описание должности компании. Используйте их конкретные слова и фразы на протяжении всего интервью. Это сигнализирует о культурном соответствии." },
      },
      {
        heading: { en:"Prepare 3 Strong Questions to Ask", fr:"Préparez 3 questions fortes à poser", ru:"Подготовьте 3 сильных вопроса для задания" },
        body: { en:"\"What does success look like in the first 90 days?\" is always powerful. Questions signal engagement and leadership potential. Never say \"No, I think I've covered everything\" when asked.", fr:"«Comment ressemble le succès dans les 90 premiers jours ?» est toujours puissant. Les questions signalent l'engagement et le potentiel de leadership.", ru:"«Как выглядит успех в первые 90 дней?» — всегда сильный вопрос. Вопросы сигнализируют о вовлечённости и лидерском потенциале. Никогда не говорите «нет» когда вас спрашивают, есть ли у вас вопросы." },
      },
    ],
    cta: {
      en:"Book a free mock interview session with Katsiaryna and get real feedback on your delivery.",
      fr:"Réservez une session d'entretien blanc gratuite avec Katsiaryna et obtenez un retour concret.",
      ru:"Запишитесь на бесплатное пробное интервью с Катериной и получите реальную обратную связь.",
    },
  },

  "business-email-templates": {
    title: {
      en:"Business Email Templates That Sound Professional (Not Translated)",
      fr:"Templates d'emails professionnels en anglais qui sonnent juste (pas traduit)",
      ru:"Шаблоны деловых писем на английском, которые звучат профессионально (не переведённо)",
    },
    category: { en:"Professional Communication", fr:"Communication professionnelle", ru:"Профессиональная коммуникация" },
    intro: {
      en:"The biggest mistake Russian-speaking professionals make in English business emails is translating directly from Russian. The result sounds formal, stiff, and sometimes odd to native speakers. These templates are built on patterns that actual English-speaking business professionals use.",
      fr:"La plus grande erreur des professionnels russophones dans les emails en anglais est de traduire directement depuis le russe. Le résultat semble formel, rigide et parfois bizarre pour les anglophones natifs.",
      ru:"Главная ошибка русскоязычных профессионалов в деловых письмах на английском — прямой перевод с русского. Результат звучит формально, скованно и иногда странно для носителей языка. Эти шаблоны основаны на паттернах, которые реально используют англоязычные бизнес-профессионалы.",
    },
    sections: [
      {
        heading: { en:"Template 1: Following Up After a Meeting", fr:"Modèle 1 : Suivi après une réunion", ru:"Шаблон 1: Письмо после встречи" },
        body: { en:"Subject: Following up — [Meeting Topic] | \"Hi [Name], great connecting today. As discussed, I'm attaching [document]. Please let me know if you have any questions or need anything else from my side. Best, [Your name]\" — Short. Direct. Professional.", fr:"Objet : Suite à notre réunion — [Sujet] | «Hi [Prénom], merci pour cet échange. Comme convenu, je joins [document]. N'hésitez pas si vous avez des questions. Cordialement, [Votre nom]»", ru:"Тема: Following up — [Тема встречи] | «Hi [Name], great connecting today. As discussed, I'm attaching [document]. Please let me know if you have any questions. Best, [Ваше имя]» — Коротко. Прямо. Профессионально." },
      },
      {
        heading: { en:"Template 2: Requesting Something", fr:"Modèle 2 : Demander quelque chose", ru:"Шаблон 2: Запрос информации или помощи" },
        body: { en:"\"Hi [Name], I hope you're well. Could you please send me [specific item]? I need it by [date] for [brief reason]. Let me know if you need anything from my end. Thanks, [Name]\" — Note: never start with \"I hope this email finds you well\" — it's overused and signals non-native writing.", fr:"«Hi [Prénom], j'espère que vous allez bien. Pourriez-vous m'envoyer [élément] ? J'en ai besoin pour le [date] pour [raison brève]. Merci, [Prénom]»", ru:"«Hi [Name], I hope you're well. Could you please send me [конкретный элемент]? I need it by [дата] for [краткая причина]. Thanks, [Имя]» — Примечание: никогда не начинайте с «I hope this email finds you well» — это заезженная фраза, которая выдаёт неносителя языка." },
      },
      {
        heading: { en:"Template 3: Declining Professionally", fr:"Modèle 3 : Décliner professionnellement", ru:"Шаблон 3: Профессиональный отказ" },
        body: { en:"\"Hi [Name], thank you for thinking of me for [opportunity]. Unfortunately, I'm not able to [commit/participate/attend] at this time due to [brief reason]. I hope we can collaborate in the future. Best, [Name]\" — Always leave the door open.", fr:"«Hi [Prénom], merci de m'avoir pensé pour [opportunité]. Je ne suis malheureusement pas en mesure de [participer] pour le moment. J'espère que nous pourrons collaborer à l'avenir. Cordialement, [Prénom]»", ru:"«Hi [Name], thank you for thinking of me for [возможность]. Unfortunately, I'm not able to [участвовать] at this time. I hope we can collaborate in the future. Best, [Имя]» — Всегда оставляйте дверь открытой." },
      },
      {
        heading: { en:"The Golden Rule: One Email, One Ask", fr:"La règle d'or : un email, une demande", ru:"Золотое правило: одно письмо — один запрос" },
        body: { en:"In English business culture, emails with multiple requests get the first one answered and the rest ignored. Always send separate emails for separate topics. This is a cultural difference that directly impacts your professional effectiveness.", fr:"Dans la culture des affaires anglophone, les emails avec plusieurs demandes ne reçoivent généralement de réponse qu'à la première. Envoyez toujours des emails séparés pour des sujets séparés.", ru:"В англоязычной деловой культуре письма с несколькими запросами обычно получают ответ только на первый. Всегда отправляйте отдельные письма по отдельным темам. Это культурная разница, которая напрямую влияет на вашу профессиональную эффективность." },
      },
    ],
    cta: {
      en:"Want to improve your business writing with personalised coaching? Book a free session.",
      fr:"Vous souhaitez améliorer votre rédaction professionnelle avec un coaching personnalisé ? Réservez une session gratuite.",
      ru:"Хотите улучшить деловую переписку с персональным коучингом? Запишитесь на бесплатное занятие.",
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  const article = articles[slug];
  if (!article) return {};
  return { title: article.title[locale]??article.title.en, description: article.intro[locale]??article.intro.en };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = articles[slug];
  if (!article) notFound();

  const articleSchema = {
    "@context":"https://schema.org",
    "@type":"Article",
    headline: article.title[locale]??article.title.en,
    description: article.intro[locale]??article.intro.en,
    author: { "@type":"Person", name:"Katsiaryna", url:`https://myeffl.com/${locale}/about` },
    publisher: { "@type":"Organization", name:"English for Future Leaders", url:"https://myeffl.com" },
    inLanguage: locale,
    datePublished: "2026-01-15",
    dateModified: "2026-06-01",
    mainEntityOfPage: { "@type":"WebPage", "@id":`https://myeffl.com/${locale}/blog/${slug}` },
  };

  const backLabel = locale==="ru"?"Назад к блогу":locale==="fr"?"Retour au blog":"Back to blog";
  const bookLabel = locale==="ru"?"Записаться бесплатно":locale==="fr"?"Réserver gratuitement":"Book free session";
  const readLabel = locale==="ru"?"мин. чтения":locale==="fr"?"min de lecture":"min read";

  return (
    <>
      <StructuredData data={articleSchema} />
      <main>
        <section className="bg-cream section-pad">
          <div className="container-xl max-w-3xl">
            <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors mb-10">
              <ArrowLeft size={14}/> {backLabel}
            </Link>

            <p className="eyebrow mb-5">{article.category[locale]??article.category.en}</p>
            <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-ink mb-6 leading-tight">
              {article.title[locale]??article.title.en}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-muted">Katsiaryna · EFFL</span>
              <span className="w-1 h-1 rounded-full bg-border"/>
              <span className="text-xs text-muted">6 {readLabel}</span>
            </div>
            <div className="w-10 h-0.5 bg-gold mb-10"/>

            <p className="text-base text-ink-soft leading-[1.85] mb-10 text-lg">
              {article.intro[locale]??article.intro.en}
            </p>

            <div className="space-y-10">
              {article.sections.map((sec, i) => (
                <div key={i}>
                  <h2 className="text-xl font-black text-ink mb-4">{sec.heading[locale]??sec.heading.en}</h2>
                  <p className="text-base text-ink-soft leading-[1.85]">{sec.body[locale]??sec.body.en}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-primary rounded-2xl p-8">
              <p className="text-on-dark font-black text-xl mb-3">{article.cta[locale]??article.cta.en}</p>
              <Link href={`/${locale}/contact`} className="btn-gold">{bookLabel}</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
