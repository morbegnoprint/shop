import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { Layout } from "../../components/layout";
import { Flex, Box } from "reflexbox";
import { Section } from "../../components/section";
import { Image } from "./styled";

export const categoryQuery = graphql`
    query Category($id: String!) {
        markdownRemark(id: { eq: $id }) {
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
    }
`;

const Category = ({ data }) => {
    const {
        markdownRemark: { frontmatter }
    } = data;

    return (
        <Layout>
            <Section>
                <Flex width="100%" mx={-4}>
                    <Box width="50%" px={4}>
                        <Image
                            fluid={{
                                ...frontmatter.image.childImageSharp.fluid,
                                aspectRatio: 3 / 4
                            }}
                        />
                    </Box>
                    <Box width="50%" px={4}>
                        <Flex flexDirection="column">
                            <Box>
                                <h1>{frontmatter.name}</h1>
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
            </Section>
        </Layout>
    );
};

Category.propTypes = {
    data: PropTypes.object.isRequired
};

export default Category;
