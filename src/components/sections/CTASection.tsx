import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="section-pad bg-ink">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">

          <div className="max-w-lg">
            <div className="w-10 h-0.5 bg-gold mb-8"/>
            <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-black text-on-dark leading-tight mb-4">
              {t("title")}
            </h2>
            <p className="text-white/50 text-base leading-relaxed">{t("subtitle")}</p>
          </div>

          <div className="flex flex-col items-start gap-3 flex-shrink-0">
            <Link href={`/${locale}/contact`}
              className="btn-gold text-base px-8 py-4 group">
              {t("button")}
              <ArrowRight size={17} className="group-hover:translate-x-0.5 transition-transform"/>
            </Link>
            <p className="text-white/25 text-xs">No commitment · First session free</p>
          </div>
        </div>
      </div>
    </section>
  );
}
