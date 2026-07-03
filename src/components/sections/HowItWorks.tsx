import { useTranslations } from "next-intl";

const steps = [
  { num: 1, titleKey: "step1_title", descKey: "step1_desc", icon: "📅" },
  { num: 2, titleKey: "step2_title", descKey: "step2_desc", icon: "📋" },
  { num: 3, titleKey: "step3_title", descKey: "step3_desc", icon: "🚀" },
  { num: 4, titleKey: "step4_title", descKey: "step4_desc", icon: "🏆" },
];

export default function HowItWorks() {
  const t = useTranslations("how");

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-navy-500 text-center mb-16">
          {t("title")}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative text-center">
              {/* Connector line */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-1/2 w-full h-px bg-navy-500/20 z-0" />
              )}
              <div className="relative z-10">
                {/* Circle */}
                <div className="w-16 h-16 bg-navy-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-navy-500/20">
                  <span className="text-white font-bold text-xl">{step.num}</span>
                </div>
                <h3 className="font-bold text-navy-500 mb-2 text-sm sm:text-base">
                  {t(step.titleKey)}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {t(step.descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
