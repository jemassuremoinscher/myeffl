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
        primary:   { DEFAULT: "#004225", light: "#005530", dark: "#002718" },
        secondary: { DEFAULT: "#C9A96E", light: "#D9BC8E", dark: "#A07840" },
        surface:   { DEFAULT: "#F8F7F4", dim: "#EDE8E0", bright: "#FFFFFF" },
        container: {
          primary: "#CEEAD8",
          secondary: "#F5E6CC",
          tertiary: "#E8F0EB",
        },
        on: {
          primary: "#FFFFFF",
          secondary: "#2B1F0A",
          surface: "#1A1A1A",
          muted: "#6B6B5E",
        },
        outline: "#8F9180",
        "outline-variant": "#C8C9B8",
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["clamp(2.5rem,6vw,4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-sm": ["clamp(2rem,4vw,3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "headline-lg": ["clamp(1.5rem,3vw,2.25rem)", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      boxShadow: {
        "elevation-1": "0 1px 2px 0 rgba(0,0,0,.1), 0 1px 3px 1px rgba(0,0,0,.07)",
        "elevation-2": "0 1px 2px 0 rgba(0,0,0,.12), 0 2px 6px 2px rgba(0,0,0,.08)",
        "elevation-3": "0 4px 8px 3px rgba(0,0,0,.08), 0 1px 3px rgba(0,0,0,.12)",
      },
    },
  },
  plugins: [],
};
export default config;
