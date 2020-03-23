import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import indexStyles from './index.module.scss'


const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        frontmatter {
                            title
                            date
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    
    `)
        console.log(data)
    return (
        <Layout>
            <h1>Home</h1>
            <ol className={indexStyles.posts}>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                      <li className={indexStyles.post}>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                          <h2>{edge.node.frontmatter.title}</h2>
                          <p>{edge.node.frontmatter.date}</p>
                        </Link>
                      </li>
                    )
                })}
            </ol>
        </Layout>
    )
}
export default IndexPage
