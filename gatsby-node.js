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
                            category
                            name
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
            const context = { id };
            if (frontmatter.type === "product") {
                context.categoryName = frontmatter.category;
            }
            if (frontmatter.type === "category") {
                context.name = frontmatter.name;
            }
            createPage({
                path: `/${frontmatter.collection}/${id}`,
                component: path.resolve(
                    `src/templates/${frontmatter.type}/index.jsx`
                ),
                context,
            });
        });
};

exports.onCreateNode = ({ node }) => {
    fmImagesToRelative(node);
};
