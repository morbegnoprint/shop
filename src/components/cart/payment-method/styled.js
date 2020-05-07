import styled from "styled-components";
import { Box } from "reflexbox";

export const SnipcartPaymentContainer = styled(Box)`
        border: solid 1px rgba(0, 0, 0, 0.1);
        border-radius: 24px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.19),
            0 3px 3px rgba(0, 0, 0, 0.23);
            padding: 16px;
    & > iframe {
        width: 100%;
        border: none;
    }
`;
