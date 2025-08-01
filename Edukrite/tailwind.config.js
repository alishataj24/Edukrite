// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ONLY your specified monochrome palette
        'charcoal-black': '#1A1D2E',
        'off-white': '#FAFAFA',
        'light-gray': '#E3E3E3',
        'medium-gray': '#ADB5BD',
        'pure-white': '#FFFFFF', 
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}