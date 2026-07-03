import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

const steps = [
  { num: "01", titleKey: "step1_title", descKey: "step1_desc" },
  { num: "02", titleKey: "step2_title", descKey: "step2_desc" },
  { num: "03", titleKey: "step3_title", descKey: "step3_desc" },
];

export default function HowItWorks() {
  const t = useTranslations("how");
  const locale = useLocale();

  return (
    <section className="py-20 px-4 bg-cream-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-ink mb-4">{t("title")}</h2>
          <p className="text-ink-muted max-w-md mx-auto text-base">Simple, structured, effective.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-14">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Connector */}
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[-2rem] h-px border-t-2 border-dashed border-green-200 z-0" />
              )}
              <div className="relative z-10 bg-cream rounded-2xl p-6 border border-green-100 hover:border-green-300 transition-all hover:shadow-md">
                <div className="w-14 h-14 bg-green-800 rounded-xl flex items-center justify-center mb-5">
                  <span className="text-gold-400 font-bold text-lg">{step.num}</span>
                </div>
                <h3 className="font-bold text-ink mb-2 text-base">{t(step.titleKey)}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{t(step.descKey)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 bg-green-800 text-cream px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-900 transition-colors"
          >
            Book Your Free Discovery →
          </Link>
        </div>
      </div>
    </section>
  );
}
