import Slider from "react-slick";
import styled from "styled-components";
import { Flex, Box } from "reflexbox";
import ReactMarkdown from "react-markdown";

export const RootSlider = styled(Slider)`
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const Overlay = styled.div`
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
`;

export const SlideRoot = styled(Flex)`
    background: url(${(props) => props.backgroundUrl});
`;

export const DescriptionContainer = styled(Box)`
    background: #fff;
    border-radius: 24px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    z-index: 10;
`;

export const StyledReactMarkdown = styled(ReactMarkdown)`
    line-height: 28px;
    & > p:last-child {
        margin-bottom: 0;
    }
`;
