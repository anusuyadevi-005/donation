/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kindora: {
          primary: '#12372A',
          secondary: '#436850',
          accent: '#F4B942',
          bg: '#F8F6F0',
          white: '#FFFFFF',
          text: '#18231F'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
