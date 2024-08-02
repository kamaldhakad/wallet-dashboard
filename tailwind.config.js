/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#DFF0FF",
          200: "#231F20",
          300: "#F7F07A",
          500: "#F0E303",
          600: "#F0B90B",
          700: "#FFFDD2",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inria: ["Inria Serif", "serif"],
      },
      fontSize: {
        10: "10px",
        12: "12px",
        14: "14px",
        16: "16px",
        18: "18px",
        20: "20px",
        22: "22px",
        24: "24px",
        26: "26px",
        30: "30px",
        32: "32px",
        35: "35px",
        40: "40px",
      },
    },
    screens: {
      sm: "600px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
