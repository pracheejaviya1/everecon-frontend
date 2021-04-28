// // gatsby-node.js
// // Implement the Gatsby API “onCreatePage”. This is
// // called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//   const { createPage } = actions;

//   // page.matchPath is a special key that's used for matching pages
//   // only on the client.
//   if (page.path.match(/^\/View/)) {
//     page.matchPath = '/View/ViewEvent/*';

//     // Update the page.
//     createPage(page);
//   }
// };
