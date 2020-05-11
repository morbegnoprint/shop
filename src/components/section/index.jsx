import React from "react";
import PropTypes from "prop-types";
import { Box, Flex } from "reflexbox";
import { Breadcrumbs } from "../breadcrumbs";
import { Title } from "./styled";

export const Section = ({ title, breadcrumbs, children }) => (
    <Flex my={4} justifyContent="center">
        <Flex
            alignItems="center"
            flexDirection="column"
            width={["90%", "80%", "70%", "60%"]}
        >
            {title && (
                <Box
                    fontWeight={700}
                    textAlign="center"
                    mb={breadcrumbs ? 1 : 4}
                >
                    <Title>{title}</Title>
                </Box>
            )}
            {breadcrumbs && (
                <Box mb={4}>
                    <Breadcrumbs locations={breadcrumbs} />
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
