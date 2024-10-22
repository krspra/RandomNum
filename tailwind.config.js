/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        custom1: "930px",
        custom2: "1110px",
        custom3: "500px",
      },
    },
  },
  plugins: [],
}

