import styled from "styled-components";
import { Flex } from "reflexbox";

export const Root = styled(Flex)`
    padding-top: ${props => props.theme.spacing.props * 2}px;
`;
