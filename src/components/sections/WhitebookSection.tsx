import { useLocale } from "next-intl";
import Link from "next/link";
import { Download, Send } from "lucide-react";

const TELEGRAM_URL = "https://t.me/effl_english"; // ← à remplacer par le vrai lien

const content: Record<string, {
  eyebrow: string; title: string; subtitle: string;
  points: string[]; cta_pdf: string; cta_tg: string; tg_note: string;
}> = {
  en: {
    eyebrow: "Free Guide",
    title: "5 English Mistakes Russian Speakers Make in Business",
    subtitle: "Download the free guide and discover the exact patterns blocking your professional English — and how to fix them.",
    points: [
      "Why \"actually\" sounds wrong in English meetings",
      "How to disagree professionally without sounding rude",
      "The tone shift that changes how you're perceived",
    ],
    cta_pdf: "Download Free Guide (PDF)",
    cta_tg: "Join on Telegram",
    tg_note: "Get weekly tips on professional English",
  },
  fr: {
    eyebrow: "Guide gratuit",
    title: "5 erreurs en anglais des affaires chez les russophones",
    subtitle: "Téléchargez le guide gratuit et découvrez les patterns exacts qui bloquent votre anglais professionnel.",
    points: [
      "Pourquoi «actually» sonne mal en réunion",
      "Comment exprimer un désaccord sans paraître impoli",
      "Le changement de ton qui transforme votre image",
    ],
    cta_pdf: "Télécharger le guide gratuit (PDF)",
    cta_tg: "Rejoindre sur Telegram",
    tg_note: "Conseils hebdomadaires en anglais professionnel",
  },
  ru: {
    eyebrow: "Бесплатное руководство",
    title: "5 ошибок в деловом английском русскоязычных специалистов",
    subtitle: "Скачайте бесплатное руководство и узнайте, какие именно паттерны мешают вам звучать профессионально — и как их исправить.",
    points: [
      "Почему «actually» звучит неправильно на совещаниях",
      "Как профессионально несоглашаться, не звуча грубо",
      "Тональный сдвиг, который меняет то, как вас воспринимают",
    ],
    cta_pdf: "Скачать бесплатное руководство (PDF)",
    cta_tg: "Подписаться в Telegram",
    tg_note: "Еженедельные советы по деловому английскому",
  },
};

export default function WhitebookSection() {
  const locale = useLocale();
  const c = content[locale] ?? content.en;

  return (
    <section className="bg-primary py-20 sm:py-28 px-4 overflow-hidden relative">
      {/* Subtle texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"18px 18px"}}/>

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold mb-5">
              {c.eyebrow}
            </p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-on-dark leading-tight mb-6">
              {c.title}
            </h2>
            <div className="w-10 h-0.5 bg-gold mb-7"/>
            <p className="text-white/60 leading-relaxed mb-8 text-base">{c.subtitle}</p>
            <ul className="space-y-3 mb-10">
              {c.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/75">
                  <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-gold text-[10px] font-bold">
                    {i + 1}
                  </span>
                  {pt}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3">
              {/* PDF download */}
              <a
                href="/whitebook-ru.pdf"
                download="EFFL_Guide_Anglais_Professionnel.pdf"
                className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-gold-light transition-colors"
              >
                <Download size={15}/>
                {c.cta_pdf}
              </a>

              {/* Telegram */}
              <Link
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-on-dark px-6 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                <Send size={14}/>
                {c.cta_tg}
              </Link>
            </div>
            <p className="text-xs text-white/30 mt-4">{c.tg_note}</p>
          </div>

          {/* RIGHT — PDF preview card */}
          <div className="flex justify-center lg:justify-end">
            <a
              href="/whitebook-ru.pdf"
              download
              className="group relative w-64 sm:w-72 cursor-pointer"
            >
              {/* Shadow stack */}
              <div className="absolute top-4 left-4 w-full h-full bg-white/5 rounded-2xl border border-white/10"/>
              <div className="absolute top-2 left-2 w-full h-full bg-white/8 rounded-2xl border border-white/10"/>

              {/* Main card */}
              <div className="relative bg-cream rounded-2xl overflow-hidden shadow-2xl group-hover:-translate-y-1 transition-transform duration-300">
                {/* Card top — green */}
                <div className="bg-primary h-32 flex flex-col items-start justify-end p-5 relative">
                  <div className="absolute inset-0 opacity-[0.05]"
                    style={{backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"12px 12px"}}/>
                  <p className="relative text-[9px] font-bold uppercase tracking-widest text-gold mb-1">English for Future Leaders</p>
                  <p className="relative text-xs font-black text-on-dark leading-tight">
                    {locale === "ru" ? "Бесплатное руководство" : locale === "fr" ? "Guide gratuit" : "Free Guide"}
                  </p>
                </div>

                {/* Gold bar */}
                <div className="h-1 bg-gold"/>

                {/* Card body */}
                <div className="p-5">
                  <p className="font-black text-ink text-sm leading-snug mb-3">
                    {locale === "ru"
                      ? "5 ошибок в деловом английском русскоязычных специалистов"
                      : locale === "fr"
                      ? "5 erreurs en anglais des affaires"
                      : "5 Business English Mistakes"}
                  </p>
                  <p className="text-xs text-muted leading-relaxed mb-4">
                    {locale === "ru" ? "— и как их исправить" : locale === "fr" ? "— et comment les corriger" : "— and how to fix them"}
                  </p>

                  <div className="inline-flex items-center gap-1.5 bg-primary text-on-dark text-[10px] font-bold px-3 py-1.5 rounded-lg">
                    <Download size={10}/> PDF · Free
                  </div>
                </div>
              </div>

              {/* Download badge */}
              <div className="absolute -top-3 -right-3 bg-gold text-ink text-[9px] font-black px-3 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
                Free
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
