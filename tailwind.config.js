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
      fontSize: {
        'preset-1': ['40px', { lineHeight: '120%', letterSpacing: '0px', fontWeight: '700' }],
        'preset-2': ['24px', { lineHeight: '125%', letterSpacing: '0px', fontWeight: '700' }],
        'preset-3': ['16px', { lineHeight: '150%', letterSpacing: '0px', fontWeight: '600' }],
        'preset-4': ['14px', { lineHeight: '150%', letterSpacing: '0px', fontWeight: '400' }],
        'preset-4-bold': ['14px', { lineHeight: '150%', letterSpacing: '0px', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}
