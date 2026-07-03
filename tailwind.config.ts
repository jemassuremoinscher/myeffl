import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:  "#004225",
        gold:     "#C9A96E",
        cream:    "#F7F5F0",
        ink:      "#111111",
        muted:    "#6B6A63",
        border:   "#E2DFD8",
        "ink-inv":"#F7F5F0",
      },
      fontFamily: {
        sans: ["Inter","system-ui","sans-serif"],
      },
      spacing: {
        "section": "7rem",
      },
      maxWidth: {
        "prose-xl": "72ch",
      },
    },
  },
  plugins: [],
};
export default config;
