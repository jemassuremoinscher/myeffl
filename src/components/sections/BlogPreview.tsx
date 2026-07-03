import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  { categoryKey:"category1", titleKey:"post1", slug:"confident-in-meetings", bg:"bg-primary" },
  { categoryKey:"category2", titleKey:"post2", slug:"english-job-interview", bg:"bg-container-secondary" },
  { categoryKey:"category3", titleKey:"post3", slug:"business-email-templates", bg:"bg-container-primary" },
];

export default function BlogPreview() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <section className="py-24 px-4 bg-surface-dim">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Free Resources</p>
            <h2 className="text-display-sm font-black text-on-surface">{t("title")}</h2>
          </div>
          <Link href={`/${locale}/blog`} className="inline-flex items-center gap-1.5 text-primary font-semibold text-sm hover:underline whitespace-nowrap">
            All articles <ArrowRight size={14}/>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {posts.map((post, idx) => (
            <Link key={idx} href={`/${locale}/blog/${post.slug}`}
              className="group block bg-surface rounded-5xl overflow-hidden shadow-elevation-1 hover:shadow-elevation-3 transition-all">
              <div className={`w-full h-48 ${post.bg} relative flex items-end p-5`}>
                <div className="absolute inset-0 opacity-10"
                  style={{backgroundImage:"radial-gradient(rgba(255,255,255,0.8) 1.5px,transparent 0)",backgroundSize:"18px 18px"}}/>
                <span className={`relative text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${
                  idx===0?"bg-on-primary/20 text-on-primary":"bg-primary/10 text-primary"
                }`}>
                  {t(post.categoryKey)}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-on-surface text-sm leading-snug mb-4 group-hover:text-primary transition-colors">
                  {t(post.titleKey)}
                </h3>
                <span className="inline-flex items-center gap-1 text-primary font-semibold text-xs group-hover:gap-2 transition-all">
                  {t("read")} <ArrowRight size={12}/>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
