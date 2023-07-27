/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      },
      colors: {
        primary: '#030504',
        secondary: '#19E5B0'
      },
      backgroundPosition: {
        'bottom-custom' : 'top 21rem'
      }
    },
  },
  plugins: [],
}

