/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rosso-corsa": "#D50A07",
        "olive-drab3": "#729E11",
        "maize-crayola": "#F2C246",
        "desert-sand": "#ECC6A8",
        onyx: "#363937",
      },
    },
  },
  plugins: [],
};
