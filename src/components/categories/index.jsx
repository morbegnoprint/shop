import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Category } from "./category";
import { ContentCenteredCard } from "../content-centered-card";

export const Categories = ({ categories, truncatedText }) => (
    <Flex m={-2}>
        {categories.map((category) => (
            <Box key={category.id} p={2} width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]}>
                <Flex justifyContent="center" width="100%">
                    <Box justifyContent="center" width="100%">
                        <Category {...category} />
                    </Box>
                </Flex>
            </Box>
        ))}
        <Box p={2} width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]}>
            <Flex justifyContent="center">
                <Flex justifyContent="center" width="100%">
                    <Box justifyContent="center" width="100%">
                        <ContentCenteredCard href="/categories">
                            {truncatedText}
                        </ContentCenteredCard>
                    </Box>
                </Flex>
            </Flex>
        </Box>
    </Flex>
);

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
};
