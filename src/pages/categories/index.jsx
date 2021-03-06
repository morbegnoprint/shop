import React from "react";
import { Seo } from "../../components/seo";
import { Layout } from "../../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { Categories as CategoryList } from "../../components/categories";
import { Section } from "../../components/section";
import { Flex, Box } from "reflexbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const Categories = () => {
    const { categories } = useStaticQuery(
        graphql`
            query {
                categories: allMarkdownRemark(
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
            }
        `
    );

    return (
        <Layout>
            <Seo title="Categorie" />
            <Section title="Tutte le categorie">
                <CategoryList
                    categories={categories.edges.reduce((categories, edge) => {
                        const { node } = edge;
                        categories.push({
                            ...node.frontmatter,
                            slug: node.fields.slug,
                        });
                        return categories;
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

export default Categories;
