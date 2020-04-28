import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Layout } from "../../components/layout";
import { Section } from "../../components/section";
import { Flex, Box } from "reflexbox";
import { Image } from "./styled";
import { Button } from "../../components/button";
import { Select } from "../../components/select";
import { Seo } from "../../components/seo";
import { Breadcrumbs } from "../../components/breadcrumbs";

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
                category
            }
        }
    }
`;

const Product = ({ data }) => {
    const {
        markdownRemark: { frontmatter },
    } = data;

    const [attributes, setAttributes] = useState({});
    const [buyable, setBuyable] = useState(false);

    const getAttributesChangeHandler = (attributeName) => ({ value }) => {
        setAttributes({
            ...attributes,
            [attributeName]: value,
        });
    };

    useEffect(() => {
        setBuyable(
            frontmatter.attributes.length === Object.keys(attributes).length
        );
    }, [frontmatter, attributes]);

    return (
        <Layout>
            <Seo description={frontmatter.description} />
            <Section>
                <Breadcrumbs
                    locations={[
                        { label: "Home", href: "/" },
                        { label: frontmatter.category, href: "/categories" },
                    ]}
                />
                <Flex width="100%" mx={-4} mt={4}>
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
                                                    onChange={getAttributesChangeHandler(
                                                        attribute.name
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
                                <Button disabled={!buyable}>
                                    Aggiungi al carrello
                                </Button>
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
