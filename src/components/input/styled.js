import styled from "styled-components";

export const Label = styled.h4`
    margin-bottom: 0;
`;

export const StyledInput = styled.input`
    font-size: 16px;
    padding: 16px 24px;
    border-radius: 28px;
    border: solid 1px ${(props) => (props.error ? "red" : `rgba(0, 0, 0, 0.4)`)};
    outline: none;
    width: 100%;
    ::placeholder {
        color: rgba(0, 0, 0, 0.5);
    }
`;
