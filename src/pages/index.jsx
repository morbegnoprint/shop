import React from "react";
import { Seo } from "../components/seo";
import { Layout } from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";

const Index = () => {
    const { favicon16, favicon32, favicon64 } = useStaticQuery(
        graphql`
            query {
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

    return (
        <Layout>
            <Seo
                link={[
                    {
                        rel: "shortcut icon",
                        type: "image/png",
                        sizes: "16x16",
                        href: `${favicon16.childImageSharp.fixed.base64}`
                    },
                    {
                        rel: "icon",
                        type: "image/png",
                        sizes: "32x32",
                        href: `${favicon32.childImageSharp.fixed.base64}`
                    },
                    {
                        rel: "shortcut icon",
                        type: "image/png",
                        href: `${favicon64.childImageSharp.fixed.base64}`
                    },
                    {
                        href:
                            "https://fonts.googleapis.com/css?family=Montserrat:400,700&display=swap",
                        rel: "stylesheet"
                    }
                ]}
            />
            Hello world!
        </Layout>
    );
};

export default Index;
