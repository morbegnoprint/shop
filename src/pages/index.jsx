import React from "react";
import { Seo } from "../components/seo";
import { Layout } from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { Categories } from "../components/categories";
import { Products } from "../components/products";
import { Section } from "../components/section";

const Index = () => {
    const { products, categories } = useStaticQuery(
        graphql`
            query {
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
            <Seo title="Home" />
            <Section title="Sfoglia le categorie">
                <Categories
                    categories={categories.edges.reduce((categories, edge) => {
                        const { node } = edge;
                        categories.push({ ...node.frontmatter, id: node.id });
                        return categories;
                    }, [])}
                    truncatedText="Mostra tutte"
                    truncatedHref="/categories"
                />
            </Section>
            <Section title="I nostri prodotti" fullWidth>
                <Products
                    products={products.edges.reduce((products, edge) => {
                        const { node } = edge;
                        products.push({ ...node.frontmatter, id: node.id });
                        return products;
                    }, [])}
                />
            </Section>
        </Layout>
    );
};

export default Index;
