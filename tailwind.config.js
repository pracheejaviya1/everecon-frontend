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
        landing_signin: "url('../assets/Designs/LandingDesign2.png')",
        explore_communities: "url('../assets/Designs/ExploreDesign1.png')",
        explore_events: "url('../assets/Designs/ExploreDesign2.png')",
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
