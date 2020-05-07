import styled from "styled-components";

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 24px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
`;

export const Subtitle = styled.h4`
    margin-bottom: 0;
`;

export const Price = styled.span`
    color: #f07d02;
    font-size: 36px;
    font-weight: 700;
`;

export const RemoveText = styled.span`
    color: #f07d02;
    font-weight: 700;
    font-size: 16px;
    cursor: pointer;
    text-decoration: underline;
`;
