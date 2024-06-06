/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'raw-umber': 'hsla(23, 28%, 40%, 1)',
        sienna: 'hsla(9, 83%, 29%, 1)',
        'persian-orange': 'hsla(26, 51%, 59%, 1)',
        'tigers-eye': 'hsla(30, 70%, 40%, 1)',
        'hunyadi-yellow': 'hsla(39, 74%, 68%, 1)',
      },
    },
  },
  plugins: [],
}
