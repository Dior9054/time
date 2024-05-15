/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        header_color: "rgba(22, 28, 45, 1)",
        base_yellow: "#FCC100"
      },
      colors: {
        asside__base__color: "rgba(5, 7, 11, 1)",
        base_yellow_color: "#FFC300"
      },
      fill: {
        asside__base__color: "rgba(5, 7, 11, 1)"
      },
      stroke: {
        asside__base__color: "rgba(5, 7, 11, 1)"
      },
      fontFamily: {
        monserat: ["Montserrat", "sans-serif"]
      },
      borderRadius: {
        base_radius: "10px"
      },
      borderColor: {
        base_yellow: "#FCC100"
      }
    },
  },
  plugins: [],
}

