const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: colors.orange[500],
      indigo: colors.indigo[600],
      yellow: colors.amber[400],
      pink: {
        dark: colors.pink[600],
        light: colors.pink[300],
      },
      white: colors.trueGray[100],
      black: colors.blueGray[900],
    },
    fontFamily: {
      'serif': ['Roboto'],
      'mono': ['Roboto Mono'],
      'sans': ['"Open Sans"'],
      'button': ['Roboto Slab'],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
