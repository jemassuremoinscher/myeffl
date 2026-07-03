import { setRequestLocale, getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  { categoryKey:"category1", titleKey:"post1", slug:"confident-in-meetings", readTime:"5 min" },
  { categoryKey:"category2", titleKey:"post2", slug:"english-job-interview", readTime:"7 min" },
  { categoryKey:"category3", titleKey:"post3", slug:"business-email-templates", readTime:"4 min" },
];

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("blog");

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
            {posts.map((post, idx) => (
              <Link key={idx} href={`/${locale}/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden bg-cream-dark border border-border hover:border-ink/20 transition-all hover:shadow-md flex flex-col">
                <div className={`h-48 relative flex items-end p-5 ${idx === 0 ? "bg-primary" : idx === 1 ? "bg-ink" : "bg-cream-dark border-b border-border"}`}>
                  <div className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"14px 14px"}}/>
                  <span className="relative text-[10px] font-bold uppercase tracking-widest bg-gold text-ink px-3 py-1 rounded-full">
                    {t(post.categoryKey)}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="font-bold text-ink text-sm leading-snug mb-4 flex-1 group-hover:text-primary transition-colors">
                    {t(post.titleKey)}
                  </h2>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted">{post.readTime} read</span>
                    <span className="text-xs font-semibold text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t("read")} <ArrowRight size={11}/>
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
