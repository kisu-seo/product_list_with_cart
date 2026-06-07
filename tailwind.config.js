/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        red: '#C73B0F',
        green: '#1EA575',
        rose: {
          50: '#FCF8F6',
          100: '#F5EEEC',
          300: '#CAAFA7',
          400: '#AD8A85',
          500: '#87635A',
          900: '#260F08',
        },
      },
      fontFamily: {
        sans: ['"Red Hat Text"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
