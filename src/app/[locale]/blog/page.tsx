import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  { slug:"oshibki-delovoy-angliyskiy",                  cat:"ru", color:"bg-primary" },
  { slug:"angliyskiy-dlya-rukovoditeley-dubai",          cat:"ru", color:"bg-ink" },
  { slug:"kak-uluchshit-angliyskiy-dlya-peregovorov",   cat:"ru", color:"bg-primary" },
  { slug:"confident-in-meetings",                        cat:"en", color:"bg-ink" },
  { slug:"english-job-interview",                        cat:"en", color:"bg-primary" },
  { slug:"business-email-templates",                     cat:"en", color:"bg-ink" },
];

const titlesBySlug: Record<string, Record<string,string>> = {
  "oshibki-delovoy-angliyskiy":               { en:"5 Business English Mistakes Russian Speakers Make", fr:"5 erreurs en anglais des affaires", ru:"5 ошибок в деловом английском русскоязычных специалистов" },
  "angliyskiy-dlya-rukovoditeley-dubai":       { en:"Business English for Russian Executives in Dubai", fr:"Anglais des affaires pour cadres russophones à Dubaï", ru:"Деловой английский для русскоязычных руководителей в Дубае" },
  "kak-uluchshit-angliyskiy-dlya-peregovorov":{ en:"How to Improve Your Business English for Negotiations", fr:"Améliorer votre anglais pour les négociations", ru:"Как улучшить деловой английский для переговоров" },
  "confident-in-meetings":                     { en:"7 Phrases That Make You Sound Confident in Meetings", fr:"7 phrases pour paraître confiant en réunion", ru:"7 фраз для уверенности на совещаниях" },
  "english-job-interview":                     { en:"How to Nail Your English Job Interview", fr:"Réussir son entretien en anglais", ru:"Как пройти собеседование на английском" },
  "business-email-templates":                  { en:"Business Email Templates That Sound Professional", fr:"Templates d'emails professionnels", ru:"Шаблоны деловых писем, которые звучат профессионально" },
};

const readTime: Record<string,number> = {
  "oshibki-delovoy-angliyskiy":6,"angliyskiy-dlya-rukovoditeley-dubai":7,"kak-uluchshit-angliyskiy-dlya-peregovorov":8,
  "confident-in-meetings":6,"english-job-interview":7,"business-email-templates":5,
};

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

  const readLabel = locale==="ru"?"мин.":locale==="fr"?"min":"min";

  return (
    <main>
      <section className="bg-cream section-pad">
        <div className="container-xl">
          <div className="mb-14">
            <p className="eyebrow mb-5">Blog</p>
            <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-ink mb-4">{t("title")}</h1>
            <p className="text-muted max-w-[44ch]">{t("subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {posts.map((post) => {
              const title = titlesBySlug[post.slug]?.[locale] ?? titlesBySlug[post.slug]?.en ?? "";
              return (
                <Link key={post.slug} href={`/${locale}/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden bg-cream-dark border border-border hover:border-ink/20 transition-all hover:shadow-md flex flex-col">
                  <div className={`h-36 relative flex items-end p-5 ${post.color}`}>
                    <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"14px 14px"}}/>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="font-bold text-ink text-sm leading-snug mb-4 flex-1 group-hover:text-primary transition-colors line-clamp-3">
                      {title}
                    </h2>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted">{readTime[post.slug]} {readLabel}</span>
                      <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                        {t("read")} <ArrowRight size={11}/>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
