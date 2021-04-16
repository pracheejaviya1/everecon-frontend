module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        karantina: ['Karantina', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: theme => ({
        landing: "url('../assets/Designs/LandingDesign.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    'gatsby-plugin-postcss',
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
