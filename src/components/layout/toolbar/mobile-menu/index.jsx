import React from "react";
import { StyledMobileMenuIcon } from "../styled";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Root } from "../../footer/styled";
import { Flex, Box } from "reflexbox";

export const MobileMenu = ({ onClose, ...rest }) => (
    <Root flexDirection="column" alignItems="center" {...rest}>
        <Flex width={5 / 6} justifyContent="flex-end">
            <Box>
                <StyledMobileMenuIcon icon={faTimes} onClick={onClose} />
            </Box>
        </Flex>
    </Root>
);
