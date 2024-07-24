/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
      },
      keyframes: {
        "text-reveal": {
          "0%": { opacity: 0, transform: "translateY(25px)" },
          "25%": {
            opacity: "var(--text-reveal-opacity-step-0)",
            transform:
              "translate(var(--text-reveal-x-step-0),var(--text-reveal-y-step-0))",
          },
          "50%": {
            opacity: "var(--text-reveal-opacity-step-1)",
            transform:
              "translate(var(--text-reveal-x-step-1),var(--text-reveal-y-step-1))",
          },
          "75%": {
            opacity: "var(--text-reveal-opacity-step-2)",
            transform:
              "translate(var(--text-reveal-x-step-2),var(--text-reveal-y-step-2))",
          },
          to: {
            opacity: "var(--text-reveal-opacity-step-3)",
            transform:
              "translate(var(--text-reveal-x-step-3),var(--text-reveal-y-step-3))",
          },
        },
      },
      animation: {
        "text-reveal": "text-reveal 1.3s",
      },
    },
    fontFamily: {
      body: [
        "Inter Variable",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      sans: [
        "Inter Variable",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "system-ui",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
    },
    fontSize: {
      xs: ["0.75rem", "1rem"], // 12px
      sm: ["0.875rem", "1.25rem"], // 14px
      base: ["1rem", "1.5rem"], // 16px
      lg: ["1.125rem", "1.75rem"], // 18px
      xl: ["1.25rem", "2rem"], // 20px
      "2xl": ["1.375rem", "2.25rem"], // 22px
      "3xl": ["1.5rem", "2.5rem"], // 24px
      "4xl": ["1.75rem", "2.75rem"], // 28px
      "5xl": ["2.5rem", "3rem"], // 40px
    },
  },
  plugins: [require("flowbite/plugin")],
};
