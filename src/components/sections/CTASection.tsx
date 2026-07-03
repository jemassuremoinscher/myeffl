import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Play } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="py-20 px-4 bg-navy-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-navy-400/20 to-transparent pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          {t("title")}
        </h2>
        <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
          {t("subtitle")}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="inline-flex items-center gap-2 bg-white text-navy-500 px-8 py-4 rounded-xl font-bold text-base hover:bg-gray-100 transition-all hover:shadow-xl group"
        >
          <Play size={18} className="fill-navy-500" />
          {t("button")}
        </Link>
      </div>
    </section>
  );
}
