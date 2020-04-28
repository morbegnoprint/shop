import styled from "styled-components";
import { Flex } from "reflexbox";

export const Root = styled(Flex)`
    background: #000;
    padding-top: 32px;
    padding-bottom: 32px;
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    color: #fff;
`;

export const ContactsSubtitle = styled.h3`
    color: #ef7c00;
`;

export const StyledLink = styled.a`
    color: rgb(239, 124, 0);
    font-weight: 700;
    font-style: italic;
    margin-left: 4px;
`;
