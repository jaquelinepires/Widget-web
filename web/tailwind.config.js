module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: {
          300: "#000000",
        }
      },
      borderRadius: {
        md: '4px'
      }
    },
  },
  plugins: [
    require("@tailwindcss/forms"), 
    require("tailwind-scrollbar"), 
  ],
}