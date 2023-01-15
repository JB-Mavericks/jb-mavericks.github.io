/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amaranth: ['Amaranth', "sans-serif"],
        dancing: ['Dancing Script', "cursive"],
        roboto: ['Roboto', "sans-serif"],
        poppins: ['Poppins', "sans-serif"],
        montserrat: ['Montserrat', "sans-serif"]
      },
    },
    colors: {
      'white': '#ffffff',
      'butter' : '#ffffffb3',
      'dark' : '#272B28',
      'nav' : '#2f2e2e8a',
      'blackLight' : '#00000040'
    }
  },
  plugins:[],
}