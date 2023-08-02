/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", "*.html",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        raleway: ['Raleway']
      },
      colors: {
        background: '#090608',
        primary: '#19E5B0',
        secondary: '#374151'
      },
      backgroundImage: {
        'footer': "url('/src/img/footer.svg')",
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

