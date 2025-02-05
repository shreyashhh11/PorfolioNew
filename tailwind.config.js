/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,tsx,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': '#121212',
        'light-bg': '#f1d7de',
        'light-about':'#ffffff',
        'dark-about': '#121212',
        
      },
    },
  },
  plugins: [],
}

