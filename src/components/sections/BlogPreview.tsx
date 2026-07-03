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
    <section className="section-pad bg-cream">
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow mb-5">Blog</p>
            <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-black text-ink">{t("title")}</h2>
          </div>
          <Link href={`/${locale}/blog`}
            className="text-sm font-semibold text-ink hover:text-primary transition-colors flex items-center gap-1.5 whitespace-nowrap">
            All articles <ArrowRight size={13}/>
          </Link>
        </div>

        {/* Featured + list */}
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-5">
          {/* Big featured */}
          <Link href={`/${locale}/blog/${posts[0].slug}`}
            className="group rounded-2xl overflow-hidden bg-cream-dark border border-border hover:border-ink/25 transition-all hover:shadow-lg">
            <div className="bg-primary h-52 sm:h-64 relative flex items-end p-6">
              <div className="absolute inset-0 opacity-[0.05]"
                style={{backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"14px 14px"}}/>
              <span className="relative text-[10px] font-bold uppercase tracking-widest bg-gold text-ink px-3 py-1 rounded-full">
                {t(posts[0].categoryKey)}
              </span>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-ink text-base leading-snug mb-3 group-hover:text-primary transition-colors">
                {t(posts[0].titleKey)}
              </h3>
              <span className="text-xs font-semibold text-muted flex items-center gap-1.5 group-hover:text-primary transition-colors">
                Read <ArrowRight size={11}/>
              </span>
            </div>
          </Link>

          {/* List */}
          <div className="flex flex-col gap-3">
            {posts.slice(1).map((post, idx) => (
              <Link key={idx} href={`/${locale}/blog/${post.slug}`}
                className="group flex-1 rounded-2xl p-6 bg-cream-dark border border-border hover:border-ink/25 transition-all hover:shadow-md flex flex-col justify-between">
                <div>
                  <p className="eyebrow mb-3">{t(post.categoryKey)}</p>
                  <h3 className="font-bold text-ink text-sm leading-snug group-hover:text-primary transition-colors">
                    {t(post.titleKey)}
                  </h3>
                </div>
                <span className="text-xs font-semibold text-muted flex items-center gap-1 mt-4 group-hover:text-primary transition-colors">
                  Read <ArrowRight size={11}/>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
