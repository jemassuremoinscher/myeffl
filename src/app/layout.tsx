import type { Metadata } from "next";

export const metadata: Metadata = {
  verification: {
    yandex: "8a33d2220d56bd48",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
