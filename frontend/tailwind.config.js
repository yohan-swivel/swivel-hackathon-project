/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/app/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/layout.tsx"
  ],
  theme: {
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '2rem',
    //     lg: '4rem',
    //     xl: '5rem',
    //     '2xl': '6rem',
    //   },
    // },
    extend: {
      colors: {
        white: "#fff",
        "glass-bg": "rgba(255, 255, 255, 0.03)",
        gray: {
          "100": "rgba(255, 255, 255, 0.6)",
          "200": "rgba(255, 255, 255, 0.5)",
        },
        red: "#f80707",
        "bg-dark": "#121212",
        whitesmoke: "#eae9e9",
        dimgray: "#565656",
      },
      fontFamily: {
        "para-medium": "Montserrat",
      },
      borderRadius: {
        "11xl": "30px",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      lg: "18px",
      xs: "12px",
      "5xl": "24px",
      "17xl": "36px",
      "3xl": "22px",
      mini: "15px",
      "13xl": "32px",
      "45xl": "64px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
