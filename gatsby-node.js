exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('Failed to create posts', result.errors);
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(({ frontmatter }) => {
    actions.createPage({
      path: frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: frontmatter.slug,
      },
    });
  });
};
