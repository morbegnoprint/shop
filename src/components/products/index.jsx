import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Product } from "./product";
import { ContentCenteredCard } from "../content-centered-card";

export const Products = ({ products, truncatedText }) => (
    <Flex m={-2}>
        {products.map((product) => (
            <Box key={product.slug} p={2} width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]}>
                <Flex justifyContent="center" width="100%">
                    <Box justifyContent="center" width="100%">
                        <Product {...product} />
                    </Box>
                </Flex>
            </Box>
        ))}
        {truncatedText && (
            <Box p={2} width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]}>
                <Flex justifyContent="center">
                    <Flex justifyContent="center" width="100%">
                        <Box justifyContent="center" width="100%">
                            <ContentCenteredCard>
                                {truncatedText}
                            </ContentCenteredCard>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        )}
    </Flex>
);

Products.propTypes = {
    products: PropTypes.array.isRequired,
};
