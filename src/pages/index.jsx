import React from "react";
import { Seo } from "../components/seo";
import { Layout } from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { Categories } from "../components/categories";
import { Products } from "../components/products";

const Index = () => {
    const { products, categories } = useStaticQuery(
        graphql`
            query {
                favicon16: file(relativePath: { eq: "favicon/16.png" }) {
                    childImageSharp {
                        fixed(height: 16) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                favicon32: file(relativePath: { eq: "favicon/32.png" }) {
                    childImageSharp {
                        fixed(height: 32) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                favicon64: file(relativePath: { eq: "favicon/64.png" }) {
                    childImageSharp {
                        fixed(height: 64) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                products: allMarkdownRemark(
                    filter: { frontmatter: { type: { eq: "product" } } }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                name
                                image {
                                    childImageSharp {
                                        fluid(quality: 90) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                                price
                                currency
                            }
                        }
                    }
                }
                categories: allMarkdownRemark(
                    filter: { frontmatter: { type: { eq: "category" } } }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                name
                                image {
                                    childImageSharp {
                                        fluid(quality: 90) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    );

    return (
        <Layout>
            <Seo />
            <Categories
                categories={categories.edges.reduce((categories, edge) => {
                    const { node } = edge;
                    categories.push({ ...node.frontmatter, id: node.id });
                    return categories;
                }, [])}
            />
            <Products
                products={products.edges.reduce((products, edge) => {
                    const { node } = edge;
                    products.push({ ...node.frontmatter, id: node.id });
                    return products;
                }, [])}
            />
        </Layout>
    );
};

export default Index;
