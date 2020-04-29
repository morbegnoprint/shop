import React from "react";
import { Item, StyledIcon } from "../styled";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Root } from "../../footer/styled";
import { Flex, Box } from "reflexbox";

export const MobileMenu = ({ onClose, ...rest }) => (
    <Root flexDirection="column" alignItems="center" {...rest}>
        <Flex width={5 / 6} flexDirection="column" alignItems="center">
            <Box>
                <Item to="/categories">Categorie</Item>
            </Box>
        </Flex>
        <Flex width={5 / 6} justifyContent="flex-end">
            <Box>
                <StyledIcon icon={faTimes} onClick={onClose} />
            </Box>
        </Flex>
    </Root>
);
