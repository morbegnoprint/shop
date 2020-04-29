const path = require("path");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        id
                        frontmatter {
                            type
                            collection
                        }
                    }
                }
            }
        }
    `);
    if (result.errors) {
        result.errors.forEach(console.error);
        throw new Error(result.errors);
    }
    const { edges } = result.data.allMarkdownRemark;
    edges
        .map((edge) => edge.node)
        .filter((node) => node.frontmatter.type !== "hidden")
        .forEach((node) => {
            const { id, frontmatter } = node;
            console.log(`creating page for ${frontmatter.type} with id ${id}`);
            createPage({
                path: `/${frontmatter.collection}/${id}`,
                component: path.resolve(
                    `src/templates/${frontmatter.type}/index.jsx`
                ),
                context: { id },
            });
        });
};

exports.onCreateNode = ({ node }) => {
    fmImagesToRelative(node);
};
