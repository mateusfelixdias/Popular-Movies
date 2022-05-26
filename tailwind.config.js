module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '10px 10px 20px rgba(0, 0, 0, 0.3)'
      }
    },
    screens: {
      'mobile': {'min': '100px', 'max': '450px'}
    },
  },
  plugins: [],
}
