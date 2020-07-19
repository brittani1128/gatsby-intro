import { graphql, useStaticQuery } from 'gatsby';

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
            image {
              sharp: childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          excerpt
        }
      }
    }
  `);

  return data.allMdx.nodes.map(({ frontmatter, excerpt }) => ({
    title: frontmatter.title,
    author: frontmatter.author,
    slug: frontmatter.slug,
    image: frontmatter.image,
    excerpt,
  }));
};

export default usePosts;
