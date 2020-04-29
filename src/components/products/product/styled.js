import styled from "styled-components";
import { Flex, Box } from "reflexbox";
import GatsbyImage from "gatsby-image";

export const RootFlex = styled(Flex)`
    position: relative;
    border-radius: 24px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
    padding-top: 130%;
    box-sizing: border-box;
`;

export const AbsoluteContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;

export const Image = styled(GatsbyImage)`
    width: 100%;
    height: 100%;
    border-radius: 24px;
`;

export const Name = styled.span`
    white-space: nowrap;
`;

export const NameBox = styled(Box)`
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const InfoContainer = styled.div`
    overflow: hidden;
    text-overflow: ellipsis;
    position: absolute;
    background: #fff;
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
    bottom: 0;
    left: 0;
    right: 0;
`;
