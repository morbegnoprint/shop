import styled from "styled-components";

export const Button = styled.button`
    padding: 16px 24px;
    border-radius: 24px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    color: #fff;
    background: rgb(239, 124, 0);
    text-decoration: none;
    transition: box-shadow ease 0.2s, background ease 0.2s, color ease 0.2s;
    font-size: 20px;
    font-weight: 700;
    border: none;
    outline: none;
    :hover:not(:disabled) {
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }
    :active:not(:disabled) {
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }
    :disabled {
        background: #e0e0e0;
        color: #757575;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19), 0 3px 3px rgba(0, 0, 0, 0.23);
    }
`;
