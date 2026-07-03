import { setRequestLocale } from "next-intl/server";

export default async function LegalPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <section className="bg-cream section-pad">
        <div className="container-xl max-w-3xl">
          <p className="eyebrow mb-5">Legal</p>
          <h1 className="text-[clamp(2rem,4vw,3rem)] font-black text-ink mb-8">Refund Policy</h1>
          <div className="w-10 h-0.5 bg-gold mb-10"/>
          <div className="prose prose-sm max-w-none text-ink-soft leading-relaxed space-y-4">
            <p>We want you to be fully satisfied with your coaching experience.</p>
<p></p>
<p><strong>Discovery package.</strong> If after your first session you feel the coaching is not right for you, we will refund the remaining session cost in full.</p>
<p></p>
<p><strong>Regular and Intensive packages.</strong> Unused sessions from a package may be refunded on a pro-rata basis if requested within 30 days of purchase.</p>
<p></p>
<p><strong>Non-refundable.</strong> Sessions that have been delivered, or cancellations made within 24 hours of a scheduled session, are non-refundable.</p>
<p></p>
<p><strong>How to request a refund.</strong> Email contact@myeffl.com with your booking details and reason for the refund request. We process refunds within 7 business days.</p>
<p></p>
<p><strong>Questions.</strong> contact@myeffl.com</p>
          </div>
          <p className="text-xs text-muted mt-12 pt-6 border-t border-border">Last updated: January 2026 · contact@myeffl.com</p>
        </div>
      </section>
    </main>
  );
}
