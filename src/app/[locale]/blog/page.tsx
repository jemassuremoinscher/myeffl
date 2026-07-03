import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string,string> = {
    en: "Professional English Blog | Tips for Russian Speakers | EFFL",
    fr: "Blog Anglais Professionnel | Conseils pour Russophones | EFFL",
    ru: "Блог: Деловой английский для русских | Советы и статьи | EFFL",
  };
  const descs: Record<string,string> = {
    en: "Free guides and tips on professional English for Russian-speaking executives and managers. Meetings, negotiations, emails, presentations.",
    fr: "Guides gratuits sur l'anglais professionnel pour les managers et cadres russophones.",
    ru: "Бесплатные статьи и советы по деловому английскому для русскоязычных руководителей и менеджеров. Встречи, переговоры, переписка, презентации.",
  };
  return { title: titles[locale]??titles.en, description: descs[locale]??descs.en };
}

export const posts = [
  {
    slug: "confident-in-meetings",
    category: { en: "Business English", fr: "Anglais des affaires", ru: "Деловой английский" },
    title: {
      en: "7 Phrases That Make You Sound Confident in Meetings",
      fr: "7 expressions pour paraître confiant en réunion en anglais",
      ru: "7 фраз, которые звучат уверенно на деловых встречах по-английски",
    },
    excerpt: {
      en: "Confidence in English meetings isn't about perfect grammar. It's about choosing the right phrases at the right moments. Here are the 7 that leaders use.",
      fr: "La confiance en réunion anglophone ne vient pas d'une grammaire parfaite. Ce sont les bonnes phrases au bon moment qui font la différence.",
      ru: "Уверенность на английских встречах — это не безупречная грамматика. Это правильные фразы в нужный момент. Вот 7 фраз, которые используют лидеры.",
    },
    readTime: "5",
  },
  {
    slug: "english-job-interview",
    category: { en: "Career", fr: "Carrière", ru: "Карьера" },
    title: {
      en: "How to Nail Your English Job Interview as a Russian Speaker",
      fr: "Comment réussir votre entretien d'embauche en anglais",
      ru: "Как пройти собеседование на английском — руководство для русскоязычных",
    },
    excerpt: {
      en: "A job interview in English requires more than language skills. This guide covers the STAR method, cultural differences in interview style, and the 3 questions you must prepare.",
      fr: "Un entretien en anglais demande plus que des compétences linguistiques. Découvrez la méthode STAR et les différences culturelles à connaître.",
      ru: "Собеседование на английском требует большего, чем языковые навыки. Метод STAR, культурные различия в стиле интервью и 3 вопроса, к которым нужно готовиться.",
    },
    readTime: "7",
  },
  {
    slug: "business-email-templates",
    category: { en: "Writing", fr: "Rédaction", ru: "Письмо" },
    title: {
      en: "Business Email in English: 5 Templates That Actually Work",
      fr: "Email professionnel en anglais : 5 modèles qui fonctionnent vraiment",
      ru: "Деловое письмо по-английски: 5 шаблонов, которые работают",
    },
    excerpt: {
      en: "Business emails in English need to be clear, direct, and professional. These 5 templates cover the most common professional scenarios Russian speakers face.",
      fr: "Les emails professionnels en anglais doivent être clairs, directs et professionnels. Voici 5 modèles pour les scénarios les plus courants.",
      ru: "Деловые письма на английском должны быть чёткими, прямыми и профессиональными. 5 шаблонов для самых распространённых ситуаций.",
    },
    readTime: "4",
  },
];

type Locale = "en" | "fr" | "ru";
function loc<T>(obj: Record<string,T>, l: string): T { return obj[l as Locale] ?? obj.en; }

const headers: Record<string,{eyebrow:string;h1:string;sub:string;read:string;min:string}> = {
  en: { eyebrow:"Blog", h1:"Free insights for Russian-speaking professionals.", sub:"Practical English tips for meetings, emails, interviews and negotiations.", read:"Read article", min:"min read" },
  fr: { eyebrow:"Blog", h1:"Conseils gratuits pour les professionnels russophones.", sub:"Astuces pratiques en anglais pour réunions, emails, entretiens et négociations.", read:"Lire l'article", min:"min de lecture" },
  ru: { eyebrow:"Блог", h1:"Бесплатные материалы для русскоязычных профессионалов.", sub:"Практические советы по английскому для встреч, писем, интервью и переговоров.", read:"Читать статью", min:"мин чтения" },
};

const bgColors = ["bg-primary", "bg-ink", "bg-cream-dark border border-border"];

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const h = headers[locale] ?? headers.en;

  return (
    <main>
      <section className="bg-cream section-pad">
        <div className="container-xl">
          <p className="eyebrow mb-5">{h.eyebrow}</p>
          <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-ink mb-4 max-w-[26ch]">{h.h1}</h1>
          <p className="text-muted mb-14 max-w-[44ch]">{h.sub}</p>

          <div className="grid md:grid-cols-3 gap-5">
            {posts.map((post, idx) => (
              <Link key={idx} href={`/${locale}/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden bg-cream-dark border border-border hover:shadow-md transition-all flex flex-col">
                <div className={`h-44 relative flex items-end p-5 ${bgColors[idx]}`}>
                  <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"14px 14px"}}/>
                  <span className="relative text-[10px] font-bold uppercase tracking-widest bg-gold text-ink px-3 py-1 rounded-full">
                    {loc(post.category, locale)}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-bold text-ink text-sm leading-snug mb-3 flex-1 group-hover:text-primary transition-colors">
                    {loc(post.title, locale)}
                  </h2>
                  <p className="text-xs text-muted leading-relaxed mb-4 line-clamp-2">{loc(post.excerpt, locale)}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">{post.readTime} {h.min}</span>
                    <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      {h.read} <ArrowRight size={11}/>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
