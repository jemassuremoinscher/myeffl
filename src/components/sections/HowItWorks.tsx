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
    <section className="section-pad bg-primary text-on-dark">
      <div className="container-xl">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/40 mb-4">
              {t("title")}
            </p>
            <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-black text-on-dark leading-tight">
              Three steps.<br/>Real results.
            </h2>
          </div>
          <Link href={`/${locale}/contact`} className="btn-gold self-start md:self-end">
            Start free →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div key={idx}
              className={`rounded-2xl p-8 ${
                idx === 1
                  ? "bg-white/10 ring-1 ring-white/20"
                  : "bg-white/5"
              }`}>
              <p className="text-5xl font-black text-white/15 mb-6 leading-none">{step.num}</p>
              <h3 className="font-bold text-on-dark text-base mb-3">{t(step.titleKey)}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{t(step.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
