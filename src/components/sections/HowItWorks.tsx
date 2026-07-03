import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const steps = [
  { num:"01", titleKey:"step1_title", descKey:"step1_desc", icon:"📅" },
  { num:"02", titleKey:"step2_title", descKey:"step2_desc", icon:"📋" },
  { num:"03", titleKey:"step3_title", descKey:"step3_desc", icon:"🚀" },
];

export default function HowItWorks() {
  const t = useTranslations("how");
  const locale = useLocale();

  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Process</p>
            <h2 className="text-display-sm font-black text-on-surface">{t("title")}</h2>
          </div>
          <Link href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-semibold text-sm shadow-elevation-1 hover:shadow-elevation-2 transition-all self-start md:self-end md3-state-layer">
            Start free →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {steps.map((step, idx) => (
            <div key={idx}
              className={`rounded-5xl p-8 relative overflow-hidden shadow-elevation-1 hover:shadow-elevation-2 transition-all ${
                idx === 1 ? "bg-primary text-on-primary" : "bg-container-tertiary"
              }`}>
              {/* Blob */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none ${
                idx === 1 ? "bg-secondary" : "bg-primary"
              }`} style={{transform:"translate(30%,-30%)"}}/>

              <div className={`text-4xl font-black mb-6 opacity-20 ${idx===1?"text-on-primary":"text-primary"}`}>
                {step.num}
              </div>
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className={`font-bold text-base mb-2 ${idx===1?"text-on-primary":"text-on-surface"}`}>
                {t(step.titleKey)}
              </h3>
              <p className={`text-sm leading-relaxed ${idx===1?"text-on-primary/70":"text-on-muted"}`}>
                {t(step.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
