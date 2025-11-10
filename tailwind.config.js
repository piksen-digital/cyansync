javascript name=tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyanMain: "#00B6FF",
        navy: "#010C1E",
        accent: "#2FE1F2",
      },
      borderRadius: {
        lg: "1.25rem",
      },
      fontFamily: {
        sans: ['Inter', 'Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
