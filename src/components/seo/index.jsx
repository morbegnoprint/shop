import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const Seo = ({ description, image, lang, meta, title, link }) => {
    const { site, favicon16, favicon32, favicon64 } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
                favicon16: file(relativePath: { eq: "favicon/16.png" }) {
                    childImageSharp {
                        fixed(height: 16) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                favicon32: file(relativePath: { eq: "favicon/32.png" }) {
                    childImageSharp {
                        fixed(height: 32) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
                favicon64: file(relativePath: { eq: "favicon/64.png" }) {
                    childImageSharp {
                        fixed(height: 64) {
                            ...GatsbyImageSharpFixed
                        }
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    useEffect(() => {
        if (window.Snipcart) {
            window.Snipcart.api.session.setLanguage("it");
        } else {
            document.addEventListener("snipcart.ready", () => {
                window.Snipcart.api.session.setLanguage("it");
            });
        }
    }, []);

    return (
        <Helmet
            htmlAttributes={{
                lang: "it",
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            link={[
                {
                    rel: "shortcut icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: `${favicon16.childImageSharp.fixed.base64}`,
                },
                {
                    rel: "icon",
                    type: "image/png",
                    sizes: "32x32",
                    href: `${favicon32.childImageSharp.fixed.base64}`,
                },
                {
                    rel: "shortcut icon",
                    type: "image/png",
                    href: `${favicon64.childImageSharp.fixed.base64}`,
                },
                {
                    href:
                        "https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap",
                    rel: "stylesheet",
                },
                {
                    href:
                        "https://cdn.snipcart.com/themes/v3.0.12/default/snipcart.css",
                    rel: "stylesheet",
                },
            ].concat(link)}
            meta={[
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    name: "description",
                    content: metaDescription,
                },
                {
                    name: "image",
                    content: image,
                },
                {
                    property: "og:title",
                    content: title,
                },
                {
                    property: "og:description",
                    content: metaDescription,
                },
                {
                    property: "og:image",
                    content: image,
                },
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    name: "twitter:card",
                    content: "summary",
                },
                {
                    name: "twitter:creator",
                    content: site.siteMetadata.author,
                },
                {
                    name: "twitter:title",
                    content: title,
                },
                {
                    name: "twitter:image",
                    content: image,
                },
                {
                    name: "twitter:description",
                    content: metaDescription,
                },
                {
                    name: "theme-color",
                    content: "#ef7c00",
                },
            ].concat(meta)}
        />
    );
};

Seo.defaultProps = {
    meta: [],
    link: [],
    description: "",
    image: "",
};

Seo.propTypes = {
    description: PropTypes.string,
    image: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    link: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
};
