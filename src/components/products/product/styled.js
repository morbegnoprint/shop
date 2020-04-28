import styled from "styled-components";
import { Flex } from "reflexbox";
import GatsbyImage from "gatsby-image";

export const RootFlex = styled(Flex)`
    border-radius: 24px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
`;

export const Image = styled(GatsbyImage)`
    width: 100%;
    height: 100%;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
`;

export const Name = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
