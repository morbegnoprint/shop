import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export const Seo = ({ description, lang, meta, title, link }) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang: "it"
            }}
            title={site.siteMetadata.title}
            link={link}
            meta={[
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                },
                {
                    name: "description",
                    content: metaDescription
                },
                {
                    property: "og:title",
                    content: title
                },
                {
                    property: "og:description",
                    content: metaDescription
                },
                {
                    property: "og:type",
                    content: "website"
                },
                {
                    name: "twitter:card",
                    content: "summary"
                },
                {
                    name: "twitter:creator",
                    content: site.siteMetadata.author
                },
                {
                    name: "twitter:title",
                    content: title
                },
                {
                    name: "twitter:description",
                    content: metaDescription
                },
                {
                    name: "theme-color",
                    content: "#ef7c00"
                }
            ].concat(meta)}
        />
    );
};

Seo.defaultProps = {
    meta: [],
    link: [],
    description: ""
};

Seo.propTypes = {
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    link: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
};
