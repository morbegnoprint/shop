import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "reflexbox";

export const Section = ({ title, children }) => (
    <Flex my={4} justifyContent="center">
        <Flex
            alignItems="center"
            flexDirection="column"
            width={["90%", "80%", "70%", "60%"]}
        >
            {title && (
                <Box fontWeight={700} mb={2}>
                    <h2>{title}</h2>
                </Box>
            )}
            <Box width="100%">{children}</Box>
        </Flex>
    </Flex>
);

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
};
