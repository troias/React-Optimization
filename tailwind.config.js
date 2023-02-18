/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.html",
    "./src/**/*.vue",
    "./src/**/*.jsx",
    "./src/**/*.js",
    "./src/**/*.ts",
    "./src/**/*.tsx",
  ],
  darkMode: false, // or 'media' or 'class'
  purge: {
    enabled: true,
    content: [
      "./src/**/*.html",
      "./src/**/*.vue",
      "./src/**/*.jsx",
      "./src/**/*.js",
      "./src/**/*.ts",
      "./src/**/*.tsx",
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
