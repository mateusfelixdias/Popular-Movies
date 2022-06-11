module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      boxShadow: {
        "2xl": "10px 10px 20px rgba(0, 0, 0, 0.3)",
      },
    },
    screens: {
      'mobilemin': { 'min': "100px", 'max': "300px" },
      'mobile': {'min': "300px", 'max': "800px" },
    },
  },
  plugins: [],
};