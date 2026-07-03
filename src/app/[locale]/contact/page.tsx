import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, faqSchemaEN, faqSchemaRU } from "@/components/seo/schemas";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const titles: Record<string,string> = {
    en: "Book a Free Session | Contact Katsiaryna | EFFL",
    fr: "Réserver une séance gratuite | Contacter Katsiaryna | EFFL",
    ru: "Записаться на бесплатное занятие | Контакты Катерины | EFFL",
  };
  const descs: Record<string,string> = {
    en: "Book a free 20-minute discovery session with Katsiaryna. Online English coaching for Russian-speaking professionals. Dubai-based, worldwide online.",
    fr: "Réservez une séance découverte gratuite de 20 minutes avec Katsiaryna. Coaching anglais en ligne pour professionnels russophones.",
    ru: "Запишитесь на бесплатное 20-минутное знакомство с Катериной. Коучинг английского онлайн для русскоязычных профессионалов. Дубай, весь мир онлайн.",
  };
  return { title: titles[locale]??titles.en, description: descs[locale]??descs.en };
}

const content: Record<string,{
  eyebrow:string; h1:string; sub:string;
  name:string; email:string; message:string; send:string;
  namePh:string; emailPh:string; msgPh:string;
  emailLabel:string; locationLabel:string; responseLabel:string;
  locationVal:string; responseVal:string;
  freeTitle:string; freeSub:string; freeNote:string;
  faqTitle:string;
}> = {
  en: {
    eyebrow:"Contact", h1:"Let's talk.", sub:"Book your free 20-minute discovery session below, or send me a message. I respond within 24 hours, Monday to Friday.",
    name:"Your name", email:"Email address", message:"Tell me about your goals",
    namePh:"Alexandra", emailPh:"you@company.com", msgPh:"I want to improve my English for presentations and board meetings...",
    send:"Send message",
    emailLabel:"Email", locationLabel:"Location", responseLabel:"Response time",
    locationVal:"Dubai, UAE · Online Worldwide", responseVal:"Within 24 hours · Mon–Fri",
    freeTitle:"Free first session", freeSub:"A 20-minute conversation to understand your goals and see if we're a good fit. No credit card. No commitment.", freeNote:"All sessions held via Zoom or Google Meet",
    faqTitle:"Before you write — quick answers",
  },
  fr: {
    eyebrow:"Contact", h1:"Parlons-en.", sub:"Réservez votre séance découverte gratuite de 20 minutes, ou envoyez-moi un message. Je réponds dans les 24 heures, du lundi au vendredi.",
    name:"Votre nom", email:"Adresse email", message:"Parlez-moi de vos objectifs",
    namePh:"Alexandra", emailPh:"vous@entreprise.com", msgPh:"Je veux améliorer mon anglais pour les présentations et les réunions...",
    send:"Envoyer",
    emailLabel:"Email", locationLabel:"Localisation", responseLabel:"Délai de réponse",
    locationVal:"Dubaï, EAU · En ligne dans le monde entier", responseVal:"Sous 24 heures · Lun–Ven",
    freeTitle:"Première séance gratuite", freeSub:"Une conversation de 20 minutes pour comprendre vos objectifs. Sans carte bancaire. Sans engagement.", freeNote:"Toutes les séances via Zoom ou Google Meet",
    faqTitle:"Avant d'écrire — réponses rapides",
  },
  ru: {
    eyebrow:"Контакты", h1:"Давайте поговорим.", sub:"Запишитесь на бесплатное 20-минутное знакомство или напишите мне. Отвечаю в течение 24 часов, с понедельника по пятницу.",
    name:"Ваше имя", email:"Электронная почта", message:"Расскажите о ваших целях",
    namePh:"Александра", emailPh:"вы@компания.com", msgPh:"Хочу улучшить английский для презентаций и переговоров...",
    send:"Отправить сообщение",
    emailLabel:"Email", locationLabel:"Расположение", responseLabel:"Время ответа",
    locationVal:"Дубай, ОАЭ · Онлайн по всему миру", responseVal:"В течение 24 часов · Пн–Пт",
    freeTitle:"Первое занятие бесплатно", freeSub:"20-минутная беседа, чтобы понять ваши цели и убедиться, что мы подходим друг другу. Без карты. Без обязательств.", freeNote:"Все занятия проходят в Zoom или Google Meet",
    faqTitle:"Перед тем как писать — быстрые ответы",
  },
};

