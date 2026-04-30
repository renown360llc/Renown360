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
        primary: {
          DEFAULT: "#1a4c40",
          dark:    "#133830",
          mid:     "#246356",
          light:   "#e5f5ee",
          muted:   "#4a7c6a",
        },
        surface: {
          DEFAULT: "#fafaf8",
          raised:  "#ffffff",
          green:   "#f0faf5",
        },
        ink: {
          DEFAULT: "#0d1b14",
          muted:   "#637a71",
          faint:   "#9db5a8",
        },
        line: "#d1e8dc",
      },
      fontFamily: {
        sans:  ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-hedvig)", '"Hedvig Letters Serif"', "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      maxWidth: {
        container: "1150px",
      },
      animation: {
        "fade-up":  "fadeUp 0.6s ease-out forwards",
        "fade-in":  "fadeIn 0.5s ease-out forwards",
        marquee:    "marquee 35s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        marquee: {
          "0%":   { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
