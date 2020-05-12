import React from "react";
import { Toolbar } from "./toolbar";
import { Main } from "./styled";
import { Footer } from "./footer";
import { Flex, Box } from "reflexbox";

export const Layout = ({ children }) => (
    <Flex flexDirection="column" minHeight="100vh">
        <Box>
            <Toolbar />
        </Box>
        <Box flex="1">
            <Main>{children}</Main>
        </Box>
        <Box>
            <Footer />
        </Box>
    </Flex>
);
