module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    screens: {
      'sm': { 'min': '320px' },
      'md': { 'min': '481px' },
      'lg': { 'min': '769px' },
      'xl': { 'min': '1025px' },
      '2xl': { 'min': '1201px' },
    },
    extend: {},
  },
  plugins: [],
}
