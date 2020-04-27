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
        "gatsby-plugin-netlify-cms"
    ]
};
