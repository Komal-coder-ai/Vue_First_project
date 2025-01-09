// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, 
  theme: {
    extend: {
      fontFamily: {
        rufina: ['Rufina', 'serif'], 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}