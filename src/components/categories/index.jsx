import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Category } from "./category";
import { Section } from "../section";

export const Categories = ({ categories }) => (
    <Section title="Sfoglia le categorie">
        <Flex width="100%">
            {categories.map(category => (
                <Box key={category.id}>
                    <Category {...category} />
                </Box>
            ))}
        </Flex>
    </Section>
);

Categories.propTypes = {
    categories: PropTypes.array.isRequired
};
