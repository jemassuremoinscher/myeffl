"use client";

import { useLocale } from "next-intl";
import Link from "next/link";

const TELEGRAM = "https://t.me/englishffl";

const labels: Record<string, string> = {
  en: "Join on Telegram",
  fr: "Rejoindre Telegram",
  ru: "Подписаться в Telegram",
};

export default function TelegramButton() {
  const locale = useLocale();

  return (
    <Link
      href={TELEGRAM}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join EFFL on Telegram"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#229ED9] text-white pl-3.5 pr-4 py-3 rounded-full shadow-lg hover:bg-[#1a8ec4] hover:shadow-xl transition-all duration-200 group"
    >
      {/* Official Telegram SVG logo */}
      <svg
        width="22" height="22" viewBox="0 0 24 24" fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        <path
          d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"
          fill="white" fillOpacity="0.15"
        />
        <path
          d="M5.18 11.89c3.7-1.61 6.17-2.67 7.4-3.19 3.52-1.46 4.25-1.71 4.73-1.72.1 0 .33.02.48.15.12.1.16.25.17.35.02.1.03.32.02.49-.19 2-.99 6.84-1.4 9.08-.17.95-.51 1.27-.84 1.3-.71.07-1.25-.47-1.94-.92-.08-.05-1.08-.7-1.78-1.15-.79-.51-.28-1.08.17-1.38.12-.07 2.12-1.94 2.16-2.11.01-.03.01-.13-.05-.19-.06-.06-.15-.04-.22-.02-.09.02-1.53.97-4.33 2.86-.41.28-.78.42-1.12.41-.37-.01-1.07-.21-1.59-.38-.64-.21-1.15-.32-1.1-.68.02-.19.28-.38.75-.58z"
          fill="white"
        />
      </svg>

      {/* Label — masqué sur mobile, visible sur sm+ */}
      <span className="hidden sm:block text-sm font-semibold whitespace-nowrap">
        {labels[locale] ?? labels.en}
      </span>
    </Link>
  );
}
