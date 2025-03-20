/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["'Roboto'", "sans-serif"],  // Define the Roboto font family
      },
    },
  },
  plugins: [],
}
