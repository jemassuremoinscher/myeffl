import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { posts } from "../page";

type Locale = "en" | "fr" | "ru";
function loc<T>(obj: Record<string,T>, l: string): T { return obj[l as Locale] ?? obj.en; }

const articleContent: Record<string, {
  en: { sections: { heading?: string; body: string }[] };
  fr: { sections: { heading?: string; body: string }[] };
  ru: { sections: { heading?: string; body: string }[] };
}> = {
  "confident-in-meetings": {
    en: { sections: [
      { body: "Confidence in an English meeting isn't about having perfect grammar. Native English speakers make grammatical mistakes all the time. What matters is whether you can steer the conversation, add weight to your ideas, and hold the room's attention." },
      { heading: "1. \"Let me build on that...\"", body: "Use this when someone makes a good point and you want to add to it. It shows collaborative thinking and keeps the conversation moving without interrupting anyone." },
      { heading: "2. \"I'd like to push back on that slightly...\"", body: "This phrase lets you disagree professionally without being aggressive. It's direct but polite — the standard mode of discourse in British and American professional settings." },
      { heading: "3. \"The key takeaway here is...\"", body: "Use this to summarise and steer. It signals that you're listening, synthesising, and taking responsibility for the direction of the meeting." },
      { heading: "4. \"What's the timeline on this?\"", body: "Four words that make you sound results-focused and commercially minded. Ask this whenever a decision is made without a clear next step." },
      { heading: "5. \"Let's table that for now and circle back.\"", body: "This is how leaders manage meeting tangents. It's assertive without being rude, and it demonstrates agenda control." },
      { heading: "6. \"I want to make sure I understand correctly...\"", body: "Use this to clarify before responding. It's not a sign of weakness — it's a sign of professionalism. It also buys you thinking time." },
      { heading: "7. \"My recommendation would be...\"", body: "This is the most important shift you can make: from giving opinions to giving recommendations. Leaders recommend. Employees opine." },
      { body: "Practising these phrases in a safe, coaching environment — where you get real-time feedback on how they land — is the fastest way to internalise them. Book a discovery session and we'll run through them live." },
    ]},
    fr: { sections: [
      { body: "La confiance en réunion anglophone ne vient pas d'une grammaire parfaite. Les anglophones natifs font des erreurs grammaticales en permanence. Ce qui compte, c'est votre capacité à orienter la conversation et retenir l'attention." },
      { heading: "1. \"Let me build on that...\" (Je vais développer cela...)", body: "Utilisez cette phrase quand quelqu'un fait un bon point et que vous souhaitez y ajouter quelque chose. Elle montre une pensée collaborative." },
      { heading: "2. \"I'd like to push back on that slightly...\" (Je voudrais nuancer légèrement...)", body: "Cette phrase vous permet de ne pas être d'accord de façon professionnelle, sans agressivité. C'est direct mais poli." },
      { heading: "3. \"The key takeaway here is...\" (Le point essentiel ici est...)", body: "Utilisez-la pour résumer et orienter. Elle signale que vous écoutez, synthétisez et prenez la direction de la réunion en main." },
      { heading: "4. \"What's the timeline on this?\" (Quel est le calendrier ?)", body: "Quatre mots qui vous font paraître orienté résultats et commercial. Demandez cela chaque fois qu'une décision est prise sans prochaine étape claire." },
      { heading: "5. \"Let's table that for now...\" (Laissons cela de côté pour l'instant...)", body: "C'est comme ça que les leaders gèrent les tangentes en réunion. Assertif sans être impoli." },
      { heading: "6. \"I want to make sure I understand correctly...\" (Je veux m'assurer de bien comprendre...)", body: "Utilisez cette phrase pour clarifier avant de répondre. C'est un signe de professionnalisme, pas de faiblesse." },
      { heading: "7. \"My recommendation would be...\" (Ma recommandation serait...)", body: "Le changement le plus important : passer des opinions aux recommandations. Les leaders recommandent." },
      { body: "Pratiquer ces phrases dans un cadre de coaching vous permet de les intégrer rapidement. Réservez une séance découverte et nous les travaillerons en direct." },
    ]},
    ru: { sections: [
      { body: "Уверенность на английских встречах — это не безупречная грамматика. Носители языка постоянно делают грамматические ошибки. Важно другое: способность управлять беседой, весомо излагать идеи и удерживать внимание аудитории." },
      { heading: "1. «Let me build on that...» (Позвольте развить эту мысль...)", body: "Используйте, когда коллега высказывает хорошую точку зрения и вы хотите дополнить. Показывает совместное мышление и поддерживает разговор, не перебивая." },
      { heading: "2. «I'd like to push back on that slightly...» (Позвольте слегка возразить...)", body: "Эта фраза позволяет профессионально не соглашаться без агрессии. Прямо и вежливо — стандартный режим общения в британской и американской профессиональной среде." },
      { heading: "3. «The key takeaway here is...» (Ключевой вывод здесь...)", body: "Используйте для резюмирования и управления дискуссией. Сигнализирует, что вы слушаете, синтезируете и берёте на себя ответственность за направление встречи." },
      { heading: "4. «What's the timeline on this?» (Каковы сроки?)", body: "Четыре слова, которые делают вас ориентированным на результат. Задавайте этот вопрос всякий раз, когда принимается решение без чёткого следующего шага." },
      { heading: "5. «Let's table that for now and circle back.» (Давайте отложим это и вернёмся позже.)", body: "Вот как лидеры управляют отклонениями от повестки. Настойчиво, но невежливо не перебивать — демонстрирует контроль над повесткой дня." },
      { heading: "6. «I want to make sure I understand correctly...» (Хочу убедиться, что правильно понимаю...)", body: "Используйте для уточнения перед ответом. Это не слабость — это профессионализм. Также даёт время подумать." },
      { heading: "7. «My recommendation would be...» (Моя рекомендация такова...)", body: "Важнейший сдвиг: от выражения мнений к рекомендациям. Лидеры рекомендуют. Сотрудники высказывают мнения." },
      { body: "Отработка этих фраз в безопасной обстановке коучинга с обратной связью в режиме реального времени — самый быстрый способ их усвоить. Запишитесь на сессию знакомства, и мы разберём их вживую." },
    ]},
  },
  "english-job-interview": {
    en: { sections: [
      { body: "A job interview in English is a specific performance. It has structure, rituals, and unwritten rules — and if you don't know them, you'll be at a disadvantage even if your English is excellent." },
      { heading: "The STAR method", body: "Every behavioural interview question ('Tell me about a time when...') should be answered using STAR: Situation (set the scene), Task (what you were responsible for), Action (what you specifically did), Result (the outcome, ideally quantified). Without this structure, your answers will meander and lose the interviewer." },
      { heading: "Cultural differences matter", body: "British and American interviewers value confident directness paired with genuine humility. Russian speakers often default to either over-modesty ('I just did my part...') or over-confidence without evidence. The sweet spot: specific, evidence-based confidence. 'I led a team of 8 and we delivered X% above target.'" },
      { heading: "Your 'Tell me about yourself'", body: "This is the most important question and most people answer it badly. It should be under 2 minutes, focused on professional value (not biography), and end with why you're interested in this specific role. Practise it until it's fluent and natural." },
      { heading: "The questions you must ask", body: "Always prepare 3 questions to ask at the end. 'What does success look like in the first 90 days?' is always powerful. It shows commercial thinking and genuine interest in contributing." },
      { heading: "Pronunciation vs fluency", body: "Accent doesn't matter — clarity does. Focus on speaking at a pace that allows you to be understood clearly. Slower is almost always better in an interview." },
      { body: "The best preparation is practice with immediate feedback. Book a discovery session and we'll run through your specific interview scenario live." },
    ]},
    fr: { sections: [
      { body: "Un entretien d'embauche en anglais est une performance spécifique avec sa structure, ses rituels et ses règles non écrites." },
      { heading: "La méthode STAR", body: "Chaque question comportementale doit être répondue avec STAR : Situation, Tâche, Action, Résultat. Sans cette structure, vos réponses s'éparpilleront." },
      { heading: "Les différences culturelles comptent", body: "Les recruteurs britanniques et américains valorisent la confiance directe couplée à une vraie humilité. La confiance basée sur des preuves concrètes est la clé." },
      { heading: "Votre 'Parlez-moi de vous'", body: "C'est la question la plus importante. Elle doit durer moins de 2 minutes, se concentrer sur la valeur professionnelle et se terminer par votre intérêt pour ce rôle spécifique." },
      { heading: "Les questions à poser", body: "'What does success look like in the first 90 days?' est toujours une question percutante. Elle montre que vous pensez aux résultats." },
      { body: "La meilleure préparation est la pratique avec un retour immédiat. Réservez une séance et nous travaillerons votre scénario spécifique." },
    ]},
    ru: { sections: [
      { body: "Собеседование на английском — это особое выступление. У него есть структура, ритуалы и негласные правила, незнание которых поставит вас в невыгодное положение, даже если ваш английский отличный." },
      { heading: "Метод STAR", body: "На каждый поведенческий вопрос («Расскажите о случае, когда...») нужно отвечать по STAR: Situation (опишите контекст), Task (ваша ответственность), Action (что конкретно сделали вы), Result (результат, желательно в цифрах). Без этой структуры ваши ответы будут расплываться." },
      { heading: "Культурные различия имеют значение", body: "Британские и американские интервьюеры ценят уверенную прямолинейность в сочетании с искренней скромностью. Русскоязычные часто склонны либо к излишней скромности («Я просто делал своё дело...»), либо к самоуверенности без доказательств. Золотая середина: конкретная, основанная на фактах уверенность. «Я руководил командой из 8 человек, и мы выполнили план на X% сверх нормы»." },
      { heading: "Ваш ответ на «Расскажите о себе»", body: "Это самый важный вопрос, и большинство отвечают на него плохо. Ответ должен занимать не более 2 минут, фокусироваться на профессиональной ценности (не на биографии) и завершаться объяснением, почему вас интересует именно эта должность. Отрабатывайте его до беглости и естественности." },
      { heading: "Вопросы, которые нужно задать", body: "Всегда готовьте 3 вопроса для конца интервью. «Как выглядит успех в первые 90 дней?» — всегда сильный ход. Он показывает коммерческое мышление и искренний интерес к результату." },
      { heading: "Произношение vs беглость речи", body: "Акцент не важен — важна чёткость. Сосредоточьтесь на темпе речи, позволяющем вас ясно понять. На собеседовании медленнее почти всегда лучше." },
      { body: "Лучшая подготовка — практика с мгновенной обратной связью. Запишитесь на сессию знакомства, и мы разберём именно ваш сценарий интервью." },
    ]},
  },
  "business-email-templates": {
    en: { sections: [
      { body: "Business emails in English have a specific rhythm: short opening, direct request, clear next step. Wordiness kills credibility. These 5 templates cover the scenarios you'll face most often." },
      { heading: "Template 1 — Follow-up after a meeting", body: "Subject: Following up — [Meeting topic]\n\nHi [Name],\n\nGreat to connect today. As discussed, I'm attaching [document]. Please let me know if you have any questions. I'll follow up on [specific action] by [date].\n\nBest,\n[Your name]" },
      { heading: "Template 2 — Requesting information", body: "Subject: Quick question — [Topic]\n\nHi [Name],\n\nI hope this finds you well. Could you please share [specific information]? I need this by [date] to [reason].\n\nThank you in advance.\n\nBest,\n[Your name]" },
      { heading: "Template 3 — Declining professionally", body: "Subject: Re: [Original subject]\n\nHi [Name],\n\nThank you for thinking of me. Unfortunately, I'm unable to [action] at this time due to [brief reason]. I hope we can explore this again in the future.\n\nBest,\n[Your name]" },
      { heading: "Template 4 — Escalating / following up", body: "Subject: Follow-up: [Original subject]\n\nHi [Name],\n\nI wanted to follow up on my email from [date]. Could you please provide an update on [topic]? I need this by [date] to [reason].\n\nThank you,\n[Your name]" },
      { heading: "Template 5 — Cold introduction", body: "Subject: Introduction — [Your name] / [Context]\n\nHi [Name],\n\nI'm reaching out because [specific reason]. I believe there's potential for [mutual benefit].\n\nWould you be open to a 20-minute call to explore this?\n\nBest,\n[Your name]" },
      { heading: "Key principles", body: "1. Subject line first — make it specific, not vague. 2. One email, one request. 3. Always include a clear next step. 4. Sign off with 'Best' — not 'Regards' (too cold) or 'Cheers' (too casual for new contacts)." },
      { body: "Practising email writing with immediate feedback is one of the fastest ways to improve your professional English. Every Regular and Intensive session includes email review." },
    ]},
    fr: { sections: [
      { body: "Les emails professionnels en anglais ont un rythme spécifique : ouverture courte, demande directe, prochaine étape claire. Ces 5 modèles couvrent les scénarios les plus fréquents." },
      { heading: "Modèle 1 — Suivi après réunion", body: "Objet : Suivi — [Sujet de la réunion]\n\nBonjour [Prénom],\n\nRavi d'avoir échangé aujourd'hui. Comme convenu, je joins [document]. N'hésitez pas si vous avez des questions.\n\nCordialement,\n[Votre nom]" },
      { heading: "Modèle 2 — Demande d'information", body: "Objet : Question rapide — [Sujet]\n\nBonjour [Prénom],\n\nPourriez-vous me communiquer [information spécifique] ? J'en ai besoin avant le [date] pour [raison].\n\nMerci d'avance.\n\nCordialement," },
      { heading: "Modèle 3 — Refus professionnel", body: "Objet : Re : [Sujet original]\n\nBonjour [Prénom],\n\nMerci d'avoir pensé à moi. Je suis malheureusement dans l'impossibilité de [action] en ce moment. J'espère que nous pourrons collaborer prochainement.\n\nCordialement," },
      { heading: "Principes clés", body: "1. Objet précis et spécifique. 2. Un email, une demande. 3. Toujours une prochaine étape claire. 4. Terminez avec 'Best regards' ou 'Kind regards'." },
      { body: "La pratique de la rédaction d'emails avec un retour immédiat est l'un des moyens les plus rapides d'améliorer votre anglais professionnel." },
    ]},
    ru: { sections: [
      { body: "Деловые письма на английском имеют особый ритм: короткое вступление, прямая просьба, чёткий следующий шаг. Многословие убивает доверие. Эти 5 шаблонов охватывают самые распространённые сценарии." },
      { heading: "Шаблон 1 — Письмо после встречи", body: "Тема: Following up — [Тема встречи]\n\nHi [Имя],\n\nОтлично пообщались сегодня. Как и договаривались, прилагаю [документ]. Дайте знать, если будут вопросы. Свяжусь по [конкретному действию] до [дата].\n\nBest,\n[Ваше имя]" },
      { heading: "Шаблон 2 — Запрос информации", body: "Тема: Quick question — [Тема]\n\nHi [Имя],\n\nНе могли бы вы поделиться [конкретная информация]? Это нужно мне до [дата] для [причина].\n\nЗаранее спасибо.\n\nBest," },
      { heading: "Шаблон 3 — Профессиональный отказ", body: "Тема: Re: [Исходная тема]\n\nHi [Имя],\n\nСпасибо, что подумали обо мне. К сожалению, сейчас я не могу [действие] из-за [краткая причина]. Надеюсь, сможем вернуться к этому позже.\n\nBest," },
      { heading: "Шаблон 4 — Повторное письмо / эскалация", body: "Тема: Follow-up: [Исходная тема]\n\nHi [Имя],\n\nХочу уточнить по своему письму от [дата]. Не могли бы вы дать обновление по [теме]? Мне это нужно до [дата].\n\nСпасибо," },
      { heading: "Шаблон 5 — Холодное знакомство", body: "Тема: Introduction — [Ваше имя] / [Контекст]\n\nHi [Имя],\n\nПишу, потому что [конкретная причина]. Думаю, здесь есть потенциал для [взаимная выгода].\n\nВы готовы к 20-минутному звонку, чтобы обсудить?\n\nBest," },
      { heading: "Ключевые принципы", body: "1. Тема письма — конкретная, не размытая. 2. Одно письмо — одна просьба. 3. Всегда чёткий следующий шаг. 4. Подписывайтесь 'Best' — не 'Regards' (слишком холодно) и не 'Cheers' (слишком неформально для новых контактов)." },
      { body: "Практика написания писем с мгновенной обратной связью — один из самых быстрых способов улучшить профессиональный английский. Каждое занятие в пакете Regular и Intensive включает разбор ваших писем." },
    ]},
  },
};

