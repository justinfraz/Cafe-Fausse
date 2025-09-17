/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'burgundy': {
          DEFAULT: '#8B1538',
          light: '#B8698A',
          dark: '#5D0E26',
        },
        'gold': {
          DEFAULT: '#D4AF37',
          light: '#E8C547',
          dark: '#B8941F',
        },
      },
      fontFamily: {
        'serif': ['Georgia', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};