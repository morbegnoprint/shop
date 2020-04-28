import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Location, Divider } from "./styled";

export const Breadcrumbs = ({ locations }) => (
    <Flex mx={-3}>
        {locations.map((location, index) => (
            <>
                <Box key={location.href} px={3}>
                    <Location to={location.href}>{location.label}</Location>
                </Box>
                {index < locations.length - 1 && (
                    <Box>
                        <Divider>/</Divider>
                    </Box>
                )}
            </>
        ))}
    </Flex>
);

Breadcrumbs.locations = {
    locations: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired,
};