export async function generateStaticParams() {
  return Object.keys(articleContent).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) return {};
  return {
    title: `${loc(post.title, locale)} | EFFL Blog`,
    description: loc(post.excerpt, locale),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = posts.find(p => p.slug === slug);
  const article = articleContent[slug];
  if (!post || !article) return <div>Not found</div>;

  const sections = loc(article as Record<string, { sections: { heading?: string; body: string }[] }>, locale).sections;

  const backLabel: Record<string,string> = { en:"Back to blog", fr:"Retour au blog", ru:"Назад в блог" };
  const ctaTitle: Record<string,string> = { en:"Want to practise this with a coach?", fr:"Vous voulez pratiquer avec un coach ?", ru:"Хотите отработать это с коучем?" };
  const ctaSub: Record<string,string> = { en:"Book a free discovery session with Katsiaryna.", fr:"Réservez une séance découverte gratuite avec Katsiaryna.", ru:"Запишитесь на бесплатную сессию знакомства с Катериной." };
  const ctaBtn: Record<string,string> = { en:"Book free session", fr:"Réserver une séance gratuite", ru:"Записаться бесплатно" };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: loc(post.title, locale),
    description: loc(post.excerpt, locale),
    author: { "@type": "Person", name: "Katsiaryna", url: "https://myeffl.com/en/about" },
    publisher: { "@type": "Organization", name: "English for Future Leaders", url: "https://myeffl.com" },
    inLanguage: locale,
    url: `https://myeffl.com/${locale}/blog/${slug}`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <main>
        <section className="bg-cream section-pad">
          <div className="container-xl max-w-3xl">
            <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors mb-10">
              <ArrowLeft size={14}/> {backLabel[locale]??backLabel.en}
            </Link>

            <p className="eyebrow mb-5">{loc(post.category, locale)}</p>
            <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-ink mb-6 leading-tight">{loc(post.title, locale)}</h1>
            <div className="w-10 h-0.5 bg-gold mb-4"/>
            <p className="text-xs text-muted mb-12">{post.readTime} min read · Katsiaryna</p>

            <div className="space-y-6">
              {sections.map((s, i) => (
                <div key={i}>
                  {s.heading && <h2 className="font-black text-ink text-lg mb-2 mt-8">{s.heading}</h2>}
                  <p className="text-ink-soft leading-[1.9] text-base whitespace-pre-line">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-primary rounded-2xl p-8">
              <p className="text-on-dark font-black text-xl mb-2">{ctaTitle[locale]??ctaTitle.en}</p>
              <p className="text-white/60 text-sm mb-6">{ctaSub[locale]??ctaSub.en}</p>
              <Link href={`/${locale}/contact`} className="btn-gold">{ctaBtn[locale]??ctaBtn.en}</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
