/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  darkMode: false, // or 'media' or 'class'
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  },
  
  theme: {
    extend: {},
  },
  plugins: [],
}