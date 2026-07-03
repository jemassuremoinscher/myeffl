import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="section bg-primary">
      <div className="container-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">

          <div className="max-w-xl">
            <div className="w-10 h-0.5 bg-gold mb-8"/>
            <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-black text-ink-inv leading-tight mb-4">
              {t("title")}
            </h2>
            <p className="text-white/60 text-base leading-relaxed">{t("subtitle")}</p>
          </div>

          <div className="flex flex-col gap-3 flex-shrink-0">
            <Link href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 rounded-xl font-bold text-base hover:bg-[#D9BC8E] transition-colors group">
              {t("button")}
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform"/>
            </Link>
            <p className="text-white/30 text-xs text-center">First session · No commitment</p>
          </div>
        </div>
      </div>
    </section>
  );
}
