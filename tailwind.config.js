/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#E74949",
        background: "#242424",
      },
      fontFamily: {
        logo: ["Permanent Marker", "cursive"],
        header: ["Anton", "sans-serif"],
        base: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
