import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Layout } from "../../components/layout";
import { Section } from "../../components/section";
import { Seo } from "../../components/seo";
import { Products } from "../../components/products";
import { Flex, Box } from "reflexbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

export const pageQuery = graphql`
    query($slug: String!, $name: String!) {
        category: markdownRemark(fields: { slug: { eq: $slug } }) {
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
                    fields {
                        slug
                    }
                    frontmatter {
                        name
                        image {
                            publicURL
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                        price
                    }
                }
            }
        }
    }
`;

const Category = ({ data }) => {
    const {
        category: { frontmatter },
        products,
    } = data;

    return (
        <Layout>
            <Seo
                title={frontmatter.name}
                image={frontmatter.image.publicURL}
                description={frontmatter.description}
            />
            <Section
                title={frontmatter.name}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Categorie", href: "/categories" },
                ]}
            >
                <Products
                    products={products.edges.reduce((products, edge) => {
                        const { node } = edge;
                        products.push({
                            ...node.frontmatter,
                            slug: node.fields.slug,
                        });
                        return products;
                    }, [])}
                    truncatedText={
                        <Flex flexDirection="column">
                            <Box>Non c'è più nulla qui</Box>
                        </Flex>
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
