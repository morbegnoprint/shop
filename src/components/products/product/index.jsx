import React from "react";
import PropTypes from "prop-types";
import { RootFlex, Image, Name } from "./styled";
import { Flex, Box } from "reflexbox";
import { UndecoratedLink } from "../../undecorated-link";

export const Product = ({ id, name, image, price, currency }) => (
    <UndecoratedLink to={`/products/${id}`}>
        <RootFlex width={300} height={350} flexDirection="column">
            <Image
                fluid={{ ...image.childImageSharp.fluid, aspectRatio: 16 / 9 }}
            />
            <Flex flexDirection="column" px={20} py={16}>
                <Box
                    width="100%"
                    textAlign="center"
                    fontSize={20}
                    fontWeight={700}
                    mb={2}
                >
                    <Name>{name}</Name>
                </Box>
                <Box
                    width="100%"
                    textAlign="center"
                    fontSize={16}
                    color="#f07d02"
                    fontWeight={700}
                >
                    {price} {currency}
                </Box>
            </Flex>
        </RootFlex>
    </UndecoratedLink>
);

Product.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired
};
