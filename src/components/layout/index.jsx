import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { Toolbar } from "./toolbar";
import { Main, ToolbarSpacer } from "./styled";
import { Footer } from "./footer";
import { Flex, Box } from "reflexbox";

export const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <Flex flexDirection="column" minHeight="100vh">
            <Box>
                <Toolbar />
                <ToolbarSpacer />
            </Box>
            <Box flex="1">
                <Main>{children}</Main>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Flex>
    </ThemeProvider>
);
