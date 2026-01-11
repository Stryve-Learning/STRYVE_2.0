/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        martina: ['"Martina Plantijn"', 'serif'], // <-- add this
        helvetica: ['Helvetica', 'sans-serif'], // <-- add this
      },
    },
  },
  plugins: [],
};
