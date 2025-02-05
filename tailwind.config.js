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
        'coffee': '#5f5151',
        'light-bg': '#f1d7de',
        'light-about':'#ffffff',
        'dark-about': '#5f5151',
        
      },
    },
  },
  plugins: [],
}

