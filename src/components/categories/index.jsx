import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Category } from "./category";
import { ShowAllCard } from "../show-all-card";

export const Categories = ({ categories, truncated }) => (
    <Flex m={-2} overflow="scroll">
        {categories.map((category) => (
            <Box key={category.id} p={3} width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]}>
                <Flex justifyContent="center" width="100%">
                    <Box justifyContent="center" width="100%">
                        <Category {...category} />
                    </Box>
                </Flex>
            </Box>
        ))}
        {truncated && (
            <Box p={3} width={[1 / 2, 1 / 2, 1 / 3, 1 / 4]}>
                <Flex justifyContent="center">
                    <Flex justifyContent="center" width="100%">
                        <Box justifyContent="center" width="100%">
                            <ShowAllCard href="/categories" />
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        )}
    </Flex>
);

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
};
