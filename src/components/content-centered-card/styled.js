import styled from "styled-components";

export const RootContainer = styled.div`
    position: relative;
    border-radius: 24px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
    background: #fafafa;
    padding-top: 130%;
    box-sizing: border-box;
`;

export const TextContainer = styled.div`
    position: absolute;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    right: 16px;
    left: 16px;
`;
