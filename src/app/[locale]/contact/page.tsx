"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";

const labels: Record<string, Record<string, string>> = {
  en: { title:"Book Your Session", sub:"Start with a free 20-minute discovery call. No commitment.", name:"Your name", email:"Work email", message:"Tell me about your goals", send:"Send Message", success:"Message sent!", success_sub:"I'll get back to you within 24 hours.", or:"Or reach me directly" },
  fr: { title:"Réservez votre séance", sub:"Commencez par un appel découverte gratuit de 20 minutes.", name:"Votre nom", email:"Email professionnel", message:"Parlez-moi de vos objectifs", send:"Envoyer", success:"Message envoyé !", success_sub:"Je vous réponds sous 24 heures.", or:"Ou contactez-moi directement" },
  ru: { title:"Записаться на занятие", sub:"Начните с бесплатного 20-минутного звонка. Без обязательств.", name:"Ваше имя", email:"Рабочий email", message:"Расскажите о ваших целях", send:"Отправить", success:"Сообщение отправлено!", success_sub:"Отвечу в течение 24 часов.", or:"Или свяжитесь напрямую" },
};

export default function ContactPage() {
  const { locale } = useParams<{ locale: string }>();
  const l = labels[locale] ?? labels.en;

  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone]       = useState(false);
  const [error, setError]     = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, source: "contact" }),
      });
      if (res.ok) setDone(true);
      else setError(locale==="ru"?"Ошибка — попробуйте ещё раз.":"Erreur — réessayez.");
    } catch { setError("Network error."); }
    finally   { setLoading(false); }
  }

  return (
    <main>
      <section className="bg-cream section-pad">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT — Form */}
            <div>
              <p className="eyebrow mb-5">Contact</p>
              <h1 className="text-[clamp(2rem,4vw,3.2rem)] font-black text-ink mb-4">{l.title}</h1>
              <div className="w-10 h-0.5 bg-gold mb-8"/>
              <p className="text-muted mb-10">{l.sub}</p>

              {!done ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-xs font-bold text-ink-soft block mb-2">{l.name}</label>
                    <input type="text" value={name} onChange={e=>setName(e.target.value)}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder={locale==="ru"?"Александра":"Alexandra"}/>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-ink-soft block mb-2">{l.email} *</label>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
                      placeholder="alexandra@company.com"/>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-ink-soft block mb-2">{l.message}</label>
                    <textarea rows={5} value={message} onChange={e=>setMessage(e.target.value)}
                      className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
                      placeholder={locale==="ru"?"Хочу улучшить английский для переговоров...":"I want to improve my English for negotiations..."}/>
                  </div>
                  {error && <p className="text-red-500 text-xs">{error}</p>}
                  <button type="submit" disabled={loading}
                    className="btn-dark w-full justify-center disabled:opacity-60">
                    {loading ? "..." : l.send}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-start gap-4">
                  <CheckCircle2 size={36} className="text-primary"/>
                  <p className="font-black text-ink text-xl">{l.success}</p>
                  <p className="text-muted text-sm">{l.success_sub}</p>
                  <Link href={`/${locale}`} className="btn-dark mt-2">
                    {locale==="ru"?"На главную":locale==="fr"?"Retour à l'accueil":"Back to home"}
                  </Link>
                </div>
              )}
            </div>

            {/* RIGHT — Info */}
            <div className="lg:pt-20">
              <div className="space-y-8 mb-12">
                {[
                  { icon:<Mail size={16} className="text-primary"/>, title:"Email", val:<a href="mailto:contact@myeffl.com" className="text-muted text-sm hover:text-primary transition-colors">contact@myeffl.com</a> },
                  { icon:<MapPin size={16} className="text-primary"/>, title:"Location", val:<p className="text-muted text-sm">Dubai, UAE · Online Worldwide</p> },
                  { icon:<Clock size={16} className="text-primary"/>, title:locale==="ru"?"Ответ":"Response time", val:<p className="text-muted text-sm">{locale==="ru"?"В течение 24 часов · Пн–Пт":locale==="fr"?"Sous 24h · Lun–Ven":"Within 24 hours · Mon–Fri"}</p> },
                ].map(({icon,title,val},i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-cream-dark border border-border flex items-center justify-center flex-shrink-0">{icon}</div>
                    <div><p className="font-bold text-ink text-sm mb-1">{title}</p>{val}</div>
                  </div>
                ))}
              </div>

              <div className="bg-primary rounded-2xl p-7">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">
                  {locale==="ru"?"Первое занятие":locale==="fr"?"Première séance":"First session"}
                </p>
                <p className="text-on-dark font-black text-xl mb-2">
                  {locale==="ru"?"Бесплатно · Без обязательств":locale==="fr"?"Gratuit · Sans engagement":"Free · No commitment"}
                </p>
                <p className="text-white/60 text-sm mb-2">
                  {locale==="ru"?"20 минут, чтобы понять ваши цели и проверить совместимость.":locale==="fr"?"20 minutes pour comprendre vos objectifs et voir si nous sommes compatibles.":"20 minutes to understand your goals and check we're a good fit."}
                </p>
                <p className="text-xs text-white/30">
                  {locale==="ru"?"Без карты. Без скрытых платежей.":locale==="fr"?"Pas de carte bancaire requise.":"No credit card required."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
