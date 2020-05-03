import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/theme";
import { Toolbar } from "./toolbar";
import { Main, ToolbarSpacer } from "./styled";
import { Footer } from "./footer";
import { Flex, Box } from "reflexbox";
import { UniversalSpinner } from "../universal-spinner";

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
            <div
                data-api-key="Njg4NzU3YzktNTQzZi00ODVjLWE1Y2EtOGZkMzU5YWVlOGQ2NjM3MjE3ODEyOTQwNzA5NTc5"
                id="snipcart"
            />
            <Box>
                <Footer />
            </Box>
        </Flex>
        <UniversalSpinner />
    </ThemeProvider>
);
