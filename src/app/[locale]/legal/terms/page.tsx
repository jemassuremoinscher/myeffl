import { setRequestLocale } from "next-intl/server";

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <section className="bg-cream section-pad">
        <div className="container-xl max-w-3xl">
          <p className="eyebrow mb-5">Legal</p>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-black text-ink mb-8">Terms of Service</h1>
          <div className="w-10 h-0.5 bg-gold mb-10"/>
          <div className="prose prose-sm max-w-none text-ink-soft leading-relaxed space-y-4">
            <p>These Terms of Service govern your use of English for Future Leaders coaching services. By booking a session, you agree to these terms.</p>
<p></p>
<p><strong>Services.</strong> EFFL provides 1-on-1 English coaching sessions delivered online via video call. Session duration is 50 minutes unless otherwise agreed.</p>
<p></p>
<p><strong>Booking.</strong> Sessions must be booked at least 24 hours in advance. Confirmation is sent by email upon receipt of payment.</p>
<p></p>
<p><strong>Cancellation.</strong> Sessions cancelled with more than 24 hours notice may be rescheduled once at no charge. Sessions cancelled within 24 hours are forfeited.</p>
<p></p>
<p><strong>Payment.</strong> Payment is due in advance of each session or package. Prices are listed in USD.</p>
<p></p>
<p><strong>Conduct.</strong> Both parties agree to maintain a professional and respectful environment during sessions.</p>
<p></p>
<p><strong>Intellectual Property.</strong> All materials provided during sessions are for personal use only and may not be redistributed.</p>
<p></p>
<p><strong>Contact.</strong> For questions: contact@myeffl.com</p>
          </div>
          <p className="text-xs text-muted mt-12 pt-6 border-t border-border">Last updated: January 2026 · contact@myeffl.com</p>
        </div>
      </section>
    </main>
  );
}
