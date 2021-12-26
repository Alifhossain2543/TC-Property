module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",

  theme: {
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
    colors: {
      primary: {
        light: "#e53935",
        DEFAULT: "#e53935",
        dark: "#ab000d",
      },
      secondary: {
        light: "##ff5252",
        DEFAULT: "#ff5252",
        dark: "#c50e29",
      },
      "card-color": {
        light: "#ef6c00",
        DEFAULT: "#ef6c00",
        dark: "#b53d00",
      },
      "card-two": {
        light: "#6effff",
        DEFAULT: "#6effff",
        dark: "#26cbcc",
      },
      "text-color": {
        light: "#363645",
        DEFAULT: "#363645",
        dark: "#fff",
      },
    },
    extend: {},
  },
  plugins: [],
}
