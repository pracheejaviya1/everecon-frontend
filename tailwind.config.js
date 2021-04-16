module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mulish: ['Mulish', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        karantina: ['Karantina', 'cursive'],
      },
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
