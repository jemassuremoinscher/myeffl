import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const testimonialKeys = ["t1","t2","t3"] as const;

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");

  return (
    <section className="section-pad bg-cream-dark">
      <div className="container-xl">

        <div className="mb-14">
          <p className="eyebrow mb-5">{t("title")}</p>
          <h2 className="text-[clamp(2rem,3.5vw,3.2rem)] font-black text-ink max-w-[18ch]">
            {t("subtitle")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonialKeys.map((key, idx) => (
            <div key={key}
              className={`rounded-2xl p-7 flex flex-col gap-6 ${
                idx === 0
                  ? "bg-primary text-on-dark"
                  : "bg-cream border border-border"
              }`}>
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_,i) => (
                  <Star key={i} size={14} className="fill-gold text-gold"/>
                ))}
              </div>

              {/* Quote */}
              <p className={`text-sm leading-[1.8] flex-1 ${idx===0 ? "text-white/80" : "text-ink-soft"}`}>
                &ldquo;{t(`${key}_quote`)}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 ${
                  idx===0 ? "bg-white/20 text-on-dark" : "bg-primary text-on-dark"
                }`}>
                  {t(`${key}_name`).charAt(0)}
                </div>
                <div>
                  <p className={`text-sm font-bold ${idx===0 ? "text-on-dark" : "text-ink"}`}>
                    {t(`${key}_name`)}
                  </p>
                  <p className={`text-xs ${idx===0 ? "text-white/45" : "text-muted"}`}>
                    {t(`${key}_title`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
