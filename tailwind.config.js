module.exports = {
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ["dark"],
    },
  },
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'print': { 'raw': 'print' },
      }
    },
  },
  variants: {
    extend: {
      rotate: ['active', 'group-hover'],
      display: ['group-hover'],
      transition: ['group-hover'],
      duration: ['group-hover']

    },
  },
  plugins: [],
}
