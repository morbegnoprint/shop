import React, { useLayoutEffect } from "react";
import { Seo } from "../components/seo";
import { Layout } from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { Categories } from "../components/categories";
import { Products } from "../components/products";
import { Section } from "../components/section";
import { useState } from "react";
import { DiscountCampaigns } from "../components/discount-campaigns";

const Index = () => {
    const { products, categories, discountCampaigns } = useStaticQuery(
        graphql`
            query {
                products: allMarkdownRemark(
                    limit: 4
                    filter: { frontmatter: { type: { eq: "product" } } }
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
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
                            }
                        }
                    }
                }
                categories: allMarkdownRemark(
                    limit: 3
                    filter: { frontmatter: { type: { eq: "category" } } }
                ) {
                    edges {
                        node {
                            fields {
                                slug
                            }
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
                discountCampaigns: allMarkdownRemark(
                    filter: {
                        frontmatter: { type: { eq: "discount-campaign" } }
                    }
                ) {
                    edges {
                        node {
                            frontmatter {
                                name
                                description
                                expireDate
                                image {
                                    publicURL
                                }
                            }
                        }
                    }
                }
            }
        `
    );

    const [validDiscountCampaigns, setValidDiscountCampaigns] = useState([]);

    useLayoutEffect(() => {
        const now = new Date().getTime();
        setValidDiscountCampaigns(
            discountCampaigns.edges
                .map((discountCampaign) => discountCampaign.node.frontmatter)
                .filter((discountCampaign) => {
                    return (
                        new Date(discountCampaign.expireDate).getTime() > now
                    );
                })
        );
    }, [discountCampaigns]);

    console.log(validDiscountCampaigns);

    return (
        <Layout
            heroEnabled={
                validDiscountCampaigns && validDiscountCampaigns.length > 0
            }
        >
            <Seo title="Home" />
            {validDiscountCampaigns && validDiscountCampaigns.length > 0 && (
                <DiscountCampaigns discountCampaigns={validDiscountCampaigns} />
            )}
            <Section title="Sfoglia le categorie">
                <Categories
                    categories={categories.edges.reduce((categories, edge) => {
                        const { node } = edge;
                        categories.push({
                            ...node.frontmatter,
                            slug: node.fields.slug,
                        });
                        return categories;
                    }, [])}
                    truncatedText="Mostra tutte"
                    truncatedHref="/categories"
                />
            </Section>
            <Section title="Alcuni nostri prodotti" fullWidth>
                <Products
                    products={products.edges.reduce((products, edge) => {
                        const { node } = edge;
                        products.push({
                            ...node.frontmatter,
                            slug: node.fields.slug,
                        });
                        return products;
                    }, [])}
                />
            </Section>
        </Layout>
    );
};

export default Index;
