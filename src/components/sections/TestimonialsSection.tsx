import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const testimonialKeys = ["t1", "t2", "t3"] as const;

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-20 px-4 bg-green-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-cream mb-3">{t("title")}</h2>
          <p className="text-green-200 text-base">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonialKeys.map((key) => (
            <div
              key={key}
              className="bg-green-900/60 border border-green-700 rounded-2xl p-6 hover:bg-green-900/80 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold-400 text-gold-400" />
                ))}
              </div>
              <p className="text-green-100 leading-relaxed mb-5 text-sm italic">
                &ldquo;{t(`${key}_quote`)}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gold-400 rounded-full flex items-center justify-center text-green-950 font-bold text-sm flex-shrink-0">
                  {t(`${key}_name`).charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-cream text-sm">{t(`${key}_name`)}</p>
                  <p className="text-green-300 text-xs">{t(`${key}_title`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
