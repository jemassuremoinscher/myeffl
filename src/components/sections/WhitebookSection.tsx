"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import Link from "next/link";
import { Send, ArrowRight, CheckCircle2 } from "lucide-react";

const TELEGRAM = "https://t.me/englishffl";

const copy: Record<string, {
  eyebrow: string; title: string; subtitle: string;
  points: string[]; label_name: string; label_email: string;
  placeholder_name: string; placeholder_email: string;
  cta: string; cta_tg: string; tg_note: string;
  success: string; success_sub: string; download: string;
}> = {
  en: {
    eyebrow: "Free Guide — PDF",
    title: "5 English Mistakes Russian Speakers Make in Business",
    subtitle: "Enter your email and get the free guide instantly.",
    points: [
      "Why «actually» sounds wrong in meetings",
      "How to disagree without sounding rude",
      "The tone shift that changes how you're perceived",
    ],
    label_name:"Your name", label_email:"Work email",
    placeholder_name:"Alexandra", placeholder_email:"alexandra@company.com",
    cta:"Get the free guide →",
    cta_tg:"Join on Telegram for weekly tips",
    tg_note:"No spam. Unsubscribe anytime.",
    success:"Your guide is ready.",
    success_sub:"Click below to download the PDF.",
    download:"Download PDF →",
  },
  fr: {
    eyebrow: "Guide gratuit — PDF",
    title: "5 erreurs en anglais des affaires chez les russophones",
    subtitle: "Entrez votre email et recevez le guide gratuit immédiatement.",
    points: [
      "Pourquoi «actually» sonne faux en réunion",
      "Comment exprimer un désaccord sans paraître impoli",
      "Le changement de ton qui transforme votre image",
    ],
    label_name:"Votre nom", label_email:"Email professionnel",
    placeholder_name:"Alexandra", placeholder_email:"alexandra@entreprise.com",
    cta:"Recevoir le guide gratuit →",
    cta_tg:"Rejoindre sur Telegram",
    tg_note:"Conseils hebdomadaires. Désinscription en 1 clic.",
    success:"Votre guide est prêt.",
    success_sub:"Cliquez ci-dessous pour télécharger le PDF.",
    download:"Télécharger le PDF →",
  },
  ru: {
    eyebrow: "Бесплатное руководство — PDF",
    title: "5 ошибок в деловом английском русскоязычных специалистов",
    subtitle: "Оставьте email и получите руководство мгновенно.",
    points: [
      "Почему «actually» звучит неправильно на совещаниях",
      "Как профессионально несоглашаться, не звуча грубо",
      "Тональный сдвиг, который меняет восприятие вас коллегами",
    ],
    label_name:"Ваше имя", label_email:"Рабочий email",
    placeholder_name:"Александра", placeholder_email:"aleksandra@company.com",
    cta:"Получить бесплатное руководство →",
    cta_tg:"Подписаться в Telegram — еженедельные советы",
    tg_note:"Без спама. Отписка в один клик.",
    success:"Ваше руководство готово.",
    success_sub:"Нажмите ниже, чтобы скачать PDF.",
    download:"Скачать PDF →",
  },
};

export default function WhitebookSection() {
  const locale = useLocale();
  const c = copy[locale] ?? copy.en;

  const [name,    setName]    = useState("");
  const [email,   setEmail]   = useState("");
  const [loading, setLoading] = useState(false);
  const [done,    setDone]    = useState(false);
  const [error,   setError]   = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    if (!email.includes("@")) { setError("Email invalide"); return; }
    setLoading(true);
    try {
      const res = await fetch("/api/whitebook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (res.ok) setDone(true);
      else setError("Erreur — réessayez.");
    } catch { setError("Erreur réseau."); }
    finally   { setLoading(false); }
  }

  return (
    <section className="bg-primary py-20 sm:py-28 px-4 relative overflow-hidden">
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{backgroundImage:"repeating-linear-gradient(45deg,#fff 0,#fff 1px,transparent 0,transparent 50%)",backgroundSize:"18px 18px"}}/>

      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — copy */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold mb-5">{c.eyebrow}</p>
            <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black text-on-dark leading-tight mb-6">{c.title}</h2>
            <div className="w-10 h-0.5 bg-gold mb-7"/>
            <p className="text-white/60 leading-relaxed mb-8 text-base">{c.subtitle}</p>
            <ul className="space-y-3 mb-10">
              {c.points.map((pt, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/75">
                  <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-gold text-[10px] font-bold">{i+1}</span>
                  {pt}
                </li>
              ))}
            </ul>
            {/* Telegram CTA secondaire */}
            <Link href={TELEGRAM} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white/80 text-sm transition-colors">
              <Send size={13}/>
              {c.cta_tg}
            </Link>
            <p className="text-xs text-white/25 mt-2">{c.tg_note}</p>
          </div>

          {/* RIGHT — form / success */}
          <div>
            <div className="bg-cream rounded-2xl p-7 sm:p-8 shadow-2xl">
              {!done ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-ink-soft block mb-1.5">{c.label_name}</label>
                    <input
                      type="text" value={name} onChange={e => setName(e.target.value)}
                      placeholder={c.placeholder_name}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-ink-soft block mb-1.5">{c.label_email} *</label>
                    <input
                      type="email" value={email} onChange={e => setEmail(e.target.value)}
                      placeholder={c.placeholder_email} required
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                    />
                  </div>
                  {error && <p className="text-red-500 text-xs">{error}</p>}
                  <button type="submit" disabled={loading}
                    className="w-full bg-primary text-on-dark py-3.5 rounded-xl font-bold text-sm hover:bg-[#003520] transition-colors disabled:opacity-60 flex items-center justify-center gap-2">
                    {loading ? "..." : <>{c.cta} <ArrowRight size={14}/></>}
                  </button>
                  <p className="text-xs text-muted text-center">
                    {locale==="ru" ? "Без спама. Только полезный контент." : locale==="fr" ? "Pas de spam. Désabonnement en 1 clic." : "No spam. Unsubscribe anytime."}
                  </p>
                </form>
              ) : (
                <div className="text-center py-4">
                  <CheckCircle2 size={40} className="text-primary mx-auto mb-4"/>
                  <p className="font-black text-ink text-xl mb-2">{c.success}</p>
                  <p className="text-muted text-sm mb-6">{c.success_sub}</p>
                  <a href="/whitebook-ru.pdf" download
                    className="inline-flex items-center gap-2 bg-primary text-on-dark px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#003520] transition-colors">
                    {c.download}
                  </a>
                  <div className="mt-5 pt-5 border-t border-border">
                    <Link href={TELEGRAM} target="_blank"
                      className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline">
                      <Send size={13}/> {c.cta_tg}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
