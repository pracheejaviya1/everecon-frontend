import { graphql } from 'gatsby';
import * as React from 'react';

const Page = props => {
  const canonicalUrl =
    props.data.site.siteMetadata.siteURL + props.location.pathname;

  console.log(props.location);
  return <div>The URL of this page is {canonicalUrl}</div>;
};

export default Page;

export const query = graphql`
  query PageQuery {
    site {
      siteMetadata {
        siteURL
      }
    }
  }
`;
