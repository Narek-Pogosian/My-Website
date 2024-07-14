import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    fontFamily: {
      sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      serif: ["Merriweather", ...defaultTheme.fontFamily.sans],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1340px",
      },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        element: "hsl(var(--element))",
        hover: "hsla(var(--hover))",
        scrollbar: "hsla(var(--scrollbar))",
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, top: "70%" },
          to: { opacity: 1, top: "100%" },
        },
      },
      animation: {
        fadeIn: "fadeIn 300ms ease-out",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")],
};
