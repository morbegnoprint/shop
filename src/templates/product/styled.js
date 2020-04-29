import styled from "styled-components";
import GatsbyImage from "gatsby-image";

export const Image = styled(GatsbyImage)`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
`;

export const Subtitle = styled.h4`
    margin-bottom: 0;
`;
