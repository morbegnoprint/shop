import React from "react";
import PropTypes from "prop-types";
import {
    RootFlex,
    Image,
    Name,
    AbsoluteContainer,
    InfoContainer,
    NameBox,
} from "./styled";
import { Flex, Box } from "reflexbox";
import { UndecoratedLink } from "../../undecorated-link";

export const Product = ({ slug, name, image, price, currency }) => (
    <UndecoratedLink to={`/products/${slug}`}>
        <RootFlex flexDirection="column">
            <AbsoluteContainer>
                <Image fluid={image.childImageSharp.fluid} />
                <InfoContainer>
                    <Flex flexDirection="column" px={20} py={16}>
                        <NameBox
                            width="100%"
                            textAlign="center"
                            fontSize={20}
                            fontWeight={700}
                            overflow="hidden"
                            mb={2}
                        >
                            <Name>{name}</Name>
                        </NameBox>
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
                </InfoContainer>
            </AbsoluteContainer>
        </RootFlex>
    </UndecoratedLink>
);

Product.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
};
