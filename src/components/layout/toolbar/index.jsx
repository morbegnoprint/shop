import React, { useState, useEffect } from "react";
import {
    Container,
    StyledIcon,
    AnimatedMobileMenu,
    Item,
    UnstyledButton,
    CartItemsCountContainer,
} from "./styled";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";
import {
    faBars,
    faShoppingCart,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Flex, Box } from "reflexbox";
import { VerticalDivider } from "../../vertical-divider";

export const Toolbar = () => {
    const { logoImage } = useStaticQuery(graphql`
        query {
            logoImage: file(relativePath: { eq: "logo-mini.png" }) {
                childImageSharp {
                    fixed(height: 24) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);

    const [hero, setHero] = useState(
        !(typeof window !== "undefined" && window.pageYOffset)
    );
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setHero(!window.pageYOffset);
    };

    const handleMobileMenuOpen = () => {
        setMobileMenuOpen(true);
    };

    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false);
    };

    return (
        <>
            <AnimatedMobileMenu
                open={mobileMenuOpen}
                onClose={handleMobileMenuClose}
            />
            <Container
                alignItems="center"
                justifyContent="space-between"
                hero={hero}
            >
                <Box>
                    <Link to="/">
                        <Image
                            fixed={logoImage.childImageSharp.fixed}
                            alt="Mini logo"
                        />
                    </Link>
                </Box>
                <Flex
                    display={["none !important", "flex !important"]}
                    mx={-3}
                    alignItems="center"
                >
                    <Box px={3}>
                        <Item to="/categories">Categorie</Item>
                    </Box>
                    <Box px={2}>
                        <VerticalDivider hero={hero} />
                    </Box>
                    <Box px={3}>
                        <UnstyledButton className="snipcart-checkout">
                            <StyledIcon icon={faShoppingCart} hero={hero} />
                            <CartItemsCountContainer className="snipcart-items-count" />
                        </UnstyledButton>
                    </Box>
                    <Box mr={3}>
                        <UnstyledButton className="snipcart-customer-signin">
                            <StyledIcon icon={faUser} hero={hero} />
                        </UnstyledButton>
                    </Box>
                </Flex>
                <Flex display={["flex", "none"]} mx={-3}>
                    <Box px={3}>
                        <UnstyledButton className="snipcart-checkout">
                            <StyledIcon icon={faShoppingCart} hero={hero} />
                            <CartItemsCountContainer className="snipcart-items-count" />
                        </UnstyledButton>
                    </Box>
                    <Box px={3}>
                        <UnstyledButton className="snipcart-customer-signin">
                            <StyledIcon icon={faUser} hero={hero} />
                        </UnstyledButton>
                    </Box>
                    <Box px={2}>
                        <VerticalDivider hero={hero} />
                    </Box>
                    <Box px={3}>
                        <StyledIcon
                            icon={faBars}
                            onClick={handleMobileMenuOpen}
                            hero={hero}
                        />
                    </Box>
                </Flex>
            </Container>
        </>
    );
};
