import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Layout } from "../../components/layout";
import { Section } from "../../components/section";
import { Flex, Box } from "reflexbox";
import { Image } from "./styled";
import { Button } from "../../components/button";
import { Select } from "../../components/select";
import { Seo } from "../../components/seo";

export const productQuery = graphql`
    query Product($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                name
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 90) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                description
                attributes {
                    name
                    options
                }
                price
                currency
            }
        }
    }
`;

const Product = ({ data }) => {
    const {
        markdownRemark: { frontmatter },
    } = data;

    return (
        <Layout>
            <Seo description={frontmatter.description} />
            <Section>
                <Flex width="100%" mx={-4}>
                    <Box width="50%" px={4}>
                        <Image
                            fluid={{
                                ...frontmatter.image.childImageSharp.fluid,
                                aspectRatio: 3 / 4,
                            }}
                        />
                    </Box>
                    <Box width="50%" px={4}>
                        <Flex
                            height="100%"
                            flexDirection="column"
                            justifyContent="center"
                        >
                            <Box mb={3}>
                                <h1>{frontmatter.name}</h1>
                            </Box>
                            <Box mb={4}>
                                <Flex flexDirection="column">
                                    <Box mb={-2}>
                                        <h3>Descrizione</h3>
                                    </Box>
                                    <Box mb={4}>{frontmatter.description}</Box>
                                    {frontmatter.attributes.map((attribute) => (
                                        <Flex
                                            key={attribute.name}
                                            flexDirection="column"
                                        >
                                            <Box mb={-2}>
                                                <h3>{attribute.name}</h3>
                                            </Box>
                                            <Box mb={4}>
                                                <Select
                                                    options={attribute.options.map(
                                                        (option, index) => ({
                                                            label: option,
                                                            value: option,
                                                            index,
                                                        })
                                                    )}
                                                />
                                            </Box>
                                        </Flex>
                                    ))}
                                    <Box
                                        color="#f07d02"
                                        fontSize={36}
                                        fontWeight={700}
                                    >
                                        {frontmatter.price}{" "}
                                        {frontmatter.currency}
                                    </Box>
                                </Flex>
                            </Box>
                            <Box>
                                <Button>Aggiungi al carrello</Button>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Section>
        </Layout>
    );
};

Product.propTypes = {
    data: PropTypes.object.isRequired,
};

export default Product;
