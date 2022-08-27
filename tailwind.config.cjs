/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
    },
    colors: {
      transparent: 'transparent',

      colorPrimary: {
        light: "#376a1f",
        dark: "",
      },
      colorOnPrimary: "#ffffff",
      colorPrimaryContainer: "#b7f397",
      colorOnPrimaryContainer: "#042100",
      colorSecondary: "#386a1e",
      colorOnSecondary: "#ffffff",
      colorSecondaryContainer: "#b8f296",
      colorOnSecondaryContainer: "#052100",
      colorTertiary: "#00696c",
      colorOnTertiary: "#ffffff",
      colorTertiaryContainer: "#6ff6f9",
      colorOnTertiaryContainer: "#002021",
      colorError: "#B3261E",
      colorOnError: "#FFFFFF",
      colorErrorContainer: "#F9DEDC",
      colorOnErrorContainer: "#410E0B",
      colorOutline: "#79747E",
      colorBackground: "#ffffff",
      colorOnBackground: "#1a1c17",
      colorSurface: "#fdfdf5",
      colorOnSurface: "#1a1c17",
      colorSurfaceHover: "#fdfdf5",
      colorBackgroundHover: "",
      colorSurfaceVariant: "#88E7E0EC",
      colorOnSurfaceVariant: "#49454F",
      colorInverseSurface: "#2f312c",
      colorInverseOnSurface: "#f1f1ea",
    },
  },
  plugins: [],
}
