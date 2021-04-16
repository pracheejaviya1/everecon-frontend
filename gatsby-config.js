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
  plugins:   
  [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Inter\:300,400,700`,
          `Mulish`, // second font
        ],
        display: 'swap'
      }
    }
  ],
};
