import { setRequestLocale } from "next-intl/server";

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <section className="bg-cream section-pad">
        <div className="container-xl max-w-3xl">
          <p className="eyebrow mb-5">Legal</p>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-black text-ink mb-8">Privacy Policy</h1>
          <div className="w-10 h-0.5 bg-gold mb-10"/>
          <div className="prose prose-sm max-w-none text-ink-soft leading-relaxed space-y-4">
            <p>English for Future Leaders is committed to protecting your personal data in accordance with applicable data protection laws.</p>
<p></p>
<p><strong>Data collected.</strong> We collect your name, email address, and information you share during sessions or via our contact form.</p>
<p></p>
<p><strong>How we use your data.</strong> Your data is used to deliver our coaching services, send session confirmations, and communicate with you about your learning progress.</p>
<p></p>
<p><strong>Data storage.</strong> Your personal data is stored securely and is never sold to third parties.</p>
<p></p>
<p><strong>Cookies.</strong> Our website uses minimal essential cookies only.</p>
<p></p>
<p><strong>Your rights.</strong> You have the right to access, correct, or delete your personal data at any time. Contact us at contact@myeffl.com.</p>
<p></p>
<p><strong>Legal entity.</strong> Services are provided by SASU MAMMOUTH PATRIMOINE, France.</p>
<p></p>
<p><strong>Contact.</strong> contact@myeffl.com</p>
          </div>
          <p className="text-xs text-muted mt-12 pt-6 border-t border-border">Last updated: January 2026 · contact@myeffl.com</p>
        </div>
      </section>
    </main>
  );
}
