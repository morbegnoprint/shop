import React from "react";
import PropTypes from "prop-types";
import { TextContainer, RootContainer } from "./styled";
import { UndecoratedLink } from "../undecorated-link";

export const ShowAllCard = ({ href }) => (
    <UndecoratedLink to={href}>
        <RootContainer alignItems="center" justifyContent="center">
            <TextContainer>Mostra tutto</TextContainer>
        </RootContainer>
    </UndecoratedLink>
);

ShowAllCard.propTypes = {
    href: PropTypes.string.isRequired,
};
