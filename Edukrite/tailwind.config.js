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
        // Your core monochrome palette
        'charcoal-black': '#1A1D2E',
        'off-white': '#FAFAFA',
        'light-gray': '#E3E3E3',
        'medium-gray': '#ADB5BD',
        'pure-white': '#FFFFFF', 
        
        // NEW: Vibrant Accent Colors (for Hero, primary CTAs, etc.)
        'accent-purple-dark': '#6D28D9', // A deep, strong purple
        'accent-purple-light': '#7C3AED', // A slightly lighter, vibrant purple
        'accent-indigo': '#312E81',     // A deep, rich indigo
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      }
    },
  },
  plugins: [],
}