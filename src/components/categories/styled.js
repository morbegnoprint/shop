import styled from "styled-components";

export const BoxWithMargin = styled.div`
    padding: 16px;
    padding-left: ${(props) => (props.index === 0 ? 28 : 16)}px;
`;

export const RootContainer = styled.div`
    display: flex;
    overflow: scroll;
`;
