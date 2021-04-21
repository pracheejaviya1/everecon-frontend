/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'EveRecon',
  },
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-theme-apollo`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter`,
          `Inter\:300,600`,
          `Mulish`, // second font
          `Karantina`,
          'Roboto',
        ],
        display: 'swap',
      },
    },
  ],
};
