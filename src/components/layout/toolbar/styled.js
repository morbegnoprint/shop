import styled from "styled-components";
import { MobileMenu } from "./mobile-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex } from "reflexbox";

export const Container = styled(Flex)`
    height: 64px;
    padding: 0 32px;
    background: rgba(255, 255, 255, 1);
    color: "#000";
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: background ease 0.2s, box-shadow ease 0.2s, color ease 0.2s;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
`;

export const StyledMobileMenuIcon = styled(FontAwesomeIcon)`
    font-size: 24px;
`;

export const AnimatedMobileMenu = styled(MobileMenu)`
    position: fixed;
    right: 0;
    left: 0;
    top: ${props => (props.open ? "0" : "-100%")};
    background: #fff;
    color: #000;
    transition: top ease 0.3s;
    z-index: 11;
`;
