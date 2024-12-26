/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true, 
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      padding: {
        '30px': '30px',
      },
      colors: {
        "rating-green": "#183A34"
      }
    },
  },
  plugins: [],
}

