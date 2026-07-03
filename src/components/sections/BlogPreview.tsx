import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  { categoryKey:"category1", titleKey:"post1", slug:"confident-in-meetings" },
  { categoryKey:"category2", titleKey:"post2", slug:"english-job-interview" },
  { categoryKey:"category3", titleKey:"post3", slug:"business-email-templates" },
];

export default function BlogPreview() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <section className="section bg-[#F0EDE6]">
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="label mb-4">{t("title")}</p>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black text-ink">{t("subtitle")}</h2>
          </div>
          <Link href={`/${locale}/blog`} className="text-sm text-primary font-semibold hover:underline flex items-center gap-1.5 whitespace-nowrap">
            All articles <ArrowRight size={14}/>
          </Link>
        </div>

        <div className="divide-y divide-border">
          {posts.map((post, idx) => (
            <Link key={idx} href={`/${locale}/blog/${post.slug}`}
              className="flex items-center justify-between gap-8 py-6 group hover:bg-cream/60 -mx-4 px-4 rounded-xl transition-colors">
              <div className="flex items-center gap-6 min-w-0">
                <span className="text-[11px] font-bold text-muted uppercase tracking-widest hidden sm:block w-28 flex-shrink-0">
                  {t(post.categoryKey)}
                </span>
                <h3 className="font-semibold text-ink text-sm sm:text-base truncate group-hover:text-primary transition-colors">
                  {t(post.titleKey)}
                </h3>
              </div>
              <ArrowRight size={16} className="text-muted group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0"/>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
