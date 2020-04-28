import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Product } from "./product";
import { Section } from "../section";

export const Products = ({ products }) => (
    <Section title="I nostri prodotti">
        <Flex width="100%">
            {products.map(product => (
                <Box key={product.id}>
                    <Product {...product} />
                </Box>
            ))}
        </Flex>
    </Section>
);

Products.propTypes = {
    product: PropTypes.array.isRequired
};
