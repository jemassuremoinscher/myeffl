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
        primary:   "#004225",
        "primary-light": "#005530",
        gold:      "#C9A96E",
        "gold-light": "#D9BC8E",
        cream:     "#F7F5F0",
        "cream-dark": "#EDE8DF",
        ink:       "#111111",
        "ink-soft":"#2D2D2D",
        muted:     "#6B6960",
        border:    "#DDD9D0",
        "on-dark": "#F7F5F0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