const miniQAs: Record<string,{q:string;a:string}[]> = {
  en: [
    { q:"Is the first session really free?", a:"Yes. 20 minutes, no credit card, no commitment." },
    { q:"Where are sessions held?", a:"Online via Zoom or Google Meet. You can join from anywhere." },
    { q:"Do you teach in Russian?", a:"Sessions are in English, but Katsiaryna can explain in Russian when needed." },
  ],
  fr: [
    { q:"La première séance est-elle vraiment gratuite ?", a:"Oui. 20 minutes, sans carte bancaire, sans engagement." },
    { q:"Où se tiennent les séances ?", a:"En ligne via Zoom ou Google Meet. Vous pouvez participer de n'importe où." },
    { q:"Enseignez-vous en français ?", a:"Les séances sont en anglais, mais Katsiaryna peut expliquer en russe ou en français si nécessaire." },
  ],
  ru: [
    { q:"Первое занятие действительно бесплатное?", a:"Да. 20 минут, без карты и без обязательств." },
    { q:"Где проходят занятия?", a:"Онлайн в Zoom или Google Meet. Можно подключаться из любой точки мира." },
    { q:"Можно ли заниматься на русском?", a:"Занятия проходят на английском, но Катерина объясняет на русском, когда это необходимо." },
  ],
};

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = content[locale] ?? content.en;
  const faqs = miniQAs[locale] ?? miniQAs.en;
  const faq = locale === "ru" ? faqSchemaRU : faqSchemaEN;

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={faq} />
      <main>
        <section className="bg-cream section-pad">
          <div className="container-xl">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* LEFT */}
              <div>
                <p className="eyebrow mb-5">{c.eyebrow}</p>
                <h1 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-black text-ink mb-4">{c.h1}</h1>
                <div className="w-10 h-0.5 bg-gold mb-6"/>
                <p className="text-muted mb-10 leading-relaxed">{c.sub}</p>

                <form className="space-y-5" action="mailto:contact@myeffl.com" method="GET">
                  <div>
                    <label className="text-xs font-bold text-ink-soft block mb-2">{c.name}</label>
                    <input type="text" className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder={c.namePh}/>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-ink-soft block mb-2">{c.email}</label>
                    <input type="email" className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder={c.emailPh}/>
                  </div>
                  <div>
                    <label className="text-xs font-bold text-ink-soft block mb-2">{c.message}</label>
                    <textarea rows={5} className="w-full border border-border rounded-xl px-4 py-3 text-sm bg-cream focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none" placeholder={c.msgPh}/>
                  </div>
                  <button type="submit" className="btn-dark w-full justify-center">{c.send}</button>
                </form>

                {/* Mini FAQ */}
                <div className="mt-12">
                  <h2 className="font-bold text-ink text-sm mb-6">{c.faqTitle}</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, i) => (
                      <div key={i} className="border-t border-border pt-4">
                        <p className="font-semibold text-ink text-sm mb-1">{faq.q}</p>
                        <p className="text-muted text-sm">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:pt-20">
                <div className="space-y-6 mb-10">
                  {[
                    { icon: Mail, label: c.emailLabel, val: "contact@myeffl.com", href: "mailto:contact@myeffl.com" },
                    { icon: MessageCircle, label: "WhatsApp", val: "+971 · On request", href: "#" },
                    { icon: MapPin, label: c.locationLabel, val: c.locationVal, href: null },
                    { icon: Clock, label: c.responseLabel, val: c.responseVal, href: null },
                  ].map(({ icon: Icon, label, val, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cream-dark border border-border flex items-center justify-center flex-shrink-0">
                        <Icon size={15} className="text-primary"/>
                      </div>
                      <div>
                        <p className="font-bold text-ink text-sm mb-0.5">{label}</p>
                        {href && href !== "#"
                          ? <a href={href} className="text-muted text-sm hover:text-primary transition-colors">{val}</a>
                          : <p className="text-muted text-sm">{val}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-primary rounded-2xl p-8">
                  <div className="w-8 h-0.5 bg-gold mb-5"/>
                  <h3 className="text-on-dark font-black text-xl mb-3">{c.freeTitle}</h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">{c.freeSub}</p>
                  <p className="text-white/30 text-xs">{c.freeNote}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
