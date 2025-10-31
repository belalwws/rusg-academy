/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#E9A821",
          dark: "#C78C12",
          light: "#FFB347",
        },
        accent: {
          DEFAULT: "#FFB347",
          cool: "#4C8BF5",
        },
        background: {
          light: "#FAFAF9",
          card: "#FFFFFF",
        },
        text: {
          primary: "#1E1E1E",
          secondary: "#555555",
        },
      },
      fontFamily: {
        sans: ["Cairo", "Tajawal", "sans-serif"],
        english: ["Poppins", "Inter", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.06)",
        glow: "0 4px 16px rgba(233, 168, 33, 0.15)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
      },
    },
  },
  plugins: [],
}
