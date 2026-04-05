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
        gold: {
          DEFAULT: "#C9A96E",
          50: "#FAF6EE",
          100: "#F0E6CE",
          200: "#E8D5A8",
          300: "#D4BC85",
          400: "#C9A96E",
          500: "#B08E4A",
          600: "#8B7340",
          700: "#665536",
          800: "#413722",
          900: "#2A2213",
        },
        charcoal: {
          DEFAULT: "#1A1A1A",
          50: "#F5F5F5",
          100: "#E0E0E0",
          200: "#B0B0B0",
          300: "#808080",
          400: "#505050",
          500: "#2A2A2A",
          600: "#1A1A1A",
          700: "#111111",
          800: "#0A0A0A",
          900: "#050505",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
