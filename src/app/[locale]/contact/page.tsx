import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { Mail, MapPin, Clock } from "lucide-react";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const labels: Record<string, Record<string, string>> = {
    en: { title:"Book Your Session", sub:"Start with a free 20-minute discovery call.", name:"Your name", email:"Email address", message:"Tell me about your goals", send:"Send Message", or:"Or reach me directly" },
    fr: { title:"Réservez votre séance", sub:"Commencez par un appel découverte gratuit de 20 minutes.", name:"Votre nom", email:"Adresse email", message:"Parlez-moi de vos objectifs", send:"Envoyer", or:"Ou contactez-moi directement" },
    ru: { title:"Запишитесь на занятие", sub:"Начните с бесплатного 20-минутного звонка-знакомства.", name:"Ваше имя", email:"Адрес электронной почты", message:"Расскажите о ваших целях", send:"Отправить", or:"Или свяжитесь напрямую" },
  };
  const l = labels[locale] ?? labels.en;

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

              <form className="space-y-5" action="mailto:contact@myeffl.com" method="GET">
                <div>
                  <label className="text-xs font-bold text-ink-soft block mb-2">{l.name}</label>
                  <input type="text" className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="Alexandra"/>
                </div>
                <div>
                  <label className="text-xs font-bold text-ink-soft block mb-2">{l.email}</label>
                  <input type="email" className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all" placeholder="alexandra@company.com"/>
                </div>
                <div>
                  <label className="text-xs font-bold text-ink-soft block mb-2">{l.message}</label>
                  <textarea rows={5} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none" placeholder="I want to improve my English for presentations and negotiations..."/>
                </div>
                <button type="submit" className="btn-dark w-full justify-center">{l.send}</button>
              </form>
            </div>

            {/* RIGHT — Info */}
            <div className="lg:pt-24">
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-dark border border-border flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-primary"/>
                  </div>
                  <div>
                    <p className="font-bold text-ink text-sm mb-1">Email</p>
                    <a href="mailto:contact@myeffl.com" className="text-muted text-sm hover:text-primary transition-colors">contact@myeffl.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-dark border border-border flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-primary"/>
                  </div>
                  <div>
                    <p className="font-bold text-ink text-sm mb-1">Location</p>
                    <p className="text-muted text-sm">Dubai, UAE · Teaching Worldwide Online</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-cream-dark border border-border flex items-center justify-center flex-shrink-0">
                    <Clock size={16} className="text-primary"/>
                  </div>
                  <div>
                    <p className="font-bold text-ink text-sm mb-1">Response time</p>
                    <p className="text-muted text-sm">Within 24 hours · Mon–Fri</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-7">
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mb-3">First session</p>
                <p className="text-on-dark font-black text-xl mb-2">Free · No commitment</p>
                <p className="text-white/60 text-sm mb-5">20 minutes to understand your goals and see if we're a good fit.</p>
                <p className="text-xs text-white/35">No credit card required</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
