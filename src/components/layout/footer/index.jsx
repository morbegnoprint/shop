import React from "react";
import { Root, ContactsSubtitle, StyledLink } from "./styled";
import { SocialLink } from "../../social-link";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { Flex, Box } from "reflexbox";

export const Footer = () => {
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

    return (
        <>
            <Root
                display={[
                    "none !important",
                    "none !important",
                    "flex !important"
                ]}
                justifyContent="center"
            >
                <Flex
                    width={[11 / 12, 5 / 6]}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Flex flexDirection="column">
                        <Box mb={2}>
                            <ContactsSubtitle>CONTATTI</ContactsSubtitle>
                        </Box>
                        <Box mb={2}>
                            <strong>Sede legale</strong>: Via San Rocco 62,
                            23017, Morbegno
                        </Box>
                        <Box mb={2}>
                            <strong>Partita IVA</strong>: 01011630140
                        </Box>
                        <Box mb={2}>
                            <strong>Telefono</strong>:{" "}
                            <StyledLink href="tel:+390342601203">
                                +39 0342 601203
                            </StyledLink>
                        </Box>
                        <Box mb={2}>
                            <strong>E-mail</strong>:{" "}
                            <StyledLink href="mailto:morbegnoprint@gmail.com">
                                morbegnoprint@gmail.com
                            </StyledLink>
                        </Box>
                        <Box>
                            <strong>
                                © {new Date().getFullYear()} Morbegnoprint
                                S.R.L.
                            </strong>
                        </Box>
                    </Flex>
                    <Flex flexDirection="column" alignItems="flex-end">
                        <Box mb={3}>
                            <SocialLink type="facebook" />
                        </Box>
                        <Box>
                            <SocialLink type="instagram" />
                        </Box>
                        <Box mb={4} mt={4}>
                            <Image
                                fixed={logoImage.childImageSharp.fixed}
                                alt="Extended logo"
                            />
                        </Box>
                        <Flex alignItems="flex-end" flexDirection="column">
                            <Box mb={2}>
                                <strong>Website by Federico Luzzi</strong>
                            </Box>
                            <Box>
                                <StyledLink href="mailto:fedeluzzi00@gmail.com">
                                    fedeluzzi00@gmail.com
                                </StyledLink>
                            </Box>
                        </Flex>
                    </Flex>
                </Flex>
            </Root>
            <Root
                display={[
                    "flex !important",
                    "flex !important",
                    "none !important"
                ]}
                justifyContent="center"
            >
                <Flex
                    width="100%"
                    justifyContent="space-between"
                    flexDirection="column"
                    alignItems="center"
                >
                    <Flex
                        flexDirection="column"
                        width="100%"
                        alignItems="center"
                    >
                        <Box mb={2}>
                            <ContactsSubtitle>CONTATTI</ContactsSubtitle>
                        </Box>
                        <Box mb={2}>
                            <strong>Sede legale</strong>:
                        </Box>
                        <Box mb={2}>Via San Rocco 62, 23017, Morbegno</Box>
                        <Box mb={2}>
                            <strong>Partita IVA</strong>: 01011630140
                        </Box>
                        <Box mb={2}>
                            <strong>Telefono</strong>:{" "}
                            <StyledLink href="tel:+390342601203">
                                +39 0342 601203
                            </StyledLink>
                        </Box>
                        <Box mb={2}>
                            <strong>E-mail</strong>:{" "}
                        </Box>
                        <Box>
                            <StyledLink href="mailto:morbegnoprint@gmail.com">
                                morbegnoprint@gmail.com
                            </StyledLink>
                        </Box>
                        <Box>
                            <strong>
                                © {new Date().getFullYear()} Morbegnoprint
                                S.R.L.
                            </strong>
                        </Box>
                    </Flex>
                    <Flex
                        my={3}
                        flexDirection="column"
                        width="100%"
                        alignItems="center"
                    >
                        <Box mb={3}>
                            <SocialLink type="facebook" />
                        </Box>
                        <Box>
                            <SocialLink type="instagram" />
                        </Box>
                    </Flex>
                    <Box mb={2}>
                        <Image
                            fixed={logoImage.childImageSharp.fixed}
                            alt="Mini logo"
                        />
                    </Box>
                    <Flex alignItems="center" flexDirection="column">
                        <Box mb={2}>
                            <strong>Website made by Federico Luzzi</strong>
                        </Box>
                        <Box>
                            <strong>E-mail</strong>:{" "}
                            <StyledLink href="mailto:fedeluzzi00@gmail.com">
                                fedeluzzi00@gmail.com
                            </StyledLink>
                        </Box>
                    </Flex>
                </Flex>
            </Root>
        </>
    );
};
