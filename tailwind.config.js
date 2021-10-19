module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'print': {'raw': 'print'},
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
