const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query AllProducts {
      allProducts {
        nodes {
          id
          name
          price
          description
        }
      }
    }
  `);

  const productTemplate = path.resolve(`src/templates/project.tsx`);
  queryResults.data.allProducts.nodes.forEach(node => {
    createPage({
      path: `/products/${node.id}`,
      component: productTemplate,
      context: {
        // This time the entire product is passed down as context
        product: node,
      },
    });
  });
};
