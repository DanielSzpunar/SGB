import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import indexStyles from './index.module.scss'
import HeadPages from '../components/headPages'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                        images {
                            description
                            file {
                                url
                            }
                        }
                    }
                }
            }
        }
    
    `)
        console.log(data.allContentfulBlogPost.edges)
        
    return (
        <Layout>
        <HeadPages title="Home" siteMetadata="An unbiased website dedicated to everything related to buying, selling, collecting, and stacking precious metals."  />
            <h1>Home</h1>
            <ol className={indexStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge, index) => {
                    return (
                      <li className={indexStyles.post} key={index}>
                        <Link to={`/blog/${edge.node.slug}`}>
                          <h2>{edge.node.title}</h2>
                          <p>{edge.node.publishedDate}</p>
                        </Link>
                        <img src={edge.node.images[0].file.url} alt="hi" />
                      </li>
                    )
                })}
            </ol>
        </Layout>
    )
}
export default IndexPage
