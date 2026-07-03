import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const posts = [
  { categoryKey: "category1", titleKey: "post1", slug: "confident-in-meetings" },
  { categoryKey: "category2", titleKey: "post2", slug: "english-job-interview" },
  { categoryKey: "category3", titleKey: "post3", slug: "business-email-templates" },
];

export default function BlogPreview() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <section className="py-20 px-4 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-ink mb-2">{t("title")}</h2>
            <p className="text-ink-muted text-sm">{t("subtitle")}</p>
          </div>
          <Link href={`/${locale}/blog`} className="text-green-800 font-semibold text-sm hover:underline whitespace-nowrap flex items-center gap-1">
            All articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <Link
              key={idx}
              href={`/${locale}/blog/${post.slug}`}
              className="group block bg-cream rounded-2xl overflow-hidden border border-green-100 hover:border-green-300 hover:shadow-lg transition-all"
            >
              <div className="w-full h-44 bg-gradient-to-br from-green-800 to-green-700 relative">
                <div className="absolute inset-0 opacity-10"
                  style={{backgroundImage: "radial-gradient(#fff 1px, transparent 0)", backgroundSize: "16px 16px"}}
                />
              </div>
              <div className="p-5">
                <p className="text-xs font-bold text-green-700 uppercase tracking-wide mb-2">
                  {t(post.categoryKey)}
                </p>
                <h3 className="font-semibold text-ink text-sm leading-snug mb-4 group-hover:text-green-800 transition-colors">
                  {t(post.titleKey)}
                </h3>
                <span className="inline-flex items-center gap-1 text-green-800 font-semibold text-xs group-hover:gap-2 transition-all">
                  {t("read")} <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
