import styled from "styled-components";

export const VerticalDivider = styled.div`
    width: 1px;
    height: 24px;
    background: ${(props) =>
        props.hero ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.4)"};
`;
