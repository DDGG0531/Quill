const colors = require("./src/utils/colors");

module.exports = {
  mode: "jit",
  prefix: "tw-",
  purge: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  darkMode: false, // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          light: colors.primaryLight,
          half: colors.primaryHalf,
          DEFAULT: colors.primary,
        },
        secondary: colors.secondary,
        success: colors.success,
        danger: {
          light: colors.dangerLight,
          DEFAULT: colors.danger,
        },
        black: colors.black,
        muted: colors.muted,
        darker: colors.darker,
      },
    },
  },
};
