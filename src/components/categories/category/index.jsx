import React from "react";
import PropTypes from "prop-types";
import {
    RootFlex,
    BackgroundImage,
    NameBox,
    Overlay,
    DimensionedUndecoratedLink,
} from "./styled";

export const Category = ({ id, name, image }) => (
    <DimensionedUndecoratedLink to={`/categories/${id}`}>
        <RootFlex alignItems="flex-end">
            <BackgroundImage fluid={image.childImageSharp.fluid} />
            <Overlay />
            <NameBox fontSize={24} fontWeight={700} color="#fff">
                {name}
            </NameBox>
        </RootFlex>
    </DimensionedUndecoratedLink>
);

Category.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
};
