import React from "react";
import { Seo } from "../../components/seo";
import { Layout } from "../../components/layout";
import { useStaticQuery, graphql } from "gatsby";
import { Categories as CategoryList } from "../../components/categories";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { Section } from "../../components/section";

const Categories = () => {
    const { categories } = useStaticQuery(
        graphql`
            query {
                categories: allMarkdownRemark(
                    filter: { frontmatter: { type: { eq: "category" } } }
                ) {
                    edges {
                        node {
                            id
                            frontmatter {
                                name
                                image {
                                    childImageSharp {
                                        fluid(quality: 90) {
                                            ...GatsbyImageSharpFluid
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        `
    );

    return (
        <Layout>
            <Seo />
            <Section>
                <Breadcrumbs
                    locations={[
                        { label: "Home", href: "/" },
                        { label: "Categorie", href: "/categories" },
                    ]}
                />
            </Section>
            <Section title="Tutte le categorie">
                <CategoryList
                    categories={categories.edges.reduce((categories, edge) => {
                        const { node } = edge;
                        categories.push({ ...node.frontmatter, id: node.id });
                        return categories;
                    }, [])}
                />
            </Section>
        </Layout>
    );
};

export default Categories;
