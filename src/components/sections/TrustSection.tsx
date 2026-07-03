import { useTranslations } from "next-intl";

const stats = [
  { value:"500+",  key:"students" },
  { value:"CELTA", key:"certified" },
  { value:"10+",   key:"experience" },
  { value:"4.9 ★", key:"rating" },
];

export default function TrustSection() {
  const t = useTranslations("trust");
  return (
    <section className="bg-primary">
      <div className="container-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div key={s.key} className={`py-10 px-8 ${i === 0 ? "" : ""}`}>
              <p className="text-3xl font-black text-ink-inv mb-1">{s.value}</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">{t(s.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
