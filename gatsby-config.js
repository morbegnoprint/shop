module.exports = {
    siteMetadata: {
        title: "Morbegnoprint shop | Stampa e personalizzazione",
        description:
            "Lo shop online di Morbegnoprint ti da accesso alla quintessenza dei prodotti di stampa digitale da noi prodotti, con la solita e garantita professionalità, passione e qualità.",
        author: "@luzzif",
        siteUrl: "https://www.shop.morbegnoprint.it"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "uploads",
                path: `${__dirname}/static/images/uploads`
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages"
            }
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography"
            }
        },
        "gatsby-plugin-styled-components",
        "gatsby-plugin-sitemap",
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${__dirname}/src/cms`
            }
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            name: "uploads"
                        }
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: { maxWidth: 2048 }
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                        options: {
                            destinationDir: "static"
                        }
                    }
                ]
            }
        },
        "gatsby-plugin-netlify"
    ]
};
