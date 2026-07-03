import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const testimonialKeys = ["t1", "t2", "t3"] as const;

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy-500 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-600 text-lg">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialKeys.map((key) => (
            <div
              key={key}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-400 text-gold-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic leading-relaxed mb-6 text-sm sm:text-base">
                &ldquo;{t(`${key}_quote`)}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-navy-500 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t(`${key}_name`).charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-navy-500 text-sm">{t(`${key}_name`)}</p>
                  <p className="text-gray-500 text-xs">{t(`${key}_title`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
