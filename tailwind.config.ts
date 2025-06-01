// tailwind.config.js
module.exports = {
  darkMode: 'class', // Muito importante
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // ou './pages' se você usa pages/
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
