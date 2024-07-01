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
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
      },
      boxShadow: {
        primaryBtnShadow:
          "inset 0 2px 0 0 hsla(0,0%,100%,.2),inset 0 -1px 0 0 rgba(0,0,0,.25), 0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3);",
        "primaryBtnShadow-dark":
          "inset 0 2px 0 0 hsla(0,0%,100%,.8),inset 0 -1px 0 0 rgba(0,0,0,.8), 0 10px 15px -3px rgb(0 0 0 / 0.3), 0 4px 6px -4px rgb(0 0 0 / 0.3);",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        fadeOut: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 300ms ease-out",
        fadeOut: "fadeOut 300ms ease-out",
      },
    },
  },
  plugins: [],
};
