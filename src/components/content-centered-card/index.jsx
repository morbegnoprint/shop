import React from "react";
import PropTypes from "prop-types";
import { TextContainer, RootContainer } from "./styled";
import { UndecoratedLink } from "../undecorated-link";
import { Link } from "gatsby";

export const ContentCenteredCard = ({ href, children }) => (
    <UndecoratedLink as={href ? Link : "div"} to={href}>
        <RootContainer alignItems="center" justifyContent="center">
            <TextContainer>{children}</TextContainer>
        </RootContainer>
    </UndecoratedLink>
);

ContentCenteredCard.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
