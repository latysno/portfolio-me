// tailwind.config.js
module.exports = {
  darkMode: 'class', // Muito importante
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // ou './pages' se você usa pages/
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',   // Celular
      md: '768px',   // Tablet
      lg: '1024px',  // Notebook
      xl: '1280px',  // Desktop
      '2xl': '1536px',
    },
  },
  plugins: [],
}
