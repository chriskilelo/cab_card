/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/css/**/*.{html,js}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'customteal': {
          300: '#24B3B9',
          500: '#32B49C',
          700: '#016972',
          900: '#00403F',
        },
        'customamber': {
          300: '#FFD876',
          600: '#E28525',
        }
      }
    },
  },
  plugins: [],
}