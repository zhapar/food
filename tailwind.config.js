module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Barlow", "serif"],
    },
    fontSize: {
      sm: "0.75rem",
      base: "0.875rem",
      lg: "1rem",
      xl: "1.25rem",
      "2xl": "1.75rem",
      "3xl": "2rem",
    },
    borderRadius: {
      none: "0",
      DEFAULT: "8px",
      md: "12px",
      lg: "30px",
      full: "9999px",
    },
    boxShadow: {
      DEFAULT: "box-shadow: 0px 8px 24px rgba(146, 136, 224, 0.3);",
    },
    colors: {
      primary: "#EA7C69",
      primaryOpacity: "rgba(234, 124, 105, 0.26)",
      secondary: "#9288E0",
      white: "#fff",
      text: {
        dark: "#3B5162",
        gray: "#889898",
        light: "#ABBBC2",
        lighter: "#E0E6E9",
      },
      base: {
        bg: "#FAFAFA",
        "dark-line": "#393C49",
        "dark-1": "#252836",
        "dark-2": "#1F1D2B",
        form: "#2D303E",
      },
      accent: {
        green: "#50D1AA",
        red: "#FF7CA3",
        orange: "#FFB572",
        blue: "#65B0F6",
        purple: "#9290FE",
      },
      transparent: "transparent",
      current: "currentColor",
      black: "black",
      blurred: "var(--color-blurred-background)",
    },
    extend: {
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      width: {
        110: "110px",
        fit: "fit-content",
      },
      height: {
        70: "70px",
        fit: "fit-content",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["active"],
      translate: ["group-hover"],
      display: ["group-hover"],
      visibility: ["group-hover"],
      scale: ["group-hover"],
    },
  },
  plugins: [],
};
