/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", "*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
     
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        raleway: ['Raleway']
      },
      colors: {
        background: '#090608',
        primary: '#19E5B0',
        secondary: '#BD99FF'
      },
      backgroundImage: {
        'footer': "url('./src/img/rain.svg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

