import { useTranslations } from "next-intl";

const stats = [
  { value:"500+", key:"students", icon:"👥", bg:"bg-container-primary", text:"text-primary" },
  { value:"CELTA", key:"certified", icon:"🎓", bg:"bg-container-secondary", text:"text-on-secondary" },
  { value:"10+ yrs", key:"experience", icon:"📅", bg:"bg-container-primary", text:"text-primary" },
  { value:"4.9 ★", key:"rating", icon:"⭐", bg:"bg-container-secondary", text:"text-on-secondary" },
];

export default function TrustSection() {
  const t = useTranslations("trust");
  return (
    <section className="py-10 px-4 bg-surface-dim">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map(s => (
            <div key={s.key} className={`${s.bg} rounded-4xl p-5 flex flex-col items-center gap-1 shadow-elevation-1`}>
              <span className="text-2xl mb-1">{s.icon}</span>
              <p className={`text-2xl font-black ${s.text}`}>{s.value}</p>
              <p className="text-xs text-on-muted font-medium text-center">{t(s.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
