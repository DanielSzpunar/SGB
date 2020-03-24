import React from 'react'
import Layout from '../components/layout'
import { Link, graphql, useStaticQuery } from 'gatsby'
import indexStyles from './index.module.scss'
import Head from '../components/Head'

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
                edges {
                    node {
                        title
                        slug
                        publishedDate(formatString:"MMMM Do, YYYY")
                    }
                }
            }
        }
    
    `)
        console.log(data)
    return (
        <Layout>
        <Head title="Home" />
            <h1>Home</h1>
            <ol className={indexStyles.posts}>
                {data.allContentfulBlogPost.edges.map((edge, index) => {
                    return (
                      <li className={indexStyles.post} key={index}>
                        <Link to={`/blog/${edge.node.slug}`}>
                          <h2>{edge.node.title}</h2>
                          <p>{edge.node.publishedDate}</p>
                        </Link>
                      </li>
                    )
                })}
            </ol>
        </Layout>
    )
}
export default IndexPage
