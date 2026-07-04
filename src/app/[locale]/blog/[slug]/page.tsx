import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StructuredData from "@/components/layout/StructuredData";
import { notFound } from "next/navigation";

type Sec = { heading: Record<string,string>; body: Record<string,string> };
type Article = {
  title: Record<string,string>;
  category: Record<string,string>;
  intro: Record<string,string>;
  sections: Sec[];
  cta: Record<string,string>;
  readTime: number;
};

const articles: Record<string, Article> = {
  "confident-in-meetings": {
    title: { en:"7 Phrases That Make You Sound Confident in English Meetings", fr:"7 phrases pour paraître confiant en réunion", ru:"7 фраз для уверенности на совещаниях на английском" },
    category: { en:"Business English", fr:"Anglais des affaires", ru:"Деловой английский" },
    readTime: 6,
    intro: { en:"Sounding confident in English meetings is not about perfect grammar — it's about choosing the right phrases at the right moments.", fr:"Paraître confiant en réunion ne dépend pas d'une grammaire parfaite.", ru:"Уверенно звучать на совещаниях — это не про идеальную грамматику. Это про правильные фразы в нужный момент. Носители английского используют конкретные речевые паттерны для демонстрации авторитета и управления разговором." },
    sections: [
      { heading:{ en:"1. \"Let me build on that...\"", ru:"1. «Let me build on that...»", fr:"1. «Let me build on that...»" }, body:{ en:"Add to a colleague's point without dismissing it. Signals collaboration.", fr:"Développez le propos d'un collègue sans le contredire.", ru:"Используйте, чтобы развить мысль коллеги, не отвергая её. Это сигнализирует о сотрудничестве, а не конкуренции. Пример: «Let me build on what Maria said — if we apply that to our segment, we'd see significant improvement.»" } },
      { heading:{ en:"2. \"I'd like to push back on that slightly...\"", ru:"2. «I'd like to push back slightly...»", fr:"2. «I'd like to push back...»" }, body:{ en:"Disagree professionally without aggression. Used by senior leaders.", fr:"Désaccordez-vous sans agressivité — utilisé par les leaders seniors.", ru:"Несогласие без агрессии. Топ-менеджеры используют эту фразу, чтобы оспорить идею уважительно. Прямое «нет» или «вы ошибаетесь» звучит как атака — «push back slightly» открывает дискуссию." } },
      { heading:{ en:"3. \"The key takeaway here is...\"", ru:"3. «The key takeaway here is...»", fr:"3. «The key takeaway here is...»" }, body:{ en:"Summarise and steer. Positions you as someone who synthesises and drives meetings forward.", fr:"Résumez et orientez. Vous vous positionnez comme leader de la réunion.", ru:"Резюмируйте и направляйте. Эта фраза позиционирует вас как человека, который синтезирует информацию и продвигает совещание вперёд — типичное поведение лидера." } },
      { heading:{ en:"4. \"My recommendation would be...\"", ru:"4. «My recommendation would be...»", fr:"4. «My recommendation would be...»" }, body:{ en:"Lead with authority. Stronger than 'I think' — signals you've weighed the options.", fr:"Parlez avec autorité. Plus fort que «I think» — signale que vous avez analysé les options.", ru:"Говорите с авторитетом. «My recommendation» сильнее, чем «I think» или «maybe we should». Это сигнализирует, что вы взвесили варианты и предлагаете конкретное решение, а не просто мнение." } },
      { heading:{ en:"Practice makes permanent", ru:"Практика закрепляет навык", fr:"La pratique rend permanent" }, body:{ en:"Reading these phrases is not enough. You need deliberate practice under pressure — with a coach giving real-time feedback on tone, word choice, and delivery.", fr:"Lire ces formules ne suffit pas. Il faut une pratique délibérée avec feedback en temps réel.", ru:"Читать эти фразы недостаточно. Нужна целенаправленная практика под давлением — с коучем, который даёт обратную связь в реальном времени по тону, выбору слов и подаче." } },
    ],
    cta: { en:"Book a free session and practise these with Katsiaryna.", fr:"Réservez une session gratuite pour pratiquer avec Katsiaryna.", ru:"Запишитесь на бесплатное занятие и отработайте эти фразы с Катериной." },
  },

  "english-job-interview": {
    title: { en:"How to Nail Your English Job Interview as a Non-Native Speaker", fr:"Comment réussir son entretien en anglais", ru:"Как пройти собеседование на английском, если вы не носитель языка" },
    category: { en:"Interview Prep", fr:"Préparation aux entretiens", ru:"Подготовка к собеседованию" },
    readTime: 7,
    intro: { en:"Most Russian-speaking candidates lose interviews not because of language errors, but because of structural weaknesses in how they present themselves.", fr:"La plupart des candidats russophones perdent des entretiens non à cause de la langue, mais à cause de faiblesses structurelles.", ru:"Большинство русскоязычных кандидатов проигрывают собеседования не из-за языковых ошибок, а из-за структурных слабостей в самопрезентации. Грамматика — не главное. Структура и уверенность — вот что решает." },
    sections: [
      { heading:{ en:"The STAR Method", ru:"Метод STAR: структура каждого ответа", fr:"La méthode STAR" }, body:{ en:"Situation, Task, Action, Result. Every behavioural question must follow this framework. Structure signals competence.", fr:"Situation, Tâche, Action, Résultat. Chaque question comportementale doit suivre ce cadre.", ru:"STAR = Situation (Ситуация), Task (Задача), Action (Действие), Result (Результат). Каждый поведенческий вопрос — «расскажите о случае, когда...» — отвечайте по этой структуре. Структура сигнализирует компетентность." } },
      { heading:{ en:"\"Tell me about yourself\" — under 2 minutes", ru:"«Расскажите о себе» — не более 2 минут", fr:"«Parlez-moi de vous» — moins de 2 minutes" }, body:{ en:"Focus on value delivered, not biography. Structure: current role → key achievement → why this opportunity.", fr:"Focalisez sur la valeur apportée. Structure: rôle actuel → réalisation clé → pourquoi ce poste.", ru:"Сосредоточьтесь на ценности, а не биографии. Структура: текущая роль → ключее достижение → почему эта позиция. Практикуйте до тех пор, пока это не будет звучать естественно. Это самый важный ответ на любом собеседовании." } },
      { heading:{ en:"Use their language back to them", ru:"Используйте язык компании", fr:"Réutilisez leur vocabulaire" }, body:{ en:"Mirror their values, mission, and job description. Shows cultural alignment and preparation.", fr:"Réutilisez leurs mots — cela montre l'alignement culturel et la préparation.", ru:"Изучите ценности, миссию и описание должности компании. Используйте их конкретные слова на протяжении всего интервью. Это сигнализирует культурное соответствие и тщательную подготовку." } },
      { heading:{ en:"3 strong questions to ask", ru:"3 сильных вопроса для задания", fr:"3 questions fortes à poser" }, body:{ en:"'What does success look like in the first 90 days?' — always powerful. Never say you have no questions.", fr:"«Comment ressemble le succès dans les 90 premiers jours ?» — toujours puissant. Ne jamais dire qu'on n'a pas de questions.", ru:"«What does success look like in the first 90 days?» — всегда сильный вопрос. Вопросы сигнализируют вовлечённость и лидерский потенциал. Никогда не говорите «нет» когда вас спрашивают, есть ли у вас вопросы." } },
    ],
    cta: { en:"Book a free mock interview with Katsiaryna and get real feedback.", fr:"Réservez un entretien blanc gratuit avec Katsiaryna.", ru:"Запишитесь на бесплатное пробное интервью с Катериной и получите реальную обратную связь." },
  },

  "business-email-templates": {
    title: { en:"Business Email Templates That Sound Professional (Not Translated)", fr:"Templates d'emails qui sonnent juste (pas traduit)", ru:"Шаблоны деловых писем, которые звучат профессионально (не переведённо)" },
    category: { en:"Professional Communication", fr:"Communication professionnelle", ru:"Профессиональная коммуникация" },
    readTime: 5,
    intro: { en:"The biggest mistake Russian-speaking professionals make in English emails is translating directly from Russian. The result sounds formal, stiff, and odd to native speakers.", fr:"La plus grande erreur: traduire directement depuis le russe. Résultat formel, rigide et bizarre pour les natifs.", ru:"Главная ошибка русскоязычных профессионалов в деловых письмах — прямой перевод с русского. Результат звучит формально, скованно и иногда странно для носителей языка." },
    sections: [
      { heading:{ en:"Template 1: Follow-up after a meeting", ru:"Шаблон 1: Письмо после встречи", fr:"Modèle 1: Suivi après réunion" }, body:{ en:"Subject: Following up — [Topic] | 'Hi [Name], great connecting today. As discussed, I'm attaching [doc]. Let me know if you have questions. Best, [Name]' — Short. Direct. Professional.", fr:"Objet: Suite à notre réunion | 'Hi [Prénom], merci pour cet échange. Je joins [doc] comme convenu. N'hésitez pas si vous avez des questions.'", ru:"Тема: Following up — [Тема] | «Hi [Name], great connecting today. As discussed, I'm attaching [document]. Let me know if you have questions. Best, [Имя]» — Коротко. Прямо. Профессионально. Никаких «позвольте выразить вам свою искреннюю благодарность»." } },
      { heading:{ en:"Template 2: Requesting information", ru:"Шаблон 2: Запрос информации", fr:"Modèle 2: Demande d'information" }, body:{ en:"'Hi [Name], could you please send me [item]? I need it by [date] for [reason]. Thanks, [Name]' — Never start with 'I hope this email finds you well' — it's overused and signals non-native writing.", fr:"'Hi [Prénom], pourriez-vous m'envoyer [élément] avant le [date] pour [raison] ? Merci.'", ru:"«Hi [Name], could you please send me [элемент]? I need it by [дата] for [причина]. Thanks, [Имя]» — Никогда не начинайте с «I hope this email finds you well» — это заезженная фраза, которая выдаёт неносителя языка." } },
      { heading:{ en:"The Golden Rule: one email, one ask", ru:"Золотое правило: одно письмо — один запрос", fr:"Règle d'or: un email, une demande" }, body:{ en:"In English business culture, emails with multiple requests get only the first answered. Always send separate emails for separate topics.", fr:"Dans la culture anglophone, les emails multi-demandes ne reçoivent généralement de réponse qu'à la première.", ru:"В англоязычной деловой культуре письма с несколькими запросами получают ответ только на первый. Всегда отправляйте отдельные письма по отдельным темам. Это культурная разница, которая напрямую влияет на эффективность." } },
    ],
    cta: { en:"Improve your business writing with personalised coaching. Book a free session.", fr:"Améliorez votre rédaction avec un coaching personnalisé. Séance gratuite.", ru:"Улучшите деловую переписку с персональным коучингом. Первое занятие — бесплатно." },
  },

  // ── NOUVEAUX ARTICLES RUSSES ─────────────────────────────────────────────

  "kak-uluchshit-angliyskiy-dlya-peregovorov": {
    title: {
      en:"How to Improve Your Business English for Negotiations",
      fr:"Comment améliorer votre anglais des affaires pour les négociations",
      ru:"Как улучшить деловой английский для переговоров: руководство для русскоязычных специалистов"
    },
    category: { en:"Negotiations", fr:"Négociations", ru:"Переговоры на английском" },
    readTime: 8,
    intro: {
      en:"Negotiations in English require a very specific set of language skills that go far beyond general fluency. Here is how to build them systematically.",
      fr:"Les négociations en anglais nécessitent des compétences linguistiques spécifiques bien au-delà de la fluidité générale.",
      ru:"Переговоры на английском — одна из самых сложных задач для русскоязычного специалиста. Недостаточно знать язык: нужно владеть специфическими речевыми паттернами, которые носители используют для установления позиции, уступок и закрытия сделок. Этот навык поддаётся системному развитию."
    },
    sections: [
      {
        heading: { en:"The language of position-setting", ru:"Язык установления позиции", fr:"Le langage de positionnement" },
        body: { en:"Before negotiating, you need to anchor your position clearly. Phrases like 'Our baseline is...' and 'What we're looking for is...' set the frame.", ru:"Прежде чем торговаться, нужно чётко обозначить позицию. Фразы: «Our starting point is...», «What we need to see is...», «Our baseline is...» — якорят переговоры. В русской практике часто начинают с нужды; в английской — с позиции силы." }
      },
      {
        heading: { en:"Concession language", ru:"Язык уступок", fr:"Le langage des concessions" },
        body: { en:"'If you can move on X, we'd be willing to consider Y' — conditional concessions show flexibility without weakness. Never concede without getting something in return.", ru:"«If you can move on [X], we'd be willing to consider [Y]» — условные уступки демонстрируют гибкость без слабости. Никогда не уступайте, не получив что-то взамен. Это фундаментальное правило, которое носители применяют автоматически." }
      },
      {
        heading: { en:"Closing signals", ru:"Сигналы закрытия", fr:"Les signaux de clôture" },
        body: { en:"'It sounds like we're aligned on the key points' and 'Let's move forward on this basis' — recognising and reinforcing closing signals is a skill that can be practised.", ru:"«It sounds like we're aligned on the key points» и «Let's move forward on this basis» — умение распознать и подкрепить сигналы закрытия критично для любого переговорщика. Часто русскоязычные специалисты упускают эти сигналы из-за языкового барьера." }
      },
      {
        heading: { en:"What to do when you don't understand", ru:"Что делать, если не понимаете", fr:"Quand vous ne comprenez pas" },
        body: { en:"'Could you clarify what you mean by...?' and 'I want to make sure I understand correctly...' — these phrases are professional, not weak. Use them.", ru:"«Could you clarify what you mean by...?» и «I want to make sure I understand correctly...» — эти фразы профессиональны, не слабы. Русскоязычные специалисты часто боятся уточнять и делают неверные предположения. Это обходится дорого в переговорах." }
      },
    ],
    cta: {
      en:"Practice negotiation English with Katsiaryna. Book a free discovery call.",
      fr:"Pratiquez l'anglais des négociations avec Katsiaryna. Appel découverte gratuit.",
      ru:"Отработайте язык переговоров с Катериной. Запишитесь на бесплатный звонок."
    },
  },

  "angliyskiy-dlya-rukovoditeley-dubai": {
    title: {
      en:"Business English for Russian-Speaking Executives in Dubai",
      fr:"Anglais des affaires pour les cadres russophones à Dubaï",
      ru:"Деловой английский для русскоязычных руководителей в Дубае: с чего начать"
    },
    category: { en:"Dubai Executives", fr:"Cadres à Dubaï", ru:"Русскоязычные в Дубае" },
    readTime: 7,
    intro: {
      en:"Dubai's business environment is uniquely multilingual. For Russian-speaking professionals, mastering business English is not optional — it is the key to the senior table.",
      fr:"L'environnement professionnel de Dubaï est uniquement multilingue. Pour les russophones, maîtriser l'anglais des affaires est indispensable.",
      ru:"Дубай — уникальная деловая среда, где английский является lingua franca для профессионалов из 200+ стран. Для русскоязычного руководителя в ОАЭ деловой английский — это не опция, это ключ к старшей позиции и крупным сделкам."
    },
    sections: [
      {
        heading: { en:"The Dubai professional environment", ru:"Деловая среда Дубая", fr:"L'environnement professionnel de Dubaï" },
        body: { en:"In Dubai, you will negotiate with Indians, Brits, Americans, French, and Emiratis — all in English. The lingua franca is not neutral; it carries British and American business culture norms.", ru:"В Дубае вы ведёте переговоры с индийцами, британцами, американцами, французами и эмиратцами — все на английском. Этот английский несёт британские и американские деловые нормы: прямолинейность без грубости, small talk как инструмент построения отношений, структурированная подача идей." }
      },
      {
        heading: { en:"The most common gaps for Russian speakers in Dubai", ru:"Самые частые пробелы у русскоязычных в Дубае", fr:"Les lacunes les plus fréquentes" },
        body: { en:"1. Overly formal register in emails and meetings. 2. Avoiding small talk (critical in Dubai's relationship-driven business culture). 3. Directness that reads as rudeness. 4. Difficulty structuring ideas in English under pressure.", ru:"1. Слишком официальный тон в письмах и встречах. 2. Избегание small talk (критично в дубайской культуре, основанной на отношениях). 3. Прямолинейность, которая воспринимается как грубость. 4. Трудности со структурированием идей на английском под давлением." }
      },
      {
        heading: { en:"Networking in Dubai: the language of relationships", ru:"Нетворкинг в Дубае: язык отношений", fr:"Le réseautage à Dubaï" },
        body: { en:"Dubai runs on relationships. The ability to make small talk, follow up professionally, and maintain connections in English is directly tied to your business growth here.", ru:"Дубай работает на отношениях. Умение вести small talk, профессионально поддерживать связь и строить сеть на английском напрямую влияет на рост вашего бизнеса и карьеры здесь. Это не про «поговорить о погоде» — это про выстраивание доверия." }
      },
      {
        heading: { en:"How fast can you improve?", ru:"Как быстро можно улучшить?", fr:"À quelle vitesse peut-on progresser ?" },
        body: { en:"With focused 1-on-1 coaching targeting your specific professional context, most executives notice measurable improvement in confidence and impact within 4-6 sessions.", ru:"При целенаправленном индивидуальном коучинге под ваш профессиональный контекст большинство руководителей замечают измеримый рост уверенности и влияния через 4-6 занятий. Это не общий курс — каждая сессия строится вокруг ваших реальных задач." }
      },
    ],
    cta: {
      en:"Based in Dubai? Book a free discovery call with Katsiaryna.",
      fr:"Basé à Dubaï? Réservez un appel découverte gratuit avec Katsiaryna.",
      ru:"Вы в Дубае? Запишитесь на бесплатный звонок с Катериной."
    },
  },

  "oshibki-delovoy-angliyskiy": {
    title: {
      en:"The 5 Most Common Business English Mistakes Russian Speakers Make",
      fr:"Les 5 erreurs les plus fréquentes en anglais des affaires chez les russophones",
      ru:"5 ошибок в деловом английском, которые совершают русскоязычные специалисты — и как их исправить"
    },
    category: { en:"Common Mistakes", fr:"Erreurs fréquentes", ru:"Частые ошибки" },
    readTime: 6,
    intro: {
      en:"These 5 mistakes are not about grammar. They are about patterns that Russian speakers carry from their native language into English — often without realising it.",
      fr:"Ces 5 erreurs ne concernent pas la grammaire, mais des patterns transférés du russe vers l'anglais.",
      ru:"Эти 5 ошибок — не про грамматику. Они про паттерны, которые русскоязычные специалисты переносят из родного языка в английский — часто не осознавая этого. Именно они мешают звучать как уверенный международный профессионал."
    },
    sections: [
      {
        heading: { en:"Mistake 1: Too formal a register", ru:"Ошибка 1: Слишком официальный тон", fr:"Erreur 1: Registre trop formel" },
        body: { en:"'I would like to kindly request...' → 'Could you please send me...' Russian formality reads as stiffness in English.", ru:"«I would like to kindly request you to provide me with the document at your earliest convenience» → «Could you please send me the document by Thursday?» Русская деловая культура традиционно формальнее. Носители воспринимают излишнюю формальность как скованность или дистанцированность." }
      },
      {
        heading: { en:"Mistake 2: The «actually» trap", ru:"Ошибка 2: Ловушка слова «actually»", fr:"Erreur 2: Le piège de «actually»" },
        body: { en:"'Actually' in Russian means 'в самом деле' (neutral). In English it implies contradiction — 'you thought X, but actually Y'. Used wrongly, you sound constantly corrective.", ru:"«Actually» по-русски = «на самом деле» (нейтрально). По-английски оно несёт оттенок противоречия. Используя его как русское «на самом деле», вы невольно создаёте ощущение, что постоянно поправляете собеседника. Замените на «In fact» или «As a matter of fact»." }
      },
      {
        heading: { en:"Mistake 3: Skipping small talk", ru:"Ошибка 3: Пропуск small talk", fr:"Erreur 3: Éviter le small talk" },
        body: { en:"In Russian business culture, going straight to the point is respectful. In English-speaking cultures, it can seem cold or rude. Small talk is not wasted time — it's relationship infrastructure.", ru:"В русской деловой культуре сразу перейти к делу — знак уважения. В англоязычной — это может казаться холодностью или грубостью. Small talk — не болтовня, это социальный ритуал, который сигнализирует: «Я вижу тебя как человека». В Дубае это особенно важно." }
      },
      {
        heading: { en:"Mistake 4: Direct disagreement", ru:"Ошибка 4: Прямолинейное несогласие", fr:"Erreur 4: Désaccord direct" },
        body: { en:"'No, that's wrong.' → 'I'd like to push back on that slightly — the data suggests...' Direct disagreement in English business culture reads as aggressive, not honest.", ru:"«No, that's wrong» → «I'd like to push back on that slightly — the data tells a different story.» Прямолинейность в несогласии — честность по-русски. По-английски она воспринимается как агрессия. Профессиональное несогласие всегда содержит буферную фразу." }
      },
      {
        heading: { en:"Mistake 5: Direct translation sentence structure", ru:"Ошибка 5: Структура предложений через прямой перевод", fr:"Erreur 5: Structure calquée sur le russe" },
        body: { en:"'I am in full agreement with the proposal presented by my colleague' → 'I agree with Maria's proposal'. Shorter = more authoritative in English.", ru:"«I am in full agreement with the proposal presented by my colleague Maria» → «I agree with Maria's proposal». Носители английского используют более короткие, прямые конструкции. Длинные предложения воспринимаются как неуверенность, а не как вежливость." }
      },
    ],
    cta: {
      en:"Work on these patterns with Katsiaryna. First session is free.",
      fr:"Travaillez sur ces patterns avec Katsiaryna. Première séance gratuite.",
      ru:"Проработайте эти паттерны с Катериной. Первое занятие — бесплатно."
    },
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale:string; slug:string }> }) {
  const { locale, slug } = await params;
  const a = articles[slug];
  if (!a) return {};
  return {
    title: a.title[locale] ?? a.title.en,
    description: (a.intro[locale] ?? a.intro.en).slice(0, 160),
    openGraph: { title: a.title[locale] ?? a.title.en, description: (a.intro[locale] ?? a.intro.en).slice(0, 160) },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ locale:string; slug:string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const a = articles[slug];
  if (!a) notFound();

  const articleSchema = {
    "@context":"https://schema.org", "@type":"Article",
    headline: a.title[locale] ?? a.title.en,
    description: (a.intro[locale] ?? a.intro.en).slice(0, 160),
    author: { "@type":"Person", name:"Katsiaryna", url:`https://myeffl.com/${locale}/about` },
    publisher: { "@type":"Organization", name:"English for Future Leaders", url:"https://myeffl.com" },
    inLanguage: locale,
    datePublished: "2026-01-15", dateModified: "2026-07-04",
    mainEntityOfPage: { "@type":"WebPage", "@id":`https://myeffl.com/${locale}/blog/${slug}` },
  };

  const backLabel = locale==="ru"?"К блогу":locale==="fr"?"Retour":"Back to blog";
  const bookLabel = locale==="ru"?"Записаться бесплатно":locale==="fr"?"Réserver gratuitement":"Book free session";

  return (
    <>
      <StructuredData data={articleSchema}/>
      <main>
        <section className="bg-cream section-pad">
          <div className="container-xl max-w-3xl">
            <Link href={`/${locale}/blog`} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors mb-10">
              <ArrowLeft size={14}/> {backLabel}
            </Link>
            <p className="eyebrow mb-5">{a.category[locale] ?? a.category.en}</p>
            <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-ink mb-6 leading-tight">
              {a.title[locale] ?? a.title.en}
            </h1>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-xs text-muted">Katsiaryna · EFFL</span>
              <span className="w-1 h-1 rounded-full bg-border"/>
              <span className="text-xs text-muted">{a.readTime} {locale==="ru"?"мин.":locale==="fr"?"min de lecture":"min read"}</span>
            </div>
            <div className="w-10 h-0.5 bg-gold mb-10"/>
            <p className="text-lg text-ink-soft leading-[1.85] mb-10">{a.intro[locale] ?? a.intro.en}</p>
            <div className="space-y-10">
              {a.sections.map((s, i) => (
                <div key={i}>
                  <h2 className="text-xl font-black text-ink mb-4">{s.heading[locale] ?? s.heading.en}</h2>
                  <p className="text-base text-ink-soft leading-[1.85]">{s.body[locale] ?? s.body.en}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 bg-primary rounded-2xl p-8">
              <p className="text-on-dark font-black text-xl mb-3">{a.cta[locale] ?? a.cta.en}</p>
              <Link href={`/${locale}/contact`} className="btn-gold">{bookLabel}</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
