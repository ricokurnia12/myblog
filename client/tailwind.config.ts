import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      boxShadow: {
        "retro-sm": "3px 3px 0px 0px rgba(0, 0, 0)",
        "retro-md": "5px 5px 0px 0px rgba(0, 0, 0)",
        "retro-lg": "8px 8px 0px 0px rgba(0, 0, 0)",
        retro: "5px 5px 0px 0px rgba(0, 0, 0)",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        text: "var(--color-text)",
        card: "var(--color-card)",
        body: "var(--color-body)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            table: {
              width: '100%',
              borderCollapse: 'collapse',
            },
            thead: {
              borderBottom: `2px solid ${theme('colors.gray.200')}`,
            },
            th: {
              padding: theme('spacing.2'),
              borderBottom: `1px solid ${theme('colors.gray.200')}`,
              textAlign: 'left',
            },
            td: {
              padding: theme('spacing.2'),
              borderBottom: `1px solid ${theme('colors.gray.200')}`,
              textAlign: 'left',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"), // Typography plugin to style MDX content
  ],
} satisfies Config;

export default config;
