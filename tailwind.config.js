/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#64748B",
        background: "#F8FAFC",
        card: "#FFFFFF",
        success: "#10B981",
        danger: "#EF4444",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      borderRadius: {
        lg: "16px",
      },
    },
  },

  plugins: [],
}