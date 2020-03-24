import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'


const Head = ({title,metaDescription}) => {
    console.log("####################", metaDescription)
    const data = useStaticQuery(graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`)

    return (
        <Helmet>
        <title>{`${title} | ${data.site.siteMetadata.title}`}</title>
        <meta name='description' content={metaDescription} />
        </Helmet>
        
    )
}
export default Head