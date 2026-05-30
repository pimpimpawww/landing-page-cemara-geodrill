/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: '#0D3B2E',
          mid: '#174D3C',
          light: '#1E6B52',
        },
        gold: {
          DEFAULT: '#C8923A',
          light: '#E4B06A',
        },
        cream: {
          DEFAULT: '#F7F2E8',
          dark: '#EDE6D6',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        dm: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
