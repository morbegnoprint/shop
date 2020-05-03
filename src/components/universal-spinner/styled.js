import styled from "styled-components";
import { Flex } from "reflexbox";
import { css } from "react-select/src/components/Control";

export const SpinnerContainer = styled(Flex)`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    ${(props) =>
        !props.open
            ? css`
                  z-index: -1;
                  opacity: 0;
              `
            : css`
                  z-index: 20;
                  opacity: 1;
                  transition: opacity 0.3s ease;
              `}
`;
