import { setRequestLocale } from "next-intl/server";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const articles: Record<string, { titleKey: string; category: string; content: string[] }> = {
  "confident-in-meetings": {
    titleKey: "7 Phrases That Make You Sound Confident in Meetings",
    category: "Business English",
    content: [
      "Sounding confident in English meetings isn't about perfect grammar. It's about choosing the right phrases at the right moments.",
      "Here are 7 phrases that executives and leaders use to command attention and drive conversations forward.",
      "1. \"Let me build on that...\" — Use this to add to a colleague's point without dismissing it.",
      "2. \"I'd like to push back on that slightly...\" — Disagree professionally without being aggressive.",
      "3. \"The key takeaway here is...\" — Summarize and steer the conversation.",
      "4. \"What's the timeline on this?\" — Show you're results-focused.",
      "5. \"Let's table that for now and circle back.\" — Control the meeting agenda.",
      "6. \"I want to make sure I understand correctly...\" — Clarify without looking uncertain.",
      "7. \"My recommendation would be...\" — Lead with authority, not just opinion.",
    ],
  },
  "english-job-interview": {
    titleKey: "How to Nail Your English Job Interview",
    category: "Interview Prep",
    content: [
      "A job interview in English requires more than language skills. It requires strategic communication.",
      "Preparation, structure, and confidence — these are the three pillars of a successful English interview.",
      "Start with the STAR method: Situation, Task, Action, Result. This gives every answer a clear narrative.",
      "Practice your \"Tell me about yourself\" answer until it's under 2 minutes and focuses on value, not biography.",
      "Research the company's language. Use their words back to them — it shows cultural alignment.",
      "Prepare 3 strong questions to ask at the end. \"What does success look like in the first 90 days?\" is always powerful.",
    ],
  },
  "business-email-templates": {
    titleKey: "Business Email: 5 Templates That Actually Work",
    category: "Professional Communication",
    content: [
      "Business emails in English need to be clear, direct, and professional. Wordiness kills credibility.",
      "These 5 templates cover the most common professional scenarios you'll face.",
      "Template 1 — Follow-up after meeting: \"It was great connecting. As discussed, I'm attaching... Please let me know if you have any questions.\"",
      "Template 2 — Requesting information: \"I hope this finds you well. Could you please provide... I need this by [date] for [reason].\"",
      "Template 3 — Declining politely: \"Thank you for thinking of me. Unfortunately, I'm unable to... I hope we can collaborate in the future.\"",
      "Template 4 — Escalation: \"I wanted to follow up on my previous email from [date]. Could you please provide an update?\"",
      "Template 5 — Introduction: \"I'm reaching out because... I believe there's potential for [mutual benefit].\"",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map(slug => ({ slug }));
}

export default async function BlogPostPage({
  params,
}: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const article = articles[slug];
  if (!article) return <div>Article not found</div>;

  return (
    <main>
      <section className="bg-cream section-pad">
        <div className="container-xl max-w-3xl">
          <Link href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink transition-colors mb-10">
            <ArrowLeft size={14}/> Back to blog
          </Link>

          <p className="eyebrow mb-5">{article.category}</p>
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-black text-ink mb-8 leading-tight">
            {article.titleKey}
          </h1>
          <div className="w-10 h-0.5 bg-gold mb-10"/>

          <div className="space-y-5">
            {article.content.map((para, i) => (
              <p key={i} className="text-base text-ink-soft leading-[1.85]">{para}</p>
            ))}
          </div>

          <div className="mt-16 bg-primary rounded-2xl p-8">
            <p className="text-on-dark font-black text-xl mb-2">Want to practise this with a coach?</p>
            <p className="text-white/60 text-sm mb-6">Book a free discovery session with Katsiaryna and put these skills into practice.</p>
            <Link href={`/${locale}/contact`} className="btn-gold">Book free session</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
