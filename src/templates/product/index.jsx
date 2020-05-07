import React, { useState, useEffect, useCallback } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Layout } from "../../components/layout";
import { Section } from "../../components/section";
import { Flex, Box } from "reflexbox";
import { Image, Price } from "./styled";
import { Button } from "../../components/button";
import { Select } from "../../components/select";
import { Seo } from "../../components/seo";
import { Input } from "../../components/input";

export const pageQuery = graphql`
    query($slug: String!, $categoryName: String!) {
        product: markdownRemark(fields: { slug: { eq: $slug } }) {
            fields {
                slug
            }
            frontmatter {
                name
                image {
                    publicURL
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
        category: markdownRemark(frontmatter: { name: { eq: $categoryName } }) {
            fields {
                slug
            }
        }
    }
`;

const Product = ({ data }) => {
    const {
        product: {
            fields: { slug: productSlug },
            frontmatter,
        },
        category: {
            fields: { slug: categorySlug },
        },
    } = data;

    const [attributes, setAttributes] = useState({});
    const [snipcartCustomAttributes, setSnipcartCustomAttributes] = useState(
        {}
    );
    const [quantity, setQuantity] = useState("");
    const [buyable, setBuyable] = useState(false);

    const getAttributesChangeHandler = (attributeName) => (newValue) => {
        setAttributes({
            ...attributes,
            [attributeName]: newValue,
        });
    };

    useEffect(() => {
        setSnipcartCustomAttributes({
            ...frontmatter.attributes.reduce(
                (customFields, attribute, index) => {
                    customFields[`data-item-custom${index + 1}-name`] =
                        attribute.name;
                    customFields[
                        `data-item-custom${index + 1}-options`
                    ] = attribute.options.join("|");
                    customFields[`data-item-custom${index + 1}-value`] =
                        attributes[attribute.name] &&
                        attributes[attribute.name].value;
                    return customFields;
                },
                {}
            ),
        });
    }, [attributes, frontmatter, productSlug, quantity]);

    useEffect(() => {
        setBuyable(
            parseInt(quantity) > 0 &&
                frontmatter.attributes.length === Object.keys(attributes).length
        );
    }, [frontmatter, attributes, quantity]);

    const handleQuantityChange = useCallback((event) => {
        const rawValue = event.target.value;
        if (!rawValue) {
            setQuantity("");
        } else {
            const parsedValue = parseInt(event.target.value);
            if (!isNaN(parsedValue)) {
                setQuantity(parsedValue);
            }
        }
    }, []);

    return (
        <Layout>
            <Seo
                description={frontmatter.description}
                title={frontmatter.name}
            />
            <Section
                title={frontmatter.name}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Categorie", href: "/categories" },
                    {
                        label: frontmatter.category,
                        href: `/categories/${categorySlug}`,
                    },
                ]}
            >
                <Flex
                    width="100%"
                    flexDirection={["column", "column", "row"]}
                    alignItems="center"
                >
                    <Box width={[1, 1, 1 / 2]} px={[2, 6, 4]} mb={[4, 4, 0]}>
                        <Image
                            fluid={{
                                ...frontmatter.image.childImageSharp.fluid,
                                aspectRatio: 3 / 4,
                            }}
                        />
                    </Box>
                    <Box width={[1, 1, 1 / 2]} px={[2, 5, 4]}>
                        <Flex
                            flexDirection="column"
                            justifyContent="center"
                            alignItems={["center", "center", "flex-start"]}
                        >
                            <Box mb={4}>
                                <Flex flexDirection="column">
                                    <Box mb={4}>{frontmatter.description}</Box>
                                    {frontmatter.attributes.map((attribute) => (
                                        <Flex
                                            key={attribute.name}
                                            flexDirection="column"
                                        >
                                            <Box mb={4}>
                                                <Select
                                                    label={attribute.name}
                                                    placeholder="Seleziona..."
                                                    options={attribute.options.map(
                                                        (option, index) => ({
                                                            label: option,
                                                            value: option,
                                                            index,
                                                        })
                                                    )}
                                                    value={
                                                        attributes[
                                                            attribute.name
                                                        ] || null
                                                    }
                                                    onChange={getAttributesChangeHandler(
                                                        attribute.name
                                                    )}
                                                />
                                            </Box>
                                        </Flex>
                                    ))}
                                    <Box mb={4}>
                                        <Input
                                            label="Quantità"
                                            placeholder="1, 10, 100..."
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                        />
                                    </Box>
                                    <Flex alignItems="center">
                                        <Box mr={3}>Totale:</Box>
                                        <Box>
                                            <Price>
                                                {frontmatter.price * quantity} €
                                            </Price>
                                        </Box>
                                    </Flex>
                                </Flex>
                            </Box>
                            <Box>
                                <Button
                                    className="snipcart-add-item"
                                    {...snipcartCustomAttributes}
                                    data-item-id={productSlug}
                                    data-item-price={frontmatter.price}
                                    data-item-url={`/products/${productSlug}`}
                                    data-item-image={
                                        frontmatter.image.publicURL
                                    }
                                    data-item-description={
                                        frontmatter.description
                                    }
                                    data-item-name={frontmatter.name}
                                    data-item-quantity={quantity}
                                    data-item-categories={frontmatter.category}
                                    disabled={!buyable}
                                >
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
