import { useTranslations } from "next-intl";

const stats = [
  { value: "500+", key: "students", icon: "👥" },
  { value: "CELTA", key: "certified", icon: "🎓" },
  { value: "10+", key: "experience", icon: "📅" },
  { value: "4.9★", key: "rating", icon: "⭐" },
];

export default function TrustSection() {
  const t = useTranslations("trust");

  return (
    <section className="bg-green-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.key}>
              <p className="text-2xl sm:text-3xl font-bold text-cream mb-1">{stat.value}</p>
              <p className="text-green-100 text-xs sm:text-sm font-medium">{t(stat.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
