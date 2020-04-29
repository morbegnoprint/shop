import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Layout } from "../../components/layout";
import { Section } from "../../components/section";
import { Seo } from "../../components/seo";
import { Products } from "../../components/products";

export const pageQuery = graphql`
    query($id: String!, $name: String!) {
        category: markdownRemark(id: { eq: $id }) {
            frontmatter {
                name
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
        products: allMarkdownRemark(
            filter: { frontmatter: { category: { eq: $name } } }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        name
                        image {
                            childImageSharp {
                                fluid {
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
    }
`;

const Category = ({ data }) => {
    console.log(data);
    const {
        category: { frontmatter },
        products,
    } = data;

    return (
        <Layout>
            <Seo title={frontmatter.name} />
            <Section
                title={frontmatter.name}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Categorie", href: "categories" },
                ]}
            >
                <Products
                    products={products.edges.reduce((products, edge) => {
                        const { node } = edge;
                        products.push({ ...node.frontmatter, id: node.id });
                        return products;
                    }, [])}
                    truncatedText={
                        <>
                            <p>Non c'è più nulla qui</p>
                            <p>¯\_(ツ)_/¯</p>
                        </>
                    }
                />
            </Section>
        </Layout>
    );
};

Category.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Category;
