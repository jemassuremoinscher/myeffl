import { useTranslations } from "next-intl";

const stats = [
  { value: "500+", key: "students", icon: "👥" },
  { value: "✓", key: "certified", icon: "🎓" },
  { value: "10+", key: "experience", icon: "⭐" },
  { value: "4.9", key: "rating", icon: "⭐" },
];

export default function TrustSection() {
  const t = useTranslations("trust");

  return (
    <section className="bg-navy-500 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
          {stats.map((stat) => (
            <div key={stat.key} className="flex flex-col items-center gap-1">
              <p className="text-3xl sm:text-4xl font-bold">{stat.value}</p>
              <p className="text-blue-200 text-sm font-medium">{t(stat.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
