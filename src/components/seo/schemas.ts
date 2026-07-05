export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Katsiaryna",
  jobTitle: "Professional English Coach",
  description: "CELTA-certified English coach specialising in business and professional English for Russian-speaking executives, managers and entrepreneurs. Based in Dubai, teaching worldwide online.",
  url: "https://myeffl.com",
  image: "https://myeffl.com/kate.jpg",
  sameAs: ["https://www.linkedin.com/in/e-yashchanka/"],
  knowsLanguage: ["Russian", "English", "French"],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Certificate",
    name: "CELTA",
    recognizedBy: { "@type": "Organization", name: "Cambridge Assessment English" },
  },
  worksFor: {
    "@type": "Organization",
    name: "English for Future Leaders",
    url: "https://myeffl.com",
  },
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://myeffl.com/#organization",
  name: "English for Future Leaders",
  alternateName: "EFFL",
  url: "https://myeffl.com",
  logo: "https://myeffl.com/logo-full.png",
  image: "https://myeffl.com/kate.jpg",
  description: "Professional English coaching for Russian-speaking executives, managers and entrepreneurs. 1-on-1 sessions online. CELTA-certified coach based in Dubai.",
  telephone: "",
  email: "contact@myeffl.com",
  address: { "@type": "PostalAddress", addressLocality: "Dubai", addressCountry: "AE" },
  geo: { "@type": "GeoCoordinates", latitude: 25.2048, longitude: 55.2708 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "20:00" },
  ],
  priceRange: "$$",
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "47", bestRating: "5" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "English Coaching Packages",
    itemListElement: [
      { "@type": "Offer", name: "Discovery Package", price: "49", priceCurrency: "USD", description: "2 × 50-min sessions — Level assessment + personalised 3-month plan" },
      { "@type": "Offer", name: "Regular Package", price: "100", priceCurrency: "USD", description: "5 × 50-min sessions — Flexible scheduling, professional materials, written feedback" },
      { "@type": "Offer", name: "Intensive Package", price: "300", priceCurrency: "USD", description: "10 × 50-min sessions — Full custom curriculum, priority booking" },
    ],
  },
};

export const faqSchemaEN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How long does it take to improve professional English?", acceptedAnswer: { "@type": "Answer", text: "Most students notice significant improvement in confidence and fluency within 4–8 weeks of consistent weekly sessions. Our structured programme targets your specific professional context — meetings, presentations, emails, negotiations — so results are faster and more relevant than general English classes." } },
    { "@type": "Question", name: "Do I need to be advanced in English to join?", acceptedAnswer: { "@type": "Answer", text: "We work with intermediate (B1) level and above. You need to be able to hold a basic conversation in English. The coaching is most effective when you already have a foundation and want to polish your professional communication and confidence." } },
    { "@type": "Question", name: "Is online coaching as effective as in-person?", acceptedAnswer: { "@type": "Answer", text: "Yes. All our sessions are delivered via video call (Zoom or Google Meet) and are as effective as in-person coaching. The advantage is complete flexibility — you can attend from your office, home or anywhere in the world." } },
    { "@type": "Question", name: "What makes EFFL different from other English coaching services?", acceptedAnswer: { "@type": "Answer", text: "Katsiaryna is a native Russian speaker who is CELTA-certified and has 10+ years of experience coaching executives and business professionals. She understands exactly where Russian speakers struggle in English — the specific pronunciation challenges, cultural differences in communication style, and professional vocabulary gaps. This cultural and linguistic insider knowledge makes the coaching uniquely effective." } },
    { "@type": "Question", name: "What is the first session like?", acceptedAnswer: { "@type": "Answer", text: "The first session (included free in the Discovery package) is a 20-minute conversation to understand your goals, assess your current level, and explain how we would structure your learning. There is no test and no pressure. It is a professional, relaxed conversation." } },
    { "@type": "Question", name: "Can I get coaching in Russian?", acceptedAnswer: { "@type": "Answer", text: "Katsiaryna is a native Russian speaker and can explain concepts, grammar rules and cultural nuances in Russian when needed. However, sessions are conducted primarily in English to maximise your practice time." } },
  ],
};

export const faqSchemaRU = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Сколько времени нужно, чтобы улучшить деловой английский?", acceptedAnswer: { "@type": "Answer", text: "Большинство учеников замечают значительное улучшение уверенности и беглости речи уже через 4–8 недель регулярных занятий. Наша программа направлена именно на ваш профессиональный контекст — встречи, презентации, переписка, переговоры — поэтому результаты приходят быстрее, чем при обычных курсах английского." } },
    { "@type": "Question", name: "Нужен ли продвинутый уровень английского для занятий?", acceptedAnswer: { "@type": "Answer", text: "Мы работаем с уровнем Intermediate (B1) и выше. Вы должны уметь поддерживать базовый разговор на английском. Коучинг наиболее эффективен, когда у вас уже есть основа, и вы хотите отполировать профессиональную коммуникацию и уверенность." } },
    { "@type": "Question", name: "Так ли эффективны онлайн-занятия, как очные?", acceptedAnswer: { "@type": "Answer", text: "Да. Все занятия проходят по видеосвязи (Zoom или Google Meet) и столь же эффективны, как и очные. Преимущество — полная гибкость: вы можете заниматься из офиса, дома или из любой точки мира." } },
    { "@type": "Question", name: "Чем EFFL отличается от других курсов английского?", acceptedAnswer: { "@type": "Answer", text: "Катерина — носитель русского языка с сертификатом CELTA и 10+ лет опыта обучения руководителей и бизнес-профессионалов. Она точно знает, где русскоязычные допускают ошибки в английском — специфические проблемы с произношением, культурные различия в стиле общения, профессиональные пробелы в словарном запасе. Это уникальное знание изнутри делает коучинг особенно эффективным." } },
    { "@type": "Question", name: "Как проходит первое занятие?", acceptedAnswer: { "@type": "Answer", text: "Первое занятие (включено бесплатно в пакет Discovery) — это 20-минутный разговор, чтобы понять ваши цели, оценить текущий уровень и объяснить, как будет структурировано ваше обучение. Никаких тестов и давления. Профессиональная, непринуждённая беседа." } },
    { "@type": "Question", name: "Можно ли заниматься на русском языке?", acceptedAnswer: { "@type": "Answer", text: "Катерина — носитель русского языка и может объяснять концепции, правила грамматики и культурные нюансы на русском при необходимости. Однако занятия проводятся преимущественно на английском, чтобы максимально увеличить время практики." } },
    { "@type": "Question", name: "Где найти курсы делового английского для русских в Дубае?", acceptedAnswer: { "@type": "Answer", text: "English for Future Leaders (EFFL) предлагает специализированный коучинг делового английского для русскоязычных профессионалов, базируясь в Дубае. Все занятия проходят онлайн, что позволяет работать с учениками по всему миру — в Дубае, Москве, Алма-Ате, Лондоне и других городах." } },
  ],
};
