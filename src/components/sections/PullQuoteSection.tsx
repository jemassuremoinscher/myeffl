import { useLocale } from "next-intl";

const quotes: Record<string, { text: string; label: string }> = {
  en: {
    text: "I don't teach grammar rules. I teach the confidence, the vocabulary, and the cultural intelligence that opens doors in international business.",
    label: "Katsiaryna · CELTA Certified · 10 years coaching executives",
  },
  fr: {
    text: "Je n'enseigne pas des règles de grammaire. J'enseigne la confiance, le vocabulaire et l'intelligence culturelle qui ouvrent des portes dans les affaires internationales.",
    label: "Katsiaryna · Certifiée CELTA · 10 ans de coaching de cadres",
  },
  ru: {
    text: "Я учу не грамматическим правилам. Я учу уверенности, профессиональной лексике и культурному интеллекту, которые открывают двери в международном бизнесе.",
    label: "Катерина · Сертификат CELTA · 10 лет коучинга руководителей",
  },
};

export default function PullQuoteSection() {
  const locale = useLocale();
  const q = quotes[locale] ?? quotes.en;

  return (
    <section className="bg-cream-dark py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")", backgroundRepeat:"repeat", backgroundSize:"128px" }}
      />

      <div className="container-xl max-w-4xl relative z-10">
        {/* Opening quote mark */}
        <p className="text-[7rem] leading-none text-primary/20 font-black mb-[-2rem] select-none">"</p>

        <blockquote>
          <p className="text-[clamp(1.4rem,3vw,2.2rem)] font-black text-ink leading-[1.35] mb-8">
            {q.text}
          </p>
          <div className="flex items-center gap-4">
            <div className="w-10 h-0.5 bg-gold flex-shrink-0"/>
            <cite className="not-italic text-sm text-muted font-medium">{q.label}</cite>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
