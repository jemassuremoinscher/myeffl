import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  const locale = useLocale();

  const testimonials = [
    { nameKey:"t1_name", titleKey:"t1_title", quoteKey:"t1_quote", result: locale==="ru"?"Повышение через 6 мес.":locale==="fr"?"Promotion en 6 mois":"Promoted in 6 months", initials:"NK" },
    { nameKey:"t2_name", titleKey:"t2_title", quoteKey:"t2_quote", result: locale==="ru"?"Ведёт встречи на английском":locale==="fr"?"Anime des réunions en anglais":"Now leads English calls", initials:"AM" },
    { nameKey:"t3_name", titleKey:"t3_title", quoteKey:"t3_quote", result: locale==="ru"?"Закрыл сделку на $2M":locale==="fr"?"Deal de 2M$ conclu":"Closed $2M deal in English", initials:"DS" },
  ] as const;

  return (
    <section className="bg-cream section-pad">
      <div className="container-xl">
        <div className="mb-12">
          <p className="eyebrow mb-5">{t("title")}</p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-ink">{t("subtitle")}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {testimonials.map((item) => (
            <div key={item.nameKey} className="bg-cream-dark border border-border rounded-2xl p-7 flex flex-col">
              {/* Result badge */}
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"/>
                <span className="text-[11px] font-bold uppercase tracking-wider text-primary">{item.result}</span>
              </div>

              {/* Quote */}
              <p className="text-sm text-ink-soft leading-[1.85] flex-1 mb-6 italic">
                "{t(item.quoteKey)}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-black text-gold">{item.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-ink text-sm">{t(item.nameKey)}</p>
                  <p className="text-xs text-muted">{t(item.titleKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA sous les témoignages */}
        <div className="text-center">
          <Link href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary border border-primary/30 px-6 py-3 rounded-xl hover:bg-primary hover:text-on-dark transition-colors">
            {locale==="ru"?"Записаться на бесплатное занятие →":locale==="fr"?"Réserver une séance gratuite →":"Book your free session →"}
          </Link>
        </div>
      </div>
    </section>
  );
}
