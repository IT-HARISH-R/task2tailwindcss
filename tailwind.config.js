/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors:{
        ligth: "#FEFCFB",
        primart: "#04016C",
        secondary: "#4816BA",
        gray: "#F7F8FC",
        white: "#FFFFFF",
        primarytextcolor: "#4E596B",
        secontextcolor: "#0E38CD"
      },
      fontFamily: {
        secondaryfond: ["Righteous, sans-serif"],
        peimaryfond:  ["Saira, sans-serif"],
      },
      boxShadow: {
        shadow1: "0 2px 10px rgba(0, 0, 0, 0.1);"
      }
      

    },
  },
  plugins: [],
}

