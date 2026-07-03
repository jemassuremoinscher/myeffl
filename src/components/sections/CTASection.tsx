import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  const t = useTranslations("cta");
  const locale = useLocale();

  return (
    <section className="py-16 px-4 bg-surface">
      <div className="max-w-5xl mx-auto">
        <div className="bg-primary rounded-6xl px-8 sm:px-16 py-16 sm:py-20 relative overflow-hidden">
          {/* Background dots */}
          <div className="absolute inset-0 pointer-events-none"
            style={{backgroundImage:"radial-gradient(rgba(255,255,255,0.06) 1.5px,transparent 0)", backgroundSize:"22px 22px"}}/>
          {/* Blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"/>
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-container-primary/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3 pointer-events-none"/>

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="max-w-lg">
              <div className="inline-flex items-center gap-2 bg-on-primary/10 text-on-primary text-xs font-semibold px-4 py-2 rounded-full mb-6">
                ✨ First session is free
              </div>
              <h2 className="text-display-sm font-black text-on-primary mb-4">{t("title")}</h2>
              <p className="text-on-primary/70 text-base leading-relaxed">{t("subtitle")}</p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Link href={`/${locale}/contact`}
                className="inline-flex items-center justify-center gap-2 bg-secondary text-on-secondary px-8 py-4 rounded-full font-bold text-base shadow-elevation-2 hover:shadow-elevation-3 transition-all group md3-state-layer">
                {t("button")}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
              </Link>
              <p className="text-on-primary/50 text-xs text-center">No credit card required</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
