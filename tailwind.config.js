/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark mode
        "dark-dark-blue": "hsl(209, 23%, 22%)",
        "dark-very-dark-blue": "hsl(207, 26%, 17%)",
        // Light mode
        "light-very-dark-blue": "hsl(200, 15%, 8%)",
        "light-dark-grey": "hsl(0, 0%, 52%)",
        "light-very-light-grey": "hsl(0, 0%, 98%)",
        "light-white": "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
};
