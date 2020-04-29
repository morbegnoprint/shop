import React from "react";
import PropTypes from "prop-types";
import { Flex, Box } from "reflexbox";
import { Location, Divider } from "./styled";
import { Fragment } from "react";

export const Breadcrumbs = ({ locations }) => (
    <Flex mx={-3}>
        {locations.map((location, index) => (
            <Fragment key={location.href}>
                <Box px={3}>
                    <Location to={location.href}>{location.label}</Location>
                </Box>
                {index < locations.length - 1 && (
                    <Box>
                        <Divider>/</Divider>
                    </Box>
                )}
            </Fragment>
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
