import React from "react";
import PropTypes from "prop-types";
import {
    RootSlider,
    SlideRoot,
    DescriptionContainer,
    StyledReactMarkdown,
} from "./styled";
import { Overlay } from "../categories/category/styled";

export const DiscountCampaigns = ({ discountCampaigns }) => (
    <RootSlider>
        {discountCampaigns.map((discountCampaign) => (
            <div>
                <SlideRoot
                    p={32}
                    height="85vh"
                    backgroundUrl={discountCampaign.image.publicURL}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Overlay />
                    <DescriptionContainer
                        p={24}
                        fontSize={24}
                        width={["80%", "70%", "60%", "50%"]}
                    >
                        <StyledReactMarkdown
                            source={discountCampaign.description}
                        />
                    </DescriptionContainer>
                </SlideRoot>
            </div>
        ))}
    </RootSlider>
);

DiscountCampaigns.propTypes = {
    discountCampaigns: PropTypes.array.isRequired,
};
