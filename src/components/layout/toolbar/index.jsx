import React, { useState } from "react";
import { Container, StyledMobileMenuIcon, AnimatedMobileMenu } from "./styled";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Flex, Box } from "reflexbox";

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

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            <Container alignItems="center" justifyContent="space-between">
                <Box>
                    <Image
                        fixed={logoImage.childImageSharp.fixed}
                        alt="Mini logo"
                    />
                </Box>
                <Flex display={["flex", "none"]}>
                    <Box>
                        <StyledMobileMenuIcon
                            icon={faBars}
                            onClick={handleMobileMenuOpen}
                        />
                    </Box>
                </Flex>
            </Container>
        </>
    );
};
