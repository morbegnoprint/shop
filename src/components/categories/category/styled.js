import styled from "styled-components";
import { Flex, Box } from "reflexbox";
import Image from "gatsby-image";

export const RootFlex = styled(Flex)`
    position: relative;
    border-radius: 24px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
`;

export const BackgroundImage = styled(Image)`
    width: 100%;
    height: 100%;
    border-radius: 24px;
`;

export const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    background: rgba(0, 0, 0, 0.4);
`;

export const NameBox = styled(Box)`
    position: absolute;
    bottom: 24px;
    left: 24px;
`;
