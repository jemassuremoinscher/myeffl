import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const testimonialKeys = ["t1","t2","t3"] as const;

const colors = [
  { card:"bg-container-primary border-primary/10", quote:"text-on-surface", name:"text-primary", role:"text-on-muted", avatar:"bg-primary text-on-primary" },
  { card:"bg-primary border-transparent", quote:"text-on-primary/90", name:"text-on-primary", role:"text-on-primary/60", avatar:"bg-secondary text-on-secondary" },
  { card:"bg-container-secondary border-secondary/10", quote:"text-on-surface", name:"text-on-surface", role:"text-on-muted", avatar:"bg-primary text-on-primary" },
];

export default function TestimonialsSection() {
  const t = useTranslations("testimonials");
  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Results</p>
          <h2 className="text-display-sm font-black text-on-surface mb-3">{t("title")}</h2>
          <p className="text-on-muted text-sm">{t("subtitle")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {testimonialKeys.map((key, idx) => {
            const c = colors[idx];
            return (
              <div key={key} className={`${c.card} border rounded-5xl p-7 shadow-elevation-1 hover:shadow-elevation-2 transition-all`}>
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_,i) => <Star key={i} size={14} className="fill-secondary text-secondary"/>)}
                </div>
                <p className={`text-sm leading-relaxed mb-6 italic ${c.quote}`}>
                  &ldquo;{t(`${key}_quote`)}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${c.avatar} rounded-full flex items-center justify-center text-sm font-black flex-shrink-0`}>
                    {t(`${key}_name`).charAt(0)}
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${c.name}`}>{t(`${key}_name`)}</p>
                    <p className={`text-xs ${c.role}`}>{t(`${key}_title`)}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
