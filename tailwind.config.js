/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        fordacGreen: "#1B7F5E",
        fordacDark: "#0F3B2E",
        fordacLight: "#D9EFE5",
        fordacGold: "#C6A15B",
        fordacGray: "#E5E7EB"
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/typography")]
};
