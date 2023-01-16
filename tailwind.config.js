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
      'blackLight' : '#00000040',
      'opacityblack' : 'rgba(255, 255, 255, 0.69)',
      'blog' : 'rgba(30, 30, 30, 1)',
      'greeny' : "rgba(43, 169, 119, 1)"
    },
    borderWidth: {
      '3': '3px'
    }
  },
  plugins:[],
}