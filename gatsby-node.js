const path = require("path");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");
const { createFilePath } = require("gatsby-source-filesystem");

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const result = await graphql(`
        {
            allMarkdownRemark(limit: 1000) {
                edges {
                    node {
                        fields {
                            slug
                        }
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
            const { fields, frontmatter } = node;
            const context = { slug: fields.slug };
            if (frontmatter.type === "product") {
                context.categoryName = frontmatter.category;
            }
            if (frontmatter.type === "category") {
                context.name = frontmatter.name;
            }
            console.log(
                `creating page /${frontmatter.collection}/${fields.slug}`
            );
            createPage({
                path: `/${frontmatter.collection}/${fields.slug}`,
                component: path.resolve(
                    `src/templates/${frontmatter.type}/index.jsx`
                ),
                context,
            });
        });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
    fmImagesToRelative(node);
    if (node.internal.type === "MarkdownRemark") {
        const { createNodeField } = actions;
        const rawSlug = createFilePath({
            node,
            getNode,
            trailingSlash: false,
        });
        const splitSlug = rawSlug.split("/");
        createNodeField({
            name: "slug",
            node,
            value: splitSlug[splitSlug.length - 1],
        });
    }
};
