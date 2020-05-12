import React from "react";
import PropTypes from "prop-types";
import { Toolbar } from "./toolbar";
import { Main, ToolbarSpacer } from "./styled";
import { Footer } from "./footer";
import { Flex, Box } from "reflexbox";

export const Layout = ({ heroEnabled, children }) => (
    <Flex flexDirection="column" minHeight="100vh">
        {!heroEnabled && <ToolbarSpacer />}
        <Box>
            <Toolbar heroEnabled={heroEnabled} />
        </Box>
        <Box flex="1">
            <Main>{children}</Main>
        </Box>
        <Box>
            <Footer />
        </Box>
    </Flex>
);

Layout.propTypes = {
    heroEnabled: PropTypes.bool,
};

Layout.defaultProps = {
    heroEnabled: false,
};
