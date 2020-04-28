import styled from "styled-components";
import { Flex } from "reflexbox";

export const Link = styled.a`
    text-decoration: none;
`;

export const RootFlex = styled(Flex)`
    padding: 8px 16px;
    border-radius: 16px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    color: #fff;
    background: ${props => {
        if (props.type === "facebook") {
            return props.theme.colors.facebook;
        }
        if (props.type === "instagram") {
            return props.theme.colors.instagram;
        }
    }};
    transition: box-shadow ease 0.3s;
    border: none;
    :hover {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }
`;
