import { useTranslations } from "next-intl";

const testimonialKeys = ["t1","t2","t3"] as const;

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  return (
    <section className="section bg-cream">
      <div className="container-xl">

        <div className="mb-14">
          <p className="label mb-4">{t("title")}</p>
          <h2 className="text-[clamp(2rem,3.5vw,3rem)] font-black text-ink">{t("subtitle")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonialKeys.map((key, idx) => (
            <div key={key} className="border-t-2 border-primary pt-8">
              {/* Quote mark */}
              <p className="text-4xl font-black text-gold leading-none mb-4">"</p>
              <p className="text-sm text-ink leading-[1.8] mb-8 italic">
                {t(`${key}_quote`)}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-ink-inv text-xs font-black flex-shrink-0">
                  {t(`${key}_name`).charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-ink">{t(`${key}_name`)}</p>
                  <p className="text-xs text-muted">{t(`${key}_title`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
