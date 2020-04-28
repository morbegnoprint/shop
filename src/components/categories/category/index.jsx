import React from "react";
import PropTypes from "prop-types";
import { RootFlex, BackgroundImage, NameBox, Overlay } from "./styled";
import { UndecoratedLink } from "../../undecorated-link";

export const Category = ({ id, name, image }) => (
    <UndecoratedLink to={`/categories/${id}`}>
        <RootFlex width={300} height={350} alignItems="flex-end">
            <BackgroundImage
                fluid={{
                    ...image.childImageSharp.fluid,
                    aspectRatio: 4 / 3
                }}
            />
            <Overlay />
            <NameBox fontSize={24} fontWeight={700} color="#fff">
                {name}
            </NameBox>
        </RootFlex>
    </UndecoratedLink>
);

Category.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
};
