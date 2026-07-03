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
        navy: {
          50: "#e6edf5",
          100: "#b3c5dc",
          200: "#809ec3",
          300: "#4d76aa",
          400: "#1a4f91",
          500: "#003D7A",
          600: "#00336a",
          700: "#00285a",
          800: "#001e4a",
          900: "#001339",
        },
        gold: {
          400: "#D4A574",
          500: "#C8956A",
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
