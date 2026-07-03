# English for Future Leaders — myeffl.com

Site de coaching en anglais professionnel pour russophones intermédiaires+.

## Stack
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (3 langues: EN/FR/RU)
- **Vercel** (hosting)

## Langues
- `/en` — English
- `/fr` — Français
- `/ru` — Русский

## Structure
```
src/
├── app/
│   ├── [locale]/          # Pages par langue
│   │   ├── layout.tsx
│   │   ├── page.tsx       # Homepage
│   │   ├── packages/
│   │   ├── about/
│   │   ├── blog/
│   │   └── contact/
│   └── globals.css
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── HeroSection.tsx
│       ├── TrustSection.tsx
│       ├── HowItWorks.tsx
│       ├── PackagesPreview.tsx
│       ├── TestimonialsSection.tsx
│       ├── BlogPreview.tsx
│       └── CTASection.tsx
└── middleware.ts
messages/
├── en.json
├── fr.json
└── ru.json
```

## Développement
```bash
npm install
npm run dev
```

## Déploiement
Connecter le repo GitHub à Vercel → auto-deploy sur chaque push.

## Domaine
myeffl.com → pointé vers Vercel
