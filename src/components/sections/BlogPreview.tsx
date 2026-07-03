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
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Link
              key={idx}
              href={`/${locale}/blog/${post.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-navy-500/30 hover:shadow-lg transition-all"
            >
              {/* Image placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-navy-500 to-navy-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors" />
              </div>

              <div className="p-5">
                <p className="text-xs font-bold text-navy-500 uppercase tracking-wide mb-2">
                  {t(post.categoryKey)}
                </p>
                <h3 className="font-bold text-gray-900 mb-4 leading-snug group-hover:text-navy-500 transition-colors">
                  {t(post.titleKey)}
                </h3>
                <span className="inline-flex items-center gap-1 text-navy-500 font-bold text-sm group-hover:gap-2 transition-all">
                  {t("read")}
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
