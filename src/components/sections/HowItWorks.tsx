import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const steps = [
  { num:"01", titleKey:"step1_title", descKey:"step1_desc" },
  { num:"02", titleKey:"step2_title", descKey:"step2_desc" },
  { num:"03", titleKey:"step3_title", descKey:"step3_desc" },
];

export default function HowItWorks() {
  const t = useTranslations("how");
  const locale = useLocale();

  return (
    <section className="section bg-cream">
      <div className="container-xl">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="label mb-4">{t("title")}</p>
            <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black text-ink leading-tight max-w-[16ch]">
              Simple. Structured. Effective.
            </h2>
          </div>
          <Link href={`/${locale}/contact`} className="btn-primary self-start md:self-end">
            Book free session <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Steps — horizontal rule style */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-6 left-[calc(16.7%+1rem)] right-[calc(16.7%+1rem)] h-px bg-border" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Step number bubble */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-black text-sm relative z-10 ${
                  idx === 1 ? "bg-primary text-ink-inv" : "bg-cream border-2 border-border text-muted"
                }`}>
                  {step.num}
                </div>
              </div>
              <h3 className="font-bold text-ink mb-2 text-base">{t(step.titleKey)}</h3>
              <p className="text-sm text-muted leading-relaxed">{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
