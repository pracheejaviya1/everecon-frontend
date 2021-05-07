/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'EveRecon',
    siteUrl: `https://everecon-frontend.vercel.app`,
    siteUrlNoSlash: `https://everecon-frontend.vercel.app`,
  },
  flags: {
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `{
         site {
           siteMetadata {
             siteUrlNoSlash
           }
         }
         allSitePage {
           edges {
             node {
               path
             }
           }
         }
        }`,
        serialize: ({ site, allSitePage, allMarkdownRemark }) => {
          let pages = [];
          allSitePage.edges.map(edge => {
            pages.push({
              url: site.siteMetadata.siteUrlNoSlash + edge.node.path,
            });
          });
          allMarkdownRemark.edges.map(edge => {
            pages.push({
              url: `${site.siteMetadata.siteUrlNoSlash}/${edge.node.fields.slug}`,
            });
          });

          return pages;
        },
      },
    },
    ,
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
