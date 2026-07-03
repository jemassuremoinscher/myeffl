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
        green: {
          950: "#002718",
          900: "#003320",
          800: "#004225",
          700: "#005530",
          600: "#006B3C",
          500: "#008048",
          400: "#2D9E63",
          100: "#E8F0EB",
          50:  "#F2F7F4",
        },
        gold: {
          600: "#A07840",
          500: "#B8894E",
          400: "#C9A96E",
          300: "#D9BC8E",
          100: "#F5ECD8",
        },
        cream: {
          DEFAULT: "#F8F7F4",
          dark: "#EEE8DF",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          light: "#3D3D3D",
          muted: "#6B6B6B",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
